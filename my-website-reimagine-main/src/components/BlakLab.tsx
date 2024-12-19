import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const BlakLab = () => {
  const [wordInput, setWordInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const { toast } = useToast();

  const generateImage = async () => {
    if (!wordInput) {
      toast({
        title: "Input required",
        description: "Please enter a prompt before starting.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('https://api-inference.huggingface.co/models/signupting/blak-lora-model', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer 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"
        },
        body: JSON.stringify({ inputs: wordInput })
      });

      if (!response.ok) {
        throw new Error("Failed to generate image");
      }

      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setGeneratedImage(imageUrl);
      
      toast({
        title: "Success!",
        description: "Your BLAK MEME has been generated.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate image. Please try again.",
        variant: "destructive",
      });
      console.error('Image generation error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-2">BLAK LAB</h2>
        <p className="text-white/70 mb-12">Create legendary BLAK MEME's with our AI generator</p>

        <Card className="p-8 bg-white/10 backdrop-blur-lg border-white/20">
          <form onSubmit={(e) => {
            e.preventDefault();
            generateImage();
          }} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-white text-left">Create Your Legend</label>
              <Input
                type="text"
                placeholder="Word ideas?"
                value={wordInput}
                onChange={(e) => setWordInput(e.target.value)}
                className="bg-white/20 border-white/20 text-white placeholder:text-white/50"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button 
                type="submit"
                variant="outline" 
                className="w-full bg-white/20 text-white hover:bg-white/30"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  'Start'
                )}
              </Button>
              <Button 
                type="button"
                className="w-full bg-blak-red hover:bg-blak-darker text-white"
                disabled={!generatedImage}
                onClick={() => {
                  if (generatedImage) {
                    const link = document.createElement('a');
                    link.href = generatedImage;
                    link.download = 'blak-meme.png';
                    link.click();
                  }
                }}
              >
                Save
              </Button>
            </div>
          </form>

          {generatedImage && (
            <div className="mt-8">
              <img 
                src={generatedImage} 
                alt="Generated BLAK MEME" 
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default BlakLab;