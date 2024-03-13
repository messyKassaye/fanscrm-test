import { ReactNode } from 'react';
import LoginSideBar from '../components/LoginSideBar/LoginSideBar';

type Props = {
  children: ReactNode;
};
const AuthenticationHOC = ({ children }: Props) => {
  return (
    <div className="w-full h-full flex justify-center items-center md:items-stretch lg:items-stretch">
      <div className="w-2/5 md:block hidden">
        <LoginSideBar />
      </div>
      <div className="flex items-center justify-center w-full md:w-3/5">
        {children}
      </div>
    </div>
  );
};

export default AuthenticationHOC;
