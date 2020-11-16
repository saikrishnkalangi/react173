import Axois from 'axios';



const getPosts =()=>


{
    return (dispacth)=>{
      Axois.get('https://jsonplaceholder.typicode.com/users')
      .then(res =>{

        dispacth({
            type: "posts",
            data:res.data
        })
      })
      console.log(res.data)
    }
}



export default getPosts;
