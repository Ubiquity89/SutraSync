const GlobeGraphic = () => {
  return (
    <div className="relative w-[500px] h-[400px]">
      {/* outer glow */}
      <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-[120px]" />

      {/* globe */}
      <div className="absolute inset-0 rounded-full border border-blue-400/30">
        <div className="absolute inset-0 rounded-full animate-spin-slow">
          <svg
            viewBox="0 0 500 500"
            className="w-full h-full"
          >
            {/* circles */}
            <circle
              cx="250"
              cy="250"
              r="220"
              fill="none"
              stroke="#3B82F6"
              strokeOpacity="0.25"
            />

            <circle
              cx="250"
              cy="250"
              r="170"
              fill="none"
              stroke="#3B82F6"
              strokeOpacity="0.18"
            />

            {/* latitude */}
            <ellipse
              cx="250"
              cy="250"
              rx="220"
              ry="70"
              fill="none"
              stroke="#60A5FA"
              strokeOpacity="0.18"
            />

            <ellipse
              cx="250"
              cy="250"
              rx="220"
              ry="140"
              fill="none"
              stroke="#60A5FA"
              strokeOpacity="0.20"
            />

            {/* longitude */}
            <ellipse
              cx="250"
              cy="250"
              rx="70"
              ry="220"
              fill="none"
              stroke="#60A5FA"
              strokeOpacity="0.20"
            />

            <ellipse
              cx="250"
              cy="250"
              rx="140"
              ry="220"
              fill="none"
              stroke="#60A5FA"
              strokeOpacity="0.20"
            />

            {/* nodes */}
            <circle cx="180" cy="180" r="4" fill="#93C5FD" />
            <circle cx="330" cy="150" r="4" fill="#93C5FD" />
            <circle cx="380" cy="280" r="4" fill="#93C5FD" />
            <circle cx="150" cy="320" r="4" fill="#93C5FD" />

            {/* connections */}
            <line
              x1="180"
              y1="180"
              x2="330"
              y2="150"
              stroke="#60A5FA"
              strokeOpacity="0.20"
            />

            <line
              x1="330"
              y1="150"
              x2="380"
              y2="280"
              stroke="#60A5FA"
              strokeOpacity="0.20"
            />

            <line
              x1="380"
              y1="280"
              x2="150"
              y2="320"
              stroke="#60A5FA"
              strokeOpacity="0.20"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default GlobeGraphic;