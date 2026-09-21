import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  arrow?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-[#5d6864] text-white border border-[#d5d8d6] hover:bg-[#4f5955]",

  outline:
    "bg-transparent text-white border border-[#d5d8d6] hover:bg-white hover:text-[#5d6864]",

  ghost: "bg-transparent text-white border border-transparent",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-5 py-3 text-[10px]",
  md: "px-6 py-4 text-[11px]",
  lg: "px-8 py-5 text-xs",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  arrow = false,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`
        inline-flex
        items-center
        justify-center
        gap-5
        font-main
        font-medium
        tracking-[0.18em]
        uppercase
        transition-all
        duration-300
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
      {...props}
    >
      <span>{children}</span>

      {arrow && <span className="text-lg leading-none">↗</span>}
    </button>
  );
}
