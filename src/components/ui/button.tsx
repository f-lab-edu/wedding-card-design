import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const variants = {
  primary: "bg-[#bd5b47] text-white hover:bg-[#953d2f]",
  secondary: "border border-[#eaded8] bg-white text-[#28211f] hover:bg-[#fff4df]",
  ghost: "text-[#28211f] hover:bg-white/70"
};

const sizes = {
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-5 text-base"
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-md font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#bd5b47] disabled:pointer-events-none disabled:opacity-55",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  );
}
