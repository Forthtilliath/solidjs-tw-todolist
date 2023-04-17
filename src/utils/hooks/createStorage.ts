import { createEffect } from "solid-js";
import { createStore, Store, SetStoreFunction } from "solid-js/store";

export function createStorage<T extends object>(
  initialState: T,
  key: string,
  storage = localStorage
): [Store<T>, SetStoreFunction<T>] {
  const [state, setState] = createStore(initialState);
  if (storage.getItem(key)) {
    try {
      setState(JSON.parse(storage.getItem(key)!));
    } catch (error) {
      setState(initialState);
    }
  }
  createEffect(() => {
    storage.setItem(key, JSON.stringify(state));
  });
  return [state, setState];
}
