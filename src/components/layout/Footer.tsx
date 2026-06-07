import Image from "next/image";
import Link from "next/link";
import FooterBottom from "../FooterBottom";

const footerLinks = [
  { label: "About Us", href: "#about" },
  { label: "Coaches", href: "#coaches" },
  { label: "News", href: "#" },
  { label: "Matches", href: "#" },
  { label: "Events", href: "#events" },
  { label: "FAQs", href: "#" },
  { label: "Programs", href: "#programs" },
  { label: "Amenities", href: "#facilities" },
  { label: "Blogs", href: "#" },
];

const socialLinks = [
  {
    label: "Facebook",
    icon: "M13 3h4V0h-4a5 5 0 0 0-5 5v3H5v4h3v12h4V12h3.5l.5-4h-4V5a1 1 0 0 1 1-2z",
  },
  {
    label: "X",
    icon: "M17.5 3h3l-6.6 7.5L21 21h-5.6l-4.3-5.6L6 21H3l7-8L3 3h5.7l3.9 5.1L17.5 3z",
  },
  {
    label: "Instagram",
    icon: "M12 2c2.7 0 3 0 4.1.1 1 0 1.7.2 2.3.5.6.2 1 .5 1.5 1s.8.9 1 1.5c.3.6.5 1.3.5 2.3.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c0 1-.2 1.7-.5 2.3a4 4 0 0 1-1 1.5 4 4 0 0 1-1.5 1c-.6.3-1.3.5-2.3.5-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1 0-1.7-.2-2.3-.5a4 4 0 0 1-1.5-1 4 4 0 0 1-1-1.5c-.3-.6-.5-1.3-.5-2.3C2.5 15 2.5 14.7 2.5 12s0-3 .1-4.1c0-1 .2-1.7.5-2.3a4 4 0 0 1 1-1.5 4 4 0 0 1 1.5-1c.6-.3 1.3-.5 2.3-.5C9 2 9.3 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm5.5-3.2a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z",
  },
  {
    label: "YouTube",
    icon: "M23 7.5a3 3 0 0 0-2.1-2.1C19 5 12 5 12 5s-7 0-8.9.4A3 3 0 0 0 1 7.5 31 31 0 0 0 .6 12 31 31 0 0 0 1 16.5a3 3 0 0 0 2.1 2.1C5 19 12 19 12 19s7 0 8.9-.4a3 3 0 0 0 2.1-2.1c.3-1.5.4-3 .4-4.5s-.1-3-.4-4.5zM9.8 15.3V8.7l5.7 3.3-5.7 3.3z",
  },
];

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="ssa-container py-5">
        <div className="row ">
          <div className="col-lg-3 d-flex align-items-center justify-content-center">
            <Image
              src="/images/logo.jpg"
              alt="Signature Slam Academy Logo"
              width={984}
              height={620}
              className="site-footer__logo"
            />
          </div>
          <div className="col-lg-9">
            <div className="row g-4 align-items-start">
              <nav aria-label="Footer Navigation">
                <ul className="site-footer__links">
                  {footerLinks.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <hr className="site-footer__rule" />
              <div className="col-lg-6 col-md-5">
                <h3 className="site-footer__title">
                  Signature Slam Academy
                </h3>

                <address className="site-footer__address">
                  <p>30 Wills Hill Road, Lovedale, NSW</p>

                  <p>
                    <a href="tel:+915642589752">
                      +91 5642589752
                    </a>
                  </p>

                  <p>
                    <a href="mailto:info@ssagroup.com">
                      info@ssagroup.com
                    </a>
                  </p>
                </address>
              </div>

              <div className="col-lg-3 col-md-3">
                <h3 className="site-footer__title">
                  Connect With Us
                </h3>

                <div className="site-footer__socials">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href="#"
                      aria-label={social.label}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d={social.icon} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterBottom />
    </footer>
  );
}