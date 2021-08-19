export default function Home({ time }) {
  return <div>{time}</div>;
}

export async function getStaticProps() {
  const json = await fetch(process.env.API_ENDPOINT).then((res) => res.json());
  return {
    props: json,
    revalidate: 60,
  };
}
