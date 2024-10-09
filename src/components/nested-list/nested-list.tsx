import React, { useState } from "react";
import { Container } from "./style";

import { TNestedListObject } from "../../types";
import { updateObjectRecursive } from "../../functions/update-object-recursive";
import ListItem from "./list-item/list-item";

const NestedList = () => {
  const [list, setList] = useState<TNestedListObject>({
    id: Date.now(),
    parentId: 0,
    name: "Новая запись",
    children: [],
  });

  const addChild = (obj: TNestedListObject, id: number): TNestedListObject => {
    return {
      ...obj,
      children: [
        ...obj.children,
        {
          id: Date.now(),
          parentId: id,
          name: "Новая запись",
          children: [],
        },
      ],
    };
  };

  const deleteBranch = (
    obj: TNestedListObject,
    id: number
  ): TNestedListObject => {
    return { ...obj, children: [...obj.children.filter((el) => el.id !== id)] };
  };

  const updateName = (
    obj: TNestedListObject,
    id: number,
    name: string
  ): TNestedListObject => {
    return {
      ...obj,
      name,
    };
  };

  const handleAddChild = (id: number) => {
    const callback = (obj: TNestedListObject) => addChild(obj, id);
    const newList = updateObjectRecursive({
      obj: list,
      id,
      callback,
    });
    setList(newList);
  };
  const handleDeleteBranch = (id: number, parentId: number) => {
    const callback = (obj: TNestedListObject) => deleteBranch(obj, id);
    const newList = updateObjectRecursive({
      obj: list,
      id: parentId,
      callback,
    });
    setList(newList);
  };
  const handleUpdateName = ({ id, name }: { id: number; name: string }) => {
    const callback = (obj: TNestedListObject) => updateName(obj, id, name);

    const newList = updateObjectRecursive({ obj: list, id, callback });
    setList(newList);
  };
  return (
    <Container>
      <ListItem
        data={list}
        handleAddChild={handleAddChild}
        handleDeleteBranch={handleDeleteBranch}
        handleUpdateName={handleUpdateName}
      />
    </Container>
  );
};
export default NestedList;
