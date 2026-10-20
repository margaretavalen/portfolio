'use client';

import { portfolioData } from '@/data/portfolio';

export default function Contact() {
  const { contacts } = portfolioData;

  const contactCards = [
    {
      icon: '✉️',
      label: 'Email',
      value: contacts.email,
      href: `mailto:${contacts.email}`,
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: '/in/margaretavalencia',
      href: contacts.linkedin,
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: '/margaretavalen',
      href: contacts.github,
    },
    {
      icon: '📄',
      label: 'Resume',
      value: 'Download CV →',
      href: contacts.resume,
    },
  ];

  return (
    <section id="contact" className="py-28 px-6 md:px-16 lg:px-24 max-w-4xl mx-auto text-center relative">
      <div className="font-mono text-xs tracking-widest uppercase text-[#06B6D4] mb-3">
        06 — Contact
      </div>

      <h2 className="font-sora text-3xl sm:text-5xl font-extrabold mb-6 leading-tight">
        Let&apos;s build something<br />
        <span className="grad">impactful together.</span>
      </h2>

      <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-10 leading-relaxed">
        Open to full-time roles, freelance projects, or just a conversation about ML and tech. Don&apos;t hesitate to reach out.
      </p>

      <div className="mb-14">
        <a
          href={`mailto:${contacts.email}`}
          className="btn-glow inline-flex text-sm sm:text-base px-8 py-3.5"
        >
          Send an Email ✉️
        </a>
      </div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left">
        {contactCards.map((card) => (
          <a
            key={card.label}
            href={card.href}
            target={card.href.startsWith('mailto:') ? undefined : '_blank'}
            rel="noopener noreferrer"
            className="bg-[#0F172A]/70 border border-[rgba(99,102,241,0.15)] rounded-xl p-4 flex items-center gap-3 hover:border-[#06B6D4]/40 hover:bg-[#0F172A] transition-all group"
          >
            <span className="text-2xl group-hover:scale-110 transition-transform">
              {card.icon}
            </span>
            <div className="min-w-0 flex-1">
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                {card.label}
              </div>
              <div className="text-xs text-slate-200 font-medium truncate group-hover:text-[#06B6D4] transition-colors">
                {card.value}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

