import React from 'react';
import Markdown from 'react-markdown';
import { motion, AnimatePresence } from 'motion/react';
import { Award, AlertCircle, CheckCircle2, Sparkles, Loader2 } from 'lucide-react';
import { cn } from '../lib/utils';

interface AIReviewPanelProps {
  review: {
    score: number;
    feedback: string;
    suggestions: string[];
    isPassed: boolean;
  } | null;
  isReviewing: boolean;
}

export const AIReviewPanel: React.FC<AIReviewPanelProps> = ({ review, isReviewing }) => {
  return (
    <div className="w-96 h-full bg-slate-900 border-l border-slate-800 flex flex-col">
      <div className="p-4 border-b border-slate-800 flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-red-500" />
        <h2 className="font-bold text-slate-100">NAB AI Review</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {isReviewing ? (
          <div className="h-full flex flex-col items-center justify-center text-slate-400 space-y-4">
            <Loader2 className="w-8 h-8 animate-spin text-red-500" />
            <p className="text-sm animate-pulse">Senior Engineer is reviewing your code...</p>
          </div>
        ) : review ? (
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* Score Card */}
              <div className={cn(
                "p-6 rounded-2xl border flex flex-col items-center text-center space-y-2",
                review.isPassed ? "bg-green-500/10 border-green-500/20" : "bg-red-500/10 border-red-500/20"
              )}>
                <div className="relative">
                  <svg className="w-24 h-24 transform -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      className="text-slate-800"
                    />
                    <motion.circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={251.2}
                      initial={{ strokeDashoffset: 251.2 }}
                      animate={{ strokeDashoffset: 251.2 - (251.2 * review.score) / 100 }}
                      className={review.isPassed ? "text-green-500" : "text-red-500"}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-slate-100">{review.score}</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg text-slate-100">
                  {review.isPassed ? "NAB Standard Met!" : "Needs Improvement"}
                </h3>
                <p className="text-xs text-slate-400">Target score: 80+</p>
              </div>

              {/* Feedback */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-slate-300 font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Feedback
                </div>
                <div className="text-sm text-slate-400 prose prose-invert max-w-none">
                  <Markdown>{review.feedback}</Markdown>
                </div>
              </div>

              {/* Suggestions */}
              {review.suggestions.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-slate-300 font-semibold text-sm">
                    <AlertCircle className="w-4 h-4 text-yellow-500" />
                    Suggestions
                  </div>
                  <ul className="space-y-2">
                    {review.suggestions.map((s, i) => (
                      <li key={i} className="text-xs text-slate-400 flex gap-2">
                        <span className="text-red-500">•</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {review.isPassed && (
                <div className="p-4 bg-green-500 rounded-xl flex items-center justify-center gap-2 text-white font-bold shadow-lg shadow-green-500/20">
                  <Award className="w-5 h-5" />
                  Module Passed!
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-slate-500 text-center space-y-4 px-6">
            <div className="p-4 bg-slate-800 rounded-full">
              <Sparkles className="w-8 h-8" />
            </div>
            <p className="text-sm">Submit your code to get a review from our AI Senior Engineer.</p>
          </div>
        )}
      </div>
    </div>
  );
};
