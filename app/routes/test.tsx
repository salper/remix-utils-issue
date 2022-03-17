import type { LoaderFunction } from "remix";
import { notFound } from "remix-utils";

export const loader: LoaderFunction = () => {
  throw notFound("For test");
};
