import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Title from "./Title";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";

function Main() {
    const navigate = useNavigate();
  const [posts, setPosts] = useState([
    {
      id: "0",
      description: "beautiful landscape",
      imageLink:
        "https://images.freeimages.com/images/large-previews/b1b/fairytale-1-1388922.jpg",
    },
    {
      id: "1",
      description: "Aliens???",
      imageLink: "https://wallpapercave.com/wp/Ou8BiLy.jpg",
    },
    {
      id: "2",
      description: "On a vacation!",
      imageLink: "https://wallpaperaccess.com/full/42604.jpg",
    },
  ]);

  function removePhoto(postRemoved) {
    console.log(postRemoved.description);
    setPosts((prevPosts) => prevPosts.filter((post) => post !== postRemoved));
  }

  function addPhoto(postSubmitted) {
    setPosts((prevPosts) => [...prevPosts, postSubmitted]);
    navigate("/");
  }

  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div>
              <Title title={"Photowall"} />
              <PhotoWall
                posts={posts}
                onRemovePhoto={removePhoto}
                onNavigate={(id) => <Link to={`/${id}`}> </Link>}
              />
            </div>
          }
        />
        <Route
          path="/AddPhoto"
          element={
            <AddPhoto
              onAddPhoto={(addedPost) => {
                addPhoto(addedPost);
                console.log(addedPost);
              }}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default Main;








// import React,{Component} from "react";
// import Title from './Title'
// import PhotoWall from './PhotoWall'
// import AddPhoto from "./AddPhoto";
// import {Routes,Route} from 'react-router-dom';

// class Main extends Component
// {
//     constructor()
//     {
//         super()
//         this.state =  {
//             posts: [ {
//                 id: "0", 
//                 description:"beautiful landscape",
//                 imageLink:"https://images.freeimages.com/images/large-previews/b1b/fairytale-1-1388922.jpg"    
//             },
//             {
//                 id: "1", 
//                 description:"Aliens???",
//                 imageLink:"https://wallpapercave.com/wp/Ou8BiLy.jpg"
//             },
//             {
//                 id: "2",
//                 description:"On a vacation!",
//                 imageLink:"https://wallpaperaccess.com/full/42604.jpg"
//             }],
//         }
//         this.removePhoto = this.removePhoto.bind(this);
//     }
//     removePhoto(postRemoved)
//     {
//         console.log(postRemoved.description);
//         this.setState((state)=>({
//             posts: state.posts.filter(post=> post !==  postRemoved)
//         }))
//     }
//     addPhoto(postSubmitted)
//     {
//         this.setState(state=>({
//             post: state.posts.concat([postSubmitted])
//         }))
//     }
//     componentDidMount()
//     {
//         console.log('componentDidMount');
//     }
//     componentDidUpate(prevProps,prevState)
//     {
//         console.log(prevState.posts);
//         console.log(this.state);
//     }
//     render()
//     {
//         return (
//             <div>
//                 <Routes>
//                     <Route exact path="/" element={ 
//                         <div>
//                             <Title title={"Photowall"} />
//                             <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate} />
//                         </div>
//                      } />
//                     <Route path="/AddPhoto" element={  ({history})=>((  <AddPhoto onAddPhoto={(addedPost)=>{this.addPhoto(addedPost); history.push("/");
//                     console.log(addedPost) } } />))
//                     } />
//                 </Routes>
//          </div>);
//     }
// }

// export default Main;
