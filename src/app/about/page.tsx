'use client'; // This component uses styled-components, so it needs to be a Client Component

import React from "react";
import styled from "styled-components";
import Image from "next/image"; // Use Next.js Image
import Link from 'next/link'; // Use Next.js Link

// Styled components for the About page
const AboutContainer = styled.div`
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
  /* Color will be inherited from AboutContainer */
`;

const SectionDescription = styled.p`
  font-size: 20px;
  line-height: 1.6;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 40px;
  /* Color will be inherited from AboutContainer */
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  text-align: center;
  width: 100%; /* Ensure it takes up available width for centering children */
`;

const AboutImage = styled(Image)`
  width: 200px;
  height: auto; 
  margin-top: 20px;
  /* No specific dark mode changes needed for the image file itself */
`;

const TestimonialContainer = styled.div`
  background-color: #fff; /* Light mode background */
  color: #333; /* Text color for light mode within this section */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Shadow for light mode */
  width: 80%;
  max-width: 700px;
  margin: 20px auto; /* Added some vertical margin */

  @media (prefers-color-scheme: dark) {
    background-color: #404040; /* Dark mode background for section */
    color: #ececec; /* Text color for dark mode within this section */
    box-shadow: 0 2px 4px rgba(255, 255, 255, 0.05); /* Subtle light shadow for dark mode */
  }
`;

const Testimonial = styled.p`
  font-size: 18px;
  line-height: 1.6;
  font-style: italic;
  text-align: center;
  /* Color will be inherited from TestimonialContainer based on mode */
`;

const Author = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
  /* Color will be inherited from TestimonialContainer based on mode */
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  /* color: inherit; */ /* Overridden by specific color below for light mode */
  font-weight: bold;
  margin-top: 30px;
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

const About: React.FC = () => (
  <AboutContainer>
    <SectionTitle>About Mapr</SectionTitle>
    <SectionDescription>
      Mapr is an innovative project management tool crafted with tradesmen in mind, offering a unique, map-based interface for iOS, macOS & visionOS users. With Mapr, you can effortlessly manage your projects, track progress, and visualize your work in ways never before possible.
    </SectionDescription>

    <AboutContent>
      <SectionDescription>
        Mapr is more than just a project management tool; it’s a comprehensive solution designed to streamline workflows for tradesmen. From geographical project visualization to versatile calculators and business management features, Mapr has everything needed to efficiently manage multiple projects, locations, and tasks.
      </SectionDescription>

      <AboutImage src="/images/logo.png" alt="Mapr Logo" width={200} height={200} /> 

      <SectionDescription>
        With features like time tracking, materials management, customizable checklists, and an integrated calendar, Mapr ensures that no detail is overlooked. Its intuitive design makes it easy for tradesmen to use, whether they’re on-site or in the office.
      </SectionDescription>
    </AboutContent>

    <TestimonialContainer>
      <Testimonial>
        "Clearly made by a tradesman! Convenient, easy to use, and continuously improving. It's free and doesn't get much better."
      </Testimonial>
      <Author>- A Satisfied User</Author>
    </TestimonialContainer>

    <StyledLink href="/">Back to Home</StyledLink>
  </AboutContainer>
);

export default About;