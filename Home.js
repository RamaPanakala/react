import { useState, } from 'react';
import World from './World';
const Home = () => {
        const[blogs, setBlogs]=useState([
           { title: 'My new website In React',body: 'lorem ipsum...', author: 'Abhi',id:1},
            { title: 'Web development',body: 'lorem ipsum...', author: 'Sandeep',id:2},
            { title: 'Welcome to React',body: 'lorem ipsum...', author: 'Manoj',id:3}
        ]);
            const handleDelete = (id) =>{
            const newBlogs =blogs.filter(blog =>blog.id !== id);
            setBlogs(newBlogs);
        }


    return ( 
        <div className="Home"><br></br>
        <World blogs= { blogs} title="HELLO WORLD!"  handleDelete= {handleDelete} /><br></br>
        
        </div>
    );
    }
export default Home;