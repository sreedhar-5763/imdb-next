export interface IMoveDetailsPage {
  params: {
    id: string;
  };
}

export interface IErrorBoundary {
  error: Error;
  reset: () => void;
}
