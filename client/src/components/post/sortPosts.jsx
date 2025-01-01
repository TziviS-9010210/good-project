import postData from '/Posts'

const SortPosts=()=>{
    
    const sort=()=>{
        postData.sort((p)=>p._id)
    }
   
    return<>
        <button onClick={sort}>sort</button>
    </>
}