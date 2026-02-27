import { CheckCircle } from 'lucide-react';

/**
 * SuccessPopup Component
 * 
 * Displays a success message after form submission.
 * Features smooth slide-in animation and auto-dismiss.
 */
export default function SuccessPopup() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Popup */}
      <div
        className="relative glass-card neon-glow p-8 max-w-md w-full animate-fade-in-up"
        style={{ animationDuration: '0.5s' }}
      >
        <div className="text-center">
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <CheckCircle className="w-16 h-16 text-green-400 animate-bounce" />
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-white mb-2">
            👋 Hello!
          </h2>

          {/* Message */}
          <div className="space-y-3 text-blue-200/80 text-sm">
            <p>Thank you for contacting us.</p>
            <p>Your message has been received successfully.</p>
            <p>I will respond as soon as possible.</p>
            <p className="text-xs text-blue-200/60">
              Please allow some time for a reply.
            </p>
            <p className="text-xs text-blue-200/60">
              Thanks again, and have a great day!
            </p>
          </div>

          {/* Footer */}
          <div className="mt-6 pt-4 border-t border-blue-500/20">
            <p className="text-white font-semibold text-sm">
              CODE WITH RAFSUN
            </p>
            <p className="text-blue-200/60 text-xs mt-1">
              Powered by Mahedi Hasan Rafsun
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
