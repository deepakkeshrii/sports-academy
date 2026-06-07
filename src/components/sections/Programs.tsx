import Image from 'next/image';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';

const PROGRAMS = [
  { name: 'Academy', tagline: 'Live and train with us', src: '/images/program-academy.jpg', alt: 'Aerial view of academy courts' },
  { name: 'Camps', tagline: 'Train like a pro with us', src: '/images/program-camps.jpg', alt: 'Players walking onto court' },
  { name: 'Performance', tagline: 'Elevate your game with us', src: '/images/program-performance.jpg', alt: 'Performance training session' },
];

export default function Programs() {
  return (
    <section id="programs" className="programs">
      <div className="ssa-container">
        <div className="section-head d-flex flex-column flex-sm-row justify-content-between align-items-start gap-4">
          <SectionHeading
            title="Programs"
            subtitle="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          />
          <Button href="#register">Register Now</Button>
        </div>

        <div className="row g-4">
          {PROGRAMS.map((program) => (
            <div className="col-12 col-sm-6 col-lg-4" key={program.name}>
              <article className="program-card">
                <Image
                  src={program.src}
                  alt={program.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover program-card__img"
                />
                <div className="program-card__overlay" />
                <div className="program-card__body">
                  <h3 className="program-card__name">{program.name}</h3>
                  <p className="program-card__tag">{program.tagline}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
