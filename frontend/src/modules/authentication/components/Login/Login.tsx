import { Button } from 'antd';
import { LOGIN_FORMS } from '../../../../utils/constants';
import { useNavigate } from 'react-router-dom';
import { frontend_routes } from '../../../../utils/frontend_routes';
import { useState } from 'react';
import AxiosService from '../../../../common/services/https.service';
import { backend_url } from '../../../../utils/backend_routes';
import { storeToken } from '../../../../common/services/TokenService';
import UseForm from '../../../../common/hooks/useForm';
import { AxiosError } from 'axios';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const onLogin = (values: unknown) => {
    setLoading(true);
    AxiosService()
      .post(backend_url.signIn, values)
      .then((response) => {
        console.log(response);
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
        } else if (err.response && err.response.status == 404) {
          setMessage('No one is registered by this email address');
        } else {
          setMessage('Something is not good');
        }
      });
  };
  return (
    <div className="flex flex-col items-center justify-center p-8 gap-12 w-full md:w-2/5">
      <span className="text-2xl font-bold text-gray-700">
        Login to you account
      </span>
      <UseForm
        inputs={LOGIN_FORMS}
        onSubmit={onLogin}
        loading={loading}
        errorMessage={message}
      />

      <div className="flex items-center justify-end w-full gap-2">
        <span>I already have account</span>
        <Button
          color="primary"
          type="text"
          onClick={() => navigate(frontend_routes.signup)}
        >
          Sign up
        </Button>
      </div>
    </div>
  );
};

export default Login;
