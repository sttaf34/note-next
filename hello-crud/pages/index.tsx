import React from "react"
import { NextPage } from "next"

import {
  Movie,
  createMovie,
  readMovies,
  deleteMovie,
  updateMovie,
} from "../other/movie-data-manager"

//
// Context
//

interface Context {
  movies: Movie[]
  setNewMovies: (movies: Movie[]) => void
}

const initialContext: Context = {
  movies: [],
  setNewMovies: (movies: Movie[]): void => {
    console.log(movies)
  },
}

const MovieContext = React.createContext(initialContext)

//
// Child Component
//

const Form: React.FC = () => {
  // 自コンポーネント内の <input> 用のローカルステイト
  const [value, setValue] = React.useState("")

  const context = React.useContext(MovieContext)
  const { setNewMovies } = context

  const onChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setValue(event.currentTarget.value)
  }

  const onClick = (event: React.FormEvent<HTMLInputElement>): void => {
    event.preventDefault()

    // APIを通じて（な体で）サーバ上のデータを更新
    createMovie(value)

    // APIを通じて（な体で）サーバ上のデータを取得し、状態にセットする
    const newMovies = readMovies()
    setNewMovies(newMovies)

    setValue("")
  }

  return (
    <form>
      <input type="text" value={value} onChange={onChange} />
      <input type="submit" value="登録" onClick={onClick} />
    </form>
  )
}

const List: React.FC = () => {
  // useContext を使わない場合、
  // Page と Li の中間に位置するこのコンポーネントが props でいろいろ受け取り、
  // Li に渡すみたいなことをする必要があった
  const context = React.useContext(MovieContext)
  const { movies } = context

  const lis = movies.map((movie) => {
    return <Li key={movie.id} movie={movie} />
  })

  return <ul>{lis}</ul>
}

interface LiProps {
  movie: Movie
}

const Li: React.FC<LiProps> = (props: LiProps) => {
  const { movie } = props

  const [value, setValue] = React.useState(movie.title)

  const context = React.useContext(MovieContext)
  const { setNewMovies } = context

  const onChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setValue(event.currentTarget.value)
  }

  const onClickUpdate = (event: React.FormEvent<HTMLInputElement>): void => {
    event.preventDefault()
    const updatedMovie = updateMovie(movie.id, value)
    console.log(updatedMovie)
    const newMovies = readMovies()
    setNewMovies(newMovies)
  }

  const onClickDelete = (event: React.FormEvent<HTMLInputElement>): void => {
    event.preventDefault()
    deleteMovie(movie.id)
    const newMovies = readMovies()
    setNewMovies(newMovies)
  }

  return (
    <form>
      <input type="text" value={value} onChange={onChange} />
      <input type="submit" value="変更" onClick={onClickUpdate} />
      <input type="submit" value="削除" onClick={onClickDelete} />
    </form>
  )
}

//
// Export Component
//

const Page: NextPage = () => {
  const initialMovies = Array<Movie>()
  const [movies, setMovies] = React.useState(initialMovies)

  const context = {
    movies,
    setNewMovies: (newMovies: Movie[]): void => {
      setMovies(newMovies)
    },
  }

  React.useEffect(() => {
    console.log("useEffect")
    const newMovies = readMovies()
    setMovies(newMovies)
  }, [])

  return (
    <MovieContext.Provider value={context}>
      <Form />
      <List />
    </MovieContext.Provider>
  )
}

export default Page
