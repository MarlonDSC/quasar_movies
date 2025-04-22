export enum VideoQuality {
    UHD_4K = '4K UHD',
    HD = 'HD',
    SD = 'SD',
}

export const VideoQualityToString = (quality: VideoQuality): string => {
    return quality.toString();
}

export const VideoQualityFromString = (quality: string): VideoQuality => {
    return VideoQuality[quality as keyof typeof VideoQuality];
}
