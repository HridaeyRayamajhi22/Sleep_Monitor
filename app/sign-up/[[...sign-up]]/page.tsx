'use client';

import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="signUpContainer">
      <div className="signUpWrapper">
        <div className="signUpHeader">
          <h1>Create Your Account</h1>
          <p>Sign up to get started with our service</p>
        </div>
        <div className="signUpCard">
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
        </div>
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
        }

        /* Container styles */
        .signUpContainer {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 20px;
        }

        .signUpWrapper {
          width: 100%;
          max-width: 450px;
          text-align: center;
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
        }

        /* Clerk component customization */
        .signUpRoot {
          width: 100%;
        }

        .signUpCardInner {
          box-shadow: none;
          border-radius: 16px;
          background: #1e293b;
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
        }

        .socialButton:hover {
          transform: translateY(-2px);
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
        }

        .primaryButton:hover {
          transform: translateY(-2px);
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
          transition: border-color 0.3s ease;
          background: #374151;
          color: #f9fafb;
        }

        .cl-formFieldInput:focus {
          border-color: #8b5cf6;
          box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.2);
          outline: none;
        }

        .cl-formFieldLabel {
          color: #cbd5e1;
        }

        /* OTP input styling */
        .cl-otpCodeFieldInput {
          background: #374151;
          color: #f9fafb;
          border: 1px solid #334155;
        }

        /* Password strength meter */
        .cl-passwordStrength {
          background: #374151;
          border-radius: 4px;
        }

        .cl-passwordStrengthBar {
          background: linear-gradient(to right, #8b5cf6, #7c3aed);
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
        }
      `}</style>
    </div>
  );
}