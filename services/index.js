import {  gql, GraphQLClient } from "graphql-request";
// const graphqlAPI = process.env.GRAPH_CMS_API;

const graphqlcms = new GraphQLClient(
  "https://api-eu-central-1.hygraph.com/v2/cl6o2s6mv0mdz01up7wvx63dg/master"
);

export const getPosts = async () => {
  const query = gql`
    {
      posts {
        author {
          id
          bio
          name
          photo {
            url
          }
        }
        createdAt
        id
        slug
        title
        excerpt
        image {
          url
        }
        categories {
          name
          slug
        }
      }
    }
  `;
  const {posts} = await graphqlcms.request(query);

  return posts;
};


export const getRecentPosts = async () => {
  const query = gql`
  query GetPostDetails(){
    posts(
      orderBy:createdAt_ASC
      last:2
      ){
        title
        image{
          url
        }
        createdAt
        slug
      }
  }
`
  const result = await graphqlcms.request(query);

  return result.posts; 
}



export const getSimilarPosts = async () => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 2
      ) {
        title
        image {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await graphqlcms.request(query);

  return result.posts;
};


export const getCategories = async () => {
  const query = gql`
  query GetCategories{
    categories{
      name
      slug
    }
  }
  `;
  const result = await graphqlcms.request(query);

  return result.categories;
};
