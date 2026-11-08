import { HeroSection } from '@/components/blocks/HeroSection'
import { getHomePage } from '@/utils/data/loaders'
import { notFound } from 'next/navigation'
import { InfoBlock } from '../blocks/InfoBlock'
import { BlockRenderer } from '../BlockRenderer'

async function loader() {
  const data = await getHomePage()
  if (!data) notFound()
  return data.data
}

const HomePageComponent = async () => {
  const data = await loader()
  console.log(data)
  const blocks = data?.blocks || []
  return (
    <div>
      <BlockRenderer blocks={blocks} />
    </div>
  )
}

export default HomePageComponent
