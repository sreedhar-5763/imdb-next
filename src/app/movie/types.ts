export interface IMoviesPage {
  searchParams: {
    genre?: string;
  };
}

export interface IErrorBoundary {
  error: Error;
  reset: () => void;
}
