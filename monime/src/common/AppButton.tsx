import React from "react";
import { Button, ButtonProps } from "antd";

interface AppButtonProps extends ButtonProps {
  children: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const AppButton = (props: AppButtonProps) => {
  const { children, style, rightIcon, ...rest } = props;
  let buttonRightIconStyle = rightIcon
    ? {
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        gap: 90,
      }
    : {};
  return (
    <Button
      {...rest}
      style={{
        ...buttonRightIconStyle,
        ...style,
      }}
    >
      {children}
      {rightIcon}
    </Button>
  );
};

export default AppButton;
