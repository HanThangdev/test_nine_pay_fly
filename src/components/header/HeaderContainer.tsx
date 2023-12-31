import { notification } from 'antd';
import authRepository from '../../repository/auth';
import Header from './Header';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import { ReactNode } from 'react';

const HeaderContainer = (props: {
  sidebarOpen?: string | boolean | undefined;
  setSidebarOpen?: (arg0: boolean) => void;
  children?: ReactNode;
}) => {
  const navigate = useNavigate();
  const cookies = new Cookies();

  const handleLogout = async () => {
    try {
      await authRepository.logout();
      cookies.remove('access_token', { path: '/' });
    } catch (error: any) {
      notification.error({
        message: error?.response?.data?.message || error?.message,
      });
    }
    navigate('/auth/signin');
  };

  return (
    <Header
      sidebarOpen={props.sidebarOpen}
      setSidebarOpen={props.setSidebarOpen}
      onLogout={handleLogout}
      children={props.children}
    />
  );
};

export default HeaderContainer;
