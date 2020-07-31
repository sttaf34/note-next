import React from "react"
import { NextPage } from "next"
import axios from "axios"

const host = "https://sttaf34-netlify-functions.netlify.app"
const path = "/.netlify/functions/allow-origin"
// const path = "/.netlify/functions/parrot?code=404"

const Page: NextPage = () => {
  const [value, setValue] = React.useState(0)
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState<Error | null>(null)

  const onClickA = (): void => {
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
  }

  return (
    <>
      <button type="button" onClick={onClickA}>
        ボタン
      </button>
      <hr />
      {isLoading ? <span>通信中</span> : <span>{value}</span>}
      <hr />
      {error ? <span>{error.message}</span> : <></>}
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page
