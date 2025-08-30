'use client';

import { SignUp } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  // Simple fade-in animation
  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="signUpContainer">
      <div className="signUpWrapper">
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="signUpHeader">
          <h1>Create Your Account</h1>
          <p>Sign up to get started with our service</p>
        </motion.div>

        {/* SignUp card */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="signUpCard">
          <SignUp
            appearance={{
              elements: {
                rootBox: 'signUpRoot',
                cardBox: 'signUpCardInner',
                headerTitle: 'signUpHeaderTitle',
                headerSubtitle: 'signUpHeaderSubtitle',
                formButtonPrimary: 'primaryButton',
                footerActionLink: 'footerLink',
              },
              variables: {
                colorPrimary: '#8b5cf6',
                colorBackground: '#1f2937',
                colorText: '#f9fafb',
                colorInputBackground: '#374151',
              }
            }}
          />
        </motion.div>
      </div>

      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-family: system-ui, sans-serif;
          background: #1e293b;
          min-height: 100vh;
          color: #f8fafc;
        }

        .signUpContainer {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 20px;
        }

        .signUpWrapper {
          width: 100%;
          max-width: 420px;
          text-align: center;
        }

        .signUpHeader {
          margin-bottom: 25px;
        }

        .signUpHeader h1 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 8px;
          background: linear-gradient(to right, #e2e8f0, #94a3b8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .signUpHeader p {
          font-size: 1rem;
          opacity: 0.8;
          color: #cbd5e1;
        }

        .signUpCard {
          background: #1e293b;
          border-radius: 12px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.3);
          overflow: hidden;
          border: 1px solid #334155;
        }

        .primaryButton {
          background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
          border-radius: 8px;
          border: none;
          padding: 12px 24px;
          font-weight: 600;
          color: white;
          transition: all 0.3s ease;
        }

        .primaryButton:hover {
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(139,92,246,0.4);
        }

        @media (max-width: 480px) {
          .signUpHeader h1 { font-size: 1.5rem; }
          .signUpWrapper { max-width: 100%; }
        }
      `}</style>
    </div>
  );
}
