import { cx } from "class-variance-authority";

interface MainContentProps extends React.ComponentProps<"main"> {}

export default function MainContent({
  className,
  children,
  ...props
}: MainContentProps) {
  return (
    <>
      <main
        className={cx("px-3 pt-10 flex flex-col flex-1", className)}
        {...props}
      >
        {children}
      </main>
    </>
  );
}
