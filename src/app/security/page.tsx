'use client';

import React from "react";
import styled from "styled-components";

// Consistent styles from your template
const PolicyContainer = styled.div`
  background: #fff;
  padding: 8rem 2rem 4rem 2rem;
  margin-top: 60px;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (prefers-color-scheme: dark) {
    background: #1A202C;
  }
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  line-height: 1.8;
  font-size: 1.1rem;
  color: #4A5568;

  @media (prefers-color-scheme: dark) {
    color: #CBD5E0;
  }

  h1 {
    font-size: 3rem;
    font-weight: 800;
    color: #1A202C;
    margin-bottom: 1rem;

    @media (prefers-color-scheme: dark) {
      color: #EDF2F7;
    }
  }
  
  h2 {
    font-size: 1.75rem;
    font-weight: 700;
    color: #1A202C;
    margin-top: 3rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #E2E8F0;
    padding-bottom: 0.5rem;

    @media (prefers-color-scheme: dark) {
      color: #E2E8F0;
      border-bottom-color: #4A5568;
    }
  }

  p {
    margin-bottom: 1.5rem;
  }
  
  a {
    color: #2B6CB0;
    text-decoration: none;
    font-weight: 600;

    @media (prefers-color-scheme: dark) {
      color: #63B3ED;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SecurityPage: React.FC = () => (
  <PolicyContainer>
    <ContentWrapper>
      <h1>Security</h1>
      <p><strong>Last Updated: October 16, 2025</strong></p>
      <p>
        At Mapr, your security is our top priority. We employ the best industry standards to ensure your data remains private and protected. This page provides an overview of the measures we take to protect your data and how Apple’s security features enhance this protection.
      </p>

      <h2>1. Apple’s Security Framework</h2>
      <p>
        Mapr takes advantage of Apple&apos;s robust security infrastructure, which ensures your data is secure while using the app. Apple&apos;s iCloud and CoreData services are designed with security in mind, using industry-standard encryption protocols to keep your data safe during storage and syncing.
      </p>
      <p>
        iCloud, which is the primary method for syncing data across devices, uses end-to-end encryption to ensure that only you have access to your data. This means that even Apple cannot access your private data stored in iCloud. For a deeper understanding of iCloud security, we encourage you to read Apple&apos;s documentation on iCloud security <a href="https://support.apple.com/en-us/HT202303" target="_blank" rel="noopener noreferrer">here</a>.
      </p>

      <h2>2. CoreData and Local Storage Security</h2>
      <p>
        Mapr uses CoreData for local data storage on your device. This means that all of your project data is stored locally and is not accessible to us. Only you have access to your data stored on your device, and it is securely encrypted by the underlying Apple security infrastructure.
      </p>
      <p>
        In addition to CoreData&apos;s security, Apple uses advanced encryption methods on iOS, macOS, and visionOS to protect your data from unauthorized access. This ensures that even if someone else gains access to your device, they cannot read your data without your passcode, Face ID, or Touch ID.
      </p>

      <h2>3. Secure Syncing with iCloud</h2>
      <p>
        iCloud sync ensures that your data is accessible across all your devices while remaining private. Your data is encrypted in transit using HTTPS, preventing unauthorized access during transfer. Additionally, iCloud uses two-factor authentication (2FA) for extra protection.
      </p>
      <p>
        If you’re concerned about iCloud syncing or security settings, you can manage your iCloud account and set up two-factor authentication by following <a href="https://support.apple.com/en-us/HT204915" target="_blank" rel="noopener noreferrer">Apple&apos;s guide</a>.
      </p>

      <h2>4. Analytics and Data Collection</h2>
      <p>
        Mapr collects only basic, anonymized usage analytics to help us improve the app. This data is not linked to any personally identifiable information and is used solely for improving functionality and performance. You can choose to opt out of analytics tracking through your device settings.
      </p>
      <p>
        We want to reassure you that we do not collect or store any personal information, and the analytics data collected is minimal and purely for app improvement.
      </p>

      <h2>5. Data Retention and Access</h2>
      <p>
        As previously mentioned, all your project data is stored locally on your device and in iCloud. We do not have access to your data. If you delete your data or stop using the app, the data is erased from your device and from iCloud (if synced).
      </p>
      <p>
        If you need help managing your data or ensuring your privacy, you can refer to <a href="https://www.apple.com/privacy/" target="_blank" rel="noopener noreferrer">Apple&apos;s privacy and security resources</a>.
      </p>
    </ContentWrapper>
  </PolicyContainer>
);

export default SecurityPage;