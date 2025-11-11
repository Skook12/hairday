import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  `rounded-lg p-3 leading-5 border cursor-pointer`,
  {
    variants: {
      variant: {
        primary:
          "bg-yellow text-gray-900 font-bold text-base py-6 border-yellow hover:border-yellow-light",
        secondary:
          "bg-gray-600 border-gray-500 text-gray-200 text-base hover:bg-gray-500 focus:border-yellow focus:text-yellow",
      },
      size: {
        sm: "",
        md: "w-full",
      },
      disabled: {
        true: "opacity-50 pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      disabled: false,
    },
  }
);

interface ButtonProps
  extends Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonVariants> {}

export default function Button({
  size,
  variant,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ size, variant, disabled, className })}
      {...props}
    >
      {children}
    </button>
  );
}
