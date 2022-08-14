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
