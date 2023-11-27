export const ReactQuerySnippets: string = `
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchData } from '../../lib/fetchData'
import type { Photos } from '../../@types/types'
import ListPhotos from './ListPhotos'

export default function ReactQuery() {
  const { isLoading, error, data } = useQuery<Photos[], Error>({
      queryKey: ["photosKey"],
      queryFn: fetchData,
  }) 

  if (isLoading) return <div>Chargement...</div>;
  if (error) return <div>Erreur : {error.message}</div>;

  return (
  <div className='bg-slate-700'>
      <h1 className='text-3xl text-white m-12'>Fetching data with react query
      </h1>
      <ul>
          {
              data?.slice(0, 10).map((photos) => (
                  <ListPhotos key={photos.id} photos={photos} />
              ))
          }
      </ul>
  </div>
)
}  
`;