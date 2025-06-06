'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

// Uncomment the line below if you have and want to use your MovingCircles component
// import MovingCircles from '@/components/MovingCircles';

const HeroContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 50px;
  /* background: linear-gradient(135deg, #e3d3bc, #b0a883); */ /* Original background removed */
  background-color: #ececec; /* Light mode background */
  color: #333; /* Default text color for light mode */
  height: 200vh; /* Keep this if you have a lot of content/scroll in Hero */
  font-family: Arial, sans-serif;
  overflow-x: hidden;

  @media (prefers-color-scheme: dark) {
    background-color: #323232; /* Dark mode background */
    color: #ececec; /* Default text color for dark mode */
  }

  @media (max-width: 768px) {
    padding: 20px;
    height: auto; /* Allow height to adjust on mobile */
  }
`;

const AppName = styled.div`
  position: fixed;
  top: 130px; /* Moved down from 100px */
  left: 50px;
  font-size: 60px;
  font-weight: bold;
  color: #333; /* Default color */
  background: transparent;
  z-index: 10000;
  display: flex;
  align-items: center;

  @media (prefers-color-scheme: dark) {
    color: #ececec; /* Text color for dark mode */
  }

  @media (max-width: 768px) {
    position: relative; /* Make it scroll with the content on mobile */
    font-size: 40px;
    top: 0; /* Reset top for relative positioning */
    left: 20px;
    margin-top: 70px; /* Increased from 20px to 70px to move content down from toolbar */
  }
`;

const Logo = styled(Image)`
  width: 40px;
  height: auto;
  margin-right: 10px;
`;

const TextContent = styled.div`
  position: fixed;
  top: 55%; /* Moved down from 50% */
  left: 50px;
  transform: translateY(-50%);
  max-width: 48vh;
  z-index: 2;
  padding-right: 20px;
  /* Color will be inherited from HeroContainer */

  @media (max-width: 768px) {
    position: relative; /* Make it scroll with the content on mobile */
    left: 20px;
    max-width: 100%;
    top: 0; /* Reset top for relative positioning */
    transform: none;
    margin-top: 20px; /* Added margin to move it down (this spaces it from AppName) */
  }
`;

const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
  /* Color will be inherited */

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const Description = styled.p`
  font-size: 20px;
  line-height: 1.6;
  /* Color will be inherited */

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const PlatformOptionsContainer = styled.div`
  position: fixed;
  bottom: 120px;
  left: 50px;
  z-index: 10000;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  background-color: transparent;
  padding: 0.5rem 0;

  @media (max-width: 768px) {
    position: relative;
    bottom: auto;
    left: 20px;
    margin-top: 30px;
    margin-right: 20px;
    justify-content: flex-start;
  }
`;

interface PlatformOptionProps {
  active: boolean;
}

const PlatformOption = styled.button<PlatformOptionProps>`
  background-color: transparent;
  border: none;
  padding: 0.5rem 0.8rem;
  font-size: 1rem;
  cursor: pointer;
  color: #333; /* Default for light mode */
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;
  border-bottom: ${({ active }) => (active ? '2px solid #333' : '2px solid transparent')}; /* Default for light mode */
  transition: border-bottom 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    color: #000; /* Darker hover for light mode */
    border-bottom: 2px solid #000; /* Darker hover for light mode */
  }

  img {
    width: 20px;
    height: 20px;
    object-fit: contain;
    /* Consider filter: invert(1) for dark mode if icons are single color and need inversion */
  }

  @media (prefers-color-scheme: dark) {
    color: #ececec; /* Text color for dark mode */
    border-bottom: ${({ active }) => (active ? '2px solid #ececec' : '2px solid transparent')}; /* Border for dark mode */

    &:hover {
      color: #fff; /* Lighter hover for dark mode */
      border-bottom: 2px solid #fff; /* Lighter hover for dark mode */
    }
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.3rem 0.6rem;
    img {
      width: 18px;
      height: 18px;
    }
  }
`;

