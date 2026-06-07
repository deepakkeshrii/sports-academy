import Image from 'next/image';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';

export default function Glimpse() {
  return (
    <section className="glimpse">
      <div className="ssa-container">
        <div className="section-head d-flex flex-column flex-sm-row justify-content-between align-items-start gap-4">
          <SectionHeading
            title="A Glimpse of Excellence"
            subtitle="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          />
          <Button href="#register">Register Now</Button>
        </div>

        <div className="row g-4 glimpse__grid">
          <div className="col-12 col-lg-5">
            <figure className="glimpse__frame glimpse__frame--tall">
              <Image
                src="/images/glimpse-left.jpg"
                alt="Player following through on a serve"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </figure>
          </div>
          <div className="col-12 col-lg-7">
            <figure className="glimpse__frame glimpse__frame--wide">
              <Image
                src="/images/glimpse-right.jpg"
                alt="Aerial view of the SSA court complex"
                fill
                sizes="(max-width: 1024px) 100vw, 56vw"
                className="object-cover"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
