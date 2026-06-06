import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  {
    label: "Contact Us",
    href: "#contact",
  },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="ssa-container d-flex align-items-center justify-content-between py-3">
        <Link
          href="/"
          aria-label="Go to Signature Slam Academy homepage"
          className="site-header__brand"
        >
          <Image
            src="/images/logo-white.png"
            alt="Signature Slam Academy Logo"
            width={984}
            height={620}
            priority
            className="site-header__logo"
          />
        </Link>

        <nav aria-label="Primary Navigation">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="btn-contact"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}