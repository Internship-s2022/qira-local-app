interface Image {
  key: string;
  url: string;
}
export interface Category {
  name: string;
  image: Image;
  isActive: boolean;
  logicDelete: boolean;
}
