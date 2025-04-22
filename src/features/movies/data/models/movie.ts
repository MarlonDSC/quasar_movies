import { MovieRating, VideoQuality } from "../../../../core/types";
import { CastMember } from "./cast-member";
import { Classification } from "./classification";
import { MovieCrew } from "./movie-crew";
import { MoviePoster } from "./movie-poster";

export interface Movie {
    id: string;
    title: string;
    year: number;
    duration: string;
    rating: MovieRating;
    quality: VideoQuality;
    description: string;
    isTopMovie: boolean;
    similarContent: string[];
    posters: MoviePoster;
    cast: CastMember[];
    crew: MovieCrew;
    classification: Classification;
  }