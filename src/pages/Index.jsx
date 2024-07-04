import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import heroImage from '../../public/images/hero-image.jpg';

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Card className="bg-opacity-80 bg-primary text-primary-foreground">
        <CardHeader>
          <CardTitle className="text-3xl">Your Blank Canvas</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Chat with the agent to start making edits.</p>
        </CardContent>
      </Card>
      <section className="w-full mt-8">
        <img src={heroImage} alt="Hero Image" className="w-full h-auto object-cover" />
      </section>
    </div>
  );
};

export default Index;