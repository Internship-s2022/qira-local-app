export interface ListProps<Data extends RowData> {
  headers: Headers[];
  data: Data[];
}

export interface RowData {
  id: string;
}

export interface Headers {
  header: string;
  key: string;
}
