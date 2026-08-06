type LogoProps = {
  className?: string;
  showText?: boolean;
};

export default function Logo({ className = '', showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-sky-500 shadow-lg shadow-brand-500/30">
        <svg
          viewBox="0 0 32 32"
          className="h-5 w-5 text-base-950"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 7 L5 16 L12 25" />
          <path d="M20 7 L27 16 L20 25" />
          <path d="M18 5 L14 27" stroke="currentColor" strokeWidth="2.5" />
        </svg>
      </div>
      {showText && (
        <span className="text-lg font-bold tracking-tight text-white">
          Code<span className="text-gradient">Cruncher</span>
        </span>
      )}
    </div>
  );
}
