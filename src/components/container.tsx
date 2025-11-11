import React from "react";

interface ContainerProps extends React.ComponentProps<"div"> {
  as?: keyof React.JSX.IntrinsicElements;
}

export default function Container({
  as,
  className,
  children,
  ...props
}: ContainerProps) {
  return React.createElement(
    (as = "div"),
    {
      className: className,
      ...props,
    },
    children
  );
}
