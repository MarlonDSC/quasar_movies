export enum ContentRating {
    ADULT = '+18',
    TEEN = '+13',
    ALL = 'All',
}

export const ContentRatingToString = (rating: ContentRating): string => {
    return rating.toString();
}

export const ContentRatingFromString = (rating: string): ContentRating => {
    return ContentRating[rating as keyof typeof ContentRating];
}

