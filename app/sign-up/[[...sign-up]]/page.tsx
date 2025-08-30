'use client';

import { SignUp } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
  };

  if (!mounted) {
    return (
      <div className="signUpContainer">
        <div className="signUpWrapper">
          <div className="signUpCard">
            <div className="loadingSpinner"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="signUpContainer">
      <div className="signUpWrapper">
        {/* Header with animation */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="signUpHeader"
        >
          <motion.h1
            variants={fadeInUp}
          >
            Create Your Account
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
          >
            Sign up to get started with our service
          </motion.p>
        </motion.div>

        {/* SignUp card with animation */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={scaleIn}
          className="signUpCard"
        >
          <SignUp
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

      {/* Background animation elements */}
      <div className="backgroundAnimation">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="floatingOrb"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            style={{
              left: `${20 + i * 15}%`,
              background: i % 2 === 0 
                ? 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)' 
                : 'radial-gradient(circle, rgba(124, 58, 237, 0.2) 0%, transparent 70%)'
            }}
          />
        ))}
      </div>

      <style jsx global>{`
        /* Global styles */
        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          min-height: 100vh;
          color: #f8fafc;
          overflow-x: hidden;
        }

        /* Container styles */
        .signUpContainer {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 20px;
          position: relative;
        }

        .signUpWrapper {
          width: 100%;
          max-width: 450px;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        /* Header styles */
        .signUpHeader {
          margin-bottom: 30px;
        }

        .signUpHeader h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 10px;
          background: linear-gradient(to right, #e2e8f0, #94a3b8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .signUpHeader p {
          font-size: 1.1rem;
          opacity: 0.8;
          color: #cbd5e1;
        }

        /* Card styles */
        .signUpCard {
          background: #1e293b;
          border-radius: 16px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
          overflow: hidden;
          padding: 0;
          border: 1px solid #334155;
          transform-origin: center;
        }

        /* Clerk component customization */
        .signUpRoot {
          width: 100%;
        }

        .signUpCardInner {
          box-shadow: none;
          border-radius: 16px;
          background: #1e293b;
          animation: cardGlow 3s ease-in-out infinite alternate;
        }

        .signUpHeaderTitle {
          font-size: 1.5rem;
          font-weight: 700;
          color: #e2e8f0;
        }

        .signUpHeaderSubtitle {
          color: #94a3b8;
          margin-bottom: 1.5rem;
        }

        .socialButton {
          border-radius: 8px;
          border: 1px solid #334155;
          background: #1e293b;
          color: #e2e8f0;
          transition: all 0.3s ease;
          margin-bottom: 10px;
          transform-origin: center;
        }

        .socialButton:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          background: #334155;
        }

        .primaryButton {
          background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
          border-radius: 8px;
          border: none;
          padding: 12px 24px;
          font-weight: 600;
          transition: all 0.3s ease;
          color: white;
          transform-origin: center;
        }

        .primaryButton:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 4px 12px rgba(139, 92, 246, 0.4);
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
        }

        .footerLink {
          color: #8b5cf6;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .footerLink:hover {
          color: #a78bfa;
        }

        /* Divider styling */
        .cl-dividerLine {
          background: #334155;
        }

        .cl-dividerText {
          color: #94a3b8;
          font-size: 0.9rem;
        }

        /* Form field styling */
        .cl-formFieldInput {
          border-radius: 8px;
          border: 1px solid #334155;
          padding: 12px 16px;
          transition: all 0.3s ease;
          background: #374151;
          color: #f9fafb;
          transform-origin: center;
        }

        .cl-formFieldInput:focus {
          border-color: #8b5cf6;
          box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.2);
          outline: none;
          transform: scale(1.02);
        }

        .cl-formFieldLabel {
          color: #cbd5e1;
        }

        /* OTP input styling */
        .cl-otpCodeFieldInput {
          background: #374151;
          color: #f9fafb;
          border: 1px solid #334155;
          transition: all 0.3s ease;
        }

        .cl-otpCodeFieldInput:focus {
          border-color: #8b5cf6;
          box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.2);
          transform: scale(1.05);
        }

        /* Password strength meter */
        .cl-passwordStrength {
          background: #374151;
          border-radius: 4px;
          overflow: hidden;
        }

        .cl-passwordStrengthBar {
          background: linear-gradient(to right, #8b5cf6, #7c3aed);
          height: 4px;
          transition: width 0.5s ease;
        }

        /* Loading spinner */
        .loadingSpinner {
          width: 40px;
          height: 40px;
          border: 3px solid rgba(139, 92, 246, 0.3);
          border-radius: 50%;
          border-top-color: #8b5cf6;
          animation: spin 1s ease-in-out infinite;
          margin: 2rem auto;
        }

        /* Background animation */
        .backgroundAnimation {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }

        .floatingOrb {
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          filter: blur(40px);
        }

        /* Keyframes */
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @keyframes cardGlow {
          0% {
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
          }
          100% {
            box-shadow: 0 15px 35px rgba(139, 92, 246, 0.2);
          }
        }

        /* Password strength animation */
        @keyframes strengthPulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        .cl-passwordStrengthBar[style*="width: 100%"] {
          animation: strengthPulse 2s infinite;
        }

        /* Responsive design */
        @media (max-width: 768px) {
          .signUpHeader h1 {
            font-size: 2rem;
          }
          
          .signUpHeader p {
            font-size: 1rem;
          }
          
          .signUpCardInner {
            padding: 1.5rem;
          }
          
          .signUpWrapper {
            max-width: 400px;
          }

          .floatingOrb {
            width: 150px;
            height: 150px;
          }
        }

        @media (max-width: 480px) {
          .signUpContainer {
            padding: 10px;
          }
          
          .signUpHeader h1 {
            font-size: 1.75rem;
          }
          
          .signUpCardInner {
            padding: 1.25rem;
          }
          
          .signUpWrapper {
            max-width: 100%;
          }

          .floatingOrb {
            width: 120px;
            height: 120px;
          }
        }
      `}</style>
    </div>
  );
}