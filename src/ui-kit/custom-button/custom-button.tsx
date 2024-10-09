import React, { memo, PropsWithChildren } from "react";
import { StyledButton } from "./style";

type TProps = {
  onClick: () => void;
};

const CustomButton = memo((props: PropsWithChildren<TProps>) => {
  return <StyledButton onClick={props.onClick}>{props.children}</StyledButton>;
});
export default CustomButton;
