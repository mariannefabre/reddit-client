
export const Reddit = {

  getPopularPageData () {
    const urlToFetch = "https://www.reddit.com/r/popular.json";

    return fetch(urlToFetch).then(response => {
      if(response.ok){
        return response.json();
      }}).then(jsonResponse => {
        console.log(jsonResponse.data.children);
        const posts = jsonResponse.data.children.map((post) => {
          return {
            id: post.data.id,
            author: post.data.author,
            title: post.data.title,
            date: post.data.created,
            subreddit: post.data.subreddit_name_prefixed,
            thumbnail: post.data.thumbnail,
            ups: post.data.ups,
            nbComments: post.data.num_comments,
          };
      })
      return posts;
      }).catch(error => console.log(error))
  }
/*     try {
      const response = await fetch(urlToFetch, {
        headers: {
          Authorization: `Bearer ${userAccessToken}`,
        },
      });
  } */
 
}
