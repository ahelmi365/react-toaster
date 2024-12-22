import { TCategoryPrefix } from "./shared";

export interface ICategory {
  id?: number;
  title: string;
  prefix: TCategoryPrefix;
  img: string | null;
}


