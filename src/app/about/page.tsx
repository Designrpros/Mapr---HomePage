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

  p {
    margin-bottom: 1.5rem;
  }
`;

const Testimonial = styled.blockquote`
  margin: 3rem 0;
  padding: 1.5rem;
  background-color: #F7FAFC;
  border-left: 5px solid #E2E8F0;
  border-radius: 0 8px 8px 0;

  p {
    font-style: italic;
    font-size: 1.2rem;
    color: #2D3748;
    margin: 0;
  }

  footer {
    margin-top: 1rem;
    font-weight: 600;
    color: #718096;
    text-align: right;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #2D3748;
    border-left-color: #4A5568;

    p {
      color: #EDF2F7;
    }

    footer {
      color: #A0AEC0;
    }
  }
`;

const AboutPage: React.FC = () => (
  <PolicyContainer>
    <ContentWrapper>
      <h1>About Mapr</h1>
      <p>
        Mapr is an innovative project management tool crafted with tradesmen in mind, offering a unique, map-based interface for iOS, macOS & visionOS users. With Mapr, you can effortlessly manage your projects, track progress, and visualize your work in ways never before possible.
      </p>

      <p>
        Mapr is more than just a project management tool; it’s a comprehensive solution designed to streamline workflows for tradesmen. From geographical project visualization to versatile calculators and business management features, Mapr has everything needed to efficiently manage multiple projects, locations, and tasks.
      </p>
      <p>
        With features like time tracking, materials management, customizable checklists, and an integrated calendar, Mapr ensures that no detail is overlooked. Its intuitive design makes it easy for tradesmen to use, whether they’re on-site or in the office.
      </p>
      
      <Testimonial>
        <p>&ldquo;Clearly made by a tradesman! Convenient, easy to use, and continuously improving. It&apos;s free and doesn&apos;t get much better.&rdquo;</p>
        <footer>&mdash; A Satisfied User</footer>
      </Testimonial>
    </ContentWrapper>
  </PolicyContainer>
);

export default AboutPage;