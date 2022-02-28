import { Forests } from "./Forests";

export interface Regions {
  data: Array<RegionItem>;
}

export interface RegionItem {
  id: Number;
  attributes: {
    title: string;
    slug: string;
    forests: Forests;
  };
}
