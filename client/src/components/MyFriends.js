import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Card, Divider, Image,Segment, List, Header, Button } from 'semantic-ui-react';


const MyFriends = props => {
  const [profiles, setProfiles] = useState([]);
  

  useEffect( () => {
    axios
      .get('/api/profiles') 
      .then(res => {
        setProfiles(res.data);
        
      })
      .catch(e => {
        console.log(e)
      });
  }, []);
   
    const renderFriends =() =>{
        return profiles.map(profile =>(
          <Card key={profile.id}>
            <Image src={profile.avatar} />
            <Card.Content>
              <Divider />
              <Card.Header>
                { profile.username }
              </Card.Header>
              <Card.Meta>
                { `${profile.age}  ${profile.gender}` }
              </Card.Meta>
              <Card.Description>
                { profile.description }
              </Card.Description>
            </Card.Content>
          </Card>
        ) )
    }

    return (
      <Segment>
        <div id="wrap">
          <Header as ="h1">My friends</Header>
          <br />
         
          <Card>{renderFriends()}</Card>
        </div>
      </Segment>
    )
}
export default MyFriends;