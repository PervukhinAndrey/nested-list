import { TNestedListObject } from "../types";

type TProps = {
  obj: TNestedListObject;
  id: number;
  callback: (a: TNestedListObject) => TNestedListObject;
};

export const updateObjectRecursive = ({
  obj,
  id,
  callback,
}: TProps): TNestedListObject => {
  if (obj.id === id) {
    return callback(obj);
  } else {
    const newObj: TNestedListObject = {
      ...obj,
      children: [
        ...obj.children.map((el) =>
          updateObjectRecursive({ obj: el, id, callback })
        ),
      ],
    };
    return newObj;
  }
};
