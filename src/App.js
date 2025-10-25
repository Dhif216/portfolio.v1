import React, { useEffect } from 'react';
import Threads from './components/Threads';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    // Reveal animations on scroll
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeInOnScroll = function() {
      fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('appear');
        }
      });
    };
    
    fadeInOnScroll(); // Call immediately
    window.addEventListener('scroll', fadeInOnScroll);
    
    // Custom cursor
    const cursorDot = document.querySelector(".cursor-dot");
    const cursorOutline = document.querySelector(".cursor-outline");
    
    if (window.innerWidth > 768 && cursorDot && cursorOutline) {
      window.addEventListener('mousemove', function(e) {
        const posX = e.clientX;
        const posY = e.clientY;
        
        requestAnimationFrame(() => {
          cursorDot.style.left = `${posX}px`;
          cursorDot.style.top = `${posY}px`;
          
          cursorOutline.style.left = `${posX - 15}px`;
          cursorOutline.style.top = `${posY - 15}px`;
        });
      });
      
      // Add hover effect to links and buttons
      const hoverElements = document.querySelectorAll('a, button');
      hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
          cursorOutline.style.transform = 'scale(1.5)';
          cursorOutline.style.opacity = '0.3';
        });
        
        element.addEventListener('mouseleave', () => {
          cursorOutline.style.transform = 'scale(1)';
          cursorOutline.style.opacity = '0.5';
        });
      });
    }

    return () => {
      window.removeEventListener('scroll', fadeInOnScroll);
      window.removeEventListener('load', fadeInOnScroll);
    };
  }, []);

  return (
    <div className="App">
      <div className="cursor-dot hidden md:block"></div>
      <div className="cursor-outline hidden md:block"></div>
      
      {/* Background animation */}
      <div className="background-animation">
        <Threads color={[0.3, 0.3, 0.3]} amplitude={1.5} distance={0.8} enableMouseInteraction={true} />
      </div>
      
      <div className="content-wrapper">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;