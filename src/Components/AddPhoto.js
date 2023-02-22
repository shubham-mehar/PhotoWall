import React, { useState } from "react";
import PropTypes from "prop-types";

function AddPhoto(props) {
  const [imageLink, setImageLink] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const post = {
      id: new Date().getTime(),
      description: description,
      imageLink: imageLink,
    };
    if (imageLink && description) {
      props.onAddPhoto(post);
    }
  }

  return (
    <div>
      <h1>Photowall</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Link"
            value={imageLink}
            onChange={(event) => setImageLink(event.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <button>Post</button>
        </form>
      </div>
    </div>
  );
}

AddPhoto.propTypes = {
  onAddPhoto: PropTypes.func.isRequired,
};

export default AddPhoto;




// import { number } from "prop-types";
// import React, { Component } from "react";

// class AddPhoto extends Component
// {
//     constructor()
//     {
//         super()
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }
//     handleSubmit(event)
//     {
//         event.preventDefault();
//         const imageLink = event.target.elements.Link.value;
//         const description = event.target.elements.description.value;
//         const post={
//             id: number(new Date()),
//             description: description,
//             imageLink: imageLink
//         }
//         if(imageLink && description)
//         {
//             this.props.onAddPhoto(post);
//         }   
//     }
//     render()
//     {
//     return(
//         <div>
//             <h1>Photowall</h1>    
//             <div className="form">
//                 <form onSubmit={this.handleSubmit}>
//                     <input type="text" placeholder="Link" name="link" />
//                     <input type="text" placeholder="Description" name="description" />
//                     <button>Post</button>
//                 </form>
//             </div>
//         </div>
//     );
//     }
// } 

// function AddPhoto()
// {
//     return(
//         <div>
//             <h1>This is the page where we add photo</h1>    
//             <div className="form">
//                 <form>
//                     <input type="text" placeholder="Link" />
//                     <input type="text" placeholder="Description" />
//                     <button>Post</button>
//                 </form>
//             </div>
//         </div>
//     );
// } 

// export default AddPhoto;