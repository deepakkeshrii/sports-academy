import Link from "next/link";

export default function FooterBottom() {
  return (
    <div className="site-footer__bar">
      <div className="ssa-container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 py-3">
        <Link href="/terms-and-conditions">
          Terms & Conditions
        </Link>

        <p className="mb-0 text-center">
          © {new Date().getFullYear()} Signature Slam Academy. All rights
          reserved.
        </p>

        <Link href="/privacy-policy">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}