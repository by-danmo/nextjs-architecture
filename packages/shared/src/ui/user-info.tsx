import { cn } from "@multi-app/lib/utils/generics";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

interface UserInfoProps {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
  showDetails?: boolean;
  avatarSize?: "sm" | "md" | "lg";
  className?: string;
}

const avatarSizes = {
  sm: "size-14",
  md: "size-17",
  lg: "size-20",
};

const fallbackTextSizes = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-2xl",
};

export function UserInfo({
  user,
  showDetails = true,
  avatarSize = "lg",
  className,
}: UserInfoProps) {
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Avatar
        className={cn(
          avatarSizes[avatarSize],
          "rounded-full shrink-0 ring-2 ring-white shadow-sm",
        )}
      >
        <AvatarImage src={user.avatar} alt={user.name} />
        <AvatarFallback
          className={cn(
            "rounded-full bg-linear-to-br from-primary/20 to-primary/10 text-primary font-semibold",
            fallbackTextSizes[avatarSize],
          )}
        >
          {initials}
        </AvatarFallback>
      </Avatar>
      {showDetails && (
        <div className="flex-1 text-left min-w-0">
          <div className="text-sm font-semibold text-gray-900 truncate">
            {user.name}
          </div>
          <div className="text-xs text-gray-500 truncate">{user.email}</div>
        </div>
      )}
    </div>
  );
}
