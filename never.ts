function error(message: string): never {
  throw new Error(message);
}

function fail() {
  return error('fail');
}

function infiniteLoop(): never {
  while(true) {}
}

declare const a: string | number;

if (typeof a !== 'string') {
  a;
}

type Indexable<T> = T extends string ? T & {[index: string]: any} : never;