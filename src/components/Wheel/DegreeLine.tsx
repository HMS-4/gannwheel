type Props = {
  degree: number;
};

export default function DegreeLine({ degree }: Props) {
  const center = 350;
  const length = 265;

  const rad = ((degree - 90) * Math.PI) / 180;

  const endX = center + Math.cos(rad) * length;
  const endY = center + Math.sin(rad) * length;

  // Arrow head
  const arrowSize = 12;

  const leftX =
    endX -
    arrowSize * Math.cos(rad - Math.PI / 6);

  const leftY =
    endY -
    arrowSize * Math.sin(rad - Math.PI / 6);

  const rightX =
    endX -
    arrowSize * Math.cos(rad + Math.PI / 6);

  const rightY =
    endY -
    arrowSize * Math.sin(rad + Math.PI / 6);

  return (
    <>
      {/* Glow Line */}
      <line
        x1={center}
        y1={center}
        x2={endX}
        y2={endY}
        stroke="#5ee411"
        strokeWidth="10"
        opacity="0.18"
        strokeLinecap="round"
      />

      {/* Main Pointer */}
      <line
        x1={center}
        y1={center}
        x2={endX}
        y2={endY}
        stroke="#FFD700"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Arrow Head */}
      <polygon
        points={`${endX},${endY} ${leftX},${leftY} ${rightX},${rightY}`}
        fill="#FFD700"
      />

      {/* End Dot */}
      <circle
        cx={endX}
        cy={endY}
        r="5"
        fill="#FFD700"
      />

      {/* Center Glow */}
      <circle
        cx={center}
        cy={center}
        r="26"
        fill="#06b6d4"
        opacity="0.12"
      />

      <circle
        cx={center}
        cy={center}
        r="12"
        fill="#06b6d4"
      />

      <circle
        cx={center}
        cy={center}
        r="4"
        fill="#ffffff"
      />
    </>
  );
}