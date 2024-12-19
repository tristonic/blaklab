import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import ShareMenu from './ShareMenu';

interface GeneratorFormProps {
  wordInput: string;
  onInputChange: (value: string) => void;
  onGenerate: () => void;
  onSave: () => void;
  isLoading: boolean;
  hasGeneratedImage: boolean;
  generatedImage: string | null;
}

const GeneratorForm: React.FC<GeneratorFormProps> = ({
  wordInput,
  onInputChange,
  onGenerate,
  onSave,
  isLoading,
  hasGeneratedImage,
  generatedImage
}) => {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onGenerate();
    }} className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-white mb-6">Create Your Legend</h3>
        <div className="space-y-2">
          <label className="block text-white text-xl">Describe Your Legend</label>
          <Input
            type="text"
            placeholder="Type your idea for a legendary BLAK meme..."
            value={wordInput}
            onChange={(e) => onInputChange(e.target.value)}
            className="bg-white/20 border-white/20 text-white placeholder:text-white/50 h-12 text-lg"
          />
        </div>
      </div>

      <Button 
        type="submit"
        className="w-full bg-white/20 text-white hover:bg-white/30 h-12 text-lg"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Creating Legend...
          </>
        ) : (
          'Create Legend'
        )}
      </Button>

      {hasGeneratedImage && (
        <div className="grid grid-cols-2 gap-4">
          <ShareMenu imageUrl={generatedImage} />
          <Button 
            type="button"
            className="w-full bg-white/20 hover:bg-white/30 text-white"
            onClick={onSave}
          >
            Save 💾
          </Button>
        </div>
      )}
    </form>
  );
};

export default GeneratorForm;