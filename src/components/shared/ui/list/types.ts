export interface ListProps<Data extends RowData> {
  headers: Headers<Data>[];
  data: Data[];
  showButtons?: boolean;
  buttons?: ((rowData: Data) => TableButton)[];
}

export interface RowData {
  id: string;
}

export interface Headers<T extends RowData> {
  header: string;
  key: keyof T;
}

export interface TableButton {
  active: boolean;
  icon: JSX.Element;
  title: string;
  onClick: () => void;
}
