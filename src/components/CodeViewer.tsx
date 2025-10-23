import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Copy, Code2, Eye, Download } from "lucide-react";
import { toast } from "sonner";
import { CanvasComponent } from "@/types/component";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

interface CodeViewerProps {
  components: CanvasComponent[];
}

export const CodeViewer = ({ components }: CodeViewerProps) => {
  const [previewMode, setPreviewMode] = useState(false);

  const htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Website</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { background: #111827; }
  </style>
</head>
<body>
${components.map(c => c.html).join('\n')}
</body>
</html>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlCode);
    toast.success("Code copied to clipboard!");
  };

  const downloadHtml = () => {
    const blob = new Blob([htmlCode], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'my-website.html';
    a.click();
    URL.revokeObjectURL(url);
    toast.success("HTML file downloaded!");
  };

  return (
    <div className="w-96 bg-card border-l border-border flex flex-col">
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Code2 className="h-5 w-5 text-primary" />
            <h2 className="font-bold">Preview & Code</h2>
          </div>
          <Button
            size="sm"
            variant="secondary"
            onClick={downloadHtml}
            disabled={components.length === 0}
          >
            <Download className="h-4 w-4" />
          </Button>
        </div>
        
        <Tabs value={previewMode ? "preview" : "code"} onValueChange={(v) => setPreviewMode(v === "preview")}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="code">Code</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {previewMode ? (
        <ScrollArea className="flex-1">
          <div className="p-4">
            {components.length === 0 ? (
              <div className="flex items-center justify-center min-h-[200px]">
                <p className="text-muted-foreground text-sm">No components yet</p>
              </div>
            ) : (
              <div className="space-y-2 bg-background rounded-lg p-4">
                {components.map((component, index) => (
                  <div
                    key={index}
                    dangerouslySetInnerHTML={{ __html: component.html }}
                    className="transform scale-50 origin-top-left"
                    style={{ width: '200%', marginBottom: '-50%' }}
                  />
                ))}
              </div>
            )}
          </div>
        </ScrollArea>
      ) : (
        <>
          <div className="px-4 py-2 border-b border-border">
            <Button
              size="sm"
              variant="secondary"
              onClick={copyToClipboard}
              disabled={components.length === 0}
              className="w-full"
            >
              <Copy className="h-4 w-4 mr-2" />
              Copy HTML
            </Button>
          </div>
          <ScrollArea className="flex-1">
            <div className="p-4">
              <Card className="bg-muted/50 p-4">
                <pre className="text-xs text-muted-foreground whitespace-pre-wrap font-mono">
                  {components.length === 0 ? (
                    <span className="text-muted-foreground/50">
                      HTML code will appear here...
                    </span>
                  ) : (
                    htmlCode
                  )}
                </pre>
              </Card>
            </div>
          </ScrollArea>
        </>
      )}
    </div>
  );
};
