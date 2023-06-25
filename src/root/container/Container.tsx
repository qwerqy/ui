import { PropsWithChildren } from "react";

export type ContainerProps = PropsWithChildren<{}>;

export const Container: React.FC<ContainerProps> = (props) => {
  const { children } = props;

  return (
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">{children}</div>
  );
};
