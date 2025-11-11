import { cva, cx, type VariantProps } from "class-variance-authority";
import { textVariants } from "./text";
import { useRef, type ComponentProps } from "react";
import ArrowDown from "../assets/arrow-down.svg?react";
import Icon from "./icon";

export const inputVariants = cva(
  `flex items-center justify-center gap-2 border border-gray-500 text-gray-200 text-base w-full p-4 rounded-xl
   hover:border-yellow focus:border-yellow outline-none`,
  {
    variants: {},
  }
);

interface InputProps
  extends React.ComponentProps<"input">,
    VariantProps<typeof inputVariants>,
    VariantProps<typeof textVariants> {
  icon?: React.FC<ComponentProps<"svg">>;
}

export default function Input({
  variant,
  icon,
  className,
  type,
  ...props
}: InputProps) {
  const isDate = type === "date";
  const inputRef = useRef<HTMLInputElement>(null);

  const handlePickerClick = () => {
    if (inputRef.current) {
      inputRef.current.showPicker();
    }
  };
  return (
    <div className={cx(inputVariants(), className)}>
      {icon && <Icon svg={icon} />}

      <input
        className={cx(
          "w-full flex-1 bg-transparent outline-none no-calendar-picker",

          "placeholder:text-gray-400",

          textVariants({ variant })
        )}
        ref={inputRef}
        type={type}
        {...props}
      />

      {isDate && (
        <Icon
          svg={ArrowDown}
          onClick={handlePickerClick}
          className="h-5 w-5 shrink-0 text-gray-400 cursor-pointer"
        />
      )}
    </div>
  );
}
