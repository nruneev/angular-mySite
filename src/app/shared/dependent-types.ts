import {IconName} from './icon/icon-name.type';
import {NavItem} from './navigation/core/nav-item.model';


interface NavItemExt {
  label: string;
  icon?: IconName;
}

export type NavigationItem = NavItem<NavItemExt>;
