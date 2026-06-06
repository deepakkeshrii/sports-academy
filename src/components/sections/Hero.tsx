import Image from 'next/image';
import type { ReactNode } from 'react';
import Button from '../ui/Button';

function StatusLabel({ children }: { children: ReactNode }) {
  return (
    <p className="hero__status">
      <span aria-hidden>&laquo;</span> {children}
    </p>
  );
}

export default function Hero() {
  return (
    <section id="top" className="hero">
      <Image
        src="/images/hero-courts.jpg"
        alt="Aerial view of the SSA Hunter Valley tennis courts at sunset"
        fill
        priority
        sizes="100vw"
        className="hero__bg"
      />
      <div className="hero__overlay" />

      <div className="ssa-container hero__inner">
        <p className="hero__kicker">SSA Hunter Valley</p>

        <h1 className="hero__title">
          <span className="hero__title-line">Grow Your Game with the</span>
          <span className="hero__title-em">Professionals</span>
        </h1>

        <span className="hero__rule" aria-hidden />

        <div className="hero__tagline">
          <p>adopt&ensp;&ensp;nurture&ensp;&ensp;deliver</p>
        </div>

        <Button href="#register" variant="outline" className="mt-2">
          Register Now
        </Button>

        <span className="hero__scroll" aria-hidden>
          &darr;
        </span>
      </div>

      <aside className="hero__widgets">
        <StatusLabel>Weather</StatusLabel>

        <div className="hero__weather">
          <p className="hero__weather-place">Hunter Valley</p>
          <div className="hero__weather-temp">
            <span className="hero__weather-deg">19&deg;</span>
            <span className="hero__weather-unit">C</span>
          </div>
          <p className="hero__weather-label">Weather</p>
          <p className="hero__weather-time">Saturday, 8 pm</p>
        </div>

        <StatusLabel>Ongoing Matches</StatusLabel>
        <StatusLabel>Score</StatusLabel>
      </aside>
    </section>
  );
}
