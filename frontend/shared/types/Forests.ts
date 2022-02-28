export interface Forests {
  data: Array<ForestItem>;
}

export interface ForestItem {
  id: Number;
  attributes: {
    title: string;
    slug: string;
    createdAt: Date;
    updatedAt: Date;
    locale: string;
    publishedAt: Date;
  };
}
