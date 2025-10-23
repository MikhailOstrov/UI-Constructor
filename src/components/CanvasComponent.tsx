import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { CanvasComponent as CanvasComponentType } from "@/types/component";
import { GripVertical, Trash2, Edit3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface CanvasComponentProps {
  component: CanvasComponentType;
  onDelete: (id: string) => void;
  onEdit: (id: string, newHtml: string) => void;
}

export const CanvasComponent = ({ component, onDelete, onEdit }: CanvasComponentProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(component.html);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: component.instanceId,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const handleSaveEdit = () => {
    onEdit(component.instanceId, editContent);
    setIsEditing(false);
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="group relative animate-in fade-in slide-in-from-bottom-2 duration-300"
    >
      <div className="absolute -left-12 top-0 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-1">
        <Button
          size="icon"
          variant="ghost"
          className="h-8 w-8 cursor-grab active:cursor-grabbing bg-card border border-border hover:bg-secondary"
          {...attributes}
          {...listeners}
        >
          <GripVertical className="h-4 w-4" />
        </Button>
        {component.editable && (
          <Button
            size="icon"
            variant="ghost"
            className="h-8 w-8 bg-card border border-border hover:bg-secondary"
            onClick={() => setIsEditing(!isEditing)}
          >
            <Edit3 className="h-4 w-4" />
          </Button>
        )}
        <Button
          size="icon"
          variant="ghost"
          className="h-8 w-8 bg-card border border-border hover:bg-destructive hover:text-destructive-foreground"
          onClick={() => onDelete(component.instanceId)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
      
      {isEditing ? (
        <div className="space-y-2 mb-4">
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            className="w-full h-32 p-3 bg-muted text-foreground rounded-lg font-mono text-sm border border-border focus:ring-2 focus:ring-primary outline-none"
          />
          <div className="flex gap-2">
            <Button size="sm" onClick={handleSaveEdit}>
              Save
            </Button>
            <Button size="sm" variant="outline" onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        <div
          dangerouslySetInnerHTML={{ __html: component.html }}
          className="mb-4"
        />
      )}
    </div>
  );
};
