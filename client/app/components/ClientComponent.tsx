'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'

type PostType = {
  userId: number
  id: number
  title: string
  body: string
}

const ClientComponent = () => {
  const [error, setError] = useState<null | string>(null)
  const [data, setData] = useState<PostType[] | []>([])

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await axios.get('https://jsonplaceholder.typicode.com/posts')
        if (data.status === 200) {
          setData(data.data)
        } else {
          setError('error happened')
        }
      } catch (error) {
        setError(error as string)
      } finally {
      }
    }

    getPosts()
  }, [])

  if (error) return <div className='text-red-500 text-lg font-bold'>Error happened</div>
  return (
    <div className='container mx-auto py-4'>
      <h1>Client component</h1>
      {data.map((item) => {
        const { body, id, title } = item
        return (
          <div key={id} className='p-2 bg-gray-100 rounded-lg my-2'>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ClientComponent
