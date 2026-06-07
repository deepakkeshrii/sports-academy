import Image from 'next/image';

const CONNECTIVITY = [
  { place: 'Hunter Valley Golf And Country Club', distance: '220m' },
  { place: 'Rydges Resort Hunter Valley', distance: '550m' },
  { place: 'Cressnock Airport', distance: '1.7km' },
  { place: 'Cressnock CBD', distance: '7km' },
  { place: 'Nulkaba Public School', distance: '4.8km' },
  { place: 'Cressnock Hospital', distance: '7.3km' },
  { place: 'Mcdonalds, KFC, Oporto', distance: '7km' },
];

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="launching__pin" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden>
      <path d="M12 21s-7-5.2-7-11a7 7 0 1 1 14 0c0 5.8-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export default function Launching() {
  return (
    <section className="launching">
        <div className="row g-0 launching__panel">
          <div className="col-12 col-lg-5 launching__left">
            <p className="launching__eyebrow">Launching</p>
            <h2 className="launching__title">
              signature slam academy
              <br />
              Hunter Valley
            </h2>

            <h3 className="launching__subtitle">SSA Connectivity</h3>

            <ul className="launching__list">
              {CONNECTIVITY.map((item) => (
                <li className="launching__row" key={item.place}>
                  <PinIcon />
                  <span className="launching__place">{item.place}</span>
                  <span className="launching__leader" aria-hidden />
                  <span className="launching__dist">{item.distance}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-12 col-lg-7 launching__media">
            <Image
              src="/images/map.jpg"
              alt="Aerial view of the Hunter Valley resort and surrounds"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
    </section>
  );
}
