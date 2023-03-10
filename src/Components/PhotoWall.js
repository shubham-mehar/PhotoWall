import React from "react";
import Photo from "./Photo";
import PropTypes, { func } from "prop-types";
import {Link} from 'react-router-dom';
import {FaPlusCircle} from 'react-icons/fa';
function PhotoWall(props)
{
    return (
    <div>
        <Link className="add-button" to="/AddPhoto">
        <FaPlusCircle size={30} style={{color:"black",marginRight:"auto"}} />
        </Link>
        <div className="photo-grid">
            { props.posts
            .sort(function(x,y){ return y.id-x.id })
            .map((post,index)=><Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />)}
        </div>
    </div>
 );
}

PhotoWall.propTypes = 
{
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

export default PhotoWall;