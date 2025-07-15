"use client";

import React, { useEffect, useState } from "react";
import ReactStars from "react-stars"; // or wherever your component is from

interface Props {
  rating: number;
}

const RatingStars: React.FC<Props> = ({ rating }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Don't render on server

  return (
    <ReactStars
      count={5}
      value={rating}
      edit={false}
      size={24}
      color2={"#FFD428"}
    />
  );
};

export default RatingStars;
