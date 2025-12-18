"use client";

interface StandDrawingAnimationProps {
  className?: string;
  duration?: number; // Toplam animasyon süresi (saniye)
}

export function StandDrawingAnimation({
  className = "",
  duration = 18,
}: StandDrawingAnimationProps) {
  // Her path için farklı delay hesapla (saniye cinsinden)
  const totalPaths = 13;
  const pathDuration = duration / totalPaths;
  const fillDelay = duration * 0.7; // Çizim %70 tamamlandığında dolgu başlasın

  const paths = [
    {
      d: "M 50 250 L 350 250 L 320 200 L 80 200 Z",
      stroke: "#8c2358",
      fill: "#8c2358",
      strokeWidth: "3",
      dashArray: "1000",
      delay: 0,
      hasFill: true,
    },
    {
      d: "M 80 200 L 80 80 L 320 80 L 320 200",
      stroke: "#8c2358",
      fill: "#8c2358",
      strokeWidth: "3",
      dashArray: "600",
      delay: 1,
      hasFill: true,
    },
    {
      d: "M 50 250 L 50 100 L 350 100 L 350 250",
      stroke: "#8c2358",
      fill: "#8c2358",
      strokeWidth: "2.5",
      dashArray: "700",
      delay: 2,
      hasFill: false,
    },
    {
      d: "M 140 220 L 260 220 L 260 180 L 140 180 Z",
      stroke: "#f472b6",
      fill: "#f472b6",
      strokeWidth: "2",
      dashArray: "300",
      delay: 3,
      hasFill: true,
    },
    {
      d: "M 140 180 L 150 160 L 250 160 L 260 180",
      stroke: "#f472b6",
      fill: "#f472b6",
      strokeWidth: "2",
      dashArray: "250",
      delay: 4,
      hasFill: true,
    },
    {
      d: "M 100 80 L 100 200",
      stroke: "#8c2358",
      fill: "none",
      strokeWidth: "2",
      dashArray: "120",
      delay: 5,
      hasFill: false,
    },
    {
      d: "M 300 80 L 300 200",
      stroke: "#8c2358",
      fill: "none",
      strokeWidth: "2",
      dashArray: "120",
      delay: 6,
      hasFill: false,
    },
    {
      d: "M 120 60 L 280 60 L 280 40 L 120 40 Z",
      stroke: "#8c2358",
      fill: "#8c2358",
      strokeWidth: "2.5",
      dashArray: "400",
      delay: 7,
      hasFill: true,
    },
    {
      d: "M 120 40 L 80 80",
      stroke: "#8c2358",
      fill: "none",
      strokeWidth: "2",
      dashArray: "70",
      delay: 8,
      hasFill: false,
    },
    {
      d: "M 280 40 L 320 80",
      stroke: "#8c2358",
      fill: "none",
      strokeWidth: "2",
      dashArray: "70",
      delay: 9,
      hasFill: false,
    },
    // Sol dikey vitrin / panel
    {
      d: "M 120 120 L 120 180",
      stroke: "#f9a8d4",
      fill: "none",
      strokeWidth: "1.8",
      dashArray: "120",
      delay: 10,
      hasFill: false,
    },
    // Sağ dikey vitrin / panel
    {
      d: "M 280 120 L 280 180",
      stroke: "#f9a8d4",
      fill: "none",
      strokeWidth: "1.8",
      dashArray: "120",
      delay: 11,
      hasFill: false,
    },
  ];

  // Ölçü okları için koordinatlar
  const dimensionArrows = [
    {
      x1: 50,
      y1: 260,
      x2: 350,
      y2: 260,
      label: "300",
      labelY: 275,
    },
    {
      x1: 30,
      y1: 100,
      x2: 30,
      y2: 250,
      label: "150",
      labelX: 15,
      labelY: 175,
    },
    {
      x1: 80,
      y1: 70,
      x2: 320,
      y2: 70,
      label: "240",
      labelY: 55,
    },
  ];

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 400 300"
        className="w-full h-full max-w-4xl"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Grid Background - Hafif Izgara */}
        <defs>
          <pattern
            id="grid"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="rgba(140, 35, 88, 0.1)"
              strokeWidth="0.5"
            />
          </pattern>

          {/* Glow Filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Stronger Glow for main structure */}
          <filter id="glowStrong">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Grid Background */}
        <rect
          width="400"
          height="300"
          fill="url(#grid)"
          opacity="0.3"
          style={{
            animation: `fadeIn 1s ease-in-out forwards`,
          }}
        />

        {/* Paths with glow and fill */}
        {paths.map((path, index) => {
          const delay = (path.delay / totalPaths) * duration;
          const fillAnimationDelay = fillDelay + delay * 0.3;

          return (
            <g key={index}>
              {/* Fill layer (if applicable) */}
              {path.hasFill && (
                <path
                  d={path.d}
                  fill={path.fill}
                  fillOpacity="0"
                  style={{
                    animation: `fillPath 1.5s ease-out ${fillAnimationDelay}s forwards`,
                  }}
                />
              )}

              {/* Stroke layer with glow */}
              <path
                d={path.d}
                fill="none"
                stroke={path.stroke}
                strokeWidth={path.strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray={path.dashArray}
                strokeDashoffset={path.dashArray}
                filter={index < 3 ? "url(#glowStrong)" : "url(#glow)"}
                style={{
                  animation: `drawPath ${pathDuration}s ease-in-out ${delay}s forwards, glow 3s ease-in-out ${
                    delay + pathDuration * 0.5
                  }s infinite`,
                }}
              />
            </g>
          );
        })}

        {/* Logo/Marka Alanı (Ön cephe) - Circle with glow */}
        <g>
          <circle
            cx="200"
            cy="205"
            r="18"
            fill="#8c2358"
            fillOpacity="0"
            style={{
              animation: `fillPath 1.5s ease-out ${
                fillDelay + (12 / totalPaths) * duration * 0.3
              }s forwards`,
            }}
          />
          <circle
            cx="200"
            cy="205"
            r="18"
            fill="none"
            stroke="#8c2358"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="160"
            strokeDashoffset="160"
            filter="url(#glow)"
            style={{
              animation: `drawPath ${pathDuration}s ease-in-out ${
                (12 / totalPaths) * duration
              }s forwards, glow 3s ease-in-out ${
                (12 / totalPaths) * duration + pathDuration * 0.5
              }s infinite`,
            }}
          />
        </g>

        {/* Dekoratif Ölçü Okları */}
        {dimensionArrows.map((arrow, index) => {
          const arrowDelay = duration * 0.85 + index * 0.3; // Çizimler bittikten sonra
          const isVertical = arrow.x1 === arrow.x2;

          return (
            <g
              key={index}
              style={{
                animation: `fadeIn 0.5s ease-out ${arrowDelay}s forwards`,
                opacity: 0,
              }}
            >
              {/* Ölçü çizgisi */}
              <line
                x1={arrow.x1}
                y1={arrow.y1}
                x2={arrow.x2}
                y2={arrow.y2}
                stroke="#8c2358"
                strokeWidth="1.5"
                strokeDasharray="4,2"
                opacity="0.6"
              />

              {/* Sol/Üst Ok */}
              {isVertical ? (
                <>
                  <line
                    x1={arrow.x1}
                    y1={arrow.y1}
                    x2={arrow.x1 - 5}
                    y2={arrow.y1 + 5}
                    stroke="#8c2358"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1={arrow.x1}
                    y1={arrow.y1}
                    x2={arrow.x1 + 5}
                    y2={arrow.y1 + 5}
                    stroke="#8c2358"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </>
              ) : (
                <>
                  <line
                    x1={arrow.x1}
                    y1={arrow.y1}
                    x2={arrow.x1 + 5}
                    y2={arrow.y1 - 5}
                    stroke="#8c2358"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1={arrow.x1}
                    y1={arrow.y1}
                    x2={arrow.x1 + 5}
                    y2={arrow.y1 + 5}
                    stroke="#8c2358"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </>
              )}

              {/* Sağ/Alt Ok */}
              {isVertical ? (
                <>
                  <line
                    x1={arrow.x2}
                    y1={arrow.y2}
                    x2={arrow.x2 - 5}
                    y2={arrow.y2 - 5}
                    stroke="#8c2358"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1={arrow.x2}
                    y1={arrow.y2}
                    x2={arrow.x2 + 5}
                    y2={arrow.y2 - 5}
                    stroke="#8c2358"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </>
              ) : (
                <>
                  <line
                    x1={arrow.x2}
                    y1={arrow.y2}
                    x2={arrow.x2 - 5}
                    y2={arrow.y2 - 5}
                    stroke="#8c2358"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1={arrow.x2}
                    y1={arrow.y2}
                    x2={arrow.x2 - 5}
                    y2={arrow.y2 + 5}
                    stroke="#8c2358"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </>
              )}

              {/* Ölçü Etiketi */}
              <text
                x={arrow.labelX || (arrow.x1 + arrow.x2) / 2}
                y={arrow.labelY}
                fill="#8c2358"
                fontSize="10"
                fontWeight="600"
                textAnchor={arrow.labelX ? "middle" : "middle"}
                dominantBaseline="middle"
                opacity="0.8"
              >
                {arrow.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
