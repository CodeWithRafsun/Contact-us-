import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Github,
  MessageCircle,
} from 'lucide-react';

/**
 * SocialLinks Component
 * 
 * Displays social media links with icons and hover effects.
 * Features neon glow on hover for glassmorphism aesthetic.
 */
export default function SocialLinks() {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/codewithrafsun',
      color: 'hover:text-blue-400',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/codewithrafsun',
      color: 'hover:text-pink-400',
    },
    {
      name: 'Telegram',
      icon: MessageCircle,
      url: 'https://t.me/codewithrafsun',
      color: 'hover:text-cyan-400',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/codewithrafsun',
      color: 'hover:text-blue-500',
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com/@codewithrafsun',
      color: 'hover:text-red-400',
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/codewithrafsun',
      color: 'hover:text-white',
    },
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className={`glass-card neon-glow-hover p-3 transition-all duration-300 hover:scale-110 ${link.color} text-slate-300`}
            title={link.name}
          >
            <Icon className="w-5 h-5" />
          </a>
        );
      })}
    </div>
  );
}
