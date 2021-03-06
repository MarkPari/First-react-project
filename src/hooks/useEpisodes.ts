import React, { SetStateAction, Dispatch } from "react";
import { Episode } from "../models/Episode";
import { useData } from "./useData";

export const useEpisodes = (): [
  Episode[],
  Dispatch<SetStateAction<Episode[]>>,
  boolean,
  any
] => useData<Episode[]>("episode", [] as Episode[]);