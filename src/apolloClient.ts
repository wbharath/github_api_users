import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink
} from '@apollo/client'

import { onError } from '@apollo/client/link/error'

const errorLink = onError((errorResponse: any) => {
  if (errorResponse.graphQLErrors) {
    errorResponse.graphQLErrors.forEach((err: any) => {
      console.error(
        `[GraphQL error]: Message: ${err.message}, Location:${err.locations} , Path:${err.path}`
      )
    })
  }
  if (errorResponse.networkError) {
    console.error(`[Network Error]: ${errorResponse.networkError}`)
  }
})

const GITHUB_GRAPHQL_API = 'https://api.github.com/graphql'

const httpLink = new HttpLink({
  uri: GITHUB_GRAPHQL_API,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
  }
})

const link = ApolloLink.from([errorLink, httpLink])

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
})

export default client
