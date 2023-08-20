import http from '../..'

import { SuccessResponse } from '../../type'
import { RequestRegisterData } from './type'

const userApi = {
  register: async (body: any) =>
    http.post<SuccessResponse<RequestRegisterData>>('/api/users', body),
}

export default userApi
