export interface APIResponse<T = unknown> {
  success: boolean;
  data: T;
  message?: string;
  metadata?: {
    total: number;
    pageCount: number;
  };
}
