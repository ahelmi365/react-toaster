import { TCategoryPrefix } from "./shared";

export interface ICategory {
  id?: string;
  title: string;
  prefix: TCategoryPrefix;
  img: string | null;
}
