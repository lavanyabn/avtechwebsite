const WP_API = `${process.env.NEXT_PUBLIC_WP_LINK}/graphql`;

console.log('Using WP_API:', WP_API);

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
