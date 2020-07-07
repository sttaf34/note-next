import React from "react"
import gql from "graphql-tag"
import { config } from "dotenv"
import { NextPage } from "next"
import ApolloClient from "apollo-boost"

config()
console.log(process.env)

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  request: (operation) => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
      },
    })
  },
})

console.log(process.env.GITHUB_PERSONAL_ACCESS_TOKEN)

const query = gql`
  {
    organization(login: "apollographql") {
      repositories(first: 5) {
        nodes {
          id
          name
          url
          viewerHasStarred
          stargazers {
            totalCount
          }
        }
      }
    }
  }
`

// client.query({ query }).then((result) => console.log(result))

const Page: NextPage = () => {
  return (
    <>
      <h1>見出し</h1>
      <p>ああああ</p>
    </>
  )
}

export default Page
