import React from "react";



function List(props)
{
    const posts = [
        {
            id: "0", 
            discription:"beautiful landscape",
            imageLink:"https://wallpapercave.com/wp/ENozMYj.jpg",    
        },
        {
            id: "1", 
            discription:"Aliens???",
            imageLink:"https://wallpapercave.com/wp/Ou8BiLy.jpg",
        },
        {
            id: "2",
            discription:"On a vacation!",
            imageLink:"https://wallpaperaccess.com/full/42604.jpg",
        }
    ];
    return <div>
            <h2>Hello World</h2>
            { posts.map((post,index)=>{<ol key={index}>{posts}</ol>})}
        </div>
}

export default List;