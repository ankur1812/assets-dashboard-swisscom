export interface ApiError {
    header: string;
    message: string;
    name: string;
}

export interface ErrorObject {
    error: {
        error: ApiError
    }
}