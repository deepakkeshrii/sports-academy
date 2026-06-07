import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';

const FEATURES = [
  'First venue in the world',
  'First venue in the world to have 60 multi surface courts (20 clay & 30 hard + 10 natural grass) at one location alongside a stadium',
  'First facility in the world to have capabilities to hold WTA & ATP events on any three court surface at one location',
  'First tennis academy in the world to have capabilities to stage WTA & ATP events too',
  'First venue in the world with tennis academy, Equestrian Centre, 18 holes golf course, Exhibition Centre, Aboriginal Art & Culture Museum, Stadium; 5 Star Hunter Valley resort and airport all in 500 meters radius',
  'First one stop tennis academy in Asia Pacific',
];

function FeatureList() {
  return (
    <ul className="features__list">
      {FEATURES.map((text, i) => (
        <li className="features__item" key={i}>
          <span className="features__arrow" aria-hidden>
            &rarr;
          </span>
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
}

export default function KeyFeatures() {
  return (
    <section className="features">
      <div className="ssa-container">
        <div className="section-head d-flex flex-column flex-sm-row justify-content-between align-items-start gap-4">
          <SectionHeading
            title="key Features"
            subtitle="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          />
          <Button href="#register">Register Now</Button>
        </div>

        <div className="row g-4 g-lg-5 features__cols">
          <div className="col-12 col-md-6">
            <FeatureList />
          </div>
          <div className="col-12 col-md-6">
            <FeatureList />
          </div>
        </div>
      </div>
    </section>
  );
}
