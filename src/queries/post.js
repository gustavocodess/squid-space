import { gql } from 'apollo-boost'


export const getPostsQuery = gql`
  {
    posts {
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
    post(id: $id) {
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
