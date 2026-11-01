import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  AtSign,
  Code2,
  Github,
  GraduationCap,
  Instagram,
  Linkedin,
  MapPin,
  Trophy,
  X,
} from 'lucide-react';
import packageJson from '../../package.json';
import { brand } from '../config/brand';
import { useEditorStore } from '../store/editorStore';

const socialLinks = [
  { key: 'github', label: 'GitHub profile', icon: Github },
  { key: 'linkedin', label: 'LinkedIn profile', icon: Linkedin },
  { key: 'instagram', label: 'Instagram profile', icon: Instagram },
  { key: 'leetcode', label: 'LeetCode profile', icon: Code2 },
  { key: 'hackerrank', label: 'HackerRank profile', icon: Trophy },
  { key: 'x', label: 'X profile', icon: AtSign },
  { key: 'email', label: 'Email Pawan', icon: AtSign },
];

export const BrandAboutModal = () => {
  const { isAboutModalOpen, closeAboutModal } = useEditorStore();
  const closeButtonRef = useRef(null);
  const [photoFailed, setPhotoFailed] = useState(false);

  useEffect(() => {
    if (!isAboutModalOpen) return undefined;
    const previousFocus = document.activeElement;
    closeButtonRef.current?.focus();
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeAboutModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (previousFocus instanceof HTMLElement) previousFocus.focus();
    };
  }, [isAboutModalOpen, closeAboutModal]);

  const availableLinks = socialLinks.filter((link) => brand.socials[link.key]);

  return (
    <AnimatePresence>
      {isAboutModalOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/65 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeAboutModal();
          }}
        >
          <motion.section
            role="dialog"
            aria-modal="true"
            aria-labelledby="about-frameriot-title"
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#2A2A3A] bg-[#14141C] text-[#F4F4F8] shadow-2xl"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#FF2D7A] via-[#7C3AED] to-[#22D3EE]" />
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeAboutModal}
              aria-label="Close About FrameRiot"
              title="Close"
              className="absolute right-4 top-4 z-10 rounded-lg p-2 text-[#9A9AB0] transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22D3EE]"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="p-6 sm:p-8">
              <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-start sm:text-left">
                <div className="shrink-0 rounded-full bg-gradient-to-br from-[#FF2D7A] via-[#7C3AED] to-[#22D3EE] p-[3px] shadow-[0_0_30px_rgba(124,58,237,0.3)]">
                  <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-[#1C1C27] text-3xl font-semibold text-white">
                    {!photoFailed ? (
                      <img
                        src={brand.founder.photo}
                        alt={`${brand.founder.name}, founder of FrameRiot`}
                        className="h-full w-full object-cover"
                        onError={() => setPhotoFailed(true)}
                      />
                    ) : (
                      'PS'
                    )}
                  </div>
                </div>

                <div className="min-w-0 pt-1">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#22D3EE]">
                    About {brand.appName} / Meet the Founder
                  </p>
                  <h2 id="about-frameriot-title" className="text-3xl font-bold tracking-tight sm:text-4xl">
                    {brand.founder.name}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-[#FF72A6]">{brand.founder.role}</p>
                  <p className="mt-4 text-sm leading-6 text-[#C2C2D2]">{brand.founder.bio}</p>
                </div>
              </div>

              <div className="mt-6 grid gap-3 rounded-xl border border-[#2A2A3A] bg-[#1C1C27] p-4 text-sm text-[#D7D7E2] sm:grid-cols-2">
                <div className="flex items-start gap-2.5">
                  <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-[#22D3EE]" aria-hidden="true" />
                  <span>{brand.founder.education}<br /><span className="text-[#9A9AB0]">{brand.founder.college}</span></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="h-4 w-4 shrink-0 text-[#FF72A6]" aria-hidden="true" />
                  <span>{brand.founder.location}</span>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-lg font-semibold tracking-wide text-white">{brand.tagline}</p>
                  <p className="mt-1 text-xs text-[#9A9AB0]">FrameRiot v{packageJson.version}</p>
                </div>
                <nav aria-label="Pawan's social and developer profiles" className="flex flex-wrap gap-2">
                  {availableLinks.map(({ key, label, icon: Icon }) => (
                    <a
                      key={key}
                      href={brand.socials[key]}
                      target={key === 'email' ? undefined : '_blank'}
                      rel={key === 'email' ? undefined : 'noreferrer'}
                      aria-label={label}
                      title={label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#38384A] bg-[#1C1C27] text-[#D7D7E2] transition-colors hover:border-[#7C3AED] hover:bg-[#29243A] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22D3EE]"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
