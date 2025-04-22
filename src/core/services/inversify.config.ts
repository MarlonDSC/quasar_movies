import "reflect-metadata";
import { Container } from "inversify";
import { ApiService } from "./api-service";
import { MoviesRepo, MoviesRepoImpl } from "../../features/movies/domain/repo/movies-repo";
import { TYPES } from "../constants/di-types";

const apiService = new ApiService();
const container = new Container();

container.bind<MoviesRepo>(TYPES.MoviesRepo).toDynamicValue(() => {
  return new MoviesRepoImpl(apiService);
});

export default container;
