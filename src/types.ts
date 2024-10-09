export type TNestedListObject = {
  id: number;
  parentId: number;
  name: string;
  children: Array<TNestedListObject>;
  [key: string]: any;
};
