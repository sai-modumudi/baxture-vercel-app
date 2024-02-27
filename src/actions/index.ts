'use server';

import axios from 'axios';

//To fetch users data from api.
export async function getUsers() {
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return response.data;
    }catch(err){
      throw new Error('Error occured while fetching users')
    }
}