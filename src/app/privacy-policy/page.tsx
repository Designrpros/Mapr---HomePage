'use client';

import React from "react";
import styled from "styled-components";
import Link from 'next/link';

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

const PrivacyPolicyPage: React.FC = () => (
  <PolicyContainer>
    <ContentWrapper>
      <h1>Privacy Policy</h1>
      <p><strong>Last Updated: October 16, 2025</strong></p>
      <p>
        At Mapr, we value your privacy. This Privacy Policy explains how we collect, use, and protect your data when you use our app. Please read this policy carefully to understand how we handle your information.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        We do not collect any personal data from our users. Mapr is designed to work locally, using CoreData and iCloud, meaning all your data is stored on your own device and synced through your personal iCloud account.
      </p>
      <p>
        The only data we collect is anonymous analytics data that helps us understand how the app is being used. This data does not identify you personally and is only used for improving the app&apos;s functionality and performance.
      </p>

      <h2>2. CoreData and iCloud</h2>
      <p>
        Mapr utilizes CoreData for local data storage and iCloud for syncing across devices. All data stored on your device is private to you and is not accessible to us. We do not have access to the specific details of your data; it is solely managed by Apple&apos;s iCloud service.
      </p>
      <p>
        You can manage your iCloud settings through your device, where you can choose to disable iCloud syncing or manage your iCloud backups at any time.
      </p>

      <h2>3. Analytics</h2>
      <p>
        Mapr uses basic, anonymized analytics to understand user behavior, improve app performance, and fix bugs. This data does not contain any personally identifiable information.
      </p>
      <p>
        We use this data to improve the user experience and optimize the app&apos;s functionality. You can opt out of this data collection through your device settings if you prefer.
      </p>

      <h2>4. Data Security</h2>
      <p>
        We take your privacy seriously. Since all data is stored locally on your device and synced via iCloud, the security of your data is primarily governed by Apple&apos;s robust security protocols and your personal settings. For more details on how we leverage these protections, please see our <Link href="/security">Security page</Link>.
      </p>

      <h2>5. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. Please check this page periodically for any updates.
      </p>
    </ContentWrapper>
  </PolicyContainer>
);

export default PrivacyPolicyPage;