import { useEffect } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { fetchPosts, fetchRemovePosts } from "../../redux/slices/posts";
import Spiner from "../../components/Spiner";
import { Post, UsersState } from "../../types";
import { userId } from "../../redux/slices/auth";

const AllUserCarsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { posts }: any = useSelector<UsersState>((state) => state.posts);
  const isPostsLoading = posts.status === "loading";
  const isUserId = useSelector(userId);

  useEffect(() => {
    dispatch(fetchPosts(isUserId));
  }, []);

  const onRemovePost = (id: string) => {
    dispatch(fetchRemovePosts(id));
  };

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
                    <button
                      onClick={() => onRemovePost(obj._id)}
                      className="card_btn delete"
                    >
                      DELETE
                    </button>
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

export default AllUserCarsPage;
