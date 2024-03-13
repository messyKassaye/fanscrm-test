import { IUser } from '../../../common/models/IUser.model';

type Props = {
  user: IUser;
};
const SingleUser = ({ user }: Props) => {
  return (
    <div className="flex items-center justify-center gap-8">
      <div className="flex flex-col">
        <span className="font-bold text-lg">{`Full name: ${user.name}`}</span>
        <span>{`Email: ${user.email}`}</span>
      </div>
    </div>
  );
};

export default SingleUser;
