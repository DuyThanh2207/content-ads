export type ComponentRender = {
  type: ComponentType;
  content: string;
  message?: string;
};

export type ComponentType = "paragraph" | "button" | "image";
