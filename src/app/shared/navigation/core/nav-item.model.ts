import {ID, RouterLink} from '../../core/types';

export interface NavItemBase {
    readonly id: ID;
    link?: RouterLink;
}

export type NavItem<T> = {
    [P in keyof T]?: T[P];
} & NavItemBase & { children?: NavItem<T>[]; };
