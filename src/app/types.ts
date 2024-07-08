export interface IHome {
  searchParams: {
    genre?: string;
  };
}

export interface IErrorBoundary {
  error: Error;
  reset: () => void;
}
