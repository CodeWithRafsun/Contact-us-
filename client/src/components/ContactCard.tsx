import { LucideIcon } from 'lucide-react';

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  details: string[];
  delay?: number;
}

/**
 * ContactCard Component
 * 
 * Displays contact information in a glassmorphic card with neon glow.
 * Features smooth entrance animation with customizable delay.
 */
export default function ContactCard({
  icon: Icon,
  title,
  details,
  delay = 0,
}: ContactCardProps) {
  return (
    <div
      className="glass-card neon-glow-hover p-5 transition-all duration-300 hover:translate-y-[-4px] animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <Icon className="w-6 h-6 text-blue-400 mt-1" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-1">
            {title}
          </h3>
          <div className="space-y-1">
            {details.map((detail, index) => (
              <p key={index} className="text-blue-200/70 text-sm">
                {detail}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
