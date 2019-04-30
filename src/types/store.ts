export type Reducer<T> = (currentState: T, payload: any) => void;

export interface Store<T> {
  state: T,
  subscribers: { [key: string]: Function };
  reducers: { [key: string]: Reducer<T>};
  subscribe(callback: Function): string;
  unsubscribe(id: string): void;
  notifyUpdate(): void;
  commiteChange(reducerName: string, payload: any): void
}
