import { useState } from "react";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { ComponentPanel } from "@/components/ComponentPanel";
import { Canvas } from "@/components/Canvas";
import { CodeViewer } from "@/components/CodeViewer";
import { Toolbar } from "@/components/Toolbar";
import { toast } from "sonner";
import { CanvasComponent, ComponentData } from "@/types/component";

const Index = () => {
  const [components, setComponents] = useState<CanvasComponent[]>([]);
  const [history, setHistory] = useState<CanvasComponent[][]>([[]]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [activeId, setActiveId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const addToHistory = (newComponents: CanvasComponent[]) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(newComponents);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const handleDragStart = (event: any) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveId(null);
    const { active, over } = event;

    if (!over) return;

    // If dragging from component panel to canvas
    if (over.id === "canvas-droppable" && active.data.current) {
      const componentData = active.data.current as ComponentData;
      const newComponent: CanvasComponent = {
        ...componentData,
        instanceId: `${componentData.id}-${Date.now()}`,
      };
      const newComponents = [...components, newComponent];
      setComponents(newComponents);
      addToHistory(newComponents);
      toast.success("Component added!");
      return;
    }

    // If reordering within canvas
    if (active.id !== over.id) {
      const oldIndex = components.findIndex((c) => c.instanceId === active.id);
      const newIndex = components.findIndex((c) => c.instanceId === over.id);

      if (oldIndex !== -1 && newIndex !== -1) {
        const newComponents = arrayMove(components, oldIndex, newIndex);
        setComponents(newComponents);
        addToHistory(newComponents);
      }
    }
  };

  const handleDeleteComponent = (id: string) => {
    const newComponents = components.filter((c) => c.instanceId !== id);
    setComponents(newComponents);
    addToHistory(newComponents);
    toast.info("Component removed");
  };

  const handleEditComponent = (id: string, newHtml: string) => {
    const newComponents = components.map((c) =>
      c.instanceId === id ? { ...c, html: newHtml } : c
    );
    setComponents(newComponents);
    addToHistory(newComponents);
    toast.success("Component updated");
  };

  const handleClear = () => {
    setComponents([]);
    addToHistory([]);
    toast.info("Canvas cleared");
  };

  const handleUndo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setComponents(history[historyIndex - 1]);
      toast.info("Undo");
    }
  };

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setComponents(history[historyIndex + 1]);
      toast.info("Redo");
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="h-screen flex flex-col bg-background">
        <Toolbar
          onClear={handleClear}
          onUndo={handleUndo}
          onRedo={handleRedo}
          componentsCount={components.length}
          canUndo={historyIndex > 0}
          canRedo={historyIndex < history.length - 1}
        />
        <div className="flex-1 flex overflow-hidden">
          <ComponentPanel />
          <Canvas
            components={components}
            onDeleteComponent={handleDeleteComponent}
            onEditComponent={handleEditComponent}
          />
          <CodeViewer components={components} />
        </div>
      </div>
      <DragOverlay>
        {activeId ? (
          <div className="p-4 bg-card border-2 border-primary rounded-lg shadow-lg">
            Dragging...
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default Index;
