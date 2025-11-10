import React, { useState } from 'react';
import './App.css';
import emailjs from '@emailjs/browser';
import robotImg from '../assets/ChipChat Landing Page 2 Transparent.png';
import appleLogo from '../assets/apple_logo_white_transparent.png';
import levelHomeLogo from '../assets/level_home_logo.png';
import teslaLogo from '../assets/tesla_logo_red_transparent.png';
import waterlooLogo from '../assets/waterloo_logo_transparent.png';
import matthewPfp from '../assets/Matthew_G_Pfp.png';
import danielPfp from '../assets/Daniel_B_Pfp.jpeg';
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
    bio: "Apple alum focused on system-level bring-up, power integrity, and automation. After seeing how slow and error-prone schematic design still is, Matthew started ChipChat to modernize the hardware workflow with AI.",
    image: matthewPfp,
    companies: [
      { name: 'Apple', logo: appleLogo },
      { name: 'LevelHome', logo: levelHomeLogo },
      { name: 'University of Waterloo', logo: waterlooLogo },
    ],
  },
  {
    name: 'Michael Botros',
    title: 'Hardware & System Integration Lead',
    bio: "Worked on Tesla's Autopilot and Apple's iPhone hardware teams. Michael brings deep experience in circuit validation, hardware bring-up, and system integration to make AI-assisted design reliable at scale.",
    image: michaelPfp,
    companies: [
      { name: 'Tesla', logo: teslaLogo },
      { name: 'Apple', logo: appleLogo },
      { name: 'University of Waterloo', logo: waterlooLogo },
    ],
  },
  {
    name: 'Daniel Bishara',
    title: 'Electrical & Systems Automation Lead',
    bio: "Daniel worked on Tesla's Optimus humanoid robot and now on Apple's iPhone hardware team. With experience across robotics and electrical design, he helps strengthen ChipChat's AI reasoning and hardware automation systems.",
    image: danielPfp,
    companies: [
      { name: 'Tesla', logo: teslaLogo },
      { name: 'Apple', logo: appleLogo },
      { name: 'University of Waterloo', logo: waterlooLogo },
    ],
  },
];

