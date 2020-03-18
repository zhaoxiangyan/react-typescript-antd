import {mock} from '@/axios/mock/utils';
import {RequestUrl} from '@/axios';

const userListResult = {
    total: 50,
    current_page: 1,
    per_page: 20,
    'data|15': [
      {
        'id|+1': 1,
        number: '@integer(0, 10000)',
        username: '@cname',
        email: '@email',
        role: '@integer(0, 8)',
        created_at:'@datetime'
      },
    ],
  };

mock(RequestUrl.getUserList,userListResult)