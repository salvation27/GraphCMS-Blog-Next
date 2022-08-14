import { request, gql } from "graphql-request";
// const graphqlAPI = process.env.GRAPH_CMS_API;
const graphqlAPI = 'https://api-eu-central-1.hygraph.com/v2/cl6o2s6mv0mdz01up7wvx63dg/master';
export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              id
              bio
              name
              photo {
                url
              }
            }
            createdAt
            slug
            title
            id
            excerpt
            image {
              url
              id
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;
  const res = await request(graphqlAPI, query);
//   return res.postConnection.edges
  return res.postsConnection.edges;
};
