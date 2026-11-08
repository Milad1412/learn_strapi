import { Suspense } from 'react'
import HomePageComponent from './components/HomePageComponent'

export default function Home() {
  return (
    <Suspense>
      <HomePageComponent />
    </Suspense>
  )
}
