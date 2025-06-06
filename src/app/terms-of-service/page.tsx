'use client';

import React from "react";
import styled from "styled-components";

const TermsPageContainer = styled.div`
  position: relative;
  padding: 60px 50px;
  /* background: linear-gradient(135deg, #e3d3bc, #b0a883); */ /* Original background removed */
  background-color: #ececec; /* Light mode background */
  color: #333; /* Default text color for light mode */
  font-family: Arial, sans-serif;
  min-height: calc(100vh - 60px); 
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
  text-align: center;

  @media (prefers-color-scheme: dark) {
    background-color: #323232; /* Dark mode background */
    color: #ececec; /* Default text color for dark mode */
  }
`;

const SectionTitle = styled.h1`
  font-size: 60px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  /* Color will be inherited from TermsPageContainer */
`;

const SectionDescription = styled.p`
  font-size: 20px;
  line-height: 1.6;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 40px;
  /* Color will be inherited from TermsPageContainer */
`;

const TermsSection = styled.div`
  background-color: #fff; /* Light mode background */
  color: #333; /* Text color for light mode within this section */
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Shadow for light mode */
  width: 80%;
  max-width: 800px;
  margin: 0 auto 40px;

  @media (prefers-color-scheme: dark) {
    background-color: #404040; /* Dark mode background for section */
    color: #ececec; /* Text color for dark mode within this section */
    box-shadow: 0 2px 4px rgba(255, 255, 255, 0.05); /* Subtle light shadow for dark mode */
  }
`;

const SectionTitleText = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
  /* Color will be inherited from TermsSection based on mode */
`;

const SectionText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
  /* Color will be inherited from TermsSection based on mode */
  
  ul {
    list-style-position: inside;
    text-align: left; /* Align list items to the left for readability */
    padding-left: 20px; /* Add some padding for nested lists */
  }

  li {
    margin-bottom: 8px;
  }
`;

const ExternalLink = styled.a`
  text-decoration: none;
  font-weight: bold;
  margin-top: 20px;
  display: inline-block;
  padding: 10px 20px;
  background-color: #333; /* Default for light mode */
  color: #fff; /* Default for light mode */
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
  
  &:hover {
    background-color: #555; /* Default for light mode */
  }

  @media (prefers-color-scheme: dark) {
    background-color: #ececec; /* Light button for dark mode */
    color: #323232; /* Dark text for dark mode */

    &:hover {
      background-color: #d0d0d0; /* Slightly darker hover for dark mode's light button */
    }
  }
`;

const TermsOfService: React.FC = () => (
  <TermsPageContainer>
    <SectionTitle>Terms of Service</SectionTitle>
    <SectionDescription>
      By using the Mapr app, you agree to the following terms and conditions. These terms are designed to ensure a safe and enjoyable experience for all users.
    </SectionDescription>

    <TermsSection>
      <SectionTitleText>1. Acceptance of Terms</SectionTitleText>
      <SectionText>
        By accessing or using the Mapr app, you agree to comply with and be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, you must not use the app.
      </SectionText>
    </TermsSection>

    <TermsSection>
      <SectionTitleText>2. Changes to Terms</SectionTitleText>
      <SectionText>
        We reserve the right to modify these Terms of Service at any time. Any changes will be posted in this section, and you are encouraged to review these terms periodically. Your continued use of the app after any changes constitutes your acceptance of the updated terms.
      </SectionText>
    </TermsSection>

    <TermsSection>
      <SectionTitleText>3. User Responsibilities</SectionTitleText>
      <SectionText>
        You agree to use Mapr for lawful purposes only. You must not:
        <ul>
          <li>Violate any applicable laws or regulations.</li>
          <li>Infringe upon any intellectual property rights.</li>
          <li>Engage in any activity that could damage or disrupt the app or its services.</li>
        </ul>
        Additionally, you are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
      </SectionText>
    </TermsSection>

    <TermsSection>
      <SectionTitleText>4. Privacy and Data Usage</SectionTitleText>
      <SectionText>
        Your privacy is important to us. For more information on how we collect, store, and use your data, please refer to our Privacy Policy. By using the app, you consent to the collection and use of data as described in the Privacy Policy.
      </SectionText>
    </TermsSection>

    <TermsSection>
      <SectionTitleText>5. Intellectual Property</SectionTitleText>
      <SectionText>
        The content, design, and functionality of the Mapr app, including logos, trademarks, software, and other proprietary materials, are protected by intellectual property laws. You are granted a limited, non-exclusive, non-transferable license to use the app for personal or business purposes as outlined in these terms.
      </SectionText>
    </TermsSection>

    <TermsSection>
      <SectionTitleText>6. Limitation of Liability</SectionTitleText>
      <SectionText>
        To the fullest extent permitted by law, Mapr, its affiliates, employees, or partners are not liable for any indirect, incidental, special, or consequential damages arising from your use of the app, including but not limited to data loss, service interruptions, or security breaches.
      </SectionText>
    </TermsSection>

    <TermsSection>
      <SectionTitleText>7. Termination</SectionTitleText>
      <SectionText>
        We may suspend or terminate your access to the Mapr app at any time, without notice, for any reason, including if you violate any terms of service or engage in any behavior that we deem harmful to the app or other users.
      </SectionText>
    </TermsSection>

    <TermsSection>
      <SectionTitleText>8. Disclaimer of Warranties</SectionTitleText>
      <SectionText>
        The Mapr app is provided “as is” and “as available,” without any warranties of any kind, either express or implied. We do not guarantee that the app will be free from errors or disruptions, and we are not responsible for any damage caused by the app’s use.
      </SectionText>
    </TermsSection>

    <TermsSection>
      <SectionTitleText>9. Governing Law</SectionTitleText>
      <SectionText>
        These Terms of Service will be governed by and_construed in accordance with the laws of the jurisdiction in which you reside. Any legal actions related to these terms must be filed in the appropriate courts within that jurisdiction.
      </SectionText>
    </TermsSection>

    <ExternalLink href="/">Back to Home</ExternalLink>
  </TermsPageContainer>
);

export default TermsOfService;