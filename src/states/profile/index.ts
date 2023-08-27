import { useSnapshot } from 'valtio';

import meRepository from '@/repository/me';
import { createStateProxy } from '@/valtio';
import Cookies from 'universal-cookie';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

export interface ProfileState {
  data: any | null;
  loading: boolean;
}

const initialState: ProfileState = {
  data: null,
  loading: false,
};

const profileState = createStateProxy<ProfileState>({
  key: 'ypl_state_profileState',
  initialState: initialState,
  isPersist: false,
});

export const fetchProfile = async () => {
  const navigate = useNavigate();
  try {
    const res = await meRepository.fetchProfile();
    const data = res.data;
    setProfile(data);
  } catch (error) {
    const cookies = new Cookies();
    cookies.remove('access_token', { path: '/auth/signin' });
    navigate('/auth/signin');
    return Promise.reject(error);
  }
};

export const setProfile = (payload: any) => {
  profileState.data = payload;
};

export const useProfileState = useSnapshot<ProfileState>;

export default profileState;
