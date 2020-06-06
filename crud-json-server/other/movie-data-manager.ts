const endpoint = "http://localhost:23306/movies"

// fetch 周りのエラー処理は省略、別プロジェクトにまとめる

export interface Movie {
  id: number
  title: string
}

const isMovie = (object: {}): object is Movie => {
  return "id" in object && "title" in object
}

// curl -X POST http://localhost:23306/movies -d 'title=Rocky5'
export const createMovie = async (title: string): Promise<Movie | null> => {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  })
  const object = await response.json()
  if (isMovie(object)) {
    return object
  }
  return null
}

// curl -X GET http://localhost:23306/movies
export const readMovies = async (): Promise<Movie[]> => {
  const response = await fetch(endpoint)
  const object = await response.json()
  if (Array.isArray(object)) {
    const movies = object.filter(isMovie)
    return movies
  }
  return []
}

// curl -X PATCH http://localhost:23306/movies/1 -d 'title=Titanic'
export const updateMovie = async (
  id: number,
  newTitle: string
): Promise<Movie | null> => {
  const response = await fetch(`${endpoint}/${id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: newTitle }),
  })
  const object = await response.json()
  if (isMovie(object)) {
    return object
  }
  return null
}

// curl -X DELETE http://localhost:23306/movies/2
export const deleteMovie = async (id: number): Promise<void> => {
  await fetch(`${endpoint}/${id}`, {
    method: "DELETE",
  })
}
