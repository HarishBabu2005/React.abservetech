import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserForm.css";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
const UserForm = () => {
  const [users, setUsers] = useState({
    name: "",
    email: "",
    age: "",
  });
  const [store, setStore] = useState([]);
  const [isedit, setIsEdit] = useState(false);
  const [userid, setUserid] = useState(null);
  useEffect(() => {
    async function getUser() {
      const res = await axios.get("http://localhost:5000/api/users/getall");
      const data = res.data;
      console.log(data);
      setStore(data);
    }
    getUser();
  }, [userid]);

  const handleChange = async (e) => {
    const { name, value } = e.target;

    setUsers({
      ...users,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isedit) {
        const res=await axios.put(`http://localhost:5000/api/users/${userid}`,users);
        console.log(res.data);
        console.log("successfully updated")
        setUsers({
          name:"",
          email:"",
          age:""
        })
        setIsEdit(false)
        setUserid(null)
        

      } else {
        const res = await axios.post(
          "http://localhost:5000/api/users/create",
          users,
        );
        console.log("Successfully Registered", res.data);
        setUsers({
          name: "",
          email: "",
          age: "",
        });
        
      }
    } catch (e) {
      console.log(e);
      alert("fail to send the data");
    }
  };
  const handleEdit = async (id) => {
    try {
      setIsEdit(true);
      console.log("user id", id);
      const res = await axios.get(
        `http://localhost:5000/api/users/getbyid/${id}`,
      );
      const data = res.data;
      setUserid(id);
      console.log(data);
      setUsers({
        name: data.name,
        email: data.email,
        age: data.age,
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div>
        <h1>User Form</h1>
        <h3>Name:{users.name}</h3>
        <h3>Email: {users.email}</h3>
        <h3>Age: {users.age}</h3>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="enter the name"
            name="name"
            value={users.name}
            type="text"
            required
            onChange={handleChange}
          ></input>
          <input
            placeholder="enter the email"
            name="email"
            value={users.email}
            type="email"
            required
            onChange={handleChange}
          ></input>
          <input
            placeholder="enter the age"
            name="age"
            value={users.age}
            type="number"
            required
            onChange={handleChange}
          ></input>
          <button>{isedit ? "update" : "submit"}</button>
        </form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {store.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>

                <td>
                  <Button
                    variant="warning"
                    onClick={() => handleEdit(user._id)}
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default UserForm;
