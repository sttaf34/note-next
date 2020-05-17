const endpoint = "http://localhost:23306/movies"

export interface Movie {
  id: number
  title: string
}

// curl -X POST http://localhost:23306/movies -d 'title=Rocky5'
export const createMovie = async (title: string): Promise<Movie> => {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  })
  const movie: Movie = await response.json()
  return movie
}

// curl -X GET http://localhost:23306/movies
export const readMovies = async (): Promise<Movie[]> => {
  const response = await fetch(endpoint)
  const movies: Movie[] = await response.json()
  return movies
}

// curl -X PATCH http://localhost:23306/movies/1 -d 'title=Titanic'
export const updateMovie = async (
  id: number,
  newTitle: string
): Promise<Movie> => {
  const response = await fetch(`${endpoint}/${id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: newTitle }),
  })
  const updatedMovie: Movie = await response.json()
  return updatedMovie
}

// curl -X DELETE http://localhost:23306/movies/2
export const deleteMovie = async (id: number): Promise<void> => {
  await fetch(`${endpoint}/${id}`, {
    method: "DELETE",
  })
}
