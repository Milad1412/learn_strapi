import { Suspense } from 'react'
import HomePageComponent from '../components/pages/HomePageComponent'

export default function Home() {
  return (
    <Suspense>
      <HomePageComponent />
    </Suspense>
  )
}
