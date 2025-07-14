export function SlickParticles({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute ${className}`}
      width="300"
      height="400"
      viewBox="0 0 300 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Floating dots with subtle animation */}
      <g className="animate-pulse" style={{ animationDuration: "4s" }}>
        <circle cx="50" cy="80" r="2" fill="#6366f1" opacity="0.4" />
        <circle cx="120" cy="150" r="1.5" fill="#8b5cf6" opacity="0.3" />
        <circle cx="200" cy="220" r="2.5" fill="#ec4899" opacity="0.5" />
        <circle cx="80" cy="300" r="1" fill="#10b981" opacity="0.4" />
        <circle cx="250" cy="350" r="2" fill="#f59e0b" opacity="0.3" />
      </g>

      {/* Subtle connecting lines */}
      <g
        className="animate-pulse"
        style={{ animationDuration: "6s", animationDelay: "1s" }}
      >
        <path
          d="M50 80 Q120 100 200 220"
          stroke="#6366f1"
          strokeWidth="1"
          fill="none"
          opacity="0.2"
          strokeDasharray="5,5"
        />
        <path
          d="M120 150 Q180 180 250 350"
          stroke="#8b5cf6"
          strokeWidth="1"
          fill="none"
          opacity="0.15"
          strokeDasharray="3,7"
        />
      </g>
    </svg>
  );
}

export function MinimalGeometry({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute ${className}`}
      width="250"
      height="300"
      viewBox="0 0 250 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Subtle geometric shapes */}
      <g className="animate-pulse" style={{ animationDuration: "8s" }}>
        <rect
          x="40"
          y="60"
          width="20"
          height="20"
          fill="none"
          stroke="#6366f1"
          strokeWidth="1"
          opacity="0.3"
          transform="rotate(45 50 70)"
        />
        <polygon
          points="150,100 170,130 130,130"
          fill="none"
          stroke="#ec4899"
          strokeWidth="1"
          opacity="0.25"
        />
        <circle
          cx="80"
          cy="200"
          r="15"
          fill="none"
          stroke="#10b981"
          strokeWidth="1"
          opacity="0.2"
        />
      </g>
    </svg>
  );
}

export function FloatingOrbs({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute ${className}`}
      width="200"
      height="350"
      viewBox="0 0 200 350"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Glowing orbs with slow movement */}
      <defs>
        <radialGradient id="orb1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="orb2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ec4899" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="orb3" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g className="animate-pulse" style={{ animationDuration: "5s" }}>
        <circle cx="60" cy="100" r="25" fill="url(#orb1)" />
      </g>
      <g
        className="animate-pulse"
        style={{ animationDuration: "7s", animationDelay: "2s" }}
      >
        <circle cx="140" cy="200" r="20" fill="url(#orb2)" />
      </g>
      <g
        className="animate-pulse"
        style={{ animationDuration: "6s", animationDelay: "4s" }}
      >
        <circle cx="80" cy="280" r="30" fill="url(#orb3)" />
      </g>
    </svg>
  );
}

export function SubtleWaves({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute ${className}`}
      width="300"
      height="200"
      viewBox="0 0 300 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Flowing wave patterns */}
      <g className="animate-pulse" style={{ animationDuration: "10s" }}>
        <path
          d="M0 100 Q75 80 150 100 T300 100"
          stroke="#6366f1"
          strokeWidth="2"
          fill="none"
          opacity="0.2"
        />
        <path
          d="M0 120 Q75 100 150 120 T300 120"
          stroke="#8b5cf6"
          strokeWidth="1.5"
          fill="none"
          opacity="0.15"
        />
        <path
          d="M0 140 Q75 120 150 140 T300 140"
          stroke="#ec4899"
          strokeWidth="1"
          fill="none"
          opacity="0.1"
        />
      </g>
    </svg>
  );
}
