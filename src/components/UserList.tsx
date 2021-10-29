import React from 'react';
import { IUser } from '../types/types';
import UserItem from './UserItem';

interface UserListProps {
  users: IUser[];
}

const UserList = ({ users }: UserListProps) => {
  return (
    <div>
      {users.map((user) => (
        <UserItem user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UserList;
