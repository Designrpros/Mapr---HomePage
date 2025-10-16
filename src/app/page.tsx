'use client';

import Image from "next/image";
import styled, { createGlobalStyle } from "styled-components";
import React, { useState } from 'react';
// Import relevant Lucide Icons for Mapr's features
import { Map, ClipboardList, Calculator, Plus, ChevronLeft, ChevronRight, Clock, DraftingCompass, MessageSquare } from 'lucide-react';

// STYLED COMPONENTS =============================================

// --- Global Styles ---
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`;

// --- Page & Layout ---
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: #F0F4F8; 
  color: #1A202C;
`;

const MainContent = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Section = styled.section`
  width: 100%;
  padding: 6rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

// --- Hero Section ---
const HeroSection = styled(Section)`
  justify-content: center;
  background: linear-gradient(135deg, #2D3748 0%, #1A202C 100%);
  color: #fff;
  padding-top: 120px; // Extra padding for the navbar
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
`;

const HeroMaprLogo = styled(Image)`
  filter: brightness(0) invert(1);
`;

const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: 800;
  margin: 1.5rem 0;
  letter-spacing: -2px;
  background: linear-gradient(90deg, #fff, #E2E8F0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: fadeIn 1s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-top: 1rem;
  max-width: 700px;
  color: #E2E8F0;
  line-height: 1.6;
`;

const CTAButton = styled.a`
  display: inline-block;
  margin-top: 2.5rem;
  padding: 1.2rem 2.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: #1A202C;
  background-color: #fff;
  border: none;
  border-radius: 12px;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.15);
  }
`;

const SecondaryCTA = styled(CTAButton)`
  background-color: transparent;
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0.8);
  margin-left: 1rem;
  box-shadow: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
    box-shadow: none;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
  text-align: left;
`;

const FeatureCard = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid #E2E8F0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.04);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.06);
  }
`;

const FeatureIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #EBF4FF;
  color: #4A90E2;
  margin-bottom: 1.5rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
`;

const FeatureDescription = styled.p`
  color: #718096;
  line-height: 1.6;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 4rem;
  background: linear-gradient(90deg, #1A202C, #4A5568);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const TestimonialsSection = styled(Section)`
  background-color: #fff;
`;
const ActionSection = styled(Section)``;

const DemoCaption = styled.p`
  margin-top: 2rem;
  font-size: 1.1rem;
  color: #718096;
  max-width: 600px;
`;

const FaqSection = styled(Section)`
  background-color: #fff;
`;

const FaqContainer = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FaqItem = styled.div`
  background: #F7FAFC;
  border: 1px solid #E2E8F0;
  border-radius: 16px;
  overflow: hidden;
`;

const FaqQuestion = styled.button`
  width: 100%;
  padding: 1.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  font-size: 1.2rem;
  font-weight: 600;
  border: none;
  background: none;
  cursor: pointer;
  transition: background 0.2s;
  color: #1A202C;

  svg {
    transition: transform 0.3s ease;
    flex-shrink: 0;
    color: #1A202C;
  }

  &[aria-expanded='true'] svg {
    transform: rotate(45deg);
  }

  &:hover {
    background: #fff;
  }
`;

const FaqAnswer = styled.div<{ $isOpen: boolean }>`
  padding: 0 1.75rem;
  max-height: ${props => (props.$isOpen ? '300px' : '0')};
  overflow: hidden;
  transition: max-height 0.4s ease, padding 0.4s ease;
  p {
    padding-bottom: 1.75rem;
    color: #4A5568;
    line-height: 1.8;
    text-align: left;
  }
`;

// --- Slideshow Components ---
const SlideshowContainer = styled.div`
  position: relative;
  max-width: 900px;
  width: 90%;
  margin: 0 auto;
`;

const MacMockupImage = styled(Image)`
  border-radius: 12px;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
  border: 1px solid #E2E8F0;
  width: 100%;
  height: auto;
  transition: opacity 0.3s ease-in-out;
`;

const SlideButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
  border: 1px solid #E2E8F0;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #1A202C;
  z-index: 10;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: #fff;
    transform: translateY(-50%) scale(1.05);
  }

  &.prev {
    left: 1rem;
  }

  &.next {
    right: 1rem;
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    &.prev { left: 0.5rem; }
    &.next { right: 0.5rem; }
  }
`;

const DotsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.75rem;
    margin-top: 1.5rem;
`;

const Dot = styled.button<{ $isActive: boolean }>`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: none;
    padding: 0;
    background-color: ${({ $isActive }) => ($isActive ? '#4A5568' : '#CBD5E0')};
    cursor: pointer;
    transition: background-color 0.3s ease;
`;

const FinalCTASection = styled(Section)`
  background: linear-gradient(135deg, #2D3748 0%, #1A202C 100%);
  color: #fff;
`;

const FinalCTATitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;

const FinalCTASubtitle = styled.p`
  color: #A0AEC0;
  margin-bottom: 2.5rem;
  font-size: 1.2rem;
  max-width: 600px;
`;

const FaqRow = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <FaqItem>
      <FaqQuestion onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
        {question}
        <Plus size={24} />
      </FaqQuestion>
      <FaqAnswer $isOpen={isOpen}>
        <p>{answer}</p>
      </FaqAnswer>
    </FaqItem>
  );
};

// REACT COMPONENT ===============================================
export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const macImages = [
    '/images/macos_mockup1.png',
    '/images/macos_mockup2.png',
    '/images/macos_mockup3.png',
    '/images/macos_mockup4.png',
    '/images/macos_mockup5.png',
  ];

  const nextSlide = () => {
    setCurrentSlide(prev => (prev === macImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? macImages.length - 1 : prev - 1));
  };

  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <MainContent>
          {/* === HERO SECTION === */}
          <HeroSection>
            <HeroMaprLogo
                src="/images/logo.png"
                alt="Mapr App Logo"
                width={140}
                height={100}
                priority
              />
            <Title>The Tradesman’s Complete Toolkit.</Title>
            <Subtitle>
              Go beyond simple checklists. Manage projects on a map, track time precisely, and connect with a community of professionals.
            </Subtitle>
            <div>
              <CTAButton href="https://apps.apple.com/no/app/mapr/id6450910273" target="_blank">
                Download on the App Store
              </CTAButton>
              <SecondaryCTA href="#demo">
                See it in Action
              </SecondaryCTA>
            </div>
          </HeroSection>
          
          {/* === FEATURE SHOWCASE SECTION === */}
          <Section id="features">
            <SectionTitle>Everything You Need, All in One App</SectionTitle>
            <FeatureGrid>
               <FeatureCard>
                <FeatureIcon><Map size={24} /></FeatureIcon>
                <FeatureTitle>Map-Based Project View</FeatureTitle>
                <FeatureDescription>
                  Visualize your entire workload geographically. Plan routes, manage job sites, and see the big picture at a glance.
                </FeatureDescription>
              </FeatureCard>
              <FeatureCard>
                <FeatureIcon><Clock size={24} /></FeatureIcon>
                <FeatureTitle>Time Tracking & Project Journal</FeatureTitle>
                <FeatureDescription>
                  Log hours accurately, keep a detailed project journal, and ensure every minute is accounted for, simplifying reports and invoicing.
                </FeatureDescription>
              </FeatureCard>
               <FeatureCard>
                <FeatureIcon><DraftingCompass size={24} /></FeatureIcon>
                <FeatureTitle>Advanced Planning Tools</FeatureTitle>
                <FeatureDescription>
                  From material lists and quotes to permits and checklists, manage every stage of your project with specialized tools.
                </FeatureDescription>
              </FeatureCard>
              <FeatureCard>
                <FeatureIcon><ClipboardList size={24} /></FeatureIcon>
                <FeatureTitle>Materials Management</FeatureTitle>
                <FeatureDescription>
                  Keep a detailed inventory of your materials, track costs, and manage stock to stay on budget and avoid project delays.
                </FeatureDescription>
              </FeatureCard>
              <FeatureCard>
                <FeatureIcon><Calculator size={24} /></FeatureIcon>
                <FeatureTitle>Trade-Specific Calculators</FeatureTitle>
                <FeatureDescription>
                  Access a suite of powerful calculators for everything from electrical work to plumbing, right when you need them.
                </FeatureDescription>
              </FeatureCard>
              <FeatureCard>
                <FeatureIcon><MessageSquare size={24} /></FeatureIcon>
                <FeatureTitle>Community Hub</FeatureTitle>
                <FeatureDescription>
                  Connect with other tradesmen in the forum, get industry news, and learn new skills in the AI-powered learning hub.
                </FeatureDescription>
              </FeatureCard>
            </FeatureGrid>
          </Section>

          {/* === "IN ACTION" SLIDESHOW SECTION === */}
          <ActionSection id="demo">
            <SectionTitle>Mapr in Action</SectionTitle>
            <SlideshowContainer>
              <SlideButton className="prev" onClick={prevSlide} aria-label="Previous Slide">
                <ChevronLeft size={24} />
              </SlideButton>
              <MacMockupImage
                key={macImages[currentSlide]}
                src={macImages[currentSlide]}
                alt={`Mapr macOS App Screenshot ${currentSlide + 1}`}
                width={900}
                height={563}
              />
              <SlideButton className="next" onClick={nextSlide} aria-label="Next Slide">
                <ChevronRight size={24} />
              </SlideButton>
            </SlideshowContainer>
            <DotsContainer>
              {macImages.map((_, index) => (
                <Dot
                  key={index}
                  $isActive={currentSlide === index}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </DotsContainer>
            <DemoCaption>
              Seamlessly manage your projects on the big screen with our native macOS app.
            </DemoCaption>
          </ActionSection>
          
          {/* === TESTIMONIALS SECTION === */}
          <TestimonialsSection>
            <SectionTitle>Built for Tradesmen, by a Tradesman</SectionTitle>
            <FeatureGrid>
              <FeatureCard>
                <FeatureDescription style={{fontStyle: "italic", marginBottom: "1rem"}}>
                  &quot;Clearly made by a tradesman! Convenient, easy to use, and continuously improving. It&apos;s free and doesn&apos;t get much better.&quot;
                </FeatureDescription>
                <FeatureTitle style={{fontSize: "1.1rem"}}>- A Satisfied User</FeatureTitle>
              </FeatureCard>
              <FeatureCard>
                <FeatureDescription style={{fontStyle: "italic", marginBottom: "1rem"}}>
                  &quot;This app has streamlined my entire workflow. The map view is a game-changer for planning my day.&quot;
                </FeatureDescription>
                <FeatureTitle style={{fontSize: "1.1rem"}}>- John P., Electrician</FeatureTitle>
              </FeatureCard>
              <FeatureCard>
                <FeatureDescription style={{fontStyle: "italic", marginBottom: "1rem"}}>
                  &quot;Finally, an app that understands what I need on the job site. The calculators alone save me hours.&quot;
                </FeatureDescription>
                <FeatureTitle style={{fontSize: "1.1rem"}}>- Sarah L., Landscaper</FeatureTitle>
              </FeatureCard>
            </FeatureGrid>
          </TestimonialsSection>

          {/* === FAQ SECTION === */}
          <FaqSection id="faq">
            <SectionTitle>Frequently Asked Questions</SectionTitle>
            <FaqContainer>
              <FaqRow 
                question="Is Mapr free to use?"
                answer="Yes, Mapr is free to download and use. Our goal is to provide a powerful tool that helps tradesmen succeed without a hefty price tag."
              />
              <FaqRow 
                question="How is my data stored and kept secure?"
                answer="Your data security is our top priority. All your project data is stored locally on your device and synced via your private iCloud account. We do not have access to your data, ensuring it remains private and protected by Apple&apos;s robust security infrastructure."
              />
              <FaqRow 
                question="What platforms is Mapr available on?"
                answer="Mapr is available exclusively for the Apple ecosystem, with dedicated apps for iOS, iPadOS, macOS, and visionOS, ensuring a seamless experience across all your devices."
              />
               <FaqRow 
                question="What are the community features?"
                answer="The Community Hub includes a forum to connect with other professionals, a news feed for industry updates, and an AI-powered Learning Hub to help you find information and develop new skills."
              />
            </FaqContainer>
          </FaqSection>

          {/* === FINAL CTA SECTION === */}
          <FinalCTASection>
              <FinalCTATitle>Ready to Streamline Your Workflow?</FinalCTATitle>
              <FinalCTASubtitle>Download Mapr today and experience a smarter, more efficient way to manage your trade business.</FinalCTASubtitle>
              <CTAButton href="https://apps.apple.com/no/app/mapr/id6450910273" target="_blank">
                Download on the App Store
              </CTAButton>
          </FinalCTASection>

        </MainContent>
      </PageWrapper>
    </>
  );
}