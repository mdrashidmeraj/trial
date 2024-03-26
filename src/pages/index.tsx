import { FC, useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";

type IndexProps = {
  news: any;
};
const IndexPage: FC<IndexProps> = (props) => {
  // const api = ⁠ https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f374be604b1f4a5b81c32502751e1c3a ⁠;

  // const [data, setData] = useState<any>(null);

  // const fetchData = async () => {
  //   const res = await fetch(api);
  //   const jsonData = await res.json();
  //   setData(jsonData);
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // console.log(data);
  const data = props?.news;
  return (
    <>
      <h1>Home</h1>
      <h1>{data?.articles.length}</h1>
      <div>
        {data?.articles.map((item: any) => (
          <div key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = await api.getSlugs();

//   return {
//     paths: paths, //indicates that no page needs be created at build time
//     fallback: "blocking", //indicates the type of fallback
//   };
// };

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const api = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f374be604b1f4a5b81c32502751e1c3a`;

  const data = await fetch(api);
  const news = await data.json();

  return { props: { news } };
};

export default IndexPage;
