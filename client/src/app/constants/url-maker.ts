import { getStrapiURL } from '@/utils/get-strapi-url'

export const retrieveUrl = (path: string) => {
  const BASE_URL = getStrapiURL()
  return new URL(path, BASE_URL)
}
