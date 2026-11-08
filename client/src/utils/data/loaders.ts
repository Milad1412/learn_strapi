import { retrieveUrl } from '@/app/constants/url-maker'
import { fetchAPI } from '../fetch-api'
import qs from 'qs'

const homePageQuery = qs.stringify({
  populate: {
    blocks: {
      on: {
        'blocks.hero-section': {
          populate: {
            image: {
              fields: ['url', 'alternativeText'],
            },
            logo: {
              populate: {
                image: {
                  fields: ['url', 'alternativeText'],
                },
              },
            },
            cta: true,
          },
        },
        'blocks.info-block': {
          populate: {
            image: {
              fields: ['url', 'alternativeText'],
            },
            cta: true,
          },
        },
      },
    },
  },
})

const pageBySlugQuery = (slug: string) =>
  qs.stringify({
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      blocks: {
        on: {
          'blocks.hero-section': {
            populate: {
              image: {
                fields: ['url', 'alternativeText'],
              },
              logo: {
                populate: {
                  image: {
                    fields: ['url', 'alternativeText'],
                  },
                },
              },
              cta: true,
            },
          },
          'blocks.info-block': {
            populate: {
              image: {
                fields: ['url', 'alternativeText'],
              },
              cta: true,
            },
          },
        },
      },
    },
  })

export async function getHomePage() {
  const url = retrieveUrl('/api/home-page')
  url.search = homePageQuery

  return await fetchAPI(url.href, { method: 'GET' })
}

export async function getPageBySlug(slug: string) {
  const url = retrieveUrl('/api/pages')
  url.search = pageBySlugQuery(slug)
  return await fetchAPI(url.href, { method: 'GET' })
}
