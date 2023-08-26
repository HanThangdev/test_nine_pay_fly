import { useSnapshot } from 'valtio';

import meRepository from '@/repository/me';
import { MeProfile } from '@/repository/me/type';
import { createStateProxy } from '@/valtio';

export interface ProfileState {
  data: MeProfile | null;
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
  try {
    const res = await meRepository.fetchProfile();
    const data = res.data.data;
    setProfile(data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const setProfile = (payload: ProfileState['data']) => {
  profileState.data = payload;
};

export const useProfileState = useSnapshot<ProfileState>;

export default profileState;
