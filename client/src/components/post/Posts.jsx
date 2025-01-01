import { useEffect, useState, useRef } from "react"
import axios from 'axios'
import Post from "./post";
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';

import CreatPost from "./CreatePost";
import UpdatePost from "./UpdatePost";


const Posts = () => {
    const [postData, setpostData] = useState([])

    const getPosts = async () => {
        //******GET - getAllUsers***** */
        try {
            const res = await axios.get('http://localhost:7002/api/posts')
            if (res.status === 200) {
                // console.log(res.data);
                //res.data.sort((p)=>p._id)

                setpostData(res.data)

            }
        } catch (e) {
            console.error(e)
        }
    }
    useEffect(() => {
        getPosts();
    }, [])


    const [visible, setVisible] = useState(false);


    const createPost = async (title, body) => {
        //    console.log("crehatePost");
        //    {debugger}
        const newPost = {
            title: title,
            body: body,
        }
        const res = await axios.post('http://localhost:7002/api/posts', newPost)
        //debugger
        setpostData(res.data)

    }
    // const updatePost = async (title,body,_id) => {
    //     const objPost = {
    //         title: title,
    //         body: body,
    //         _id:_id
    //     }
    //     const res = await axios.put('http://localhost:7002/api/posts',objPost)
    //     // debugger
    //     setpostData(res.data)
    // }



    return <>
{postData.map((post, index) => {
   return (
       <Post
            key={post.id}
            index={index}
            post={post}
            getPosts={getPosts} />
   )
})}
        <Button label="create" icon="pi pi-user" onClick={() => { setVisible(true) }} />
        <CreatPost createPost={createPost} visible={visible} setVisible={setVisible}></CreatPost>
        {/* <UpdatePost  updatePost={updatePost} visible={visible} setVisible={setVisible}></UpdatePost> */}

    </>



}
export default Posts;