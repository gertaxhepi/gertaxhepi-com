export function AnimatedSmiley() {
  return (
    <span className="animated-smiley" aria-hidden="true">
      <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
        <circle
          className="smiley-draw smiley-head"
          cx="80"
          cy="80"
          r="52"
        />
        <circle
          className="smiley-eye smiley-eye-left"
          cx="62"
          cy="66"
          r="5.5"
        />
        <circle
          className="smiley-eye smiley-eye-right"
          cx="98"
          cy="66"
          r="5.5"
        />
        <path
          className="smiley-draw smiley-mouth"
          d="M56 94 Q80 114 104 94"
        />
        <path className="smiley-draw smiley-corner" d="M54 94 L58 92" />
        <path className="smiley-draw smiley-corner" d="M106 94 L102 92" />
      </svg>
    </span>
  );
}
