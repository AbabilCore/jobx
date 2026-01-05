'use client';

import { Bot, ClipboardList, Mail, Terminal } from 'lucide-react';
import { Card } from '@/components/ui/card';

const highlights = [
  {
    icon: Bot,
    title: 'AI-Powered Emails',
    description: 'Generate personalized job application emails in seconds',
  },
  {
    icon: Terminal,
    title: 'CLI First Workflow',
    description: 'Apply, track, and manage jobs without leaving your terminal',
  },
  {
    icon: ClipboardList,
    title: 'Auto Tracking',
    description: 'Every application is logged automatically to Google Sheets',
  },
  {
    icon: Mail,
    title: 'One-Command Submission',
    description: 'Submit job applications directly from the CLI',
  },
];

const WhyJobXHighlightSection = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Apply Smarter with <span className="text-gradient">JobX</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            JobX helps you apply for jobs faster by using AI to write emails and
            automatically track everything — directly from the terminal.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card
                key={idx}
                className="relative p-6 border-border/50 bg-card/60 backdrop-blur hover:border-accent/50 transition card-hover-glow group overflow-hidden"
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none">
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Footer line */}
        <p className="mt-16 text-center text-sm text-muted-foreground">
          Spend less time applying —{' '}
          <span className="text-accent font-semibold">
            more time getting interviews.
          </span>
        </p>
      </div>
    </section>
  );
};

export default WhyJobXHighlightSection;
