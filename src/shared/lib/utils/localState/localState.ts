import { InitialData } from 'shared/types/dataTypes';

const STORE_KEY = 'redq-storage';

const setLocalState = <T extends keyof InitialData>(key: T, value: InitialData[T]) => {
  let storage: Map<keyof InitialData, InitialData[keyof InitialData]> | undefined =
    getLocalParseState();
  if (!storage) storage = new Map<keyof InitialData, InitialData[keyof InitialData]>();
  storage.set(key, value);

  localStorage.setItem(STORE_KEY, JSON.stringify(Array.from(storage)));
};

const getLocalState = <T extends keyof InitialData>(key: T): InitialData[T] | undefined => {
  const state = getLocalParseState();
  return state ? (state.get(key) as InitialData[T]) : undefined;
};

const getLocalParseState = () => {
  const state = localStorage.getItem(STORE_KEY);
  if (!state) return;

  const storage = new Map<keyof InitialData, InitialData[keyof InitialData]>(JSON.parse(state));
  return storage;
};

export { setLocalState, getLocalState };
