import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

// Component imports
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import Security from "./pages/Security";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import AboutUs from "./pages/About";

// Styled components for the toolbar and tabs
const Toolbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0); /* Fully transparent background */
  color: black;
  z-index: 1000;

  nav {
    display: flex;
    gap: 10px;
    overflow-x: auto; /* Enable horizontal scrolling on small screens */
    white-space: nowrap; /* Prevent items from wrapping to the next line */
    
    &::-webkit-scrollbar {
      display: none; /* For Chrome, Safari, and Opera */
    }
    scrollbar-width: none; /* For Firefox */
    -ms-overflow-style: none; /* For Internet Explorer and Edge */
  }
`;

const TabButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  color: #333;
  border-bottom: ${({ active }) => (active ? '2px solid black' : '2px solid transparent')};
  font-weight: bold;
  text-transform: uppercase;
  padding-right: 2rem;

  &:hover {
    color: #333;
    border-bottom: 2px solid #333;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  z-index: 2;
  &:hover {
    text-decoration: none;
  }
`;

const AppContainer = styled.div`
  margin-top: 60px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Router>
      <div className="App">

        {/* Navigation Toolbar */}
        <Toolbar>
          <nav>
            <TabButton onClick={() => handleTabClick('home')} active={activeTab === 'home'}>
              <StyledLink to="/">Mapr</StyledLink>
            </TabButton>
            <TabButton onClick={() => handleTabClick('about')} active={activeTab === 'about-us'}>
              <StyledLink to="/about">About</StyledLink>
            </TabButton>
            <TabButton onClick={() => handleTabClick('privacy-policy')} active={activeTab === 'privacy-policy'}>
              <StyledLink to="/privacy-policy">Privacy Policy</StyledLink>
            </TabButton>
            <TabButton onClick={() => handleTabClick('security')} active={activeTab === 'security'}>
              <StyledLink to="/security">Security</StyledLink>
            </TabButton>
            <TabButton onClick={() => handleTabClick('terms-of-service')} active={activeTab === 'terms-of-service'}>
              <StyledLink to="/terms-of-service">Terms of Service</StyledLink>
            </TabButton>
          </nav>
        </Toolbar>

        {/* Page content */}
        <AppContainer>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/security" element={<Security />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </AppContainer>
      </div>
    </Router>
  );
};

export default App;