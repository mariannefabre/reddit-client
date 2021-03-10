import React from 'react';
import {PostsList} from '../components/posts/PostsList';


function Home(props) {
  
  const path = props.location.pathname;
  
  return (
    <div className="home">
          <section className="container">
         {/* <SideNav currentCategoryId={props.currentCategoryId} onClick={handleClick} />  */}
        <PostsList currentPath={path} />
      </section>
    </div>
  )
}

export default Home
