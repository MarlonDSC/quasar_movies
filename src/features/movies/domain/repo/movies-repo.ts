import { injectable } from "inversify";
import type { ApiService } from "../../../../core/services/api-service";
import type { MovieApiResponse } from "../../data/models/movie-api-response";
import type { DataState } from "../../../../core/utils/data-state";
import { left, right } from "fp-ts/lib/Either";

export interface MoviesRepo {
    getContainers(): Promise<DataState<MovieApiResponse>>;
}

@injectable()
export class MoviesRepoImpl implements MoviesRepo {
    private api: ApiService;

    constructor(api: ApiService) {
        this.api = api;
    }

    async getContainers(): Promise<DataState<MovieApiResponse>> {
        try {
            const response = await this.api.get<MovieApiResponse>('/movies.json');
            return right(response);
        } catch (error: any) {
            return left(`Error fetching containers ${error.message}`);
        }
    }
}
