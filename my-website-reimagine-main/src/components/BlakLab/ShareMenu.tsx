import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageCircle, Twitter, Send, Instagram, Share2 } from 'lucide-react';

interface ShareMenuProps {
  imageUrl: string | null;
}

const ShareMenu: React.FC<ShareMenuProps> = ({ imageUrl }) => {
  const shareUrl = imageUrl || window.location.href;
  const shareText = "Check out my legendary BLAK meme! 🔥";

  const shareLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      color: "bg-[#25D366] hover:bg-[#20BD5C]",
      url: `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`,
    },
    {
      name: "Twitter",
      icon: Twitter,
      color: "bg-[#1DA1F2] hover:bg-[#1A94E0]",
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
    },
    {
      name: "Telegram",
      icon: Send,
      color: "bg-[#0088CC] hover:bg-[#0077B5]",
      url: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
    },
    {
      name: "Instagram",
      icon: Instagram,
      color: "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90",
      url: `https://instagram.com`,
    },
    {
      name: "TikTok",
      icon: Share2,
      color: "bg-gradient-to-r from-[#00F2EA] to-[#FF0050] hover:opacity-90",
      url: `https://tiktok.com`,
    },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="w-full bg-white/20 text-white hover:bg-white/30"
        >
          Share 🚀
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-[#FF3850] border-none text-white sm:max-w-[425px]">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-center mb-6">Share Your Legend</h2>
          <div className="space-y-3">
            {shareLinks.map((platform) => {
              const Icon = platform.icon;
              return (
                <Button
                  key={platform.name}
                  className={`w-full text-white ${platform.color} justify-start space-x-2`}
                  onClick={() => window.open(platform.url, '_blank')}
                >
                  <Icon className="h-5 w-5" />
                  <span>Share on {platform.name}</span>
                </Button>
              );
            })}
          </div>
          <p className="text-center text-sm mt-4">
            Don't forget to tag <span className="font-bold">#BLAK</span>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareMenu;