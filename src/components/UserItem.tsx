import React from 'react';
import { IUser } from '../types/types';

interface UserItemProps {
  user: IUser;
}

const UserItem = ({ user }: UserItemProps) => {
  return (
    <div>
      <div style={{ padding: '15px', border: '1px solid gray' }}>
        {user.id}, 이름 : {user.name}, 이메일 : {user.email}, 주소 :{' '}
        {user.address.city} _ {user.address.street}
      </div>
    </div>
  );
};

export default UserItem;
