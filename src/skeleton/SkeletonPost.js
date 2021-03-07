import "./SkeletonPost.css";
import Shimmer from "./Shimmer";

export const SkeletonPost = () => {
  return (
    <div className="postSkeleton">
      <Shimmer />
      <div className="inline">
        <div className="skeleton info"></div>
        <div className="skeleton info"></div>
      </div>
      <div className="skeleton title"></div>
      <div className="skeleton thumbnail"></div>
      <div className="inline">
        <div className="skeleton info"></div>
        <div className="skeleton info"></div>
        <div className="skeleton info"></div>
      </div>
    </div>
  );
};
