import React, { useState, memo, useCallback } from "react";
import { Container, StyledCheckbox } from "./style";
import DeleteIcon from "../../../icons/delete-icon/delete-icon";
import AddIcon from "../../../icons/add-icon/add-icon";
import ChangeIcon from "../../../icons/change-icon/change-icon";
import { TNestedListObject } from "../../../types";
import CustomButton from "../../../ui-kit/custom-button/custom-button";
import Modal from "../../modal/modal";
import CustomBranchCheckbox from "../../../ui-kit/custom-branch-checkbox/custom-branch-checkbox";
import { ChangeItemForm } from "../change-item-form/change-item-form";
import DeleteConfirm from "../delete-confirm/delete-confirm";
import CloseBranchIcon from "../../../icons/close-branch-icon/close-branch-icon";
import OpenBranchIcon from "../../../icons/open-branch-icon/open-branch-icon";

type TProps = {
  handleAddChild: (id: number) => void;
  handleUpdateName: (a: { id: number; name: string }) => void;
  handleDeleteBranch: (id: number, parentId: number) => void;
  data: TNestedListObject;
};

const ListItem = memo(
  ({ handleAddChild, handleUpdateName, handleDeleteBranch, data }: TProps) => {
    const [isBranchOpen, setIsBranchOpen] = useState(true);
    const [isOpenForm, setIsOpenForm] = useState(false);
    const [isOpenConfirmDelete, setIsOpenConfirmDelete] = useState(false);

    const handleOnStyledBranchChecboxClick = () => {
      setIsBranchOpen((p) => !p);
    };
    const handleOnAddChildClick = () => {
      handleAddChild(data.id);
    };
    const handleOnDeleteClick = useCallback(() => {
      if (data.children.length === 0) {
        handleDeleteBranch(data.id, data.parentId);
      } else {
        setIsOpenConfirmDelete(true);
      }
    }, [data.children.length, data.id, data.parentId, handleDeleteBranch]);
    const handleOnRenameClick = () => {
      setIsOpenForm(true);
    };
    const hasChild = data.children.length > 0;
    return (
      <>
        <Container $hasChild={hasChild}>
          <div className="item-content">
            <div className="left">
              {hasChild && (
                <CustomBranchCheckbox
                  onClick={handleOnStyledBranchChecboxClick}
                  isBranchOpen={isBranchOpen}
                />
              )}
              <span>{data.name}</span>
            </div>

            <div className="right">
              <CustomButton onClick={handleOnRenameClick}>
                <ChangeIcon />
              </CustomButton>
              <CustomButton onClick={handleOnAddChildClick}>
                <AddIcon />
              </CustomButton>
              {!!data.parentId && (
                <CustomButton onClick={handleOnDeleteClick}>
                  <DeleteIcon />
                </CustomButton>
              )}
            </div>
          </div>

          {isBranchOpen &&
            data.children.map((el) => {
              return (
                <ListItem
                  key={el.id}
                  data={el}
                  handleAddChild={handleAddChild}
                  handleUpdateName={handleUpdateName}
                  handleDeleteBranch={handleDeleteBranch}
                />
              );
            })}
        </Container>
        <Modal isOpen={isOpenConfirmDelete} setIsOpen={setIsOpenConfirmDelete}>
          <DeleteConfirm
            callbackYes={() => handleDeleteBranch(data.id, data.parentId)}
            callbackNo={setIsOpenConfirmDelete}
          />
        </Modal>
        <Modal isOpen={isOpenForm} setIsOpen={setIsOpenForm}>
          <ChangeItemForm
            onSave={handleUpdateName}
            id={data.id}
            setIsOpenForm={setIsOpenForm}
          />
        </Modal>
      </>
    );
  }
);
export default ListItem;
