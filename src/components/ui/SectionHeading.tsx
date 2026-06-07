type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  tone?: 'dark' | 'light';
  className?: string;
};

export default function SectionHeading({ title, subtitle, tone = 'dark', className = '' }: SectionHeadingProps) {
  const modifier = tone === 'light' ? 'section-heading--light' : '';

  return (
    <div className={`section-heading ${modifier} ${className}`}>
      <h2 className="section-heading__title">
        {title}
        <span className="accent-dot" aria-hidden />
      </h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </div>
  );
}
