import React,{useState,useEffect}from 'react';
import { Header, Grid, Icon, Card, Button, Image,Divider } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import axios from 'axios';
import FriendForm from "./FriendForm"


const Home = props => {
    
    const [profiles,setProfiles] = useState([]);
    const [showForm, setShowForm] =useState(false);
    const addProfile = (profile) => setProfiles([...profiles,profile,])
  

    useEffect (()=> {
      axios
      .get("/api/profiles")
      .then(res => {
        setProfiles(res.data);
      })
      .catch(e =>{
        console.log(e);
      })
    },[]);
   
    const beFriend = (id) => {
        
        axios.put(`/api/profiles/${id}`)
          .then( () => profiles.filter( p => p.id !== id ) )
    };

    const renderProfiles =() =>{
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
          <Button color="black" floated="right" icon basic onClick={() => beFriend(profiles.id)}>
            <Icon name="add user" /> Friend 
          </Button>
        </Card>
      ) )
  }
        
  return (
    <div id="wrap">
      <h1 size="massive" Align="center"><Icon name= "users" size="big"/>myspace</h1>
      <Header as='h3' >Explore</Header>
      <br />
      {showForm && <FriendForm toggleForm={setShowForm} add={addProfile} />}
      <Button onClick={() => setShowForm(!showForm)}>
        { showForm ? "Close Form" : "Show Form" }
      </Button>
        {renderProfiles()}
      </div>
    )
  
}

export default Home;

