import { Button } from "@/components/ui/button";
import { Trash2, Download, Undo, Redo } from "lucide-react";
import { toast } from "sonner";

interface ToolbarProps {
  onClear: () => void;
  onUndo: () => void;
  onRedo: () => void;
  componentsCount: number;
  canUndo: boolean;
  canRedo: boolean;
}

export const Toolbar = ({ onClear, onUndo, onRedo, componentsCount, canUndo, canRedo }: ToolbarProps) => {
  const handleExport = () => {
    toast.success("Downloading HTML file...");
  };

  return (
    <div className="h-16 bg-card border-b border-border px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
          UI Constructor
        </h1>
        <div className="h-6 w-px bg-border" />
        <div className="text-sm text-muted-foreground">
          {componentsCount} {componentsCount === 1 ? 'component' : 'components'}
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={onUndo}
          disabled={!canUndo}
        >
          <Undo className="h-4 w-4 mr-2" />
          Undo
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={onRedo}
          disabled={!canRedo}
        >
          <Redo className="h-4 w-4 mr-2" />
          Redo
        </Button>
        <div className="h-6 w-px bg-border mx-2" />
        <Button
          variant="destructive"
          size="sm"
          onClick={onClear}
          disabled={componentsCount === 0}
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Clear All
        </Button>
      </div>
    </div>
  );
};
