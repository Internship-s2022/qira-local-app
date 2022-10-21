export interface ListProps<Data extends RowData> {
  headers: Headers[];
  data: Data[];
  showButtons?: boolean;
  buttons?: ((rowData: Data) => TableButton)[];
}

export interface RowData {
  id: string;
}

export interface Headers {
  header: string;
  key: string;
}

export interface TableButton {
  active: boolean;
  icon: JSX.Element;
  title: string;
  onClick: () => void;
}
