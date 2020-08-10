import React from "react"
import { NextPage } from "next"

// cd ~/Projects/note-express/ejs-file-upload && yarn develop
// ファイルアップロードを受け付けるサーバを起動しとく

const Page: NextPage = () => {
  const [currentFile, setFile] = React.useState<File | null>(null)
  const [loading, setLoading] = React.useState(false)

  // ブラウザ上でファイルをセットするとここが動作する
  const onChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const { files } = event.currentTarget
    if (files === null || files.length === 0) {
      return
    }
    setFile(files[0])
  }

  const upload = async (): Promise<void> => {
    if (currentFile == null) {
      return
    }

    setLoading(true)
    const formData = new FormData()
    formData.append("file", currentFile) // <input name="file"> のこと

    const response = await fetch("http://localhost:10300/upload", {
      method: "POST",
      body: formData,
    })
    console.log(response.text)
    setLoading(false)
  }

  return (
    <div>
      <input type="file" onChange={onChange} />
      <p>{currentFile ? currentFile.name : "セットされていません"}</p>
      <input type="submit" onClick={upload} />
      <p>{loading ? "通信中です" : "通信していません"}</p>
    </div>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page
