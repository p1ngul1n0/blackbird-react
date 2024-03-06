export interface Site {
  app: string;
  "error-message": string;
  id: number;
  metadata: Record<string, string>[];
  "response-status": string;
  status: Status;
  url: string;
}

export interface SearchParams {
  date: string;
  "execution-time": number;
  "sites-number": number;
  username: string;
}

export interface ApiResponse {
  sites: Site[];
  "search-params": SearchParams;
}

export enum Status {
  NOT_FOUND = "NOT FOUND",
  FOUND = "FOUND",
  ERROR = "ERROR",
}
