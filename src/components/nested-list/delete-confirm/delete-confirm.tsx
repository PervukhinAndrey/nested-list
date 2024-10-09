import React, { memo, PropsWithChildren } from "react";
import { Container, ButtonContent } from "./style";
import CustomButton from "../../../ui-kit/custom-button/custom-button";

type TProps = {
  callbackYes: () => void;
  callbackNo: (a: boolean) => void;
};

export const DeleteConfirm = memo(function DeleteConfirm(
  props: PropsWithChildren<TProps>
) {
  const handleOnClickYes = () => {
    props.callbackYes();
  };
  const handleOnClickNo = () => {
    props.callbackNo(false);
  };

  return (
    <Container>
      <span>
        Удаляемый элемент содержит дочерние элемнты. Вы уверены, что хотите его
        удалить?
      </span>
      <div>
        <ButtonContent onClick={handleOnClickYes}>Да</ButtonContent>

        <ButtonContent onClick={handleOnClickNo}>Нет</ButtonContent>
      </div>
    </Container>
  );
});
export default DeleteConfirm;
