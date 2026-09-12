export interface Dataset {
    description?: string;
    distribution?: any[];
    id?: string;
    items?: any[];
    keyword?: any[];
    modified?: string;
    page?: number;
    pageSize?: number;
    publisher?: Record<string, any>;
    theme?: any[];
    title?: string;
    totalResults?: number;
}
export interface DatasetLoadMatch {
    id: string;
}
export interface Distribution {
    items?: any[];
    page?: number;
    pageSize?: number;
    totalResults?: number;
}
export interface DistributionLoadMatch {
    format?: string;
    page?: number;
    page_size?: number;
    sort?: string;
}
