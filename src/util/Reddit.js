import {AiOutlineRise, AiFillFire} from "react-icons/ai";
/* import { faFire, faChartLine } from "@fortawesome/free-solid-svg-icons"; */
import "./Reddit.css";

export const Reddit = {
  
  Categories: [
    {
      id: 0,
      name: "Popular",
      path: '/popular',
      urlToFetch: "https://www.reddit.com/best.json",
      icon: <AiFillFire className="icon"/>
    },
    {
      id: 1,
      name: "Hot",
      path: '/hot',
      urlToFetch: "https://www.reddit.com/r/popular/hot.json",
      icon: <AiFillFire className="icon"/>,
    },
    {
      id: 2,
      name: "New",
      path: '/new',
      urlToFetch: "https://www.reddit.com/r/popular/new.json",
      icon: <AiFillFire className="icon"/>,
    },
    {
      id: 3,
      name: "Rising",
      path: '/rising',
      urlToFetch: "https://www.reddit.com/r/popular/rising.json",
      icon: <AiOutlineRise className="icon"/>,
    },
    {
      id: 4,
      name: "All",
      path: '/all',
      urlToFetch: "https://www.reddit.com/r/all.json",
      icon: <AiFillFire className="icon"/>,
    },
  ],

  setListProperties(jsonResponse){
    const posts = jsonResponse.data.children.map((post) => ({
      id: post.data.id,
      url: post.data.url,
      author: post.data.author,
      title: post.data.title,
      utcCreationDate: post.data.created_utc,
      subreddit: post.data.subreddit_name_prefixed,
      ups: post.data.ups,
      nbComments: post.data.num_comments,
      isVideo: post.data.is_video,
      ...(post.data.is_video && {
        fallbackUrl: post.data.media.reddit_video.fallback_url,
      }),
    }));
    const list = {
      nextList: jsonResponse.data.after,
      posts: posts,
    };
    return list;
  },

  
  getPostsList(url) {
    return fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((jsonResponse) => {
        console.log(jsonResponse);
        const list = this.setListProperties(jsonResponse);
        return list;
      })
      .catch((error) => console.log(error));
  },
};
