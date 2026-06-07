import Image from 'next/image';
import Button from '../ui/Button';

const BODY = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,";

export default function CoachesEvents() {
  return (
    <section id="coaches" className="coaches-events">
      <div className="row g-0">
        <div className="col-12 col-lg-6">
          <article className="cev-panel cev-panel--dark">
            <Image
              src="/images/coaches.jpg"
              alt="Coaches running a training session"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover cev-panel__bg"
            />
            <div className="cev-panel__overlay" />
            <div className="cev-panel__content">
              <h2 className="cev-panel__title">Our Coaches</h2>
              <p className="cev-panel__text">{BODY}</p>
              <Button href="#coaches" variant="link">
                Read More
              </Button>
            </div>
          </article>
        </div>

        <div className="col-12 col-lg-6">
          <article className="cev-panel cev-panel--green">
            <Image
              src="/images/events.jpg"
              alt=""
              aria-hidden
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover cev-panel__bg cev-panel__bg--faint"
            />
            <div className="cev-panel__content">
              <h2 className="cev-panel__title">Events</h2>
              <p className="cev-panel__text">{BODY}</p>
              <Button href="#events" variant="link">
                Read More
              </Button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
