import { AiOutlineRise, AiFillFire } from "react-icons/ai";
import { IoIosRocket } from "react-icons/io";
import { TiStarburst } from "react-icons/ti";
import { IoStatsChart } from "react-icons/io5";
import "./Reddit.css";

export const categories = [
  {
    id: 0,
    name: "Popular",
    path: "/popular",
    urlToFetch: "https://www.reddit.com/best.json",
    icon: <IoIosRocket className="icon" />,
  },
  {
    id: 1,
    name: "Hot",
    path: "/hot",
    urlToFetch: "https://www.reddit.com/r/popular/hot.json",
    icon: <AiFillFire className="icon" />,
  },
  {
    id: 2,
    name: "New",
    path: "/new",
    urlToFetch: "https://www.reddit.com/r/popular/new.json",
    icon: <TiStarburst className="icon" />,
  },
  {
    id: 3,
    name: "Rising",
    path: "/rising",
    urlToFetch: "https://www.reddit.com/r/popular/rising.json",
    icon: <AiOutlineRise className="icon" />,
  },
  {
    id: 4,
    name: "All",
    path: "/all",
    urlToFetch: "https://www.reddit.com/r/all.json",
    icon: <IoStatsChart className="icon" />,
  },
];

export const Reddit = {
  setListProperties(jsonResponse) {
    const posts = jsonResponse.data.children.map((post) => ({
      id: post.data.id,
      url: post.data.url,
      author: post.data.author,
      title: post.data.title,
      text: post.data.selftext,
      thumbnail: post.data.thumbnail,
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

  getPostsList(path, nextPage) {
    if (path === "/") path = "/popular";
    let url;
    categories.forEach((category) => {
      if (path === category.path) {
        url = category.urlToFetch;
      }
    });
    if (nextPage) {
      url = url + "?" + nextPage;
    }
    return fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((jsonResponse) => {
        const list = this.setListProperties(jsonResponse);
        return list;
      })
      .catch((error) => console.log(error));
  },

  search(term) {
    const asString = encodeURIComponent(term);
    const url = "https://www.reddit.com/search.json?q=" + asString;
    return fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((jsonResponse) => {
        const list = this.setListProperties(jsonResponse);
        console.log(list);
        return list;
      })
      .catch((error) => console.log(error));
  },
};
