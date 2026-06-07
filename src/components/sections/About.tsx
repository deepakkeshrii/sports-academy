'use client';

import { useState } from 'react';
import Image from 'next/image';
import Button from '../ui/Button';

const tabs = [
  {
    id: 'about',
    label: 'About Us',
    heading: 'About Us',
    body: 'To be the first venue in the world to have 60 multi surface courts at one location and establish first one stop tennis academy in the Asia Pacific producing grand slam champions.',
  },
  {
    id: 'coaches',
    label: 'Coaches',
    heading: 'Our Coaches',
    body: 'To be the first venue in the world to have 60 multi surface courts at one location and establish first one stop tennis academy in the Asia Pacific producing grand slam champions.',
  },
  {
    id: 'vision',
    label: 'Vision',
    heading: 'Our Vision',
    body: 'To be the first venue in the world to have 60 multi surface courts at one location and establish first one stop tennis academy in the Asia Pacific producing grand slam champions.',
  },
  {
    id: 'mission',
    label: 'Mission',
    heading: 'Our Mission',
    body: 'To be the first venue in the world to have 60 multi surface courts at one location and establish first one stop tennis academy in the Asia Pacific producing grand slam champions.',
  },
];

const stats = [
  { value: '20', label: 'courts' },
  { value: '12', label: 'coaches' },
  { value: '17', label: 'years' },
  { value: '10', label: 'clubs' },
];

export default function About() {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((tab) => tab.id === active) ?? tabs[0];

  return (
    <section id="about" className="about">
      <div className="ssa-container">
        <div className="about__tabs" role="tablist" aria-label="About Signature Slam Academy">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={active === tab.id}
              aria-controls="about-panel"
              onClick={() => setActive(tab.id)}
              className={`about__tab ${active === tab.id ? 'is-active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div id="about-panel" role="tabpanel" className="row align-items-center g-4 g-lg-5 about__panel">
          <div className="col-12 col-lg-6">
            <h3 className="about__heading">
              {current.heading}
              <span className="accent-dot" aria-hidden />
            </h3>
            <p className="about__text">{current.body}</p>

            <dl className="about__stats">
              {stats.map((stat) => (
                <div className="about__stat" key={stat.label}>
                  <dd className="about__stat-value">{stat.value}</dd>
                  <dt className="about__stat-label">{stat.label}</dt>
                </div>
              ))}
            </dl>

            <Button href="#programs">Read More</Button>
          </div>

          <div className="col-12 col-lg-6">
            <div className="about__grid">

              <div className="about__item about__item--1">
                <Image
                  src="/images/about-2.jpg"
                  alt="Coach and player high-fiving on court"
                  fill
                  sizes="(max-width: 991px) 100vw, 70vw"
                  className="object-cover"
                />
              </div>

              <div className="about__item about__item--2">
                <Image
                  src="/images/about-1.jpg"
                  alt="Junior players training"
                  fill
                  sizes="(max-width: 991px) 100vw, 30vw"
                  className="object-cover"
                />
              </div>

              <div className="about__item about__item--3">
                <Image
                  src="/images/about-3.jpg"
                  alt="Tennis player practicing"
                  fill
                  sizes="(max-width: 991px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="about__item about__item--4">
                <Image
                  src="/images/about-4.jpg"
                  alt="Female tennis player"
                  fill
                  sizes="(max-width: 991px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
