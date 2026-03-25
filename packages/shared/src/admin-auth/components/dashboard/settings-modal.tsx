"use client";

import { useModalStore } from "@multi-app/lib/stores/modal.store";
import { cn } from "@multi-app/lib/utils/generics";
import {
    Bell,
    CheckCircle2,
    CloudUpload,
    LogOut,
    Monitor,
    MoreVertical,
    Shield,
    Trash2,
    User,
    X,
} from "lucide-react";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { DataTable, StatusBadge } from "./data-table";
import type { ColumnDef } from "./data-table/types";

// ============================================================================
// Types
// ============================================================================

export type SettingsTab = "profile" | "security" | "notifications";

export interface ProfileData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  about: string;
  profilePhoto?: string;
  photos: string[];
  videoPresentation?: string;
  shopName: string;
  shopLogo?: string;
  shopCover?: string;
}

export interface LoginSession {
  id: string;
  device: string;
  deviceType: "browser" | "mobile" | "desktop";
  location: string;
  ipAddress: string;
  lastActivity: string;
  status: "active" | "disconnected";
  isCurrent?: boolean;
}

export interface NotificationSettings {
  securityAlerts: boolean;
  integrationNotifications: boolean;
  allMessages: boolean;
  customerReviews: boolean;
}

export interface SettingsModalProps {
  onClose?: () => void;
  initialTab?: SettingsTab;
  profileData?: ProfileData;
  loginSessions?: LoginSession[];
  notificationSettings?: NotificationSettings;
  onProfileSave?: (data: ProfileData) => void;
  onPasswordChange?: () => void;
  onSessionRevoke?: (sessionId: string) => void;
  onNotificationChange?: (settings: NotificationSettings) => void;
  onLogout?: () => void;
  className?: string;
}

// ============================================================================
// Default Data
// ============================================================================

const defaultProfileData: ProfileData = {
  firstName: "Aminata",
  lastName: "Sow",
  email: "Sowaminata@exemple.co",
  phone: "+225 123456789",
  about: "",
  photos: [],
  shopName: "Destiny Nzassa store",
};

const defaultLoginSessions: LoginSession[] = [
  {
    id: "1",
    device: "MacBook Pro (Vous)",
    deviceType: "browser",
    location: "Los Angeles, USA",
    ipAddress: "192.168.1.10",
    lastActivity: "15 OCT, 2025, 10:32",
    status: "active",
    isCurrent: true,
  },
  {
    id: "2",
    device: "MacBook Pro (Vous)",
    deviceType: "browser",
    location: "Los Angeles, USA",
    ipAddress: "192.168.1.10",
    lastActivity: "15 OCT, 2025, 10:32",
    status: "disconnected",
  },
  {
    id: "3",
    device: "MacBook Pro (Vous)",
    deviceType: "browser",
    location: "Los Angeles, USA",
    ipAddress: "192.168.1.10",
    lastActivity: "15 OCT, 2025, 10:32",
    status: "active",
  },
  {
    id: "4",
    device: "MacBook Pro (Vous)",
    deviceType: "browser",
    location: "Los Angeles, USA",
    ipAddress: "192.168.1.10",
    lastActivity: "15 OCT, 2025, 10:32",
    status: "active",
  },
  {
    id: "5",
    device: "MacBook Pro (Vous)",
    deviceType: "browser",
    location: "Los Angeles, USA",
    ipAddress: "192.168.1.10",
    lastActivity: "15 OCT, 2025, 10:32",
    status: "active",
  },
  {
    id: "6",
    device: "MacBook Pro (Vous)",
    deviceType: "browser",
    location: "Los Angeles, USA",
    ipAddress: "192.168.1.10",
    lastActivity: "15 OCT, 2025, 10:32",
    status: "active",
  },
];

const defaultNotificationSettings: NotificationSettings = {
  securityAlerts: false,
  integrationNotifications: true,
  allMessages: true,
  customerReviews: true,
};

// ============================================================================
// Sub-Components
// ============================================================================

