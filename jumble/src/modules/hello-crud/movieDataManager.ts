export interface Movie {
  id: number
  title: string
}

let movies = [
  { id: 1, title: "Chicken Run" },
  { id: 2, title: "Solyaris" },
  { id: 3, title: "MacGruber" },
  { id: 4, title: "D.O.A." },
  { id: 5, title: "Giliap" },
]

const findMovieById = (id: number): Movie | undefined => {
  return movies.find((movie) => movie.id === id)
}

export const createMovie = (title: string): void => {
  const ids = movies.map((movie) => movie.id)
  const maxId = Math.max(...ids)
  const newMovie = {
    id: maxId + 1,
    title,
  }
  movies.push(newMovie)
}

export const readMovies = (): Movie[] => {
  // 素直に return movies した場合、
  // 同じ配列インスタンスを返すことになってしまい、
  // React が等しいと判定してしまって再レンダリングされない
  // https://ja.stackoverflow.com/questions/57786/
  // https://ja.reactjs.org/docs/hooks-reference.html#bailing-out-of-a-state-update
  return movies.slice()

  // API経由でサーバのデータを返すのであれば、
  // 配列を新たに作って返すことになるので、React は異なると判定するはず
}

export const updateMovie = (id: number, title: string): Movie | undefined => {
  const movie = findMovieById(id)
  if (movie === undefined) {
    return undefined
  }
  movie.title = title
  return movie
}

export const deleteMovie = (id: number): boolean => {
  const before = movies.length
  movies = movies.filter((book) => book.id !== id)
  const after = movies.length
  return before > after
}
