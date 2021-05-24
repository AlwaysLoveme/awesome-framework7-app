import { Router } from "framework7/types";

export interface RoutesExtend {
  meta?: Record<string, unknown>;
}
export type Routes = Router.RouteParameters & RoutesExtend;
export interface RouterGroups {
  group_title: string;
  groups: Routes[];
}
