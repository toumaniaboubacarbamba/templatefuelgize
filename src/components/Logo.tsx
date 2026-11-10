export default function Logo() {
  return (
    <a href="/" className="flex items-center gap-1.5 text-white">
      <svg width="18" height="22" viewBox="0 0 18 22" fill="#ec6c06" aria-hidden>
        <path d="M0 0h8v22L0 17zM10 0h8v17l-8 5z" />
      </svg>
      <span className="font-display text-[26px] font-bold uppercase leading-none tracking-wide">Fuelgize.</span>
    </a>
  );
}
