import Image from 'next/image';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';

const PEOPLE = [
  { name: 'Craig Tiley', role: 'CEO Tennis Australia & Australian Open', src: '/images/pro-1.jpg' },
  { name: 'Stephen Farrow', role: 'Director - Tournament, Players & International Relations', src: '/images/pro-2.jpg' },
  { name: 'Cameron Pearson', role: 'Head Major Events - Tennis Australia', src: '/images/pro-3.jpg' },
];

export default function Professionals() {
  return (
    <section id="professionals" className="professionals">
      <div className="ssa-container">
        <div className="section-head d-flex flex-column flex-sm-row justify-content-between align-items-start gap-4">
          <SectionHeading
            title="Meet our professionals"
            subtitle="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          />
          <Button href="#professionals">View All</Button>
        </div>

        <div className="row g-4">
          {PEOPLE.map((person) => (
            <div className="col-12 col-sm-6 col-lg-4" key={person.name}>
              <article className="pro-card">
                <div className="pro-card__media">
                  <Image
                    src={person.src}
                    alt={person.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="pro-card__name">{person.name}</h3>
                <p className="pro-card__role">{person.role}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
