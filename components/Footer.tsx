import { portfolioData } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="py-10 border-t border-[rgba(99,102,241,0.15)] bg-[#050816] text-center text-xs text-slate-500 font-mono">
      <div className="max-w-6xl mx-auto px-6">
        <p>
          © {new Date().getFullYear()}{' '}
          <span className="text-slate-300 font-sans font-medium">
            {portfolioData.fullName}
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}

