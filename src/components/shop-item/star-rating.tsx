import Star from "./star";

export default function StarRating({
  rating,
  className = "", // Default class name if not provided
}: {
  rating: number;
  className?: string;
}) {
  const totalStars = 5;

  const flooredRating = Math.floor(rating);
  // Round the rating to the nearest whole number
  const roundedRating = Math.round(rating);

  // Determine if there should be a half star based on the rounded rating
  const hasHalfStar = roundedRating > rating;

  return (
    <div className={className}>
      {Array.from({ length: totalStars }, (_, i) => (
        <Star
          key={i}
          filled={i < flooredRating}
          half={hasHalfStar && i < roundedRating}
        />
      ))}
    </div>
  );
}
