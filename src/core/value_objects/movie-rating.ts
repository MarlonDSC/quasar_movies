export enum MovieRating {
    R = 'R',
    PG_13 = 'PG-13',
    PG = 'PG',
}

export const MovieRatingToString = (rating: MovieRating): string => {
    return rating.toString();
}

export const MovieRatingFromString = (rating: string): MovieRating => {
    return MovieRating[rating as keyof typeof MovieRating];
}
