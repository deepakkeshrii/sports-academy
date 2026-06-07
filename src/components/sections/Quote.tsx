import Image from 'next/image';

export default function Quote() {
  return (
    <section className="quote">
      <Image src="/images/waves.jpg" alt="" aria-hidden fill sizes="100vw" className="quote__bg" />
      <div className="quote__veil" />

      <div className="ssa-container">
        <figure className="quote__figure">
          <blockquote className="quote__text">
            &rsquo;&rsquo; We have created an environment ideal for building craft. Our goal is to be
            recognized as the best tennis performance centre in the world. &rdquo;
          </blockquote>
          <hr className="quote__rule" />
          <figcaption>
            <p className="quote__name">John Doe</p>
            <p className="quote__role">chairman</p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
