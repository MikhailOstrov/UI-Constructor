import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Card } from "@/components/ui/card";
import { CanvasComponent as CanvasComponentType } from "@/types/component";
import { CanvasComponent } from "@/components/CanvasComponent";
import { MousePointer2 } from "lucide-react";

interface CanvasProps {
  components: CanvasComponentType[];
  onDeleteComponent: (id: string) => void;
  onEditComponent: (id: string, newHtml: string) => void;
}

export const Canvas = ({ components, onDeleteComponent, onEditComponent }: CanvasProps) => {
  const { setNodeRef, isOver } = useDroppable({
    id: "canvas-droppable",
  });

  return (
    <div className="flex-1 p-6 overflow-auto">
      <Card
        ref={setNodeRef}
        className={`min-h-full p-12 pl-20 bg-gradient-to-br from-card to-background transition-all ${
          isOver ? "ring-2 ring-primary" : ""
        }`}
      >
        {components.length === 0 ? (
          <div className="flex items-center justify-center min-h-[500px]">
            <div className="text-center max-w-md">
              <MousePointer2 className="h-16 w-16 text-muted-foreground mx-auto mb-4 animate-pulse" />
              <h3 className="text-xl font-bold mb-2">Start Building</h3>
              <p className="text-muted-foreground">
                Drag components from the left panel to start creating your website
              </p>
            </div>
          </div>
        ) : (
          <SortableContext
            items={components.map((c) => c.instanceId)}
            strategy={verticalListSortingStrategy}
          >
            <div className="space-y-0">
              {components.map((component) => (
                <CanvasComponent
                  key={component.instanceId}
                  component={component}
                  onDelete={onDeleteComponent}
                  onEdit={onEditComponent}
                />
              ))}
            </div>
          </SortableContext>
        )}
      </Card>
    </div>
  );
};
