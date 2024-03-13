import { useEffect, useState } from 'react';
import AxiosService from '../../../../common/services/https.service';
import { backend_url } from '../../../../utils/backend_routes';
import { IUser } from '../../../../common/models/IUser.model';
import { Table } from 'antd';
import UserListColumn from './column/UserListColumn';
import SingleUser from '../SingleUser';

const UsersList = () => {
  const [page] = useState(50);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<IUser[]>([]);

  const [isShowSelectedUser, setIsShowSelectedUser] = useState(false);
  const [selectedUser, setSelectedUser] = useState<IUser>({
    id: 0,
    name: '',
    phone: '',
    email: '',
  });
  useEffect(() => {
    AxiosService()
      .get(backend_url.allUser)
      .then((response) => {
        setLoading(false);
        setUsers(response.data);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const onHandleShowUser = (user: IUser) => {
    setSelectedUser(user);
    setIsShowSelectedUser(true);
  };
  if (loading) {
    return <span className="font-bold text-3xl">Loading...</span>;
  }
  return (
    <div className="w-full items-start justify-center">
      {isShowSelectedUser ? (
        <SingleUser user={selectedUser} />
      ) : (
        <Table
          columns={UserListColumn({ page: page, onHandleShowUser })}
          dataSource={users}
        />
      )}
    </div>
  );
};

export default UsersList;