// Switch Component
const Switch = ({
  checked,
  onChange,
  disabled = false,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}) => (
  <button
    type="button"
    role="switch"
    aria-checked={checked}
    disabled={disabled}
    onClick={() => onChange(!checked)}
    className={cn(
      "relative inline-flex h-[2.8rem] w-[5rem] shrink-0 cursor-pointer items-center rounded-full transition-colors",
      checked ? "bg-[#22C55E]" : "bg-gray-200",
      disabled && "cursor-not-allowed opacity-50",
    )}
  >
    <span
      className={cn(
        "pointer-events-none block h-[2.2rem] w-[2.2rem] rounded-full bg-white shadow-lg transition-transform",
        checked ? "translate-x-[2.4rem]" : "translate-x-[0.3rem]",
      )}
    />
  </button>
);

// File Upload Zone
const FileUploadZone = ({
  title,
  description,
  accept,
  multiple = false,
  onFilesSelect,
  className,
}: {
  title: string;
  description: string;
  accept?: string;
  multiple?: boolean;
  onFilesSelect?: (files: File[]) => void;
  className?: string;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const files = Array.from(e.dataTransfer.files);
      onFilesSelect?.(files);
    },
    [onFilesSelect],
  );

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    onFilesSelect?.(files);
  };

  return (
    <div
      className={cn(
        "border border-dashed border-[#F1E5E8] rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-colors",
        isDragging && "border-[#D62F42] bg-red-50",
        className,
      )}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleClick}
    >
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        className="hidden"
        onChange={handleFileChange}
      />
      <CloudUpload className="w-8 h-8 text-[#D62F42] mb-3" />
      <p className="text-base text-[#64748B]">
        {title.split("parcourir")[0]}
        <span className="text-[#D62F42] font-medium cursor-pointer">
          parcourir
        </span>
      </p>
      <p className="text-sm text-[#94A3B8] mt-2">{description}</p>
    </div>
  );
};

// Input with verification badge
const VerifiedInput = ({
  label,
  value,
  onChange,
  verified = false,
  type = "text",
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  verified?: boolean;
  type?: string;
  placeholder?: string;
}) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-sm font-medium text-[#0E0D0C]">{label}</label>
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-[4.4rem] px-[1.4rem] pr-[4rem] text-base border border-[#E2E8F0] rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
      />
      {verified && (
        <CheckCircle2 className="absolute right-[1.4rem] top-1/2 -translate-y-1/2 w-[2rem] h-[2rem] text-[#22C55E]" />
      )}
    </div>
  </div>
);

// Text Area with character count
const TextAreaWithCount = ({
  label,
  value,
  onChange,
  placeholder,
  maxLength = 200,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  maxLength?: number;
}) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-sm font-medium text-[#0E0D0C]">{label}</label>
    <div className="relative">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value.slice(0, maxLength))}
        placeholder={placeholder}
        rows={4}
        className="w-full p-[1.4rem] text-base border border-[#E2E8F0] rounded-xl resize-y focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
      />
      <span className="absolute bottom-2 right-3 text-xs text-[#94A3B8]">
        {value.length.toString().padStart(2, "0")}/{maxLength}
      </span>
    </div>
  </div>
);

// ============================================================================
// Tab Content Components
// ============================================================================

