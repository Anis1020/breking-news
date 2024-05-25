import { useParams } from "react-router-dom";

const NewsDetails = () => {
  const { id } = useParams();
  //   const news = useLoaderData();
  console.log(id);
  //   console.log(news.find((aNews) => aNews.id == id));
  return <div>detail coming soon {id}</div>;
};

export default NewsDetails;
