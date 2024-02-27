'use client';

import { useEffect, useState } from "react";
import * as actions from "../actions";
import UserProfileCard from "../components/user-profile-card";
import './global.css';
import { Grid } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

interface User{
  id: number,
  name: string,
  email: string,
  phone: string,
  website: string
}

export default function HomePage() {

  const [users, setUsers] = useState<User[]>([]);

  

  const tablet = useMediaQuery('(max-width: 48em)')
  const medium = useMediaQuery('(max-width: 75em)')

  const getSpanValue = () => {
    if(tablet){
      return 12;
    }else if(medium){
      return 6;
    }else{
      return 3
    }
  }
  
  let fetchUsers = async () => {

    const userRes = await actions.getUsers();
    if(userRes && userRes.length > 1){
      setUsers(userRes);
    }
   
  }

  useEffect(()=>{
    fetchUsers();
  },[])

  const onDelete = (id: number) => {

    setUsers(users.filter(user =>{
      return user.id !== id
    }))

  }

  const renderUserCards = users.map(user =><Grid.Col span={getSpanValue()}><UserProfileCard user={user} handleDelete={onDelete} /></Grid.Col> )

  return (
    <Grid m="lg">
      {renderUserCards}
    </Grid>
  );
}
