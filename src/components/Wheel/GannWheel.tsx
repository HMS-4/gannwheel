import DegreeLine from "./DegreeLine";
import ZodiacRing from "./ZodiacRing";

type Props = {
  degree: number;
};

export default function GannWheel({ degree }: Props) {
  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900/80 p-4 shadow-2xl backdrop-blur sm:p-6">

<div className="flex justify-center">

  <svg
    width="560"
    height="560"
    viewBox="0 0 700 700"
    className="w-full max-w-[560px] h-auto"
  >
          {/* Background */}

          <circle
            cx="350"
            cy="350"
            r="320"
            fill="#111827"
          />

          {/* Wheel */}

          <ZodiacRing />

          {/* Degree Pointer */}

          <DegreeLine degree={degree} />

          {/* Center Glow */}

          <circle
            cx="350"
            cy="350"
            r="26"
            fill="#06b6d4"
            opacity="0.12"
          />

          <circle
            cx="350"
            cy="350"
            r="12"
            fill="#06b6d4"
          />

          <circle
            cx="350"
            cy="350"
            r="5"
            fill="#ffffff"
          />

          {/* Degree Label */}

          <text
            x="350"
            y="330"
            fill="#94a3b8"
            fontSize="18"
            textAnchor="middle"
            fontWeight="600"
          >
            Current Degree
          </text>

          {/* Degree Value */}

          <text
            x="350"
            y="372"
            fill="#ffffff"
            fontSize="34"
            fontWeight="bold"
            textAnchor="middle"
          >
            {degree.toFixed(2)}°
          </text>

        </svg>

      </div>

    </div>
  );
}