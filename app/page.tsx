'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import type { CSSProperties } from 'react';
import SiteShell from './components/site-shell';

const specialties = [
  {
    title: 'Black & Grey Realism',
    text: 'High contrast black and grey realism tattoos with depth, clean shading, and strong readability.',
  },
  {
    title: 'Large-Scale Pieces',
    text: 'Custom large-scale tattoos planned around body flow, composition, balance, and longevity.',
  },
  {
    title: 'Portraits & Wildlife',
    text: 'Realism work for portraits, animals, nature concepts, dark imagery, and detailed custom designs.',
  },
];

const artistHighlights = [
  'Black and grey realism with strong contrast and depth',
  'Large-scale custom tattoos designed around body flow',
  'Portraits, wildlife, nature, and dark realism concepts',
  'Detailed shading, clean execution, and strong composition',
];

const latestWork = [
  {
    title: 'Skull realism tattoo',
    image: '/max-work/skull-realism.jpg',
    url: 'https://www.instagram.com/max.tatz/',
  },
  {
    title: 'Medusa realism tattoo',
    image: '/max-work/medusa-realism.jpg',
    url: 'https://www.instagram.com/max.tatz/',
  },
  {
    title: 'Samurai realism tattoo',
    image: '/max-work/samurai-realism.jpg',
    url: 'https://www.instagram.com/max.tatz/',
  },
  {
    title: 'Portrait realism tattoo',
    image: '/max-work/portrait-realism.jpg',
    url: 'https://www.instagram.com/max.tatz/',
  },
];

const processSteps = [
  {
    title: 'Concept & consult',
    text: 'Share the subject, placement, size, references, and mood. A consult can be arranged if the piece needs more planning.',
  },
  {
    title: 'Composition planning',
    text: 'Max reviews how the idea will sit on the body, how much space the detail needs, and what will hold clearly over time.',
  },
  {
    title: 'Tattoo session',
    text: 'Your piece is tattooed at Astoria Ink with a focus on contrast, depth, clean execution, and long-term readability.',
  },
];

const supplyBrands = [
  {
    name: 'Kwadron',
    logo: '/brand-logos/kwadron.png',
    url: 'https://www.kwadron.pl/en/',
    className: 'logo-invert',
  },
  {
    name: 'EZ Tattoo',
    logo: '/brand-logos/ez-tattoo.png',
    url: 'https://eztattoosupply.com/',
  },
  {
    name: 'Toochi Supplies',
    logo: '/brand-logos/toochi.png',
    url: 'https://www.toochitattoo.com/',
  },
  {
    name: 'Bohemian Tattoo Arts',
    logo: '/brand-logos/bohemian.svg',
    url: 'https://www.bohemiantattooarts.com/',
  },
  {
    name: 'Dynamic Color',
    logo: '/brand-logos/dynamic-color.png',
    url: 'https://dynamiccolor.com/',
  },
];

