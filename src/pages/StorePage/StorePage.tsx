import { useParams } from "react-router-dom";
import { useEffect } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { fetchPosts } from "../../redux/slices/posts";
import Spiner from "../../components/Spiner";
import { Post, UsersState } from "../../types";

const StorePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { posts }: any = useSelector<UsersState>((state) => state.posts);
  const isPostsLoading = posts.status === "loading";
  const { brand } = useParams();
  console.log(posts);

  useEffect(() => {
    dispatch(fetchPosts(brand as string));
  }, []);
  return (
    <>
      <div className="store_container">
        {isPostsLoading ? (
          <div className="container_spiner">
            <Spiner />
          </div>
        ) : (
          posts.items.map((obj: Post) =>
            isPostsLoading ? (
              <div className="container_spiner">
                <Spiner />
              </div>
            ) : (
              <div key={obj._id} className="card_container">
                <div className="card_wrapper">
                  <div
                    className="card_banner-image"
                    style={{
                      backgroundImage: `url(http://localhost:5555/${obj.imageUrls[0]})`,
                    }}
                  ></div>
                  <h1 className="model_name">
                    {obj.brand} {obj.model}
                  </h1>
                  <p>{obj.price}</p>
                  <div className="card_button-wrapper">
                    <Link
                      className="card_btn"
                      to={`/store/${obj.brand}/${obj._id}`}
                    >
                      <button className="card_btn outline">DETAILS</button>
                    </Link>
                    <button className="card_btn fill">BUY NOW</button>
                  </div>
                </div>
              </div>
            )
          )
        )}
      </div>
    </>
  );
};

export default StorePage;
