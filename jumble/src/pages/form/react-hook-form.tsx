import React from "react"
import { NextPage } from "next"
import { useForm } from "react-hook-form"

type Inputs = {
  example: string
  exampleRequired: string
}

const Page: NextPage = () => {
  const { register, handleSubmit, errors } = useForm<Inputs>()
  const onSubmit = (data: Inputs) => console.log(data)

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="example" defaultValue="test" ref={register} />

        <input name="exampleRequired" ref={register({ required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page