export default function HomePage() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('[data-scroll]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.16 },
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <SiteShell>
      <section id="top" className="hero hero-showcase">
        <div className="parallax-layer parallax-line line-one" aria-hidden="true" />
        <div className="parallax-layer parallax-line line-two" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow reveal reveal-1">Christchurch tattoo artist • Astoria Ink</span>
            <h1 className="kinetic-title" aria-label="Max. Christchurch tattoo artist for black and grey realism, large-scale custom tattoos, portraits, wildlife, and dark realism at Astoria Ink.">
              {['Max', 'Black & grey', 'Large-scale', 'Realism'].map(
                (line, index) => (
                  <span key={line} style={{ '--word-index': index } as CSSProperties}>
                    {line}
                  </span>
                ),
              )}
            </h1>
            <p className="reveal reveal-2">
              Max is a Christchurch tattoo artist at Astoria Ink, focused on black and
              grey realism, large-scale custom tattoos, portraits, wildlife, and dark realism.
            </p>
            <div className="hero-actions">
              <Link href="/book-now" className="btn btn-primary reveal reveal-3">
                Book tattoo
              </Link>
              <a
                href="https://www.instagram.com/max.tatz/"
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-secondary reveal reveal-3"
              >
                View Instagram
              </a>
            </div>
          </div>

          <div className="hero-meta reveal reveal-4">
            <span>Black & grey</span>
            <span>Large-scale</span>
            <span>Realism</span>
          </div>
        </div>
      </section>

      <section id="specialties">
        <div className="container">
          <div className="section-title" data-scroll>
            <h2>Specialties</h2>
            <p>Christchurch black and grey tattoo work built around realism, depth, and longevity.</p>
          </div>
          <div className="grid-3">
            {specialties.map((item, index) => (
              <article
                key={item.title}
                className="panel"
                data-scroll
                style={{ '--scroll-delay': `${index * 90}ms` } as CSSProperties}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="latest">
        <div className="container">
          <div className="section-title section-title-row" data-scroll>
            <div>
              <span className="eyebrow">Latest from Max</span>
              <h2>Recent black and grey realism tattoos, large-scale work, portraits, and custom designs.</h2>
            </div>
            <a
              href="https://www.instagram.com/max.tatz/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-link"
            >
              View Instagram
            </a>
          </div>
          <div className="work-strip">
            {latestWork.map((item, index) => (
              <a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noreferrer noopener"
                className="work-card"
                data-scroll
                style={{ '--scroll-delay': `${index * 80}ms` } as CSSProperties}
              >
                <img src={item.image} alt={item.title} />
                <span>{item.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="process">
        <div className="container">
          <div className="section-title" data-scroll>
            <span className="eyebrow">Booking process</span>
            <h2>Planned around scale, detail, and placement.</h2>
          </div>
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="process-card"
                data-scroll
                style={{ '--scroll-delay': `${index * 90}ms` } as CSSProperties}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <div className="about-box" data-scroll>
            <figure className="artist-portrait">
              <img src="/artist/max-main-portrait.jpg" alt="Max tattooing at Astoria Ink" />
            </figure>
            <div className="artist-story">
              <span className="eyebrow">About Max</span>
              <p className="quote">
                “Large realism tattoos need strong planning, contrast, and clean execution.”
              </p>
              <p>
                Max is a Christchurch tattoo artist at Astoria Ink specialising in black
                and grey realism. His work is suited to clients looking for large-scale
                custom tattoos, portraits, wildlife, nature concepts, dark realism, and
                detailed designs that need strong composition, depth, and clarity.
              </p>
              <h3>What he brings</h3>
              <ul className="list">
                {artistHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="supplies" className="supplies-section">
        <div className="container">
          <div className="supply-banner" data-scroll>
            <div className="supply-copy">
              <span className="eyebrow">Studio supplies</span>
              <h2>Professional brands Max works with.</h2>
            </div>
            <div className="brand-marquee" aria-label="Professional supply brands">
              <div className="brand-track">
                {[...supplyBrands, ...supplyBrands].map((brand, index) => (
                  <a
                    key={`${brand.name}-${index}`}
                    href={brand.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={`brand-logo ${brand.className ?? ''}`}
                  >
                    <img src={brand.logo} alt={brand.name} />
                    <span>{brand.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="location">
        <div className="container">
          <div className="location-card" data-scroll>
            <div>
              <span className="eyebrow">Christchurch studio</span>
              <h2>Max tattoos from Astoria Ink.</h2>
              <p>
                The SQ, Level 2, 270 St Asaph Street, Christchurch Central 8011.
              </p>
            </div>
            <div className="location-actions">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Astoria%20Ink%20270%20St%20Asaph%20Street%20Christchurch"
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-secondary"
              >
                Open maps
              </a>
              <Link href="/book-now" className="btn btn-primary">
                Book tattoo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
