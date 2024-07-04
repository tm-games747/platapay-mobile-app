import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="bg-opacity-80 bg-primary text-primary-foreground">
        <CardHeader>
          <CardTitle className="text-3xl">Your Blank Canvas</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Chat with the agent to start making edits.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;