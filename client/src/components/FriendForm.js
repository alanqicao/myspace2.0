import React, {useState,} from 'react'
import axios from "axios";
import {Form,} from "semantic-ui-react";
import {useFormInput,} from "../hooks/useFormInput";

// t.string "username"
// t.integer "age"
// t.string "gender"
// t.string "avatar"
// description

const FriendForm = (props) => {
  const username =useFormInput("");
  const age =useFormInput("");
  const gender =useFormInput("");
  // const avatar =useFormInput("");
  const description =useFormInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/profiles", {username: username.value, age: age.value, gender: gender.value, description: description.value})
    .then (res => {
      props.add(res.data);
      props.toggleForm();
    })
  }

  return (
    <> 
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            label="Username"
            placeholder="Username"
            name="username"
            required
            { ...username }
          />
          <Form.Input
            label="Age"
            placeholder="Age"
            name="age"
            required
            { ...age }
          />
          <Form.Input
            label="Gender"
            placeholder="Gender"
            name="gender"
            required
            { ...gender }
          />
          <Form.Input
            label="Description"
            placeholder="Description"
            name="description"
            required
            { ...description }
          />
        </Form.Group>
        <Form.Button >Submit</Form.Button>
      </Form>
    </>
  )
}
export default FriendForm;