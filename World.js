/*import { useState } from 'react';
const World = () => {
    const[blogs, setBlogs]=useState([
        { title: 'My new website In React',body: 'lorem ipsum...', author: 'Rama Panakala',id:1}
       /* { title: 'My new website',body: 'lorem ipsum...', author: 'mario',id:2},
        { title: 'My new website',body: 'lorem ipsum...', author: 'mario',id:3}
    
    ]);
    
    
        return ( 
            <div className="Home">
                { blogs.map( (blog) => (
                    <div className="blog-preview" Key={blog.id}>
                        <h2>{ blog.title }</h2><br></br>
                        <p>Written by {blog.author}</p>
                        </div>
                
                ))}
            </div>
         );
    
    
     

}
 
export default World;*/
const World = ({blogs,title,handleDelete}) => {
    return (  
    <div className="Home">
        <h2>{title}</h2>
    { blogs.map( (blog) => (
        <div className="blog-preview" Key={blog.id}>
            <h2>{ blog.title }</h2><br></br>
            <p>Written by {blog.author}</p>
            <button onClick={()=> handleDelete(blog.id)}>Delete </button>
            </div>
    
    ))}
</div>
);
}
 
export default World;