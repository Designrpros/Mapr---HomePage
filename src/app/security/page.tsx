'use client';

import React from "react";
import styled from "styled-components";

const SecurityPageContainer = styled.div`
  position: relative;
  padding: 60px 50px;
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
`;

const SectionDescription = styled.p`
  font-size: 20px;
  line-height: 1.6;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 40px;
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  text-align: center;
  width: 100%;
`;

const SecuritySection = styled.div`
  background-color: #fff; /* Light mode background */
  color: #333; /* Text color for light mode within this section */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Shadow for light mode */
  width: 80%;
  max-width: 700px;
  margin: 0 auto;

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
`;

const SectionText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
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
    background-color: #555;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #ececec; /* Light button for dark mode */
    color: #323232; /* Dark text for dark mode */

    &:hover {
      background-color: #d0d0d0;
    }
  }
`;

const Security: React.FC = () => (
  <SecurityPageContainer>
    <SectionTitle>Security</SectionTitle>
    <SectionDescription>
      At Mapr, your security is our top priority. We employ the best industry standards to ensure your data remains private and protected. This page provides an overview of the measures we take to protect your data and how Apple’s security features enhance this protection.
    </SectionDescription>

    <AboutContent>
      <SecuritySection>
        <SectionTitleText>1. Apple’s Security Framework</SectionTitleText>
        <SectionText>
          {/* FIX: Replaced ' with &apos; */}
          Mapr takes advantage of Apple&apos;s robust security infrastructure, which ensures your data is secure while using the app. Apple&apos;s iCloud and CoreData services are designed with security in mind, using industry-standard encryption protocols to keep your data safe during storage and syncing.
        </SectionText>
        <SectionText>
          {/* FIX: Replaced ' with &apos; */}
          iCloud, which is the primary method for syncing data across devices, uses end-to-end encryption to ensure that only you have access to your data. This means that even Apple cannot access your private data stored in iCloud. For a deeper understanding of iCloud security, we encourage you to read Apple&apos;s documentation on iCloud security at:
        </SectionText>
        <ExternalLink href="https://support.apple.com/en-us/HT202303" target="_blank">
          iCloud Security Overview
        </ExternalLink>
      </SecuritySection>

      <SecuritySection>
        <SectionTitleText>2. CoreData and Local Storage Security</SectionTitleText>
        <SectionText>
          Mapr uses CoreData for local data storage on your device. This means that all of your project data is stored locally and is not accessible to us. Only you have access to your data stored on your device, and it is securely encrypted by the underlying Apple security infrastructure.
        </SectionText>
        <SectionText>
          {/* FIX: Replaced ' with &apos; */}
          In addition to CoreData&apos;s security, Apple uses advanced encryption methods on iOS, macOS, and visionOS to protect your data from unauthorized access. This ensures that even if someone else gains access to your device, they cannot read your data without your passcode, Face ID, or Touch ID.
        </SectionText>
      </SecuritySection>

      <SecuritySection>
        <SectionTitleText>3. Secure Syncing with iCloud</SectionTitleText>
        <SectionText>
          iCloud sync ensures that your data is accessible across all your devices while remaining private. Your data is encrypted in transit using HTTPS, preventing unauthorized access during transfer. Additionally, iCloud uses two-factor authentication (2FA) for extra protection.
        </SectionText>
        <SectionText>
          {/* FIX: Replaced ' with &apos; */}
          If you’re concerned about iCloud syncing or security settings, you can manage your iCloud account and set up two-factor authentication by following Apple&apos;s guide here:
        </SectionText>
        <ExternalLink href="https://support.apple.com/en-us/HT204915" target="_blank">
          Apple Two-Factor Authentication
        </ExternalLink>
      </SecuritySection>

      <SecuritySection>
        <SectionTitleText>4. Analytics and Data Collection</SectionTitleText>
        <SectionText>
          Mapr collects only basic, anonymized usage analytics to help us improve the app. This data is not linked to any personally identifiable information and is used solely for improving functionality and performance. You can choose to opt out of analytics tracking through your device settings.
        </SectionText>
        <SectionText>
          We want to reassure you that we do not collect or store any personal information, and the analytics data collected is minimal and purely for app improvement.
        </SectionText>
      </SecuritySection>

      <SecuritySection>
        <SectionTitleText>5. Data Retention and Access</SectionTitleText>
        <SectionText>
          As previously mentioned, all your project data is stored locally on your device and in iCloud. We do not have access to your data. If you delete your data or stop using the app, the data is erased from your device and from iCloud (if synced).
        </SectionText>
        <SectionText>
          {/* FIX: Replaced ' with &apos; */}
          If you need help managing your data or ensuring your privacy, you can refer to Apple&apos;s privacy and security resources:
        </SectionText>
        <ExternalLink href="https://www.apple.com/privacy/" target="_blank">
          Apple Privacy and Security Resources
        </ExternalLink>
      </SecuritySection>
    </AboutContent>

    <ExternalLink href="/">Back to Home</ExternalLink>
  </SecurityPageContainer>
);

export default Security;