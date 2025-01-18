import React from "react";
import styled from "styled-components";

const PrivacyPolicyContainer = styled.div`
  position: relative;
  padding: 60px 50px;
  background: linear-gradient(135deg, #e3d3bc, #b0a883);
  color: #333;
  font-family: Arial, sans-serif;
  min-height: 100vh;
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
`;

const PolicySection = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 700px;
  margin: 0 auto;
`;

const PolicyTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const PolicyText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
  font-weight: bold;
  margin-top: 30px;
  display: inline-block;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #555;
  }
`;

const PrivacyPolicy = () => (
  <PrivacyPolicyContainer>
    <SectionTitle>Privacy Policy</SectionTitle>
    <SectionDescription>
      At Mapr, we value your privacy. This Privacy Policy explains how we collect, use, and protect your data when you use our app. Please read this policy carefully to understand how we handle your information.
    </SectionDescription>

    <AboutContent>
      <PolicySection>
        <PolicyTitle>1. Information We Collect</PolicyTitle>
        <PolicyText>
          We do not collect any personal data from our users. Mapr is designed to work locally, using CoreData and iCloud, meaning all your data is stored on your own device and synced through iCloud.
        </PolicyText>
        <PolicyText>
          The only data we collect is anonymous analytics data that helps us understand how the app is being used. This data does not identify you personally and is only used for improving the app's functionality and performance.
        </PolicyText>
      </PolicySection>

      <PolicySection>
        <PolicyTitle>2. CoreData and iCloud</PolicyTitle>
        <PolicyText>
          Mapr utilizes CoreData for local data storage and iCloud for syncing across devices. All data stored on your device is private to you and is not accessible to us. We do not have access to the specific details of your data; it is solely managed by iCloud.
        </PolicyText>
        <PolicyText>
          You can manage your iCloud settings through your device settings, where you can choose to disable iCloud syncing or delete your iCloud backups.
        </PolicyText>
      </PolicySection>

      <PolicySection>
        <PolicyTitle>3. Analytics</PolicyTitle>
        <PolicyText>
          Mapr uses basic analytics to understand user behavior, improve app performance, and fix bugs. This data is anonymized and does not contain any personally identifiable information.
        </PolicyText>
        <PolicyText>
          We use this data to improve user experience and optimize the app's functionality. You can opt out of this data collection through your device settings if you prefer.
        </PolicyText>
      </PolicySection>

      <PolicySection>
        <PolicyTitle>4. Data Security</PolicyTitle>
        <PolicyText>
          We take your privacy seriously and implement security measures to protect your data. Since all data is stored locally on your device and synced via iCloud, the security of your data is primarily governed by Apple's security protocols and your personal iCloud settings.
        </PolicyText>
      </PolicySection>

      <PolicySection>
        <PolicyTitle>5. Changes to This Privacy Policy</PolicyTitle>
        <PolicyText>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. Please check this page periodically for any updates.
        </PolicyText>
      </PolicySection>

      <PolicySection>
        <PolicyTitle>6. Contact Us</PolicyTitle>
        <PolicyText>
          If you have any questions or concerns about this Privacy Policy or how we handle your data, please contact us at <StyledLink href="mailto:support@mapr.com">support@mapr.com</StyledLink>.
        </PolicyText>
      </PolicySection>
    </AboutContent>

    <StyledLink href="/">Back to Home</StyledLink>
  </PrivacyPolicyContainer>
);

export default PrivacyPolicy;