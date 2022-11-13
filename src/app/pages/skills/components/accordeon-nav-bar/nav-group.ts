import { NavItem } from "./nav-item";

export interface NavGroup {
    title?: string;
    src?: string;
    items: NavItem[];
}