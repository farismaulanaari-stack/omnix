import { CustomBadgeProps } from "@/types/types";
import { Badge } from "../ui/badge";

export function CustomBadge({ variant, children, ...props }: CustomBadgeProps) {
  return (
    <Badge variant={variant} {...props}>
      {children}
    </Badge>
  );
}
