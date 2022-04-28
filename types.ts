export interface Car {
    id: string,
    modelName: string,
    bodyType: string,
    modelType: string,
    imageUrl: string
}

export interface NavigationProps {
    selectedIndex: number, 
    carsList: Car[], 
    scrollTo: (index: number) => void,
    scrollNext: () => void,
    scrollPrev: () => void,
}