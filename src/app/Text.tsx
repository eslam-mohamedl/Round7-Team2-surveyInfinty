import { cn } from "@/lib/cn";
interface Props {
  children?: React.ReactNode;
  size?: "sm" | "base" | "md" | "lg";
  variant?: "primary" | "disabled";
  center?: boolean;
  className?: "";
}
export default function Text({
  children,
  size = "md",
  variant = "primary",
  center,
  className,
}: Props) {
  const sizes = {
    sm: "text-sm",
    base: "text-base",
    md: "text-md",
    lg: "text-lg",
  };
  const variants = {
    primary: "ds-text-primary",
    disabled: "ds-text-disabled",
  };
  const isCenter = center ? "text-center" : "";
  return (
    <p className={cn(sizes[size], variants[variant], isCenter, className)}>
      {children}
    </p>
  );
}
