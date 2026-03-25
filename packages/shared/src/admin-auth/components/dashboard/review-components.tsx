"use client";

import { cn } from "@multi-app/lib/utils/generics";
import { ChevronDown, Star } from "lucide-react";
import Image from "next/image";

// ============================================================================
// Types
// ============================================================================

export interface RatingCategory {
  label: string;
  value: number;
  maxValue?: number;
}

export interface RatingSummaryCardProps {
  globalRating: number;
  totalReviews: number;
  categories: RatingCategory[];
  period?: string;
  onPeriodChange?: (period: string) => void;
  className?: string;
}

export interface ReviewData {
  id: string;
  authorName: string;
  authorInitials?: string;
  authorAvatar?: string;
  date: string;
  rating: number;
  comment: string;
  product: {
    name: string;
    price: number;
    imageUrl?: string;
  };
}

export interface ReviewCardProps {
  review: ReviewData;
  className?: string;
}

export interface ReviewsBarChartProps {
  data: Array<{ month: string; value: number }>;
  period?: string;
  onPeriodChange?: (period: string) => void;
  title?: string;
  className?: string;
  highlightedMonth?: string;
}

// ============================================================================
// Period Dropdown
// ============================================================================

const PeriodDropdown = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => {
  const periods = ["Cette semaine", "Ce mois", "Cette année"];

  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none text-sm text-[#64748B] bg-transparent border border-[#F1F5F9] rounded-lg px-3 py-2 pr-8 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20"
      >
        {periods.map((period) => (
          <option key={period} value={period}>
            {period}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0E0D0C] pointer-events-none" />
    </div>
  );
};

// ============================================================================
// Star Rating Display
// ============================================================================

const StarRating = ({
  rating,
  maxRating = 5,
  size = "sm",
  showValue = false,
}: {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
}) => {
  const sizeClasses = {
    sm: "w-[13px] h-[13px]",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: maxRating }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            sizeClasses[size],
            i < rating
              ? "fill-[#FFCA39] text-[#FFCA39]"
              : "fill-gray-200 text-gray-200",
          )}
        />
      ))}
      {showValue && (
        <span className="ml-1.5 text-xs text-[#333333]">{rating}</span>
      )}
    </div>
  );
};

// ============================================================================
// Rating Progress Bar (Yellow bars like design)
// ============================================================================

