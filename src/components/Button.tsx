import { cn } from "../utils/cn";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}) => {
  return (
    <button
      className={cn([
        " rounded-md font-semibold shadow-sm border",
        {
          "bg-cyan-500 text-white border-gray-200": variant === "primary",
          "bg-white text-cyan-500": variant === "secondary",
          "bg-white text-cyan-500 border-cyan-500": variant === "outline",
        },
        {
          "p-4 px-4 text-lg": size === "lg",
          "p-2 px-4": size === "md",
          "p-1 px-4 text-sm": size === "sm",
        },
        className,
      ])}
      {...props}
    >
      {children}
    </button>
  );
};
