import React, { useEffect, useState } from 'react';
import {Container,Row,Col,Card,ListGroup,ListGroupItem} from 'react-bootstrap';
function Images(){
    // fetch("https://api.pinterest.com/v3/users/bidhanuss/pins/?page_size=10").then(
    //         (res)=>{
    //              console.log(res)
    //          }
    // )
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        fetch("https://api.github.com/users").then(response => response.json())
.then(data =>{
    //console.log(data)
    var arrays = [], size = 3;
    while (data.length > 0)
  arrays.push(data.splice(0, size));

    setUsers(arrays);
    console.log(arrays)
    
})
.catch(error => console.log(error));
console.warn('User');
    },[])
    
    let titlte = "Images";
    let keyRow = 'row';
    return(<div>
        <h1>{titlte}</h1>
        <Container>        
        {
            users.map((item,i)=>
                <div class="row m-b-30" key={keyRow+i}>{getContentuserHtml(item,i)}</div>
            )
        }
        </Container>
    </div>)
}

function getContentuserHtml(users,row){
    
    let content = [];
    for (let i = 0; i < users.length; i++) {
        const item = users[i];
        content.push(<Col key={'row-'+row+'-col-'+i}>

<Card style={{ width: '18rem' }}>
<Card.Link href={item.html_url} target="_blank"><Card.Img variant="top" src={item.avatar_url} /></Card.Link>
  <Card.Body>
    <Card.Title>{item.login}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href={item.html_url} target="_blank">Go to my profile</Card.Link>
  </Card.Body>
</Card>

            </Col>);
    }
    return content;
}

export default Images;