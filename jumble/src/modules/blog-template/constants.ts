export const Color = {
  Black: "#222222",
  BlackGray1: "#363636",
  BlackGray2: "#555555",
  BlackGray3: "#888888",
  Gray: "#aaaaaa",
  whiteGray1: "#dddddd",
  whiteGray2: "#eeeeee",
  whiteGray3: "#f5f5f5",
  White: "#ffffff",

  Pink: "#e7466c",
  Red: "#ff0000",
  Blue: "#1684f7",
} as const

export const SizeMediaSmall = {
  ContentsWidth: "85%",
} as const

export const SizeMediaLarge = {
  MediaQuery: "@media(min-width: 900px)",
  ContentsWidth: 800,
} as const
