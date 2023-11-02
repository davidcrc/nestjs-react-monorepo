import cx from "clsx";
import { Button as MantineButton } from "@mantine/core";
import type { ButtonProps as MantineButtonProps } from "@mantine/core";
import type { SizeType, VariantType, ColorType } from "../types";

import styles from "./button.module.scss";

interface ButtonProps extends MantineButtonProps {
  size?: SizeType;
  variant?: VariantType;
  color?: ColorType;
  onClick?: () => void;
  "data-testid"?: string;
  id?: string;
  children: React.ReactNode;
  tabIndex?: number;
}
export const Button = ({
  size = "lg",
  variant = "filled",
  color = "gray",
  onClick,
  "data-testid": dataTestId = "button",
  children,
  id,
  tabIndex,
  ...props
}: ButtonProps) => {
  return (
    <MantineButton
      data-testid={dataTestId}
      size={size}
      color={color}
      variant={variant}
      classNames={{
        root: cx(
          styles.Root,
          styles[`Root--${color}`],
          styles[`Root--${size}`]
        ),
      }}
      onClick={onClick}
      id={id}
      tabIndex={tabIndex}
      {...props}
    >
      {children}
    </MantineButton>
  );
};
