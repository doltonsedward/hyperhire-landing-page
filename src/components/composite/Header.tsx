'use client';

import { Button } from '@components/base/Button';
import Image from 'next/image';

interface NavItem {
  label: string;
  href: string;
}

interface HeaderProps {
  logo: string;
  navItems: NavItem[];
  ctaLabel?: string;
}

export const Header = ({ logo, navItems, ctaLabel = 'Contact Us' }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between px-6 md:px-12 py-4">
      {/* <div className="text-2xl font-bold text-primary">{logo}</div> */}
      <Image src="/assets/logo.svg" alt={logo} width={114} height={21} />
      <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a key={item.label} href={item.href} className="text-sm text-foreground hover:text-primary transition">
            {item.label}
          </a>
        ))}
      </nav>
      <Button variant="primary" className="hidden md:block">
        {ctaLabel}
      </Button>
    </header>
  );
};
