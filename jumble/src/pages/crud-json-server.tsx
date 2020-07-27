import React from "react"
import { NextPage } from "next"

import {
  Movie,
  createMovie,
  readMovies,
  updateMovie,
  deleteMovie,
} from "src/modules/crud-json-server/movieDataManager"

//
// Context
//

interface Context {
  movies: Movie[]
  setNewMovies: (movies: Movie[]) => void
  setNewMessage: (message: string) => void
}

const initialContext: Context = {
  movies: [],
  setNewMovies: (movies: Movie[]): void => {
    console.log(movies)
  },
  setNewMessage: (message: string): void => {
    console.log(message)
  },
}

const MovieContext = React.createContext(initialContext)

//
// Child Component
//

const Form: React.FC = () => {
  const [value, setValue] = React.useState("")

  const context = React.useContext(MovieContext)
  const { setNewMovies, setNewMessage } = context

  const onChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setValue(event.currentTarget.value)
  }

  const onClick = (event: React.FormEvent<HTMLInputElement>): void => {
    event.preventDefault()
    setValue("")
    ;(async (): Promise<void> => {
      const newMovie = await createMovie(value)
      const message = newMovie
        ? `「${newMovie.title}」を登録しました`
        : `登録できなかったようです`
      setNewMessage(message)
      const newMovies = await readMovies()
      setNewMovies(newMovies)
    })()
  }

  return (
    <form>
      <input type="text" value={value} onChange={onChange} />
      <input type="submit" value="登録" onClick={onClick} />
    </form>
  )
}

const List: React.FC = () => {
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
  const { setNewMovies, setNewMessage } = context

  const onChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setValue(event.currentTarget.value)
  }

  const onClickUpdate = (event: React.FormEvent<HTMLInputElement>): void => {
    event.preventDefault()
    ;(async (): Promise<void> => {
      const newMovie = await updateMovie(movie.id, value)
      const message = newMovie
        ? `「${movie.title}」を「${newMovie.title}」に変更しました`
        : `変更できなかったようです`
      setNewMessage(message)
      const newMovies = await readMovies()
      setNewMovies(newMovies)
    })()
  }

  const onClickDelete = (event: React.FormEvent<HTMLInputElement>): void => {
    event.preventDefault()
    ;(async (): Promise<void> => {
      await deleteMovie(movie.id)
      const newMovies = await readMovies()
      setNewMovies(newMovies)
      setNewMessage(`「${movie.title}」を削除しました`)
    })()
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
  const [movies, setMovies] = React.useState(Array<Movie>())
  const [message, setMessage] = React.useState("")

  const context = {
    movies,
    setNewMovies: (newMovies: Movie[]): void => {
      setMovies(newMovies)
    },
    setNewMessage: (newMessage: string): void => {
      setMessage(newMessage)
    },
  }

  React.useEffect(() => {
    ;(async (): Promise<void> => {
      const newMovies = await readMovies()
      setMovies(newMovies)
    })()
  }, [])

  return (
    <MovieContext.Provider value={context}>
      <p>{message}</p>
      <Form />
      <List />
    </MovieContext.Provider>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page
