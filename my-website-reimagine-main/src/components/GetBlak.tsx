import React from 'react';
import { Card } from '@/components/ui/card';
import { Search, ShoppingCart, TrendingUp, BarChart } from 'lucide-react';
import type { BenefitProps } from '@/types';

const steps: BenefitProps[] = [
  {
    icon: Search,
    title: "Pick to stack on",
    description: "Research $BLAK before you invest"
  },
  {
    icon: ShoppingCart,
    title: "Buy on the bonding curve",
    description: "Get your $BLAK tokens"
  },
  {
    icon: TrendingUp,
    title: "Sell anytime",
    description: "Cash out when you want"
  },
  {
    icon: BarChart,
    title: "Market cap hits $100k",
    description: "Everyone is burned"
  }
].map((step, index) => ({
  ...step,
  id: `step-${index + 1}`
}));

const GetBlak: React.FC = () => {
  return (
    <section className="py-20 px-4" aria-labelledby="get-blak-title">
      <h2 
        id="get-blak-title"
        className="text-4xl font-bold text-center text-white mb-12 animate-fade-in"
      >
        How to Get Your Hands on $BLAK
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <Card 
            key={step.id}
            className="p-6 bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <step.icon className="w-8 h-8 text-white animate-float" />
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              <p className="text-white/70">{step.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default GetBlak;