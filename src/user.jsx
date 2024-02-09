import {useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {fetchUsers} from "./store";

 export default function User(){
   let users= useSelector( (state)=>state.user.users);
   let status= useSelector( (state)=>state.user.status);
   let error= useSelector( (state)=>state.user.error);
   console.log(users);

   
     
    
    const dispatch=useDispatch();
    useEffect (()=> {
            dispatch(fetchUsers());
        },[]);


    return(
        <>
        <div className="container">
           <h2 className="text-primary text-center m-5">user data using toolkit </h2> 

          
           <table className="table table-bordered w-80">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone number</th>
                </tr>
            </thead>
            
                 <tbody>
                {users.map( (user)=>(
                       <tr key={user.id}>
                        <td> {user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>

                       </tr> 
                    ))}
                    </tbody>
                
        </table>
        </div>
        </>
    );

}