'use client'

import Button from "./Button";
import { createAdmin } from "../actions";

export default function CreateUserButton() {

const handleClick = () => {
  try{
    console.log("add to database");
    createAdmin();
  } catch (error) {
    console.error("Error creating admin:", error);
  }
}

  return (
    <Button onClick={handleClick}>Create Admin</Button>
  )
}