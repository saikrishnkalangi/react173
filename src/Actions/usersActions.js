import Axois from 'axios';



const getUsers =()=>


{
    return (dispacth)=>{
      Axois.get('https://jsonplaceholder.typicode.com/users')
      .then(res =>{

        dispacth({
            type: "users",
            data:res.data
        })
      })
      console.log(res.data)
    }
}



export default getUsers;
