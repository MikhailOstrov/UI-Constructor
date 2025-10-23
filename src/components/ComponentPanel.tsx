import { DraggableComponent } from "@/components/DraggableComponent";
import { availableComponents, componentCategories } from "@/data/components";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const ComponentPanel = () => {
  const categories = Object.entries(componentCategories);

  return (
    <div className="w-80 bg-card border-r border-border flex flex-col">
      <div className="p-4 border-b border-border">
        <h2 className="text-xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
          Components
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Drag components to canvas
        </p>
      </div>
      
      <Tabs defaultValue={categories[0][0]} className="flex-1 flex flex-col">
        <TabsList className="mx-4 mt-4 grid grid-cols-3 gap-1 bg-secondary/50">
          {categories.slice(0, 3).map(([key, label]) => (
            <TabsTrigger key={key} value={key} className="text-xs">
              {label.split(' ')[0]}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsList className="mx-4 mt-2 grid grid-cols-2 gap-1 bg-secondary/50">
          {categories.slice(3).map(([key, label]) => (
            <TabsTrigger key={key} value={key} className="text-xs">
              {label.split(' ')[0]}
            </TabsTrigger>
          ))}
        </TabsList>
        
        <ScrollArea className="flex-1 px-4 py-4">
          {categories.map(([key]) => (
            <TabsContent key={key} value={key} className="space-y-3 mt-0">
              {availableComponents
                .filter((c) => c.category === key)
                .map((component) => (
                  <DraggableComponent key={component.id} component={component} />
                ))}
            </TabsContent>
          ))}
        </ScrollArea>
      </Tabs>
    </div>
  );
};
