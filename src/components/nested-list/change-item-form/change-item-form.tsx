import React, { memo, PropsWithChildren, useState } from "react";
import { Container, ButtonContent } from "./style";

import CustomButton from "../../../ui-kit/custom-button/custom-button";

type TProps = {
  id: number;
  onSave: (a: { id: number; name: string }) => void;
  setIsOpenForm: (a: boolean) => void;
};

export const ChangeItemForm = memo((props: PropsWithChildren<TProps>) => {
  const [inputValue, setInputValue] = useState("");
  const handleOnSave = () => {
    console.log(inputValue);
    props.onSave({ id: props.id, name: inputValue });
    props.setIsOpenForm(false);
  };
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <Container>
      <span>Введите новое название:</span>
      <input value={inputValue} onChange={handleOnChange} />
      <ButtonContent onClick={handleOnSave}>Сохранить</ButtonContent>
    </Container>
  );
});
export default ChangeItemForm;
