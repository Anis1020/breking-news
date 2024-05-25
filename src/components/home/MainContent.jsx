import { useEffect } from "react";
import { useState } from "react";
import SingleNews from "./SingleNews";

const MainContent = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("http://localhost:3000/news");
        const data = await response.json();

        setNews(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchNews();
  }, []);
  return (
    <div className="col-span-6">
      {news.map((newsItem) => (
        <SingleNews key={newsItem._id} newsItem={newsItem}></SingleNews>
      ))}
    </div>
  );
};

export default MainContent;
