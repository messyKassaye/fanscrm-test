import { Button } from 'antd';
import { IUser } from '../../../../../common/models/IUser.model';

type Props = {
  page: number;
  onHandleShowUser: (userData: IUser) => void;
};
const UserListColumn = ({ page, onHandleShowUser }: Props) => {
  return [
    {
      title: '#',
      dataIndex: 'id',
      render: (rowIndex: number) => (page - 1) * 50 + rowIndex + 1,
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
    },
    {
      title: 'Actions',
      dataIndex: '',
      render: (record: IUser) => {
        return (
          <div className="flex items-center justify-center">
            <Button
              onClick={() => onHandleShowUser(record)}
              type="primary"
              size="small"
              color="primary"
            >
              Show
            </Button>
          </div>
        );
      },
    },
  ];
};

export default UserListColumn;
