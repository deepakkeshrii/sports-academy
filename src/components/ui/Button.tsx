import Link from 'next/link';
import type { ReactNode } from 'react';

type Variant = 'solid' | 'outline' | 'link';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
};

const classNames: Record<Variant, string> = {
  solid: 'btn-ssa',
  outline: 'btn-ssa-outline',
  link: 'btn-ssa-link',
};

export default function Button({ children, href = '#register', variant = 'solid', className = '' }: ButtonProps) {
  return (
    <Link href={href} className={`${classNames[variant]} ${className}`}>
      <span>{children}</span>
      {variant === 'link' && (
        <span className="btn-ssa-link__arrow" aria-hidden>
          &rarr;
        </span>
      )}
    </Link>
  );
}
