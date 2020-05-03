export interface ITabSwitcherConfig {
  tabs: ITab[];
  selectedIndex: number;
}

interface ITab {
  label?: string;
  iconClass?: string;
  disabled?: boolean;
  done?: boolean;
}
