import React from 'react';
function Images(){
    fetch("https://api.pinterest.com/v3/users/bidhanuss/pins/?page_size=10").then(
            (res)=>{
                 console.log(res)
             }
    )
    let titlte = "Images";
    return(<div>
        <h1>{titlte}</h1>

    </div>)
}
export default Images;