export interface BenefitProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description?: string;
  id?: string;
}

export interface ToastMessage {
  title: string;
  description: string;
  variant?: "default" | "destructive";
}