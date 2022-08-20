import { GraphQLClient, gql } from "graphql-request";

const graphqlAPI =
  "https://api-eu-central-1.hygraph.com/v2/cl6o2s6mv0mdz01up7wvx63dg/master";

/** *************************************************************
 * Any file inside the folder pages/api is mapped to /api/* and  *
 * will be treated as an API endpoint instead of a page.         *
 *************************************************************** */

// export a default function for API route to work
export default async function asynchandler(req, res) {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NjA5ODc1MzEsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuaHlncmFwaC5jb20vdjIvY2w2bzJzNm12MG1kejAxdXA3d3Z4NjNkZy9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNDEwNjQ4NjQtZWU1OS00MjRlLWI3ZWYtYzk5MDIxZDEyNzc1IiwianRpIjoiY2w3MXAzOWZtMmJlaDAxdWhnZjBrZ3h2aCJ9.W4UtBsh0w655bBBUm90y6N5pVVQMlrMpf2kMNS5bN_to4sKuVJi7nvnyNELiOtyZHkfwxj7ZcnOWop7XvnXDiUHW59xiVLKv2GqXlGHkWH-apSryXSG5YvaQhVIFozLGxrmMO8a4PZ46SUvq0HxgEeY0W2no4eg8DgxtVsMC0rXkUM8tEt05pZuUnnmuZRYnysfjoJZBG4QxWEyxUTImQMwJ30-9zWcmDN8BirjcgCiqT2VQPG_1fj57ZpeK4Hm3fiSyIIUhnd9jyXHsECDEzOcoMXKmGeVVLF2tvNX5O5pg56pVuRlNevEihsrLX0jTmP-nfCYMS4KszbUyZhUokrqv3OtE8VpIPzIlPxilcw1TnLOKT8PbTtNSL_hqmkjet8ejBQ6qd_m0c3flTHT2Oj6DMVqgQRaGygAnOdxFLLh0OdE1Opq-kprzSHIovrZwL6yIFGhyKr2pvMt66Xm7Hqr7oRYLgv-qQzFAqdyPx_C4Kn42KIoirZ3hgnTpn-ZWcPYAoZiK3ji1Ya5ZWQCHoaylyw3-jjgAT50nn9y06lBMTGAVfhfae7N1JgHFmQMGJfAfcRZ7ieUO9ssXI2U-Fj-I97GMHaHE-PCTX78vc-45pSs92znKF6ya_oWeNyBvg9qJWlYRpcZCwpBu6dDX3I2Bf5eZiPnMd9DZISKLHYI"}`,
    },
  });

  const query = gql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `;

  const result = await graphQLClient.request(query, {
    name: req.body.name,
    email: req.body.email,
    comment: req.body.comment,
    slug: req.body.slug,
  });

  return res.status(200).send(result);
}
