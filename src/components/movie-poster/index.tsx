"use client";

import { useState } from "react";
import Image from "next/image";
import { IMoviePoster } from "./types";
import styles from "./index.module.css";

export default function MoviePoster({
  backdrop_path,
  poster_path,
  title,
  original_title,
}: IMoviePoster) {
  const [src, setSrc] = useState(backdrop_path || poster_path);

  const handleMouseEnter = () => {
    setSrc(poster_path || backdrop_path);
  };
  const handleMouseLeave = () => {
    setSrc(backdrop_path || poster_path);
  };

  return (
    <Image
      src={`https://image.tmdb.org/t/p/original${src}`}
      alt={title || original_title || "movie poster"}
      width={200}
      height={200}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={styles.moviePoster}
    />
  );
}
