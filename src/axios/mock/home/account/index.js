import {mock} from '@/axios/mock/utils';
import {RequestUrl} from '@/axios';

const accountListResult = {
    total: 50,
    current_page: 1,
    per_page: 20,
    'data|15': [
      {
        'id|+1': 1,
        number:'@string',
        account: '@integer(0, 10000)',
        'type|1':["自主账号","跟单账号"],
        name: '@cname',
        user_name:'@cname',
        'mt_group|1':["test-A","test-B","test-C","test-D"],
        open_time:'@datetime',
        balance:'@integer(0,100000)',
        net_worth:'@integer(0,1000)',
        profit_loss:'@integer(0,500)',
        account_name:'@string',
      },
    ],
  };

const accountDetailResult = {
    id: 1,
    number:'@string',
    account: '@integer(0, 10000)',
    'type|1':["自主账号","跟单账号"],
    name: '@cname',
    user_name:'@cname',
    'mt_group|1':["test-A","test-B","test-C","test-D"],
    open_time:'@datetime',
    balance:'@integer(0,100000)',
    net_worth:'@integer(0,1000)',
    profit_loss:'@integer(0,500)',
    account_name:'@string',
    'trader_status|1':true,
    'login_status|1':true
};

mock(RequestUrl.getAccountList,accountListResult);
mock(RequestUrl.getAccountDetail,accountDetailResult);
mock(RequestUrl.addAccount,null);
mock(RequestUrl.updateAccount,null);