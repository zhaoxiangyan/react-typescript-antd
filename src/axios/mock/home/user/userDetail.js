import {mock} from '@/axios/mock/utils';
import {RequestUrl} from '@/axios';

const userDetailResult = {
      id: 1,
      number: '@integer(0, 10000)',
      username: '@cname',
      email: '@email',
      role: '@integer(0, 8)',
      created_at:'@datetime'
  };

mock(RequestUrl.getUserDetail,userDetailResult)
mock(RequestUrl.addUser,null);
mock(RequestUrl.updateUser,null);