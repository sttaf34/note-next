import React from "react"
import gql from "graphql-tag"
import { NextPage } from "next"
import ApolloClient from "apollo-boost"
import { ApolloProvider, useQuery } from "react-apollo"

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

client.query({ query }).then((result) => console.log(result))

const Component = () => {
  const { loading, error, data } = useQuery(query)

  if (loading) {
    return <p>通信中</p>
  }
  if (error) {
    return <p>エラーです</p>
  }

  console.log(data)
  return (
    <>
      <p>データが取れました</p>
    </>
  )
}

const Page: NextPage = () => {
  return (
    <ApolloProvider client={client}>
      <Component />
    </ApolloProvider>
  )
}

export default Page
