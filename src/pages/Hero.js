import React from 'react';
import styled from 'styled-components';

import mockupImage1 from './images/image1.png';
import mockupImage2 from './images/image2.png';
import mockupImage3 from './images/image3.png';
import mockupImage4 from './images/image4.png';
import mockupImage5 from './images/image5.png';
import mockupImage6 from './images/image6.png';

import appLogo from './images/logo.png';
import MovingCircles from './components/MovingCircles';

const HeroContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 50px;
  background: linear-gradient(135deg, #e3d3bc, #b0a883);
  height: 200vh;
  color: #333;
  font-family: Arial, sans-serif;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 20px;
    height: auto;
  }
`;

const AppName = styled.div`
  position: fixed;
  top: 100px;
  left: 50px;
  font-size: 60px;
  font-weight: bold;
  color: #333;
  background: transparent;
  z-index: 10000;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    position: relative; /* Make it scroll with the content on mobile */
    font-size: 40px;
    top: 0;
    left: 20px;
  }
`;

const Logo = styled.img`
  width: 40px;
  height: auto;
  margin-right: 10px;
`;

const TextContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50px;
  transform: translateY(-50%);
  max-width: 48vh;
  z-index: 2;
  padding-right: 20px;

  @media (max-width: 768px) {
    position: relative; /* Make it scroll with the content on mobile */
    left: 20px;
    max-width: 100%;
    top: 0; /* Let it be at the top of the page */
    transform: none;
  }
`;

const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const Description = styled.p`
  font-size: 20px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
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
  }
`;

const MockupImage = styled.img`
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
  background-color: #333;
  color: white;
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

  &:hover {
    background-color: #555;
  }

  @media (max-width: 768px) {
    bottom: 20px;
    left: 20px;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 20px;
  }
`;

const Hero = () => (
  <HeroContainer>
    <MovingCircles />
    <AppName>
      <Logo src={appLogo} alt="App Logo" />
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
    <MockupContainer>
      <MockupImage src={mockupImage1} alt="Mockup 1" />
      <MockupImage src={mockupImage2} alt="Mockup 2" />
      <MockupImage src={mockupImage3} alt="Mockup 3" />
      <MockupImage src={mockupImage4} alt="Mockup 4" />
      <MockupImage src={mockupImage5} alt="Mockup 5" />
      <MockupImage src={mockupImage6} alt="Mockup 6" />
    </MockupContainer>
    <DownloadButton href="https://apps.apple.com/no/app/mapr/id6450910273" target="_blank">
      Download on the App Store
    </DownloadButton>
  </HeroContainer>
);

export default Hero;