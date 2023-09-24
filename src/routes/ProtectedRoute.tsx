
import { useSelector } from 'react-redux';
import { RootState } from '@/states/store';
import Cookies from 'universal-cookie';
import Loader from '@/components/Loader';
import { Navigate } from 'react-router-dom';
import { Fragment } from 'react';

export const ProtectedRoute: IBaseComp<IBaseCompProps> = (props: IBaseCompProps) => {
  const { children } = props;
  const { loading } = useSelector((state: RootState) => state.auth);
  const cookies = new Cookies();
  const token = cookies.get('access_token');

  if (loading) {
    return (
      <div className="flex h-[100vh] justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (!token || token == undefined || token == '') {
    return <Navigate to="/auth/signin" />;
  }
  return <Fragment>{children}</Fragment>;
};
