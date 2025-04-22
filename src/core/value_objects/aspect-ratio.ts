export enum AspectRatio {
    PORTRAIT = '2/3',
    LANDSCAPE = '16/9',
    THUMBNAIL = '4/3',
}

export const AspectRatioToString = (ratio: AspectRatio): string => {
    return ratio.toString();
}

export const AspectRatioFromString = (ratio: string): AspectRatio => {
    return AspectRatio[ratio as keyof typeof AspectRatio];
}

export const getAspectRatio = (ratio: AspectRatio): number => {
    switch (ratio) {
        case AspectRatio.PORTRAIT:
            return 2/3; // Matches '2/3' string value
        case AspectRatio.LANDSCAPE:
            return 16/9; // Matches '16/9' string value 
        case AspectRatio.THUMBNAIL:
            return 4/3; // Matches '4/3' string value
        default:
            return 1; // Default square ratio
    }
}
