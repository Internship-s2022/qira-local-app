export interface SidebarProps {
  baseUrl: string;
  links: SidebarLinks[];
  title: string;
  bottomText: string;
}

export interface SidebarLinks {
  link: string;
  title: string;
}
