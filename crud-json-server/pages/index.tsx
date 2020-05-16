import React from "react"
import { NextPage } from "next"

interface Movie {
  id: number
  title: string
}

const Page: NextPage = () => {
  const initialMovies: Movie[] = []
  const [movies, setMovies] = React.useState(initialMovies)

  const fetchMovies = async (): Promise<void> => {
    const endpoint = "http://localhost:23306/movies"
    const response = await fetch(endpoint)
    const newMovies: Movie[] = await response.json()
    setMovies(newMovies)
  }

  React.useEffect(() => {
    // TODO: try catch でエラー処理して、エラーメッセージの表示も作る
    fetchMovies()
  }, movies)

  const lis = movies.map((movie) => {
    return (
      <li key={movie.id}>
        <span>{movie.id}</span>
        <span>{movie.title}</span>
      </li>
    )
  })

  return (
    <div>
      <ul>{lis}</ul>
    </div>
  )
}

export default Page
