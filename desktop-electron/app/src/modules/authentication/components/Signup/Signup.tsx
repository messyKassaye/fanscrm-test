import { useState } from 'react';
import UserForm from '../../../../common/hooks/useForm';
import { SIGNUP_FORMS } from '../../../../utils/constants';
import AxiosService from '../../../../common/services/https.service';
import { backend_url } from '../../../../utils/backend_routes';
import { useNavigate } from 'react-router-dom';
import { frontend_routes } from '../../../../utils/frontend_routes';
import { Button } from 'antd';
import { storeToken } from '../../../../common/services/TokenService';
import { AxiosError } from 'axios';

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const onSignup = (values: unknown) => {
    setLoading(true);
    AxiosService()
      .post(backend_url.signUp, values)
      .then((response) => {
        const { access_token } = response.data;
        storeToken(access_token);
        setMessage('');
        navigate(frontend_routes.dashboard);
      })
      .catch((err) => {
        setLoading(false);
        if (err instanceof AxiosError) {
          if (err.code === AxiosError.ERR_NETWORK) {
            setMessage('Network error is created. Please check your internet');
          }
        } else {
          setMessage(err?.message);
        }
      });
  };
  return (
    <div className="flex flex-col items-center justify-center p-8 gap-12  w-full md:w-2/5">
      <span className="text-2xl font-bold text-gray-700">
        Sign up to Fans-CRM
      </span>
      <UserForm
        inputs={SIGNUP_FORMS}
        onSubmit={onSignup}
        loading={loading}
        errorMessage={message}
      />
      <div className="flex items-center justify-end w-full gap-2">
        <span>I already have account</span>
        <Button type="text" onClick={() => navigate(frontend_routes.login)}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default SignUp;
