import { retrieveUrl } from '../constants/url'

type LoaderType = {
  data: {
    id: number
    documentId: string
    title: string
    description: string
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
  meta: any
}

async function loader(): Promise<LoaderType> {
  const response = await fetch(retrieveUrl('/api/home-page').href)
  const data = await response.json()
  return data
}

const HomePageComponent = async () => {
  const { data } = await loader()
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  )
}

export default HomePageComponent
