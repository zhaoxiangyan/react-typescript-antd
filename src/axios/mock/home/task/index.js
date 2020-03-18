import {mock} from '@/axios/mock/utils';
import {RequestUrl} from '@/axios';

const taskListResult = {
    total: 50,
    current_page: 1,
    per_page: 20,
    'data|15': [
      {
        'id|+1': 1,
        number: '@integer(0, 10000)',
        name: '@cname',
        nickname:'@string',
        'classify|1':["直客","代理","测试","销售"],
        user_name:'@cname',
        sale_name:'@cname',
        created_at:'@datetime',
        'type|1':["线索客户","注册客户","首次入金","多次入金"],
        'source|1':["IOS","Android","Web","H5"]
      },
    ],
  };

const taskDetailResult = {
    id: 1,
    number: '@integer(0, 10000)',
    name: '@cname',
    nickname:'@string',
    'classify|1':["直客","代理","测试","销售"],
    user_name:'@cname',
    sale_name:'@cname',
    created_at:'@datetime',
    'type|1':["线索客户","注册客户","首次入金","多次入金"],
    'source|1':["IOS","Android","Web","H5"]
};

mock(RequestUrl.getTaskList,taskListResult);
mock(RequestUrl.getTaskDetail,taskDetailResult);
mock(RequestUrl.addTask,null);
mock(RequestUrl.updateTask,null);