// Profile Tab Content
const ProfileTabContent = ({
  data,
  onChange,
}: {
  data: ProfileData;
  onChange: (data: ProfileData) => void;
}) => {
  const handleChange = <K extends keyof ProfileData>(
    key: K,
    value: ProfileData[K],
  ) => {
    onChange({ ...data, [key]: value });
  };

  return (
    <div className="flex-1 overflow-y-auto px-10 py-8">
      {/* Personal Information Section */}
      <div className="flex gap-16 pb-10 border-b border-[#F1F5F9]">
        {/* Left: Section Info */}
        <div className="w-[220px] shrink-0">
          <h3 className="text-base font-semibold text-[#0E0D0C] mb-2">
            Informations personnelles
          </h3>
          <p className="text-sm text-[#64748B] leading-relaxed">
            Gérez vos informations personnelles pour l&apos;identification et la
            communication.
          </p>
        </div>

        {/* Right: Form Fields */}
        <div className="flex-1 space-y-6">
          {/* Profile Photo */}
          <div>
            <label className="text-sm font-medium text-[#0E0D0C] block mb-3">
              Photo de profil
            </label>
            <div className="relative w-16 h-16">
              {data.profilePhoto ? (
                <Image
                  src={data.profilePhoto}
                  alt="Profile"
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full object-cover"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-[#F1F5F9] flex items-center justify-center">
                  <User className="w-8 h-8 text-[#94A3B8]" />
                </div>
              )}
              <button
                type="button"
                className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#D62F42] rounded-full flex items-center justify-center"
              >
                <Trash2 className="w-3 h-3 text-white" />
              </button>
            </div>
          </div>

          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-4">
            <VerifiedInput
              label="Nom"
              value={data.lastName}
              onChange={(v) => handleChange("lastName", v)}
            />
            <VerifiedInput
              label="Prénom"
              value={data.firstName}
              onChange={(v) => handleChange("firstName", v)}
            />
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-2 gap-4">
            <VerifiedInput
              label="Adresse email"
              value={data.email}
              onChange={(v) => handleChange("email", v)}
              verified
              type="email"
            />
            <VerifiedInput
              label="Numéro de téléphone"
              value={data.phone}
              onChange={(v) => handleChange("phone", v)}
              verified
              type="tel"
            />
          </div>

          {/* Add Photos */}
          <div>
            <label className="text-sm font-medium text-[#0E0D0C] block mb-3">
              Ajouter des photos
            </label>
            <FileUploadZone
              title="Glisser-déposer des médias ou parcourir"
              description="Vous pouvez télécharger jusqu'à 4 photos au format PNG, JPG d'une taille maximahellle de 50 Mo."
              accept="image/png,image/jpeg"
              multiple
            />
          </div>

          {/* About */}
          <TextAreaWithCount
            label="A propos de vous"
            value={data.about}
            onChange={(v) => handleChange("about", v)}
            placeholder="écrivez une petite présentation de vous et de vos ambitions..."
            maxLength={200}
          />

          {/* Video Presentation */}
          <div>
            <label className="text-sm font-medium text-[#0E0D0C] block mb-3">
              Vidéo presentation
            </label>
            <FileUploadZone
              title="Glisser-déposer un média ou parcourir"
              description="Vous pouvez télécharger une vidéo au format MP4, d'une taille maximale de 50 Mo."
              accept="video/mp4"
            />
          </div>
        </div>
      </div>

      {/* Shop Information Section */}
      <div className="flex gap-16 pt-10">
        {/* Left: Section Info */}
        <div className="w-[220px] shrink-0">
          <h3 className="text-base font-semibold text-[#0E0D0C] mb-2">
            Informations sur la boutique
          </h3>
          <p className="text-sm text-[#64748B] leading-relaxed">
            Gérez les informations relatives à votre boutique à des fins
            d&apos;identification et de communication.
          </p>
        </div>

        {/* Right: Form Fields */}
        <div className="flex-1 space-y-6">
          {/* Profile and Cover */}
          <div>
            <label className="text-sm font-medium text-[#0E0D0C] block mb-3">
              Profil et couverture
            </label>
            <div className="flex items-center gap-4">
              {/* Shop Logo */}
              <div className="relative w-16 h-16 shrink-0">
                {data.shopLogo ? (
                  <Image
                    src={data.shopLogo}
                    alt="Shop Logo"
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-lg bg-[#FEE2E2] flex items-center justify-center">
                    <div className="w-8 h-8 text-[#D62F42]">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-full h-full"
                      >
                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z" />
                      </svg>
                    </div>
                  </div>
                )}
                <button
                  type="button"
                  className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#D62F42] rounded-full flex items-center justify-center"
                >
                  <Trash2 className="w-2.5 h-2.5 text-white" />
                </button>
              </div>

              {/* Cover Upload */}
              <FileUploadZone
                title="Glisser-déposer un média ou parcourir"
                description="Vous pouvez télécharger une photo au format PNG, JPG d'une taille maximale de 50 Mo."
                accept="image/png,image/jpeg"
                className="flex-1 py-4"
              />
            </div>
          </div>

          {/* Shop Name */}
          <VerifiedInput
            label="Nom de la boutique"
            value={data.shopName}
            onChange={(v) => handleChange("shopName", v)}
          />
        </div>
      </div>
    </div>
  );
};

// Device Cell Component for Security Table
const DeviceCell = ({
  device,
  deviceType,
}: {
  device: string;
  deviceType: string;
}) => (
  <div className="flex items-center gap-3">
    <Monitor className="w-5 h-5 text-[#D62F42]" />
    <div>
      <p className="text-sm font-medium text-[#0E0D0C]">{device}</p>
      <p className="text-xs text-[#64748B]">
        {deviceType === "browser" ? "Navigateur" : deviceType}
      </p>
    </div>
  </div>
);

// Action Cell for Session
const SessionActionCell = ({
  sessionId,
  onRevoke,
}: {
  sessionId: string;
  onRevoke?: (id: string) => void;
}) => (
  <button
    type="button"
    onClick={() => onRevoke?.(sessionId)}
    className="p-1 text-[#94A3B8] hover:text-[#64748B]"
  >
    <MoreVertical className="w-4 h-4" />
  </button>
);

// Security Tab Content
const SecurityTabContent = ({
  sessions,
  onPasswordChange,
  onSessionRevoke,
}: {
  sessions: LoginSession[];
  onPasswordChange?: () => void;
  onSessionRevoke?: (sessionId: string) => void;
}) => {
  // Define columns for the login history table
  const columns: ColumnDef<LoginSession>[] = [
    {
      accessorKey: "device",
      header: "Appareil",
      cell: ({ row }) => (
        <DeviceCell
          device={row.original.device}
          deviceType={row.original.deviceType}
        />
      ),
    },
    {
      accessorKey: "location",
      header: "Localisation",
      cell: ({ row }) => (
        <span className="text-sm text-[#64748B]">{row.original.location}</span>
      ),
    },
    {
      accessorKey: "ipAddress",
      header: "Adresse IP",
      cell: ({ row }) => (
        <span className="text-sm text-[#64748B]">{row.original.ipAddress}</span>
      ),
    },
    {
      accessorKey: "lastActivity",
      header: "Dernière activité",
      cell: ({ row }) => (
        <span className="text-sm text-[#64748B]">
          {row.original.lastActivity}
        </span>
      ),
    },
    {
      accessorKey: "status",
      header: "Statut",
      cell: ({ row }) => (
        <StatusBadge
          label={row.original.status === "active" ? "Actif" : "Déconnecté"}
          variant={row.original.status === "active" ? "success" : "warning"}
        />
      ),
    },
    {
      id: "actions",
      header: "",
      cell: ({ row }) => (
        <SessionActionCell
          sessionId={row.original.id}
          onRevoke={onSessionRevoke}
        />
      ),
    },
  ];

  // Sort options for the table
  const sortOptions = [
    { id: "device", label: "Appareil", type: "text" as const },
    { id: "location", label: "Localisation", type: "text" as const },
    { id: "lastActivity", label: "Dernière activité", type: "text" as const },
  ];

  // Filter options for status
  const filterStatusOptions = [
    { value: "active", label: "Actif", variant: "success" as const },
    { value: "disconnected", label: "Déconnecté", variant: "warning" as const },
  ];

  return (
    <div className="flex-1 overflow-y-auto px-6 py-6">
      {/* Change Password Section */}
      <div className="flex items-start gap-4 pb-6 border-b border-[#F1F5F9]">
        <div className="w-10 h-10 rounded-lg bg-[#FEE2E2] flex items-center justify-center">
          <Monitor className="w-5 h-5 text-[#D62F42]" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-[#0E0D0C]">
              Changer le mot de passe
            </h3>
            <button
              type="button"
              onClick={onPasswordChange}
              className="text-sm font-medium text-[#D62F42] hover:text-[#B91C1C]"
            >
              Changer
            </button>
          </div>
          <p className="text-sm text-[#64748B] mt-1">
            Mettez à jour votre mot de passe pour renforcer la sécurité.
          </p>
        </div>
      </div>

      {/* Login History Section using DataTable */}
      <div className="pt-6">
        <DataTable
          title="Recent Login History"
          columns={columns}
          data={sessions}
          searchPlaceholder="Rechercher"
          sortOptions={sortOptions}
          filterStatusOptions={filterStatusOptions}
          statusColumnId="status"
          pageSize={6}
          emptyMessage="Aucune session trouvée"
        />
      </div>
    </div>
  );
};

// Notifications Tab Content
const NotificationsTabContent = ({
  settings,
  onChange,
}: {
  settings: NotificationSettings;
  onChange: (settings: NotificationSettings) => void;
}) => {
  const handleChange = <K extends keyof NotificationSettings>(
    key: K,
    value: NotificationSettings[K],
  ) => {
    onChange({ ...settings, [key]: value });
  };

  return (
    <div className="flex-1 overflow-y-auto px-8 py-6">
      {/* General Notifications Section */}
      <div className="flex gap-12 pb-8 border-b border-[#F1F5F9]">
        {/* Left: Section Info */}
        <div className="w-[180px] shrink-0">
          <h3 className="text-sm font-semibold text-[#0E0D0C] mb-1">
            Notifications générales
          </h3>
          <p className="text-sm text-[#64748B]">
            Protégez votre compte grâce à des paramètres de sécurité avancés et
            des options d&apos;authentification.
          </p>
        </div>

        {/* Right: Toggle Options */}
        <div className="flex-1 space-y-6">
          {/* Security Alerts */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <Switch
                checked={settings.securityAlerts}
                onChange={(v) => handleChange("securityAlerts", v)}
              />
              <div>
                <h4 className="text-sm font-medium text-[#0E0D0C]">
                  Alertes de sécurité
                </h4>
                <p className="text-sm text-[#64748B] mt-1">
                  Recevez des alertes en cas d&apos;activité suspecte, de
                  modification de mot de passe et de connexion non autorisée.
                </p>
              </div>
            </div>
          </div>

          {/* Integration Notifications */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <Switch
                checked={settings.integrationNotifications}
                onChange={(v) => handleChange("integrationNotifications", v)}
              />
              <div>
                <h4 className="text-sm font-medium text-[#0E0D0C]">
                  Notifications d&apos;intégration
                </h4>
                <p className="text-sm text-[#64748B] mt-1">
                  Restez informé des mises à jour ou des problèmes liés aux
                  intégrations tierces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Message Notifications Section */}
      <div className="flex gap-12 pt-8">
        {/* Left: Section Info */}
        <div className="w-[180px] shrink-0">
          <h3 className="text-sm font-semibold text-[#0E0D0C] mb-1">
            Notifications de messages
          </h3>
          <p className="text-sm text-[#64748B]">
            Protégez votre compte grâce à des paramètres de sécurité avancés et
            des options d&apos;authentification.
          </p>
        </div>

        {/* Right: Toggle Options */}
        <div className="flex-1 space-y-6">
          {/* All Messages */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <Switch
                checked={settings.allMessages}
                onChange={(v) => handleChange("allMessages", v)}
              />
              <div>
                <h4 className="text-sm font-medium text-[#0E0D0C]">
                  Tous les messages
                </h4>
                <p className="text-sm text-[#64748B] mt-1">
                  Recevez une notification pour chaque nouveau message reçu.
                </p>
              </div>
            </div>
          </div>

          {/* Customer Reviews */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <Switch
                checked={settings.customerReviews}
                onChange={(v) => handleChange("customerReviews", v)}
              />
              <div>
                <h4 className="text-sm font-medium text-[#0E0D0C]">
                  Avis clients
                </h4>
                <p className="text-sm text-[#64748B] mt-1">
                  Recevez des notifications lorsque les clients laissent des
                  commentaires sur les produits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// Main Component
// ============================================================================

export const SettingsModal = ({
  onClose,
  initialTab = "profile",
  profileData = defaultProfileData,
  loginSessions = defaultLoginSessions,
  notificationSettings = defaultNotificationSettings,
  onProfileSave,
  onPasswordChange,
  onSessionRevoke,
  onNotificationChange,
  onLogout,
  className,
}: SettingsModalProps) => {
  const { closeModal } = useModalStore();
  const [activeTab, setActiveTab] = useState<SettingsTab>(initialTab);
  const [localProfileData, setLocalProfileData] =
    useState<ProfileData>(profileData);
  const [localNotificationSettings, setLocalNotificationSettings] =
    useState<NotificationSettings>(notificationSettings);

  const tabs: Array<{
    id: SettingsTab;
    label: string;
    icon: React.ReactNode;
  }> = [
    { id: "profile", label: "Profil", icon: <User className="w-5 h-5" /> },
    {
      id: "security",
      label: "Sécurité et confidentialité",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      id: "notifications",
      label: "Préférences de notification",
      icon: <Bell className="w-5 h-5" />,
    },
  ];

  const getTabTitle = () => {
    switch (activeTab) {
      case "profile":
        return "Profile";
      case "security":
        return "Sécurité et confidentialité";
      case "notifications":
        return "Préférences de notification";
    }
  };

  const handleSave = () => {
    if (activeTab === "profile") {
      onProfileSave?.(localProfileData);
    } else if (activeTab === "notifications") {
      onNotificationChange?.(localNotificationSettings);
    }
  };

  const handleClose = () => {
    closeModal();
    onClose?.();
  };

  return (
    <div
      className={cn(
        "relative flex w-full max-w-[1100px] h-[90vh] max-h-[800px] bg-white overflow-hidden",
        className,
      )}
    >
      {/* Sidebar with dashed blue border */}
      <div className="w-[300px] bg-white border-r border-dashed border-[#93C5FD] flex flex-col">
        {/* Sidebar Header */}
        <div className="px-8 py-8 border-b border-[#F1F5F9]">
          <h2 className="text-2xl font-semibold text-[#0E0D0C]">Paramètres</h2>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "w-full flex items-center gap-4 px-5 py-4 rounded-xl text-left transition-colors mb-2",
                activeTab === tab.id
                  ? "bg-[#FEE2E2] text-[#D62F42]"
                  : "text-[#475569] hover:bg-gray-50",
              )}
            >
              <span
                className={cn(
                  "w-6 h-6",
                  activeTab === tab.id ? "text-[#D62F42]" : "text-[#475569]",
                )}
              >
                {tab.icon}
              </span>
              <span className="text-base font-medium">{tab.label}</span>
            </button>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="px-4 py-6">
          <button
            type="button"
            onClick={onLogout}
            className="w-full flex items-center gap-4 px-5 py-4 text-[#475569] hover:bg-gray-50 rounded-xl transition-colors"
          >
            <LogOut className="w-6 h-6" />
            <span className="text-base font-medium">Déconnexion</span>
          </button>
        </div>
      </div>

      {/* Content Area - with dashed blue border on left */}
      <div className="flex-1 flex flex-col border-l border-dashed border-[#93C5FD]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5">
          <h2 className="text-xl font-semibold text-[#0E0D0C]">
            {getTabTitle()}
          </h2>
          <button
            type="button"
            onClick={handleClose}
            className="p-2 text-[#64748B] hover:text-[#0E0D0C] hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "profile" && (
          <ProfileTabContent
            data={localProfileData}
            onChange={setLocalProfileData}
          />
        )}
        {activeTab === "security" && (
          <SecurityTabContent
            sessions={loginSessions}
            onPasswordChange={onPasswordChange}
            onSessionRevoke={onSessionRevoke}
          />
        )}
        {activeTab === "notifications" && (
          <NotificationsTabContent
            settings={localNotificationSettings}
            onChange={setLocalNotificationSettings}
          />
        )}

        {/* Footer - Only show for profile and notifications */}
        {(activeTab === "profile" || activeTab === "notifications") && (
          <div className="px-8 py-6 flex justify-end">
            <button
              type="button"
              onClick={handleSave}
              className="px-8 py-4 bg-[#D62F42] text-white text-base font-medium rounded-2xl hover:bg-[#B91C1C] transition-colors shadow-sm"
            >
              Enregistrer les changements
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingsModal;
