import { join } from "path"
import { readdirSync, statSync } from "fs"

export const expandTilde = (filePath: string): string => {
  if (filePath.length === 0 || process.env.HOME == null) {
    return filePath
  }

  if (filePath[0] === "~") {
    return join(process.env.HOME, filePath.slice(1))
  }
  return filePath
}

const isFile = (fullPath: string): boolean => {
  const stats = statSync(fullPath)
  return stats.isFile()
}

// ディレクトリの絶対パスを元に、
// 階層下のファイルとディレクトリの絶対パスの配列を返す（一階層下のみ）
const readFullPathsFromPath = (fullDirPath: string): string[] => {
  const paths = readdirSync(fullDirPath)
  return paths.map((path) => {
    return join(fullDirPath, path)
  })
}

// 絶対パスの配列を元に、
// 階層下のファイルの絶対パスの配列を返す（下階層すべて）
export const readFullPathsRecursively = (fullPaths: string[]): string[] => {
  // 全部がファイルだったときが再帰の終了条件
  const isFileAll = fullPaths.every((fullPath) => isFile(fullPath))
  if (isFileAll) {
    return fullPaths
  }

  // 一階層だけ広げて自分を呼んで、全部まとめてから返す
  let resultFullPaths = Array<string>()
  fullPaths.forEach((fullPath) => {
    if (isFile(fullPath)) {
      resultFullPaths.push(fullPath)
    } else {
      let paths = readFullPathsFromPath(fullPath)
      paths = readFullPathsRecursively(paths)
      resultFullPaths = resultFullPaths.concat(paths)
    }
  })
  return resultFullPaths
}
