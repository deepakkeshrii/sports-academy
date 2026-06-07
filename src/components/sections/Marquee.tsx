const words = ['Adopt', 'Nurture', 'Deliver'];
const loop = Array.from({ length: 4 }, () => words).flat();
const track = [...loop, ...loop];

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee__track">
        {track.map((word, i) => (
          <span className="marquee__item" key={i}>
            <span className={`marquee__word ${i % 2 === 1 ? 'marquee__word--outline' : ''}`}>{word}</span>
            <span className="marquee__dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
