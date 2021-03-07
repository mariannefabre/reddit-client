export const Reddit = {
  Categories: [
    {
      id: 0,
      name: "Popular",
      urlToFetch: "https://www.reddit.com/best.json",
      icon: "faFire",
    },
    {
      id: 1,
      name: "Hot",
      urlToFetch: "https://www.reddit.com/r/popular/hot.json",
      icon: "faFire",
    },
    {
      id: 2,
      name: "New",
      urlToFetch: "https://www.reddit.com/r/popular/new.json",
      icon: "faFire",
    },
    {
      id: 3,
      name: "Rising",
      urlToFetch: "https://www.reddit.com/r/popular/rising.json",
      icon: "faChartLine",
    },
    {
      id: 4,
      name: "All",
      urlToFetch: "https://www.reddit.com/r/all.json",
      icon: "faChartLine",
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
