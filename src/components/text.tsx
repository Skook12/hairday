import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export const textVariants = cva(``, {
  variants: {
    variant: {
      "title-lg": "text-[32px]/6 font-bold text-gray-100",
      "title-md": "text-base/6 font-bold text-gray-200",
      "title-sm": "text-sm/5 font-bold",
      "text-md": "text-base/6 text-gray-200",
      "text-sm": "text-base/5 text-gray-300",
    },
  },
  defaultVariants: {
    variant: "text-sm",
  },
});

interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements;
  className?: String;
  children?: React.ReactNode;
}

export default function Text({
  as = "span",
  variant,
  children,
  className,
  ...props
}: TextProps) {
  return React.createElement(
    as,
    {
      className: textVariants({ variant, className }),
      ...props,
    },
    children
  );
}
