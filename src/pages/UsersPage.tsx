import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IUser } from '../types/types';
import UserList from '../components/UserList';

const UsersPage = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers();

    return () => {
      fetchUsers();
    };
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        'https://jsonplaceholder.typicode.com/users'
      );
      setUsers(response.data);
    } catch (e) {
      alert(e);
    }
  }
  return (
    <div>
      <UserList users={users} />
    </div>
  );
};

export default UsersPage;
