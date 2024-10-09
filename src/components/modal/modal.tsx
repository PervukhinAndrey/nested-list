import React, { memo, PropsWithChildren } from "react";
import { Container, ModalBox } from "./style";
import CloseIcon from "../../icons/close-icon/close-icon";

type TProps = {
  isOpen: boolean;
  setIsOpen: (a: boolean) => void;
};

export const Modal = memo((props: PropsWithChildren<TProps>) => {
  const closeModal = () => {
    props.setIsOpen(false);
  };
  return (
    <>
      {props.isOpen && (
        <Container>
          <ModalBox>
            <div className="close" onClick={closeModal}>
              <CloseIcon />
            </div>
            {props.children}
          </ModalBox>
        </Container>
      )}
    </>
  );
});
export default Modal;
