import { PropsWithChildren } from "react";
import cn from "classnames";

export type AnchorButtonProps = PropsWithChildren<{
  href?: string;
  variant?: "link" | "button";
}>;

export const AnchorButton: React.FC<AnchorButtonProps> = ({
  children,
  href,
  variant = "link",
}) => {
  return (
    <a
      href={href}
      className={cn([
        "text-sm font-semibold",
        variant === "button" &&
          "rounded-md bg-indigo-600 px-3.5 py-2.5  text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
        variant === "link" && "leading-6 text-gray-900 dark:text-white",
      ])}
    >
      {children}
    </a>
  );
};
