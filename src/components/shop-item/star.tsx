export default function Star({
  filled,
  half = false, // Default to false if not provided
}: {
  filled: boolean;
  half?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      stroke="black"
      strokeWidth="1"
    >
      <defs>
        <linearGradient id="half-fill" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="50%" style={{ stopColor: "gold", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "gray", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <polygon
        points="12,2 15,8 22,9 17,14 18,21 12,18 6,21 7,14 2,9 9,8"
        fill={filled ? "gold" : half ? "url(#half-fill)" : "gray"}
      />
    </svg>
  );
}
