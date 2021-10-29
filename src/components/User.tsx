import React, { useEffect, useState } from 'react';
import { IUser } from '../types/types';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface UserParams {
  id: string;
}

const User = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams<UserParams>();

  const fetchUser = async (id: string) => {
    try {
      const response = await axios.get<IUser>(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      setUser(response.data);
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    fetchUser(params.id);

    return () => {
      fetchUser(params.id);
    };
  }, [params.id]);

  return (
    <div>
      <h1>{user?.email}</h1>
    </div>
  );
};

export default User;
