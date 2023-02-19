import { Inter } from '@next/font/google'
import Results from './components/Results'
const inter = Inter({ subsets: ['latin'] })
const API_KEY = process.env.API_KEY

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending'
  const res = await fetch(`https://api.themoviedb.org/3/${genre === 'fetchTopRated' ? 'movie/top_rated' : "trending/all/week"
  }?api_key=${API_KEY}`,{next:{revalidate:3600}})
  const data = await res.json()
  const results = data.results


  return (
    <div className=''>
      <Results results={results} />
    </div>
  )
}
