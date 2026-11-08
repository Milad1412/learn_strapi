export const retrieveUrl = (path: string) => {
    const BASE_URL = process.env.BASE_URL
    return new URL(path, BASE_URL)
}