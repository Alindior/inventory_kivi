export interface UseAsyncData<T> {
  data: T | undefined;
  isLoading: boolean;
  error: string | null;
}
