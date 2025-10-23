export interface ComponentData {
  id: string;
  type: string;
  category: string;
  name: string;
  html: string;
  preview: string;
  editable?: boolean;
}

export interface CanvasComponent extends ComponentData {
  instanceId: string;
}
