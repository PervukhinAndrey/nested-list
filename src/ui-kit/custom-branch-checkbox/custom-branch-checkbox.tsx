import React from "react";
import CloseBranchIcon from "../../icons/close-branch-icon/close-branch-icon";
import OpenBranchIcon from "../../icons/open-branch-icon/open-branch-icon";
import { StyledCheckbox } from "./style";

type TProps = {
  isBranchOpen: boolean;
  onClick: () => void;
};

const CustomBranchCheckbox = ({ isBranchOpen, onClick }: TProps) => {
  return (
    <StyledCheckbox onClick={onClick}>
      {isBranchOpen ? <CloseBranchIcon /> : <OpenBranchIcon />}
    </StyledCheckbox>
  );
};
export default CustomBranchCheckbox;