const RatingProgressBar = ({
  label,
  value,
  maxValue = 5,
}: {
  label: string;
  value: number;
  maxValue?: number;
}) => {
  const percentage = (value / maxValue) * 100;

  return (
    <div className="flex flex-col gap-1.5">
      {/* Progress Bar */}
      <div className="h-1.5 bg-[#F1F5F9] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#EDB210] rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
      {/* Label and Value */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-[#1E293B] leading-[14px] tracking-[-0.004em]">
          {label}
        </span>
        <div className="flex items-center">
          <span className="text-[10px] font-bold text-[#0E0D0C] leading-[14px] tracking-[-0.004em]">
            {value.toFixed(1)}
          </span>
          <span className="text-[10px] font-normal text-[#CBD5E1] leading-[13px]">
            /{maxValue}
          </span>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// Circular Rating Display
// ============================================================================

const CircularRating = ({
  rating,
  maxRating = 5,
  totalReviews,
}: {
  rating: number;
  maxRating?: number;
  totalReviews: number;
}) => {
  const percentage = (rating / maxRating) * 100;
  const circumference = 2 * Math.PI * 68;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-[152px] h-[152px] flex items-center justify-center">
      {/* Background circle */}
      <svg className="absolute w-full h-full -rotate-90">
        <circle
          cx="76"
          cy="76"
          r="68"
          fill="none"
          stroke="#F1F5F9"
          strokeWidth="12"
        />
        <circle
          cx="76"
          cy="76"
          r="68"
          fill="none"
          stroke="#EDB210"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-500"
        />
      </svg>

      {/* Center content */}
      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] font-medium text-[#64748B] leading-[14px] tracking-[-0.004em]">
          Note globale
        </span>
        <div className="flex items-baseline justify-center">
          <span className="text-[30px] font-medium text-[#0E0D0C] leading-[110%] tracking-[-0.013em] font-['Vogun']">
            {rating.toFixed(1)}
          </span>
          <span className="text-base font-medium text-[#CBD5E1] leading-[120%]">
            /{maxRating}
          </span>
        </div>
        <span className="text-xs font-bold text-[#1E293B] leading-4 tracking-[-0.005em]">
          {totalReviews.toLocaleString("fr-FR")} Avis
        </span>
      </div>
    </div>
  );
};

// ============================================================================
// Rating Summary Card
// ============================================================================

export const RatingSummaryCard = ({
  globalRating,
  totalReviews,
  categories,
  period = "Cette semaine",
  onPeriodChange,
  className,
}: RatingSummaryCardProps) => {
  // Split categories into two columns
  const midPoint = Math.ceil(categories.length / 2);
  const leftCategories = categories.slice(0, midPoint);
  const rightCategories = categories.slice(midPoint);

  return (
    <div
      className={cn(
        "bg-white rounded-2xl border border-[#F1F5F9] shadow-[0px_1px_2px_rgba(23,23,23,0.05)] overflow-hidden",
        className,
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 h-16 border-b border-[#F1F5F9]">
        <h3 className="text-base font-semibold text-[#0E0D0C] leading-[22px] tracking-[-0.007em]">
          Évaluations
        </h3>
        {onPeriodChange && (
          <PeriodDropdown value={period} onChange={onPeriodChange} />
        )}
      </div>

      {/* Content */}
      <div className="flex items-center gap-6 px-5 py-6">
        {/* Circular Rating */}
        <div className="pl-1">
          <CircularRating rating={globalRating} totalReviews={totalReviews} />
        </div>

        {/* Rating Categories - Two Columns */}
        <div className="flex-1 flex gap-6">
          {/* Left Column */}
          <div className="flex-1 flex flex-col justify-center gap-6">
            {leftCategories.map((category) => (
              <RatingProgressBar
                key={category.label}
                label={category.label}
                value={category.value}
                maxValue={category.maxValue}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="flex-1 flex flex-col justify-center gap-6">
            {rightCategories.map((category) => (
              <RatingProgressBar
                key={category.label}
                label={category.label}
                value={category.value}
                maxValue={category.maxValue}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// Review Card
// ============================================================================

export const ReviewCard = ({ review, className }: ReviewCardProps) => {
  const initials =
    review.authorInitials ||
    review.authorName
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  return (
    <div
      className={cn(
        "bg-[#F8FAFC] rounded-2xl border border-[#F1F5F9] p-5 flex flex-col gap-4",
        className,
      )}
    >
      {/* Feedback Section */}
      <div className="flex flex-col gap-3 flex-1">
        {/* Head - Avatar + Info */}
        <div className="flex items-center gap-2">
          {/* Avatar */}
          <div className="w-11 h-11 rounded-full bg-[#F1F5F9] flex items-center justify-center shrink-0 overflow-hidden">
            {review.authorAvatar ? (
              <Image
                src={review.authorAvatar}
                alt={review.authorName}
                width={36}
                height={36}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-base font-medium text-[#0E0D0C] leading-[22px] tracking-[-0.007em]">
                {initials}
              </span>
            )}
          </div>

          {/* Info User & Rating */}
          <div className="flex flex-col gap-1">
            {/* Name & Date */}
            <div className="flex items-baseline gap-1.5">
              <span className="text-xs font-semibold text-[#1E1E20] leading-4 tracking-[-0.005em]">
                {review.authorName}
              </span>
              <span className="text-xs font-normal text-[#64748B] leading-[140%] tracking-[0.01em]">
                {review.date}
              </span>
            </div>
            {/* Rating */}
            <div className="flex items-center gap-1.5">
              <StarRating rating={review.rating} size="sm" />
              <span className="text-xs font-normal text-[#333333] leading-[140%] tracking-[0.01em]">
                {review.rating}
              </span>
            </div>
          </div>
        </div>

        {/* Comment */}
        <p className="text-sm font-normal text-[#636365] leading-[140%]">
          {review.comment}
        </p>
      </div>

      {/* Product - Event Card */}
      <div className="flex items-center bg-white rounded-lg overflow-hidden">
        {/* Product Image */}
        <div className="w-[72px] h-[65px] bg-[#D9D9D9] shrink-0 rounded-l-lg overflow-hidden">
          {review.product.imageUrl && (
            <Image
              src={review.product.imageUrl}
              alt={review.product.name}
              width={72}
              height={65}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-1 p-3">
          <span className="text-sm font-medium text-[#0E0D0C] leading-5 tracking-[-0.006em]">
            {review.product.name}
          </span>
          <span className="text-xs font-normal text-[#64748B] leading-[140%] tracking-[0.01em]">
            XOF {review.product.price.toLocaleString("fr-FR")}
          </span>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// Reviews Bar Chart (Comments Statistics)
// ============================================================================

export const ReviewsBarChart = ({
  data,
  period = "Cette semaine",
  onPeriodChange,
  title = "Statistiques sur les commentaires",
  highlightedMonth = "Mai",
  className,
}: ReviewsBarChartProps) => {
  const maxValue = Math.max(...data.map((d) => d.value));
  // Round up to nearest 100 for clean axis
  const axisMax = Math.ceil(maxValue / 100) * 100;
  const yAxisValues = [
    axisMax,
    axisMax * 0.75,
    axisMax * 0.5,
    axisMax * 0.25,
    0,
  ];

  return (
    <div
      className={cn(
        "bg-white rounded-2xl border border-[#F1F5F9] shadow-[0px_1px_2px_rgba(23,23,23,0.05)] overflow-hidden",
        className,
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 h-16 border-b border-[#F1F5F9]">
        <h3 className="text-base font-semibold text-[#0E0D0C] leading-[22px] tracking-[-0.007em]">
          {title}
        </h3>
        {onPeriodChange && (
          <PeriodDropdown value={period} onChange={onPeriodChange} />
        )}
      </div>

      {/* Chart Container */}
      <div className="px-5 pb-5 pt-2">
        <div className="relative flex">
          {/* Y-axis labels */}
          <div className="flex flex-col justify-between h-[150px] pr-6 text-right">
            {yAxisValues.map((val, i) => (
              <span
                key={i}
                className="text-sm font-normal text-[#94A3B8] leading-5 tracking-[0.01em]"
              >
                {val}
              </span>
            ))}
          </div>

          {/* Chart Area */}
          <div className="flex-1 relative">
            {/* Horizontal grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              {yAxisValues.map((_, i) => (
                <div
                  key={i}
                  className="border-b border-dashed border-[#F1F5F9] h-0"
                  style={{ marginTop: i === 0 ? "10px" : "0" }}
                />
              ))}
            </div>

            {/* Bars */}
            <div className="flex items-end justify-between gap-5 h-[150px] relative z-10">
              {data.map((item, index) => {
                const heightPercentage = (item.value / axisMax) * 100;
                const isHighlighted = item.month === highlightedMonth;

                return (
                  <div
                    key={index}
                    className="flex-1 flex flex-col items-center gap-2"
                  >
                    {/* Bar */}
                    <div className="w-full flex items-end justify-center h-[120px]">
                      <div
                        className="w-full max-w-[34px] bg-[#D62F42] rounded-lg transition-all duration-300"
                        style={{ height: `${heightPercentage}%` }}
                      />
                    </div>
                    {/* Month Label */}
                    <span
                      className={cn(
                        "text-sm leading-5 tracking-[0.01em]",
                        isHighlighted
                          ? "font-medium text-[#0E0D0C]"
                          : "font-normal text-[#94A3B8]",
                      )}
                    >
                      {item.month}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
