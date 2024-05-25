const AddNews = () => {
  return (
    <div>
      <form className="card-body">
        <div className="form-control">
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="description"
            name="description"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="Img_url"
            name="img"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Add News</button>
        </div>
      </form>
    </div>
  );
};

export default AddNews;
