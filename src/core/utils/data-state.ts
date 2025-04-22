import { Either } from "fp-ts/lib/Either";

export type DataState<T> = Either<string, T>;