import React from 'react';
import { HelpCircle, Keyboard, BookOpen, Sparkles, MessageSquare, UserRound } from 'lucide-react';
import { useEditorStore } from '../store/editorStore';

export const HelpPage = () => {
  const { openOnboarding, toggleShortcutsModal, openAboutModal } = useEditorStore();

  return (
    <div className="flex-1 flex flex-col overflow-y-auto bg-[#FAFAFA] dark:bg-[#111111] text-[#171717] dark:text-[#EDEDED] select-none p-6 lg:p-8 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-[#171717] dark:text-[#EDEDED]">
          Help & Support Center
        </h1>
        <p className="text-xs text-[#737373] dark:text-[#A1A1A1] mt-0.5">
          Access interactive tutorials, keyboard shortcuts, release notes, and documentation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
        <button
          type="button"
          onClick={openAboutModal}
          aria-label="About FrameRiot and meet the founder"
          className="text-left bg-white dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#2A2A3A] rounded-[10px] p-5 hover:border-[#7C3AED] transition-all cursor-pointer shadow-xs group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7C3AED]"
        >
          <div className="w-10 h-10 rounded-[8px] bg-purple-500/10 text-purple-500 flex items-center justify-center mb-4">
            <UserRound className="w-5 h-5 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
          </div>
          <h2 className="text-sm font-semibold text-[#171717] dark:text-[#EDEDED]">About FrameRiot</h2>
          <p className="text-xs text-[#737373] dark:text-[#A1A1A1] mt-1">Meet Pawan Singh, the founder and builder behind FrameRiot.</p>
        </button>

        <div
          onClick={openOnboarding}
          className="bg-white dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#2A2A2A] rounded-[10px] p-5 hover:border-[#3B82F6] transition-all cursor-pointer shadow-xs group"
        >
          <div className="w-10 h-10 rounded-[8px] bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4">
            <Sparkles className="w-5 h-5 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
          </div>
          <h2 className="text-sm font-semibold text-[#171717] dark:text-[#EDEDED]">Interactive Studio Tour</h2>
          <p className="text-xs text-[#737373] dark:text-[#A1A1A1] mt-1">Take a quick 5-step guided tour of the ClipForge editor.</p>
        </div>

        <div
          onClick={toggleShortcutsModal}
          className="bg-white dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#2A2A2A] rounded-[10px] p-5 hover:border-[#3B82F6] transition-all cursor-pointer shadow-xs group"
        >
          <div className="w-10 h-10 rounded-[8px] bg-amber-500/10 text-amber-500 flex items-center justify-center mb-4">
            <Keyboard className="w-5 h-5 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
          </div>
          <h2 className="text-sm font-semibold text-[#171717] dark:text-[#EDEDED]">Keyboard Shortcuts</h2>
          <p className="text-xs text-[#737373] dark:text-[#A1A1A1] mt-1">Master editing speed with professional hotkeys & shortcuts.</p>
        </div>

        <div className="bg-white dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#2A2A2A] rounded-[10px] p-5 hover:border-[#3B82F6] transition-all cursor-pointer shadow-xs group">
          <div className="w-10 h-10 rounded-[8px] bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
            <BookOpen className="w-5 h-5 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
          </div>
          <h2 className="text-sm font-semibold text-[#171717] dark:text-[#EDEDED]">Documentation & Guides</h2>
          <p className="text-xs text-[#737373] dark:text-[#A1A1A1] mt-1">Learn advanced techniques for color grading, audio mixing, and keyframing.</p>
        </div>
      </div>
    </div>
  );
};
