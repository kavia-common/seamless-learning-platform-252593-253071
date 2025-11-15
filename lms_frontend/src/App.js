import React from 'react';
import './App.css';

/**
 * PUBLIC_INTERFACE
 * Navbar component renders the top navigation with logo/title and an outline CTA.
 * Uses CSS variable tokens for colors, spacing, radii, and focus states.
 */
function Navbar() {
  return (
    <div className="container header" role="navigation" aria-label="Primary">
      <div className="brand" aria-label="LMS Home">
        <div className="brand__glyph" aria-hidden="true" />
        <span>Seamless LMS</span>
      </div>
      <nav className="nav">
        <a href="#dashboard">Dashboard</a>
        <a href="#courses">Courses</a>
        <a href="#about">About</a>
        <a href="#support">Support</a>
        <button className="btn btn-outline" type="button">Sign up</button>
      </nav>
    </div>
  );
}

/**
 * PUBLIC_INTERFACE
 * Button primitives.
 * Variants: primary (filled gradient), outline (glass), ghost.
 */
function Button({ variant = 'primary', children, ...props }) {
  const cls =
    variant === 'outline'
      ? 'btn btn-outline'
      : variant === 'ghost'
      ? 'btn btn-ghost'
      : 'btn btn-primary';
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}

/**
 * PUBLIC_INTERFACE
 * Input primitive styled with theme.
 */
function Input(props) {
  return <input className="input" {...props} />;
}

/**
 * PUBLIC_INTERFACE
 * Select primitive styled with theme.
 */
function Select(props) {
  return <select className="select" {...props} />;
}

/**
 * PUBLIC_INTERFACE
 * Card component for surface blocks.
 */
function Card({ title, children, footer }) {
  return (
    <div className="card">
      {title ? <h3 className="section-title" style={{ marginBottom: 8 }}>{title}</h3> : null}
      <div>{children}</div>
      {footer ? <div style={{ marginTop: 12 }}>{footer}</div> : null}
    </div>
  );
}

/**
 * PUBLIC_INTERFACE
 * Hero section with left-aligned text and right decorative blob cluster.
 */
function Hero() {
  return (
    <section className="hero">
      <div className="hero__overlay-left" />
      <div className="container hero__inner">
        <div className="hero-grid">
          <div>
            <h1>Eco products</h1>
            <p>
              Discover curated courses and workflows designed to accelerate your learning.
              Track progress, schedule sessions, and master new skills.
            </p>
            <div className="actions">
              <Button variant="primary">About us</Button>
              <Button variant="outline">Browse courses</Button>
            </div>
          </div>
          <div aria-hidden="true">
            <div className="blob-group">
              <div className="blob blob--a" />
              <div className="blob blob--b" />
              <div className="blob blob--c" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * PUBLIC_INTERFACE
 * App root renders navbar, hero, and sample content blocks to demonstrate theme.
 */
function App() {
  return (
    <div className="app-root">
      <header>
        <Navbar />
      </header>

      <main className="main">
        <Hero />

        <section className="container" style={{ paddingBlock: '48px' }}>
          <h2 className="section-title">Featured Categories</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            <Card title="Sustainability">
              <p className="text-secondary">Learn sustainable practices across industries.</p>
              <div style={{ marginTop: 12 }}>
                <Button variant="ghost">Explore</Button>
              </div>
            </Card>
            <Card title="Design Systems">
              <p className="text-secondary">Build cohesive UI systems with tokens and patterns.</p>
              <div style={{ marginTop: 12 }}>
                <Button variant="ghost">Explore</Button>
              </div>
            </Card>
            <Card title="Data Science">
              <p className="text-secondary">From fundamentals to advanced ML workflows.</p>
              <div style={{ marginTop: 12 }}>
                <Button variant="ghost">Explore</Button>
              </div>
            </Card>
          </div>
        </section>

        <section className="container" style={{ paddingBlock: '24px' }}>
          <h2 className="section-title">Quick Search</h2>
          <div className="surface" style={{ padding: 16, display: 'grid', gridTemplateColumns: '1fr 200px', gap: 12 }}>
            <Input placeholder="Search courses, topics, or instructors…" aria-label="Search" />
            <Select aria-label="Level">
              <option>All Levels</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </Select>
          </div>
        </section>
      </main>

      <footer className="footer container">
        © {new Date().getFullYear()} Seamless LMS
      </footer>
    </div>
  );
}

export default App;
