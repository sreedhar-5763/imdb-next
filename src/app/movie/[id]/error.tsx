"use client";

import { useEffect } from "react";
import { ErrorBoundary } from "@/components";
import { IErrorBoundary } from "./types";

export default function MoviesErrorBoundary({ error, reset }: IErrorBoundary) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <ErrorBoundary reset={reset} />;
}
