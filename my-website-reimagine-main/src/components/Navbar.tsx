import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface SocialLink {
  href: string;
  icon: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://t.me/placeholder",
    icon: "https://tryktqmmjylhzmuibcmi.supabase.co/storage/v1/object/sign/blak-assets/Project%20files/telegram%20icon.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJibGFrLWFzc2V0cy9Qcm9qZWN0IGZpbGVzL3RlbGVncmFtIGljb24uc3ZnIiwiaWF0IjoxNzM0MzQ1NjE5LCJleHAiOjIwNDk3MDU2MTl9.off6P32IyKcnmYqOhyJiIJdFMSBpTdi4oKvRpuE70i8",
    label: "Join us on Telegram"
  },
  {
    href: "https://x.com/placeholder",
    icon: "https://tryktqmmjylhzmuibcmi.supabase.co/storage/v1/object/sign/blak-assets/Project%20files/x%20icon.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJibGFrLWFzc2V0cy9Qcm9qZWN0IGZpbGVzL3ggaWNvbi5zdmciLCJpYXQiOjE3MzQzNDU2OTAsImV4cCI6MjA0OTcwNTY5MH0.o-5COb3KCE0EENWnF7-Du-mdDrm32cx24qq6IngLOVE",
    label: "Follow us on X"
  }
];

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-6 bg-gradient-to-b from-black/50 to-transparent">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl text-black font-bold">BLAK</h1>
        
        <TooltipProvider>
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <Tooltip key={link.href}>
                <TooltipTrigger asChild>
                  <a 
                    href={link.href}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white hover:bg-white/90 transition-all duration-300 hover:-translate-y-1"
                    aria-label={link.label}
                  >
                    <img 
                      src={link.icon}
                      alt={link.label}
                      className="w-6 h-6"
                    />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{link.label}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </nav>
  );
};

export default Navbar;