import React from "react"
import { NextPage } from "next"
import axios from "axios"

// https://www.robinwieruch.de/react-hooks-fetch-data
// https://qiita.com/ossan-engineer/items/c3853315f59dc20bc9dc

const host = "https://sttaf34-netlify-functions.netlify.app"
const path = "/.netlify/functions/allow-origin"
// const path = "/.netlify/functions/parrot?code=404"

// コンポーネントをマウントしたときに一回だけ動作する用
const useFetchRandomNumberA = () => {
  const [value, setValue] = React.useState(0)
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState<Error | null>(null)

  React.useEffect(() => {
    const fetchData = async () => {
      setError(null)
      setIsLoading(true)
      try {
        const result = await axios.get<number>(host + path)
        setValue(result.data)
      } catch (aError) {
        if (aError instanceof Error) {
          setError(aError)
        }
      }
      setIsLoading(false)
    }
    fetchData()
  }, [])

  return { value, isLoading, error }
}

// ボタンのクリックで動作する用
const useFetchRandomNumberB = () => {
  const [value, setValue] = React.useState(0)
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState<Error | null>(null)

  const fetchRandomNumber = async () => {
    setError(null)
    setIsLoading(true)
    try {
      const result = await axios.get<number>(host + path)
      setValue(result.data)
    } catch (aError) {
      if (aError instanceof Error) {
        setError(aError)
      }
    }
    setIsLoading(false)
  }

  return { value, isLoading, error, fetchRandomNumber }
}

const ComponentA: React.FC = () => {
  const { value, isLoading, error } = useFetchRandomNumberA()
  return (
    <>
      {isLoading ? <span>通信中</span> : <span>{value}</span>}
      <hr />
      {error ? <span>{error.message}</span> : <></>}
    </>
  )
}

const ComponentB: React.FC = () => {
  const { value, isLoading, error, fetchRandomNumber } = useFetchRandomNumberB()
  return (
    <>
      {isLoading ? (
        <button type="button" disabled>
          ボタン
        </button>
      ) : (
        <button type="button" onClick={fetchRandomNumber}>
          ボタン
        </button>
      )}
      <hr />
      {isLoading ? <span>通信中</span> : <span>{value}</span>}
      <hr />
      {error ? <span>{error.message}</span> : <></>}
    </>
  )
}

const Page: NextPage = () => {
  return (
    <>
      <ComponentA />
      <hr />
      <hr />
      <hr />
      <ComponentB />
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page
