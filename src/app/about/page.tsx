'use client'; 

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from 'next/link'; 

// Styled components for the About page
const AboutContainer = styled.div`
  position: relative;
  padding: 60px 50px;
  background-color: #ececec;
  color: #333;
  font-family: Arial, sans-serif;
  min-height: calc(100vh - 60px); 
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
  text-align: center;

  @media (prefers-color-scheme: dark) {
    background-color: #323232;
    color: #ececec;
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

const AboutImage = styled(Image)`
  width: 200px;
  height: auto; 
  margin-top: 20px;
`;

const TestimonialContainer = styled.div`
  background-color: #fff;
  color: #333;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 700px;
  margin: 20px auto;

  @media (prefers-color-scheme: dark) {
    background-color: #404040;
    color: #ececec;
    box-shadow: 0 2px 4px rgba(255, 255, 255, 0.05);
  }
`;

const Testimonial = styled.p`
  font-size: 18px;
  line-height: 1.6;
  font-style: italic;
  text-align: center;
`;

const Author = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  margin-top: 30px;
  display: inline-block;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
  
  &:hover {
    background-color: #555;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #ececec;
    color: #323232;

    &:hover {
      background-color: #d0d0d0;
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
        {/* FIX: Wrapped the text in curly braces to use quotes and apostrophes correctly */}
        {"\"Clearly made by a tradesman! Convenient, easy to use, and continuously improving. It's free and doesn't get much better.\""}
      </Testimonial>
      <Author>- A Satisfied User</Author>
    </TestimonialContainer>

    <StyledLink href="/">Back to Home</StyledLink>
  </AboutContainer>
);

export default About;