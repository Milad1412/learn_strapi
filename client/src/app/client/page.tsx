import { Suspense } from 'react'
import ClientComponent from '../../components/pages/ClientComponent'

const ClientPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading from suspense</div>}>
        <ClientComponent />
      </Suspense>
    </div>
  )
}

export default ClientPage
