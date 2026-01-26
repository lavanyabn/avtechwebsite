// const WP_API = process.env.WP_GRAPHQL_URL!;
const WP_API = 'http://avtech.local/graphql';

export async function fetchGraphQL(query: string) {
  const res = await fetch(WP_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
    next: { revalidate: 60 },
  });

  const json = await res.json();
//   console.log('GraphQL Response:', json.data);
  return json.data;
}
