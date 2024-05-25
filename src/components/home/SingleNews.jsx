import { Link } from "react-router-dom";

const SingleNews = ({ newsItem }) => {
  //   console.log(newsItem);
  const { details, image_url, title, id } = newsItem;
  return (
    <div>
      <div className="card mb-4 bg-base-100 shadow-xl">
        <figure>
          <img src={image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details.length < 200 ? details : details.slice(0, 200)}</p>
          <div className="card-actions justify-end">
            <Link to={`/details/${id}`}>
              <button className="btn btn-primary">See Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;
