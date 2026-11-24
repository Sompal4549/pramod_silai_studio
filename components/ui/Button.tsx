import React from "react";
import Link from "next/link";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/ui/Icons";

export type ButtonVariant = "primary" | "gold" | "whatsapp" | "outline";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  showArrow?: boolean;
  showWhatsAppIcon?: boolean;
  external?: boolean;
  disabled?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#6E0D25] hover:bg-[#52081B] text-white shadow-md hover:shadow-lg",
  gold:
    "bg-gradient-to-r from-[#ECC880] via-[#F4D99B] to-[#D29E3C] hover:from-[#E2B96B] hover:to-[#C08C2B] text-[#4A0A19] font-bold shadow-md hover:shadow-lg",
  whatsapp:
    "bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-md hover:shadow-lg",
  outline:
    "border border-[#6E0D25] text-[#6E0D25] hover:bg-[#6E0D25] hover:text-white",
};

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
  className = "",
  showArrow = false,
  showWhatsAppIcon = false,
  external = false,
  disabled = false,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-200 hover:scale-[1.02] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed";

  const classes = `${baseClasses} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {showWhatsAppIcon && (
        <WhatsAppIcon className={`w-4 h-4 ${variant === "gold" ? "text-[#4A0A19]" : "text-white"}`} />
      )}
      <span>{children}</span>
      {showArrow && (
        <ArrowRightIcon className={`w-3.5 h-3.5 ${variant === "gold" ? "text-[#4A0A19]" : ""}`} />
      )}
    </>
  );

  if (href) {
    if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          target={external || href.startsWith("http") ? "_blank" : undefined}
          rel={external || href.startsWith("http") ? "noreferrer" : undefined}
          className={classes}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      suppressHydrationWarning
    >
      {content}
    </button>
  );
}
