'use client';

import { SignUp } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Simple fade-in animation
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  if (!mounted) {
    return (
      <div className="signUpContainer pt-24">
        <div className="loadingSpinner"></div>
      </div>
    );
  }

  return (
    <div className="signUpContainer pt-24">
      <div className="signUpWrapper">
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="signUpHeader mb-8 mt-12">
          <h1 className="text-4xl font-bold text-white mb-2">Create Your Account</h1>
          <p className="text-gray-300">Sign up to get started with our service</p>
        </motion.div>

        {/* SignUp Card */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <SignUp
            path="/sign-up"
            routing="path"
            appearance={{
              elements: {
                rootBox: 'signUpRoot',
                cardBox: 'signUpCardInner',
                headerTitle: 'signUpHeaderTitle',
                headerSubtitle: 'signUpHeaderSubtitle',
                socialButtonsBlockButton: 'socialButton',
                formButtonPrimary: 'primaryButton',
                footerActionLink: 'footerLink',
              },
              variables: {
                colorPrimary: '#8b5cf6',
                colorBackground: '#1f2937',
                colorText: '#f9fafb',
                colorInputText: '#f9fafb',
                colorInputBackground: '#374151',
              }
            }}
          />

        </motion.div>
      </div>

      {/* Styles */}
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-family: system-ui, sans-serif;
          background: linear-gradient(135deg, #0f172a, #1e293b);
          min-height: 100vh;
          color: #f8fafc;
        }

        .signUpContainer {
          display: flex;
          align-items: start;
          justify-content: center;
          min-height: calc(100vh - 64px);
          padding: 2rem 1rem;
          position: relative;
        }

        .signUpWrapper {
          width: 100%;
          max-width: 450px;
          text-align: center;
          z-index: 2;
        }

        .signUpHeader h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #ffffff;
        }

        .signUpHeader p {
          font-size: 1.1rem;
          color: #cbd5e1;
        }

        .signUpCardInner {
          border-radius: 16px;
          background: #1e2937;
          box-shadow: 0 15px 35px rgba(0,0,0,0.5);
        }

        .primaryButton {
          background: linear-gradient(135deg, #8b5cf6, #7c3aed);
          border-radius: 8px;
          border: none;
          padding: 12px 24px;
          font-weight: 600;
          color: white;
          transition: all 0.3s ease;
        }

        .primaryButton:hover {
          transform: scale(1.02);
        }

        .socialButton {
          border-radius: 8px;
          border: 1px solid #334155;
          background: #1e2937;
          color: #e2e8f0;
          margin-bottom: 10px;
          transition: all 0.3s ease;
        }

        .socialButton:hover {
          background: #334155;
          transform: translateY(-2px) scale(1.02);
        }

        .footerLink {
          color: #8b5cf6;
          font-weight: 600;
        }

        .footerLink:hover {
          color: #a78bfa;
        }

        .loadingSpinner {
          width: 40px;
          height: 40px;
          border: 3px solid rgba(139, 92, 246, 0.3);
          border-radius: 50%;
          border-top-color: #8b5cf6;
          animation: spin 1s linear infinite;
          margin: 5rem auto;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @media (max-width: 480px) {
          .signUpWrapper {
            max-width: 100%;
          }

          .signUpHeader h1 {
            font-size: 1.75rem;
          }

          .signUpHeader p {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
