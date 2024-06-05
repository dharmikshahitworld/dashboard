import { FC } from "react";
import clsx from "clsx";
import { Link as RLink, LinkProps as RLinkProps } from "react-router-dom";
import "./Link.scss";

interface LinkProps extends RLinkProps {
  underline?: boolean;
}

export const Link: FC<LinkProps> = ({
  children,
  className,
  underline,
  ...props
}) => {
  return (
    <RLink
      className={clsx("ui-link", className ?? "", underline && "underline")}
      {...props}
    >
      {children}
    </RLink>
  );
};
