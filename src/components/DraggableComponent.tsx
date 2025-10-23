import { useDraggable } from "@dnd-kit/core";
import { Card } from "@/components/ui/card";
import { GripVertical, Plus } from "lucide-react";
import { ComponentData } from "@/types/component";

interface DraggableComponentProps {
  component: ComponentData;
}

export const DraggableComponent = ({ component }: DraggableComponentProps) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: component.id,
    data: component,
  });

  return (
    <Card
      ref={setNodeRef}
      className={`p-4 cursor-grab active:cursor-grabbing hover:border-primary transition-all group ${
        isDragging ? "opacity-50" : ""
      }`}
      {...attributes}
      {...listeners}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GripVertical className="h-4 w-4 text-muted-foreground" />
          <div>
            <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
              {component.name}
            </h3>
            <p className="text-sm text-muted-foreground">{component.preview}</p>
          </div>
        </div>
        <Plus className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>
    </Card>
  );
};
