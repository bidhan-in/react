import React from 'react';
import {Table,tr,td} from 'react-bootstrap'
function Users(){
    let title = 'Users';
    const list = [
        {name:'Bidhan',age:"33"},
        {name:'Bidhan',age:"33"},
        {name:'Bidhan',age:"33"},
        {name:'Bidhan',age:"33"},
        {name:'Bidhan',age:"33"},
        {name:'Bidhan',age:"33"},
        {name:'Bidhan',age:"33"},
        
    ]
    return(
        <div>
            <h1>{title}</h1> 
            <table>
                <tr>
                    <td>Name</td>
                    <td>Age</td>
                </tr>
            
            {
                list.map((ites,key)=>
                <tr key={key}>
                    <td>{ites.name}</td>
                    <td>{ites.age}</td>
                </tr>
                )
                
            }
            </table>
        </div>
    )
}
export default Users;