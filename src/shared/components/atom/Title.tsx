import { cn } from "@/lib/cn";
interface Props {
  children?: React.ReactNode;
  size?: "sm" | "base" | "md" | "lg";
  variant?: "primary" | "disabled";
  center?: boolean;
  className?: string;
}
export default function Title({
  children,
  size = "sm",
  variant = "primary",
  center = false,
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
    <h2 className={cn(sizes[size], variants[variant], isCenter, className)}>
      {children}
    </h2>
  );
}
