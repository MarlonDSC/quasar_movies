import { ContainerId, ContainerLayout } from "../../../../core/types";
import { Movie } from "./movie";

export interface Container {
    id: ContainerId;
    title: string;
    layout: ContainerLayout;
    items: Movie[];
  }