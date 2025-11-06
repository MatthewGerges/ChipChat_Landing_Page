import React from 'react';
import './App.css';
import robotImg from '../assets/ChipChat Landing Page 2 Transparent.png';
import appleLogo from '../assets/apple_logo_white_transparent.png';
import levelHomeLogo from '../assets/level_home_logo.png';
import nvidiaLogo from '../assets/nvidia_logo_green_transparent.png';
import teslaLogo from '../assets/tesla_logo_red_transparent.png';
import waterlooLogo from '../assets/waterloo_logo_transparent.png';
import matthewPfp from '../assets/Matthew_G_Pfp.png';
import andrewPfp from '../assets/Andrew_M_Pfp.jpeg';
import michaelPfp from '../assets/Michael_B_Pfp.jpeg';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Demo', href: '#demo' },
  { label: 'Contact', href: '#contact' },
];

const teamMembers = [
  {
    name: 'Matthew Gerges',
    title: 'Founder & Systems Engineer',
    bio: "Apple alum focused on system-level bring-up and debugging. After feeling how slow legacy hardware dev tools have become, Matthew started ChipChat to modernize the workflow.",
    image: matthewPfp,
    companies: [
      { name: 'Apple', logo: appleLogo },
      { name: 'LevelHome', logo: levelHomeLogo },
      { name: 'University of Waterloo', logo: waterlooLogo },
    ],
  },
  {
    name: 'Andrew Morris',
    title: 'Product & UX',
    bio: 'Former IDE designer who has spent the last 6 years building developer tools. He believes AI copilots can take the mind-numbing setup work off of hardware teams.',
    image: andrewPfp,
    companies: [
      { name: 'NVIDIA', logo: nvidiaLogo },
      { name: 'Tesla', logo: teslaLogo },
      { name: 'University of Waterloo', logo: waterlooLogo },
    ],
  },
  {
    name: 'Michael Browne',
    title: 'Hardware Automation',
    bio: 'Built test automation rigs for semiconductor labs across three continents. Michael joined ChipChat to make reliable validation pipelines accessible to every team.',
    image: michaelPfp,
    companies: [
      { name: 'Apple', logo: appleLogo },
      { name: 'Tesla', logo: teslaLogo },
      { name: 'University of Waterloo', logo: waterlooLogo },
    ],
  },
];

export default function App() {
  return (
    <div className="page">
      {/* ---------------- NAV & HERO SECTION ---------------- */}
      <section className="new-hero-section">
        <header className="nav">
          <div className="brand">
            <span className="brand-icon" aria-hidden="true">
              <span className="dot" />
              <span className="tail" />
            </span>
            <span className="brand-text">ChipChat</span>
          </div>

          <nav className="nav-links" aria-label="Primary">
            {navLinks.map((link) => (
              <a href={link.href} key={link.label} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>
        </header>
        <div className="new-hero-content">
          <div className="new-hero-left">
            <h1 className="new-hero-title">
              <div className="gradient-text">Vibe Code</div>
              <div className="white-text">but with</div>
              <div className="gradient-text">Hardware</div>
            </h1>
            <div className="new-hero-form">
              <input
                type="email"
                placeholder="email@company.com"
                className="new-hero-input"
              />
              <button className="new-hero-button">
                Join Waitlist
              </button>
            </div>
          </div>
          <div className="new-hero-right">
            <img 
              src={robotImg} 
              alt="ChipChat AI assistant robot" 
              className="new-hero-image"
            />
          </div>
        </div>
      </section>      {/* ---------------- DEMO SECTION ---------------- */}
      <section id="demo" className="demo-section" aria-labelledby="demo-heading">
        <div className="demo-copy">
          <span className="badge subtle">Live Demo</span>
          <h2 id="demo-heading">See ChipChat in action</h2>
          <p className="demo-lede">
            Watch a quick walkthrough of how ChipChat accelerates bring-up workflows with an AI-native toolkit for hardware engineers.
          </p>
        </div>
        <div className="video-frame">
          <iframe
            src="https://www.youtube-nocookie.com/embed/oBjroKJ2qTA?start=162&rel=0"
            title="ChipChat demo video"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </section>

      {/* ---------------- ABOUT SECTION ---------------- */}
      <section id="about" className="about-section" aria-labelledby="about-heading">
        <header className="about-header">
          <span className="badge subtle">Meet the Team</span>
          <h2 id="about-heading">The People Building ChipChat</h2>
          <p>
            ChipChat is crafted by engineers who have wrestled with the same hardware workflows we now
            automate. We built it for teams that want momentum from day zero.
          </p>
        </header>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <article key={member.name} className="team-card">
              <div className="team-card-top">
                <div className="avatar-frame">
                  <img src={member.image} alt={`${member.name} headshot`} loading="lazy" />
                </div>
                <div className="company-list" aria-label={`${member.name} previous companies`}>
                  {member.companies.map((company) => (
                    <span key={company.name} className="company-badge">
                      <img src={company.logo} alt={`${company.name} logo`} />
                    </span>
                  ))}
                </div>
              </div>
              <div className="team-content">
                <h3>{member.name}</h3>
                <p className="team-title">{member.title}</p>
                <p>{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ---------------- CONTACT SECTION ---------------- */}
      <section id="contact" className="contact-section" aria-labelledby="contact-heading">
        <header className="contact-header">
          <span className="badge subtle">Contact</span>
          <h2 id="contact-heading">Tell us how you want to collaborate</h2>
          <p>
            Have a question, want to collaborate, or exploring an investment? Drop a note and the
            ChipChat team will reach out shortly.
          </p>
        </header>

        <form
          className="contact-form"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <div className="contact-row">
            <label htmlFor="contact-name">Name</label>
            <input id="contact-name" name="name" type="text" placeholder="Your name" />
          </div>

          <div className="contact-row">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="you@company.com"
              autoComplete="email"
            />
          </div>

          <div className="contact-row">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows="4"
              placeholder="Let us know how we can help"
            />
          </div>

          <button type="submit" className="btn primary">
            Send message
          </button>
        </form>
      </section>
    </div>
  );
}