const MockupContainer = styled.div`
  position: relative;
  top: 0;
  margin-left: 60%;
  width: 35%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    margin-top: 70px; /* Increased from 40px to 70px for more space above screenshots on mobile */
  }
`;

const MockupImage = styled(Image)`
  width: 100%;
  height: auto;
  max-width: 400px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const DownloadButton = styled.a`
  position: fixed;
  bottom: 50px;
  left: 50px;
  background-color: #333; /* Default for light mode */
  color: white; /* Default for light mode */
  padding: 12px 25px;
  border-radius: 25px;
  font-size: 18px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-weight: bold;
  z-index: 10000;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

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

  @media (max-width: 768px) {
    bottom: 20px;
    left: 20px;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 20px;
  }
`;

const Hero: React.FC = () => {
  const [activePlatform, setActivePlatform] = useState<string>('iOS');

  const platformMockups: { [key: string]: string[] } = {
    'iOS': [
      '/images/ios_mockup1.png',
      '/images/ios_mockup2.png',
      '/images/ios_mockup3.png',
      '/images/ios_mockup4.png',
      '/images/ios_mockup5.png',
      '/images/ios_mockup6.png',
    ],
    'iPad': [
      '/images/ipad_mockup1.png',
      '/images/ipad_mockup2.png',
      '/images/ipad_mockup3.png',
      '/images/ipad_mockup4.png',
      '/images/ipad_mockup5.png',
      '/images/ipad_mockup6.png',
    ],
    'macOS': [
      '/images/macos_mockup1.png',
      '/images/macos_mockup2.png',
      '/images/macos_mockup3.png',
      '/images/macos_mockup4.png',
      '/images/macos_mockup5.png',
      '/images/macos_mockup6.png',
    ],
    'Vision Pro': [
      '/images/vision_pro_mockup1.png',
      '/images/vision_pro_mockup2.png',
      '/images/vision_pro_mockup3.png',
      '/images/vision_pro_mockup4.png',
      '/images/vision_pro_mockup5.png',
      '/images/vision_pro_mockup6.png',
    ],
  };

  const currentMockups = platformMockups[activePlatform] || [];

  return (
    <HeroContainer>
      {/* <MovingCircles /> */}
      <AppName>
        <Logo src="/images/logo.png" alt="App Logo" width={40} height={40} />
        Mapr
      </AppName>
      <TextContent>
        <Title>
          Calculators, Invoice & Business Management for Tradesmen
        </Title>
        <Description>
          Simplify your workflow with Mapr. The ultimate toolkit designed to save
          time and improve efficiency.
        </Description>
      </TextContent>

      <PlatformOptionsContainer>
        <PlatformOption active={activePlatform === 'iOS'} onClick={() => setActivePlatform('iOS')}>
          iOS
        </PlatformOption>
        <PlatformOption active={activePlatform === 'iPad'} onClick={() => setActivePlatform('iPad')}>
          iPad
        </PlatformOption>
        <PlatformOption active={activePlatform === 'macOS'} onClick={() => setActivePlatform('macOS')}>
          macOS
        </PlatformOption>
        <PlatformOption active={activePlatform === 'Vision Pro'} onClick={() => setActivePlatform('Vision Pro')}>
          Vision Pro
        </PlatformOption>
      </PlatformOptionsContainer>

      <MockupContainer>
        {currentMockups.map((mockupPath, index) => (
          <MockupImage
            key={index}
            src={mockupPath}
            alt={`Mockup ${index + 1} for ${activePlatform}`}
            width={400}
            height={700}
          />
        ))}
      </MockupContainer>

      <DownloadButton href="https://apps.apple.com/no/app/mapr/id6450910273" target="_blank">
        Download on the App Store
      </DownloadButton>
    </HeroContainer>
  );
};

export default Hero;