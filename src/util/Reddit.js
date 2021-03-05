export const Reddit = {
  Categories: [
    {
      id: 0,
      name: "Popular",
      urlToFetch: "https://www.reddit.com/r/popular.json",
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
  ],

  getPosts(url) {
    return fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((jsonResponse) => {
        const posts = jsonResponse.data.children.map((post) => {
          return {
            id: post.data.id,
            url: post.data.url,
            author: post.data.author,
            title: post.data.title,
            utcCreationDate: post.data.created_utc,
            subreddit: post.data.subreddit_name_prefixed,
            thumbnail: post.data.thumbnail,
            ups: post.data.ups,
            nbComments: post.data.num_comments,
            score: post.data.score,
          };
        });
        return posts;
      })
      .catch((error) => console.log(error));
  },
};
