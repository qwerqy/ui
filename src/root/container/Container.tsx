import { PropsWithChildren } from "react";
import cn from "classnames";

export type ContainerProps = PropsWithChildren<{
  fluid?: boolean;
  relative?: boolean;
  plain?: boolean;
  flexCenter?: boolean;
}>;

export const Container: React.FC<ContainerProps> = (props) => {
  const { children, fluid, relative, plain, flexCenter } = props;

  return (
    <div
      className={cn([
        relative ? "relative" : "",
        fluid ? "" : "mx-auto",
        plain ? "" : "py-32 sm:py-48 lg:py-56",
        flexCenter ? "flex justify-center items-center" : "",
        "max-w-2xl",
      ])}
    >
      {children}
    </div>
  );
};