export default function App() {
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistSuccess, setWaitlistSuccess] = useState(false);
  const [waitlistError, setWaitlistError] = useState('');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactErrors, setContactErrors] = useState({});
  const [contactLoading, setContactLoading] = useState(false);

  // EmailJS configuration - Replace these with your EmailJS credentials
  const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
  const EMAILJS_TEMPLATE_ID_WAITLIST = 'YOUR_WAITLIST_TEMPLATE_ID';
  const EMAILJS_TEMPLATE_ID_CONTACT = 'YOUR_CONTACT_TEMPLATE_ID';
  const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
  const NOTIFICATION_EMAIL = 'matthew.g.2219@gmail.com';

  const handleWaitlistSubmit = async (e) => {
    e.preventDefault();
    setWaitlistError('');
    
    if (!waitlistEmail || !waitlistEmail.includes('@')) {
      setWaitlistError('Please enter a valid email address');
      return;
    }

    try {
      // Send email notification using EmailJS
      if (EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID_WAITLIST,
          {
            email: waitlistEmail,
            to_email: NOTIFICATION_EMAIL,
            message: `New waitlist signup: ${waitlistEmail}`,
          },
          EMAILJS_PUBLIC_KEY
        );
      }
      
      setWaitlistSuccess(true);
      setWaitlistEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setWaitlistSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error sending waitlist email:', error);
      // Still show success to user even if email fails
      setWaitlistSuccess(true);
      setWaitlistEmail('');
      setTimeout(() => {
        setWaitlistSuccess(false);
      }, 5000);
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setContactErrors({});
    setContactSuccess(false);

    // Validate form
    const errors = {};
    if (!contactForm.name.trim()) {
      errors.name = 'Name needed';
    }
    if (!contactForm.email.trim() || !contactForm.email.includes('@')) {
      errors.email = 'Email needed';
    }
    if (!contactForm.message.trim()) {
      errors.message = 'You need to send a message';
    }

    if (Object.keys(errors).length > 0) {
      setContactErrors(errors);
      return;
    }

    setContactLoading(true);

    try {
      // Send email notification using EmailJS
      if (EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID_CONTACT,
          {
            from_name: contactForm.name,
            from_email: contactForm.email,
            message: contactForm.message,
            to_email: NOTIFICATION_EMAIL,
          },
          EMAILJS_PUBLIC_KEY
        );
      }
      
      setContactSuccess(true);
      setContactForm({ name: '', email: '', message: '' });
      setContactLoading(false);
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setContactSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error sending contact email:', error);
      setContactLoading(false);
      // Still show success to user even if email fails
      setContactSuccess(true);
      setContactForm({ name: '', email: '', message: '' });
      setTimeout(() => {
        setContactSuccess(false);
      }, 5000);
    }
  };

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
            <div className="new-hero-form-wrapper">
              {waitlistSuccess ? (
                <div className="success-message">
                  Thanks for joining the waitlist! We'll let you know as soon as it's out.
                </div>
              ) : (
                <form className="new-hero-form" onSubmit={handleWaitlistSubmit}>
                  <input
                    type="email"
                    placeholder="email@company.com"
                    className="new-hero-input"
                    value={waitlistEmail}
                    onChange={(e) => {
                      setWaitlistEmail(e.target.value);
                      setWaitlistError('');
                    }}
                  />
                  <button type="submit" className="new-hero-button">
                    Join Waitlist
                  </button>
                  {waitlistError && (
                    <div className="error-message">{waitlistError}</div>
                  )}
                </form>
              )}
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
            Watch how ChipChat turns text prompts into complete, rule-compliant schematics — transforming how engineers design and validate hardware.
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
            ChipChat was built by engineers who've lived the pain of slow hardware workflows at Apple, Tesla, and startups alike. We're building the AI copilot we always wished existed — one that brings momentum to every hardware team from day zero.
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
          <h2 id="contact-heading">Tell us what you want to build</h2>
          <p>
            Whether you're an engineer, team lead, or investor, we'd love to hear from you. Share your idea and we'll show you how ChipChat can bring it to life — faster.
          </p>
        </header>

        {contactSuccess ? (
          <div className="success-message">
            Thanks for your message! We'll get back to you shortly.
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleContactSubmit}>
            <div className="contact-row">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Your name"
                value={contactForm.name}
                onChange={(e) => {
                  setContactForm({ ...contactForm, name: e.target.value });
                  if (contactErrors.name) {
                    setContactErrors({ ...contactErrors, name: '' });
                  }
                }}
                className={contactErrors.name ? 'error' : ''}
              />
              {contactErrors.name && (
                <span className="field-error">{contactErrors.name}</span>
              )}
            </div>

            <div className="contact-row">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="you@company.com"
                autoComplete="email"
                value={contactForm.email}
                onChange={(e) => {
                  setContactForm({ ...contactForm, email: e.target.value });
                  if (contactErrors.email) {
                    setContactErrors({ ...contactErrors, email: '' });
                  }
                }}
                className={contactErrors.email ? 'error' : ''}
              />
              {contactErrors.email && (
                <span className="field-error">{contactErrors.email}</span>
              )}
            </div>

            <div className="contact-row">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="4"
                placeholder="Let us know how we can help"
                value={contactForm.message}
                onChange={(e) => {
                  setContactForm({ ...contactForm, message: e.target.value });
                  if (contactErrors.message) {
                    setContactErrors({ ...contactErrors, message: '' });
                  }
                }}
                className={contactErrors.message ? 'error' : ''}
              />
              {contactErrors.message && (
                <span className="field-error">{contactErrors.message}</span>
              )}
            </div>

            <button type="submit" className="btn primary" disabled={contactLoading}>
              {contactLoading ? 'Sending...' : 'Send message'}
            </button>
          </form>
        )}
      </section>
    </div>
  );
}