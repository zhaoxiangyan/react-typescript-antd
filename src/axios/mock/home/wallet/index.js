import {mock} from '@/axios/mock/utils';
import {RequestUrl} from '@/axios';

const walletListResult = {
    total: 50,
    current_page: 1,
    per_page: 20,
    'data|15': [
      {
        'id|+1': 1,
        number:'@string',
        name: '@cname',
        mobile:'@integer(13200000000,18700000000)',
        email:'@email',
        balance:'@integer(0,20000)'
      },
    ],
  };

const walletDetailResult = {
    id: 1,
    number:'@string',
    name: '@cname',
    mobile:'@integer(13200000000,18700000000)',
    email:'@email',
    balance:'@integer(0,20000)'

    // number:'@string',
    // wallet: '@integer(0, 10000)',
    // 'type|1':["自主账号","跟单账号"],
    // name: '@cname',
    // user_name:'@cname',
    // 'mt_group|1':["test-A","test-B","test-C","test-D"],
    // open_time:'@datetime',
    // balance:'@integer(0,100000)',
    // net_worth:'@integer(0,1000)',
    // profit_loss:'@integer(0,500)',
    // wallet_name:'@string',
    // 'trader_status|1':true,
    // 'login_status|1':true
};

mock(RequestUrl.getWalletList,walletListResult);
mock(RequestUrl.getWalletDetail,walletDetailResult);
mock(RequestUrl.addWallet,null);
mock(RequestUrl.updateWallet,null);