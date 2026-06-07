import Image from 'next/image';
import SectionHeading from '../ui/SectionHeading';

type Facility = {
  title: string;
  tags: string[];
  src: string;
  alt: string;
  tone: 'on-green' | 'on-white';
};

const BODY = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,";

const TOP: Facility[] = [
  { title: 'Tennis', tags: ['9 Clay Courts', '4 Hard Courts'], src: '/images/facility-tennis.jpg', alt: 'Aerial view of the tennis courts', tone: 'on-green' },
  { title: 'Accommodation', tags: ['5 Star Hotel'], src: '/images/facility-accommodation.jpg', alt: 'Five-star hotel room', tone: 'on-green' },
];

const BOTTOM: Facility[] = [
  { title: 'Fitness', tags: ['Gym', 'Fitness Room'], src: '/images/facility-fitness.jpg', alt: 'Gym and fitness room', tone: 'on-white' },
  { title: 'Recovery', tags: ['Spa', 'Pool', 'Massage'], src: '/images/facility-recovery.jpg', alt: 'Resort pool at dusk', tone: 'on-white' },
];

function FacilityCard({ facility }: { facility: Facility }) {
  return (
    <div className="col-12 col-md-6">
      <article className={`facility-card facility-card--${facility.tone}`}>
        <div className="facility-card__media">
          <Image
            src={facility.src}
            alt={facility.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover"
          />
          <span className="facility-card__play" aria-hidden>
            <span className="facility-card__play-icon" />
          </span>
        </div>
        <h3 className="facility-card__title">{facility.title}</h3>
        <div className="facility-card__tags">
          {facility.tags.map((tag) => (
            <span className="facility-card__tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <p className="facility-card__text">{BODY}</p>
      </article>
    </div>
  );
}

export default function Facilities() {
  return (
    <section id="facilities" className="facilities">
      <div className="ssa-container">
        <SectionHeading
          title="Facilities"
          subtitle="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />

        <div className="facilities__bento">
          <div className="facilities__band" aria-hidden />
          <div className="row g-4 facilities__row">
            {TOP.map((f) => (
              <FacilityCard key={f.title} facility={f} />
            ))}
          </div>
          <div className="row g-4 facilities__row facilities__row--offset">
            {BOTTOM.map((f) => (
              <FacilityCard key={f.title} facility={f} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
