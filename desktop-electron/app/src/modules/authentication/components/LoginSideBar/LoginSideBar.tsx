import Logo from '../../../../assets/logo.svg';

const LoginSideBar = () => {
  return (
    <div className="w-full h-screen p-8 login-bg">
      <img
        src={Logo}
        alt="BlackBox Intelligence"
        width="223"
        height="66"
        className="pb-8"
      />

      <div className="flex items-center justify-center overflow-hidden  w-full flex-col md:items-start lg:items-start xl:items-center">
        <div className="bg-white text-base p-6 w-1/2 sm:w-56 md:w-full lg:w-full xl:w-3/4">
          <p className="text-2xl">
            We've built the most Professional tool to manage your Onlyfans
            growth. Try now it's 100% FREE!
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSideBar;
