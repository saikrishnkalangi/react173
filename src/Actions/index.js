import Axois from "axios";
const url="https://jsonplaceholder.typicode.com/users";



export default function EmpActions()
{

 return(
 {
     type:'Employee',
     
     payload: Axois.get(url).then((res)=>res.data)
 })

}
