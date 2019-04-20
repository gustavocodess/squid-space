import { gql } from 'apollo-boost'


export const getPostsQuery = gql`
  query {
    posts (orderBy: createdAt_DESC){
      createdAt
      title
      id
      description
      type
      postCreator {
        id
        avatarPath
        name
      }
    }
  }
`

export const getPostById = gql`
  query GetPost($id: ID) {
    post(where: { id: $id }) {
      status
      updatedAt
      createdAt
      id
      title
      description
      image {
        status
        updatedAt
        createdAt
        id
        handle
        fileName
        height
        width
        size
        mimeType
      }
      bookUrl
      videoUrl
      audioUrl
      creationDate
      updateDate
      type
      postCreator {
        id
        avatarPath
        name
      }
    }
  }
`
