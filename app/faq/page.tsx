import type { Metadata } from 'next';
import Link from 'next/link';
import SiteShell from '../components/site-shell';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://max-tattoo-site.vercel.app').replace(/\/$/, '');

const faqs = [
  {
    question: 'Does Max do black and grey realism tattoos in Christchurch?',
    answer:
      'Yes. Max tattoos from Astoria Ink in Christchurch and specialises in black and grey realism with strong shading, contrast, depth, and clean execution.',
  },
  {
    question: 'Does Max take on large-scale tattoo pieces?',
    answer:
      'Yes. Large-scale custom tattoos are a strong fit for Max, especially pieces that need careful composition, body flow, contrast, and long-term clarity.',
  },
  {
    question: 'What styles does Max specialise in?',
    answer:
      'Max focuses on black and grey realism, large-scale custom tattoos, portrait realism, wildlife tattoos, nature concepts, dark realism, and detailed custom designs.',
  },
  {
    question: 'Can Max do portraits, animals, or wildlife tattoos?',
    answer:
      'Yes. Max works with portrait, animal, wildlife, and nature-based realism concepts. Clear reference images help with expression, texture, lighting, and accurate detail.',
  },
  {
    question: 'Is black and grey realism good for custom designs?',
    answer:
      'Black and grey realism works well for custom designs that need depth, mood, and strong contrast. Max can help shape the idea so it suits the placement and ages clearly.',
  },
  {
    question: 'How big should a realism tattoo be?',
    answer:
      'The right size depends on the subject, placement, and level of detail. Portraits, animals, skulls, and large custom realism pieces usually need enough room for shading and key details to stay readable.',
  },
  {
    question: 'What reference images should I send Max?',
    answer:
      'Send clear images with good lighting, plus any examples of mood, composition, or detail you like. For large-scale realism, include notes on placement, size, and any existing tattoos nearby.',
  },
  {
    question: 'Where is Max based?',
    answer:
      'Max tattoos from Astoria Ink in Christchurch Central. The studio is at The SQ, Level 2, 270 St Asaph Street, Christchurch 8011.',
  },
  {
    question: 'How do I book a tattoo with Max?',
    answer:
      'Use the tattoo booking form and include your idea, placement, approximate size, preferred style, timing, contact details, reference notes, and reference images. Astoria Ink can then review the request and reply.',
  },
  {
    question: 'How much does a tattoo with Max cost?',
    answer:
      'Pricing depends on size, placement, detail, style, and appointment time. Large-scale black and grey realism pieces are best quoted after Max can review the idea, placement, and references.',
  },
  {
    question: 'Can Max help refine my tattoo idea?',
    answer:
      'Yes. Max works with clients to shape custom tattoo ideas into designs with strong composition, flow, depth, and long-term clarity.',
  },
  {
    question: 'What should I include in the booking form?',
    answer:
      'Include your name, email, phone number, tattoo placement, approximate size, style, timing, description of the idea, and reference notes. For realism tattoos, clear reference images are especially important.',
  },
];

export const metadata: Metadata = {
  title: 'Max Tattoo FAQ | Black & Grey Realism Christchurch',
  description:
    'FAQ for booking with Max at Astoria Ink Christchurch, including black and grey realism tattoos, large-scale custom work, portraits, wildlife tattoos, reference images, sizing, and booking.',
  alternates: {
    canonical: '/faq',
  },
};

export default function FaqPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${siteUrl}/faq#faq`,
    url: `${siteUrl}/faq`,
    name: 'Max Tattoo FAQ',
    isPartOf: {
      '@id': `${siteUrl}/#website`,
    },
    about: {
      '@id': `${siteUrl}/#max`,
    },
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="hero faq-hero">
        <div className="container">
          <div className="hero-card faq-intro">
            <span className="eyebrow">Max tattoo FAQ</span>
            <h1>Tattoo questions, answered.</h1>
            <p>
              Answers for clients booking black and grey realism, large-scale custom
              tattoos, portraits, wildlife, and dark realism with Max at Astoria Ink Christchurch.
            </p>
            <div className="hero-actions">
              <Link href="/book-now" className="btn btn-primary">
                Book tattoo
              </Link>
              <Link href="/#location" className="btn btn-secondary">
                View location
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container faq-list">
          {faqs.map((faq) => (
            <article className="faq-item" key={faq.question}>
              <h2>{faq.question}</h2>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
