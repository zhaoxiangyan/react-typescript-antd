import {UserOutlined,DatabaseOutlined,OrderedListOutlined,SettingOutlined,WalletOutlined} from '@ant-design/icons';
import {asyncComponent} from '@/routes';

const User = asyncComponent(()=>import(/* webpackChunkName: "User" */ '@/views/home/user'));
const Customer = asyncComponent(()=>import(/* webpackChunkName: "Customer" */ '@/views/home/customer'));
const Account = asyncComponent(()=>import(/* webpackChunkName: "Account" */ '@/views/home/account'));
const Wallet = asyncComponent(()=>import(/* webpackChunkName: "Wallet" */ '@/views/home/wallet'));
const Task = asyncComponent(()=>import(/* webpackChunkName: "Task" */ '@/views/home/task'));
const TaskSetting = asyncComponent(()=>import(/* webpackChunkName: "TaskSetting" */ '@/views/home/task/setting'));
const Commission = asyncComponent(()=>import(/* webpackChunkName: "Commission" */ '@/views/home/report/commission'));
const Profit = asyncComponent(()=>import(/* webpackChunkName: "Profit" */ '@/views/home/report/profit'));
const Setting = asyncComponent(()=>import(/* webpackChunkName: "Setting" */ '@/views/home/setting'));

const routes = {
    // 菜单相关路由
    menus:[{
        path:'/home/user',
        icon:UserOutlined,
        title:"用户",
        component:User
    },{
        path:'/home/customer',
        icon:UserOutlined,
        title:'客户',
        component:Customer
    },{
        path:'/home/account',
        icon:WalletOutlined,
        title:'账户',
        component:Account
    },{
        path:'/home/wallet',
        icon:WalletOutlined,
        title:'钱包',
        component:Wallet
    },{
        path:'/home/task',
        icon:DatabaseOutlined,
        title:"任务",
        children:[{
            path:'/home/task/list',
            title:"任务列表",
            component:Task
        },{
            path:'/home/task/setting',
            title:"任务设置",
            component:TaskSetting
        }]
    },{
        path:'/home/report',
        icon:OrderedListOutlined,
        title:"报表",
        children:[{
            path:'/home/report/commission',
            title:"佣金报表",
            component:Commission
        },{
            path:'/home/report/profit',
            title:"分润报表",
            component:Profit
        }]
    }],
    // 非菜单相关路由
    other:[{
        path:'/home/setting',
        icon:SettingOutlined,
        component:Setting
    }]
}

export {routes};
export default routes;