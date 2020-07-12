import React from "react"
import { NextPage } from "next"
import Ajv from "ajv"

import { User } from "../others/user"

// https://github.com/quicktype/quicktype/
// こちらは import にまだ対応していないそうなので、今回は見送り
//
// https://github.com/YousefED/typescript-json-schema
// こちらを使ってる

// typescript-json-schema --required true --noExtraProps true ./tsconfig.json User -o schemaUser.json
// で生成した JSON Schema なファイルを import している
import scheme from "../schemaUser.json"

const validateSample = (object: unknown) => {
  const ajv = new Ajv()
  const validateUser = ajv.compile(scheme)
  if (validateUser(object)) {
    const userA = object as User
    console.log(userA.id, userA.name)
  } else {
    console.log(validateUser.errors)
  }
}

const Page: NextPage = () => {
  const objectA = {
    id: 1,
    name: "sttaf34",
  }
  validateSample(objectA) // OK

  // エラーになる例、具体的なエラーメッセージを用意してくれている
  validateSample(0)
  validateSample("")
  validateSample(null)
  validateSample(undefined)
  validateSample({ id: 777 }) // 足りないのはエラー
  validateSample({ id: 777, name: "sttaf34", age: 39 }) // 余分なのでエラー

  return (
    <>
      <p>テスト</p>
    </>
  )
}

export default Page
