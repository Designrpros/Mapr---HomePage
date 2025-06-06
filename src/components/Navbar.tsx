'use client'; // This component uses useState and useRouter, so it needs to be a Client Component

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
  color: black; /* Default text color for light mode */
  z-index: 1000;

  @media (prefers-color-scheme: dark) {
    color: #ececec; /* Text color for dark mode */
  }

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

interface TabButtonProps {
  active: boolean;
}

const TabButton = styled.button<TabButtonProps>`
  background-color: transparent;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  color: #333; /* Default text color for light mode */
  /* Adjusted active border to use a consistent color token if available, here #333 for example */
  border-bottom: ${({ active }) => (active ? '2px solid #333' : '2px solid transparent')}; 
  font-weight: bold;
  text-transform: uppercase;
  padding-right: 2rem; /* This was present, keeping it */
  transition: color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;


  &:hover {
    color: #000; /* Darker text color on hover for light mode */
    border-bottom: 2px solid #000; /* Darker border on hover for light mode */
  }

  @media (prefers-color-scheme: dark) {
    color: #ececec; /* Text color for dark mode */
    border-bottom: ${({ active }) => (active ? '2px solid #ececec' : '2px solid transparent')}; /* Active border for dark mode */

    &:hover {
      color: #fff; /* Brighter text color on hover for dark mode */
      border-bottom: 2px solid #fff; /* Brighter border on hover for dark mode */
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit; /* Inherits color from TabButton */
  z-index: 2; /* This was present, keeping it */
  &:hover {
    text-decoration: none;
  }
`;

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <Toolbar>
      <nav>
        <StyledLink href="/">
          <TabButton active={pathname === '/'}>
            Mapr
          </TabButton>
        </StyledLink>
        <StyledLink href="/about">
          <TabButton active={pathname === '/about'}>
            About
          </TabButton>
        </StyledLink>
        <StyledLink href="/privacy-policy">
          <TabButton active={pathname === '/privacy-policy'}>
            Privacy Policy
          </TabButton>
        </StyledLink>
        <StyledLink href="/security">
          <TabButton active={pathname === '/security'}>
            Security
          </TabButton>
        </StyledLink>
        <StyledLink href="/terms-of-service">
          <TabButton active={pathname === '/terms-of-service'}>
            Terms of Service
          </TabButton>
        </StyledLink>
      </nav>
    </Toolbar>
  );
};

export default Navbar;