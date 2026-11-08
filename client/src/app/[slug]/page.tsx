import DynamicPageRoute from '@/components/pages/DynamicPageRoute'
import { Suspense } from 'react'

const SlugPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  return (
    <div>
      <Suspense>
        <DynamicPageRoute params={params} />
      </Suspense>
    </div>
  )
}

export default SlugPage
