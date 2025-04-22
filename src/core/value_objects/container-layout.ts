export enum ContainerLayout {
    PORTRAIT = 'portrait-card',
    LANDSCAPE = 'landscape-card',
}

export const ContainerLayoutToString = (layout: ContainerLayout): string => {
    return layout.toString();
}

export const ContainerLayoutFromString = (layout: string): ContainerLayout => {
    return ContainerLayout[layout as keyof typeof ContainerLayout];
}