import {inject, injectable } from "inversify";
import { type MoviesRepo } from "../../domain/repo/movies-repo";
import { MovieApiResponse } from "../../data/models/movie-api-response";
import { action, makeAutoObservable, observable, runInAction } from "mobx";
import { fold } from "fp-ts/lib/Either";
import { Movie } from "../../data/models/movie";
import { Container } from "../../data/models/container";
import { TYPES } from "../../../../core/constants/di-types";
import container from "../../../../core/services/inversify.config";
import { ContainerId } from "../../../../core/types";

@injectable()
export class MoviesStore {
    @observable
    containers: Container[] = [];
    @observable
    isLoading: boolean = false;
    @observable
    error: string | null = null;
    
    constructor(
      @inject(TYPES.MoviesRepo) private moviesRepo: MoviesRepo,
    ) {
      makeAutoObservable(this);
    }

    @action
    async getContainers() {
        runInAction(() => {
            this.isLoading = true;
          });
          const result = await this.moviesRepo.getContainers();
          runInAction(() => {
            fold(
              (error: string) => {
                this.error = error;
                this.isLoading = false;
              },
              (data: MovieApiResponse) => {
                this.containers = data.containers;
                this.isLoading = false;
              }
            )(result);
          });
    }

    @action
    filterMoviesByContainerId(containerId: ContainerId): Movie[] {
        const container = this.containers.find(container => container.id === containerId);
        if (container) {
            return container.items;
        }
        return [];
    }
}

export const moviesStore = new MoviesStore(
  container.get(TYPES.MoviesRepo)
);