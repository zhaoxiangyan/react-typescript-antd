
/**
 * 所有api接口url
 */
export const CRM = {
    // jack
    // 客户 客户
    // 客户 选项
    customer_selects:'/api/customer/get_customer_selects',
    // 获取客户列表的信息
    getcustomerlists:'/api/customers',  //数据展示待商量
    // 客户列表 删除
    customer_list_delete:'/api/customer/list_delete',
    // 客户列表 划转
    customer_list_transfer:'/api/customer/list_transfer',
    // 客户列表 客户类型
    customer_set_customer_type:'/api/customer/set_customer_type',
    // 获取单个客户的信息
    customerdetail:'/api/customer/detail/',  //未完成数据展示
    // 修改单个客户的信息
    customer_detail_update:'/api/customer/detail_update',
    // 新增单个客户的联系人
    customer_contacts_create:'/api/customer/contacts_create',
    // 更新/编辑单个客户的联系人
    customer_contacts_update:'/api/customer/contacts_update',
    // 划转单个客户的联系人
    customer_contacts_transfer:'/api/customer/contacts_transfer',
    // 设置单个客户的主联系人
    customer_contacts_master:'/api/customer/contacts_master',
    // 删除单个客户的联系人
    customer_contacts_delete:'/api/customer/contacts_delete',
    // 新增单个客户的销售机会
    customer_sales_create:'/api/customer/sales_opportunitys_create',
    // 更新/编辑单个客户的销售机会
    customer_sales_update:'/api/customer/sales_opportunitys_update',
    // 删除单个客户的销售机会
    customer_sales_delete:'/api/customer/sales_opportunitys_delete',
    // 单个客户的跟进信息
    customer_follow_up:'/api/customer/customer_follow_up',
    // 单个客户的回访时间
    customer_return_visit:'/api/customer/return_visit',
    // 单个客户的活动记录
    customer_activity_record:'/api/customer/activity_record',
    // 关注/取消关注客户
    customer_user_attention:'/api/customer/user_attention_or_unattention',
    // 新建客户
    customer_create:'/api/customer/create',
    // 客户附件、图片上传
    customer_upload:'/api/customer/upload',
    // 客户 销售机会
    // 获取客户销售机会列表
    customer_sales_opportunitys_list:'/api/customer/sales_opportunitys_list', //还未查询条件
    // 销售机会列表 删除
    customer_sales_opportunitys_list_delete:'/api/customer/sales_opportunitys_list_delete',
    // 获取单个销售机会信息
    customer_sales_opportunitys_detail:'/api/customer/sales_opportunitys_detail', //输单原因是否要在详细信息展示
    // 修改客户销售机会阶段
    customer_sales_opportunitys_stage:'/api/customer/sales_opportunitys_stage',
    // 新增客户销售机会跟进内容
    customer_sales_opportunitys_follow:'/api/customer/sales_opportunitys_follow',
    // 任务
    
    // 新增任务
    // task_add_task:'/api/task/add_task',
    // 获取未处理任务数量
    task_get_not_processed:'/api/task/get_not_processed',
    // 获取任务
    task_get_task:'/api/task/get_task',
    // 获取任务列表
    task_get_task_list:'/api/task/get_task_list',
    // 任务认领
    task_claim:'/api/task/claim',
    // 任务详细编辑
    task_task_edit:'/api/task/task_edit',
    // 获取任务详细头部信息
    task_task_detail_head:'/api/task/task_detail_head',
    // 查看任务详细信息
    task_task_detail:'/api/task/task_detail', //error change
    // 获取任务评论
    task_get_task_comment:'/api/task/get_task_comment', 
    // 获取任务日志
    task_get_task_journals:'/api/task/get_task_journals',
    // 新增任务评论
    task_add_task_comment:'/api/task/add_task_comment',  //422
    // 新增项目成员
    task_add_member:'/api/task/add_member',
    // 获取项目成员
    task_get_member:'/api/task/get_member',
    // 删除项目成员
    task_delete_member:'/api/task/delete_member',
    // 设置成员身份权限
    task_set_member_competence:'/api/task/set_member_competence',  //未设置切换为普通成员
    // 获取登录用户任务权限
    task_get_competence:'/api/task/get_competence',
    // 获取子任务组成员
    task_get_one_group_member:'/api/task/get_one_group_member',
    // 删除子任务组成员
    // task_delete_one_group_member:'/api/task/delete_one_group_member',
    // 新增子任务组成员
    // task_add_one_group_member:'/api/task/add_one_group_member',
    // 编辑子任务组成员
    task_edit_one_group_member:'/api/task/edit_one_group_member',
    // 获取任务设置信息
    task_get_task_info:'/api/task/get_task_info',
    // 编辑任务设置信息
    task_set_task_info:'/api/task/set_task_info', //mt4相关设置
    // 获取同名开户任务详细信息 已有账号
    task_get_same_account:'/api/task/get_same_account',
    // 真实开户
    task_deal_ta_open:'/api/task/deal_ta_open',
    // 同名开户
    task_deal_ta_same_open:'/api/task/deal_ta_same_open',
    // TWork任务入金
    task_into_gold:'/api/task/into_gold', 
    // TWork任务出金 代理出金
    task_out_gold:'/api/task/out_gold', 
    // TWork任务 绑定银行卡
    task_deal_ta_bank:'/api/task/deal_ta_bank',
    // 身份认证
    task_update_authentication:'/api/task/update_authentication',
    // 实名认证
    task_real_name:'/api/task/real_name',
    // 拒绝任务
    task_task_refuse:'/api/task/task_refuse', 
    // 同意代理注册
    task_deal_agency_register:'/api/task/deal_agency_register',
    // 获取最新的任务
    task_get_latest_task:'/api/task/get_latest_task',
    // 同意绑定账户
    task_deal_ta_bind:'/api/task/deal_ta_bind',
    // 模拟开户
    task_deal_ta_simulate_open:'/api/task/deal_ta_simulate_open',
    // 模拟同名开户
    task_deal_ta_simulate_same_open:'/api/task/deal_ta_simulate_same_open',
    // 出入金导出
    task_gold_export_excel:'/api/task/gold_export_excel',
    // 新建账户
    task_new_account:'/api/task/new_account',
    // 账号解约
    task_deal_ta_account_cancellation:'/api/task/deal_ta_account_cancellation',

    
    // 个人中心
    // 出金申请
    // 获取个人出金列表
    personal_withdraw_list:'/api/personal/withdraw_list', //需筛选
    // 个人出金
    personal_withdraw:'/api/personal/withdraw', //error
    // 个人返佣信息
    personal_rebate_info:'/api/personal/rebate_info',
    // 用户返佣参数和手数
    user_getpriceandlot:'/api/user/getproiceandlot',


    // 代理注册
    // 代理注册--验证邮箱和号码
    enable_register:'/api/enable_register',
    // 代理注册
    agency_register:'/api/agency_register',
    // 代理图片上传
    agency_upload:'/api/angecy_upload',
    
    // Overture
    wire_transfer:'/api/wire_transfer/get_list',

    // 日志
    // 获取日志名称、搜索、表头
    logs_module_list:'/api/setting/logs/module_list',
    // 所有模块日志
    logs_get_list:'/api/setting/logs/get_list',
    // 基础模块日志
    logs_get_basic_list:'/api/setting/logs/get_basic_list',
    // Broker Work用户管理日志
    logs_get_user_list:'/api/setting/logs/get_user_list',
    // Trader Work用户管理日志
    logs_get_twuser_list:'/api/setting/logs/get_twuser_list',
    // 消息模块日志
    logs_get_message_list:'/api/setting/logs/get_message_list',
    // 客户模块日志
    logs_get_customer_list:'/api/setting/logs/get_customer_list',
    // 账户模块日志
    logs_get_account_list:'/api/setting/logs/get_account_list',
    // 系统模块日志
    logs_get_system_list:'/api/setting/logs/get_system_list',
    // 任务模块日志
    logs_get_task_list:'/api/setting/logs/get_task_list',
    // 客户来源设置
    // 获取客户来源
    customer_source_list:'/api/setting/customer_source/list_menu',
    // 新建客户来源
    customer_source_create:'/api/setting/customer_source/create_menu',
    // 编辑客户来源
    customer_source_edit:'/api/setting/customer_source/edit_menu',
    // 启用客户来源
    customer_source_enable:'/api/setting/customer_source/enable_menu',
    // 禁用客户来源
    customer_source_disable:'/api/setting/customer_source/disable_menu',
    // 从客户来源导出客户
    customer_source_export:'/api/setting/customer_source/export_customer',

    // 富文本编辑器上传
    media_upload:'/api/media_upload',
    // 媒体列表
    get_media:'/api/get_media',
    



    // james
    // 附件管理
    // 图片上传
    attachment_upload:'/api/attachment/upload',
    // 用户验证
    // 用户登录
    login:'/api/passport/login',
    // 获取短信验证码
    // passport_sendcode:'/api/passport/sendcode',
    // 校验短信验证码
    // passport_checkcode:'/api/passport/checkcode',
    // 发送邮箱验证码
    passport_sendmailcode:'/api/passport/sendmailcode',
    // 校验邮箱验证码
    // passport_checkmailcode:'/api/passport/checkmailcode',
    // 重置密码/找回密码
    passport_resetpassword:'/api/passport/resetpassword',
    // 用户退出登录
    logout:'/api/passport/logout',
    // 获取登录用户资料
    userinfo:'/api/userinfo',
    // 修改登录用户资料
    user_update_me:'/api/user/update-me',
    // 用户身份证银行卡图片头像上传
    userupload:'/api/user/upload',
    // 修改用户密码
    user_updatepassword:'/api/user/updatepassword',
    // 修改用户邮箱
    user_updateemail:'/api/user/updateemail',

    // 公共配置
    // 获取平台
    platforms:'/api/platforms',
    // 获取语言
    language:'/api/language',
    // 获取域名
    websites:'/api/agent/websites',
    // 获取账号服务器
    hosts:'/api/agent/hosts',
    // 获取杠杆
    leverages:'/api/agent/leverages',
    // 获取角色
    // agentroles:'/api/agent/roles',
    // 获取返佣层级
    agent_rebatelevels:'/api/agent/rebatelevels',
    // 获取返佣层级规则
    agent_rebaterules:'/api/agent/rebaterules',
    // 获取MT组
    agent_mtgroups:'/api/agent/mtgroups',
    // 获取账户组
    agent_accountgroups:'/api/agent/accountgroups',
    // 获取配置信息
    config:'/api/configs',
    // 获取国家/省份/城市
    country:'/api/country',
    // 获取银行
    banks:'/api/banks',
    // 证件类型
    credentials:'/api/credentials',
    // 获取投资信息
    investment_information:'/api/investment-information',
    // 获取财务信息
    finance_information:'/api/finance-information',
    // 获取省
    // province:'/api/province',
    // 获取城市
    // city:'/api/city',
    // 获取区县
    // area:'/api/area',
    // 用户树
    user_tree:'/api/user/tree',
    // 返佣用户搜索
    commission_user:'/api/commission/user',

    // 用户管理
    // 获取用户资料  编辑用户
    userdetail:'/api/user/detail',
    // Broker Work用户管理
    users:'/api/users',
    // 用户MT4账号
    user_accounts:'/api/user/accounts',
    // 允许登录 点击启用
    userenablelogin:'/api/user/enablelogin',
    // 禁止登录 点击禁用
    userdisablelogin:'/api/user/disablelogin',
    // 用户划转
    usertransfer:'/api/user/transfer',
    // 获取用户角色
    user_roles:'/api/user/roles',
    // 添加用户
    usercreate:'/api/user/create',
    // 删除用户
    userdelete:'/api/user/delete',
    // 恢复用户
    // userrecover:'/api/user/recover',
    // 修改用户
    userupdate:'/api/user/update',
    
    // 账户
    // 获取账号类型
    account_type:'/api/account/type',
    // 账号管理
    accounts:'/api/accounts',
    // 开户
    accountcreate:'/api/account/create',
    // 账号修改
    accountupdate:'/api/account/update',
    // 账号详情
    accountdetail:'/api/account/detail',
    // 账号交易记录
    account_transaction:'/api/account/transaction', 
    // 账号出入金
    account_updatemargin:'/api/account/updatemargin',
    // 账号信用
    account_updatecredit:'/api/account/updatecredit',
    // 账号修改杠杆
    account_updateleverage:'/api/account/updateleverage',  //修改单个杠杆报错
    // 账号修改密码
    account_updatepassword:'/api/account/updatepassword',
    // 发送MT4密码
    account_sendmt4password:'/api/account/sendmt4password',
    // 账号划转 (用户)
    accounttransfer:'/api/account/transfer',
    // 账号划转 (客户)
    account_change:'/api/account/change',
    // 删除账号
    account_delete:'/api/account/delete', //账户列表仍然显示
    // 获取客户账号列表
    customer_accounts:'/api/customer/accounts',
    // 账户详情  账户所有人资料修改  客户资料修改
    customerupdate:'/api/customer/updatedata', 
    // 钱包列表
    wallets_list:'/api/wallets/get_list',
    // 钱包详情
    wallets_logs:'/api/wallets/get_wallet_logs',
    // 钱包出入金
    wallets_deposit_withdraw:'/api/wallets/deposit_withdraw',

    // 高手管理
    // 高手列表
    masters:'/api/masters',
    // 高手排序
    masters_sort:'/api/master/sort',
    // 获取高手分类
    // master_type:'/api/master/type',
    // 获取高手详情
    master_detail:'/api/master/detail',
    // 获取高手数据
    master_calculation:'/api/master/calculation',
    // 高手返佣金额详情
    master_commission_list:'/api/master/commission_list',
    // 跟随记录
    master_follow_record:'/api/master/get_follow_record',
    // 添加高手
    master_create:'/api/master/create',
    // 修改高手
    master_update:'/api/master/update',
    // 删除高手
    master_delete:'/api/master/delete',
    // 禁用高手
    master_disable:'/api/master/disable',
    // 启用高手
    master_enable:'/api/master/enable',
    // 禁用自动更新
    master_disable_autoupdate:'/api/master/disable-autoupdate',
    // 启用自动更新
    master_enable_autoupdate:'/api/master/enable-autoupdate',
    // 跟随管理
    master_follower:'/api/master/follower',
    // 高手类型列表
    master_type_list:'/api/mastertype/list_menu',
    // 添加高手类型
    master_type_create:'/api/mastertype/create',
    // 修改高手类型
    master_type_update:'/api/mastertype/update',
    // 删除高手类型
    master_type_delete:'/api/mastertype/delete',
    // 高手排行
    master_sort:'/api/master/master_sort',
    // 设置高手排行
    master_sort_update:'/api/master/master_sort_create_update',
    // 高手审核
    master_audit_list:'/api/master/master_audit_list',
    // 高手审核详情
    master_audit_detail:'/api/master/master_audit_detail',
    // 高手审核通过
    master_audit_agree:'/api/master/master_audit_agree',
    // 高手审核拒绝
    master_audit_refuse:'/api/master/master_audit_refuse',
    // 跟单高手订单管理
    master_get_order:'/api/master/get_master_order',
    // 跟单跟随者订单管理
    master_get_follow_order:'/api/master/get_follow_order',
    // 查询账号
    account_to_master:'/api/master/get_account_to_master',




    // trader work用户管理
    // trader work用户管理
    traders:'/api/traders',
    // trader work用户详情
    trader_detail:'/api/trader/detail', //交易账户数据未完成
    // trader work禁止登录
    trader_disablelogin:'/api/trader/disablelogin',
    // trader work允许登录
    trader_enablelogin:'/api/trader/enablelogin',
    // trader work密码修改
    trader_updatepassword:'/api/trader/updatepassword',
    // trader work删除用户
    trader_delete:'/api/trader/delete',
    // trader work用户登录
    trader_ticket:'/api/trader/get_ticket',
    // traderMt4账号
    trader_accounts:'/api/trader/accounts',
    // trader work用户银行卡
    trader_banks:'/api/trader/banks',
    // 修改tw用户信息
    trader_update_tw_info:'/api/trader/update_tw_info',
    

    // 设置
    // 消息模板
    message_templates:'/api/message/templates',
    // 添加模板
    message_template_create:'/api/message/template/create',
    // 修改模板
    message_template_update:'/api/message/template/update',
    // 删除模板
    message_template_delete:'/api/message/template/delete',
    // 短信设置
    // 获取短信发送类型
    setting_sms_type:'/api/setting/sms/type',
    // 获取配置
    setting_sms_configs:'/api/setting/sms/configs',
    // 添加配置
    setting_sms_config_create:'/api/setting/sms/config/create',
    // 修改配置
    setting_sms_config_update:'/api/setting/sms/config/update',
    // 删除配置
    setting_sms_config_delete:'/api/setting/sms/config/delete',
    // 启用配置
    setting_sms_config_enable:'/api/setting/sms/config/enable',
    // 禁用配置
    setting_sms_config_disable:'/api/setting/sms/config/disable',
    // 获取配置模板
    setting_sms_templates:'/api/setting/sms/templates',
    // 编辑配置模板
    setting_sms_template_edit:'/api/setting/sms/template/edit',
    // 邮件设置
    // 获取邮件发送类型
    setting_mail_type:'/api/setting/mail/type',
    // 获取邮件配置
    setting_mail_configs:'/api/setting/mail/configs',
    // 添加邮件配置
    setting_mail_config_create:'/api/setting/mail/config/create',
    // 修改邮件配置
    setting_mail_config_update:'/api/setting/mail/config/update',
    // 删除邮件配置
    setting_mail_config_delete:'/api/setting/mail/config/delete',
    // 启用邮件配置
    setting_mail_config_enable:'/api/setting/mail/config/enable',
    // 禁用邮件配置
    setting_mail_config_disable:'/api/setting/mail/config/disable',
    // 测试邮件配置
    setting_mail_config_test:'/api/setting/mail/config/test',
    // 获取邮件配置模板
    setting_mail_templates:'/api/setting/mail/templates',
    // 编辑邮件配置模板
    setting_mail_template_edit:'/api/setting/mail/template/edit',
    // 添加邮件配置模板
    setting_mail_template_create:'/api/setting/mail/template/create',
    // 测试邮件配置模板
    setting_mail_template_test:'/api/setting/mail/send_mail',
    // 验证码记录
    setting_sms_code_list:'/api/setting/sms/get_sms_email_code',
    // 获取账户组
    setting_account_groups:'/api/setting/account/groups',
    // 添加账户组
    setting_account_group_create:'/api/setting/account/group/create',
    // 修改账户组
    setting_account_group_update:'/api/setting/account/group/update',
    // 删除账户组
    setting_account_group_delete:'/api/setting/account/group/delete',
    // 获取MT4账号范围
    setting_account_group_list:'/api/setting/account/group/get_reg_list',
    // 修改MT4账号范围
    setting_account_group_update_reg:'/api/setting/account/group/update_reg',
    // 获取返佣层级
    setting_rebate_levels:'/api/setting/rebate/levels',
    // 获取返佣层级类型
    setting_rebate_levels_type:'/api/setting/rebate/levels/type',
    // 获取返佣层级用户
    setting_rebate_level_users:'/api/setting/rebate/level/users',
    // 添加返佣层级
    setting_rebate_level_create:'/api/setting/rebate/level/create',
    // 修改返佣层级
    setting_rebate_level_update:'/api/setting/rebate/level/update',
    // 删除返佣层级
    setting_rebate_level_delete:'/api/setting/rebate/level/delete',
    // 获取角色
    setting_roles:'/api/setting/roles', //缺少value,rights
    // 添加角色
    setting_role_create:'/api/setting/role/create',
    // 修改角色
    setting_role_update:'/api/setting/role/update',
    // 删除角色
    setting_role_delete:'/api/setting/role/delete',
    // 获取权限
    setting_permissions:'/api/setting/permissions',
    // 权限分配
    setting_permission_assignment:'/api/setting/permission/assignment',
    // 获取我的权限
    setting_permission_my:'/api/setting/permission/my',
    // 获取交易品种
    agent_symbols:'/api/agent/symbols',
    // 获取品种组
    setting_symbol_groups:'/api/setting/symbol/groups',
    // 添加品种组
    setting_symbol_group_create:'/api/setting/symbol/group/create', //error
    // 修改品种组
    setting_symbol_group_update:'/api/setting/symbol/group/update', //error
    // 删除品种组
    setting_symbol_group_delete:'/api/setting/symbol/group/delete',
    // 获取点值
    setting_rebate_pointvalues:'/api/setting/rebate/pointvalues',
    // 添加点值
    setting_rebate_pointvalue_create:'/api/setting/rebate/pointvalue/create',
    // 修改点值
    setting_rebate_pointvalue_update:'/api/setting/rebate/pointvalue/update',
    // 开启返佣
    setting_rebate_open:'/api/setting/rebate/open',
    // 关闭返佣
    setting_rebate_close:'/api/setting/rebate/close',
    // 返佣规则管理
    setting_rebate_rules:'/api/setting/rebate/rules',
    // 添加规则
    setting_rebate_rule_create:'/api/setting/rebate/rule/create',
    // 修改规则
    setting_rebate_rule_update:'/api/setting/rebate/rule/update',
    // 删除规则
    setting_rebate_rule_delete:'/api/setting/rebate/rule/delete',
    // 获取规则参数
    setting_rebate_rule_params:'/api/setting/rebate/rule/params',
    // 添加规则参数
    setting_rebate_rule_param_create:'/api/setting/rebate/rule/param/create',
    // 修改规则参数
    setting_rebate_rule_param_update:'/api/setting/rebate/rule/param/update',
    // 删除规则参数
    setting_rebate_rule_param_delete:'/api/setting/rebate/rule/param/delete',
    // 规则参数详情
    setting_rebate_rule_param_detail:'/api/setting/rebate/rule/param/detail', //404
    // 规则参数排序
    // setting_rebate_rule_param_sort:'/api/setting/rebate/rule/param/sort',
    // 获取结算方式
    setting_rebate_settletype:'/api/setting/rebate/settletype',
    // 获取结算单位
    setting_rebate_settleunit:'/api/setting/rebate/settleunit',
    // 获取返佣配置
    setting_rebate_configs:'/api/setting/rebate/configs',
    // 推广链接
    setting_promotions:'/api/setting/promotions',
    // 我的推广链接
    setting_promotion_my:'/api/setting/promotion/my',
    // 添加推广链接
    setting_promotion_create:'/api/setting/promotion/create',
    // 修改推广链接
    setting_promotion_update:'/api/setting/promotion/update',
    // 删除推广链接
    setting_promotion_delete:'/api/setting/promotion/delete',
    // 启用推广链接
    setting_promotion_enable:'/api/setting/promotion/enable',
    // 禁用推广链接
    setting_promotion_disable:'/api/setting/promotion/disable',

    // 汇率设置
    // 汇率
    setting_exchange_rate:'/api/setting/exchange/rate',
    // 添加汇率
    setting_exchange_rate_create:'/api/setting/exchange/rate/create',
    // 修改汇率
    setting_exchange_rate_update:'/api/setting/exchange/rate/update',
    // 删除汇率
    setting_exchange_rate_delete:'/api/setting/exchange/rate/delete',

    // 支付设置
    setting_payment_index:'/api/setting/payment/index',
    // 获取支付类型
    // setting_payment_type:'/api/setting/payment/type',
    // 获取支付配置
    // setting_payment_configs:'/api/setting/payment/configs',
    // 添加支付配置
    setting_payment_config_create:'/api/setting/payment/config/create',
    // 修改支付配置
    setting_payment_config_update:'/api/setting/payment/config/update',
    // 删除支付配置
    setting_payment_config_delete:'/api/setting/payment/config/delete',
    // 启用支付配置
    setting_payment_config_enable:'/api/setting/payment/config/enable',
    // 禁用支付配置
    setting_payment_config_disable:'/api/setting/payment/config/disable',
    // 获取收款银行
    setting_payment_bank:'/api/setting/payment/bank',
    // 添加收款银行
    setting_payment_bank_create:'/api/setting/payment/bank/create',
    // 修改收款银行
    setting_payment_bank_update:'/api/setting/payment/bank/update',
    // 删除收款银行
    setting_payment_bank_delete:'/api/setting/payment/bank/delete',

    // 银行设置
    // 获取银行
    setting_bank:'/api/setting/bank',
    // 添加
    setting_bank_create:'/api/setting/bank/create',
    // 修改
    setting_bank_update:'/api/setting/bank/update',
    // 删除
    setting_bank_delete:'/api/setting/bank/delete',
    // 启用
    setting_bank_enable:'/api/setting/bank/enable',
    // 禁用
    setting_bank_disable:'/api/setting/bank/disable',
    // 设为常用
    setting_bank_common:'/api/setting/bank/common',
    // 取消常用
    setting_bank_uncommon:'/api/setting/bank/uncommon',

    // APP设置
    // 获取品种
    setting_symbols:'/api/setting/symbols',
    // 添加品种
    setting_symbol_create:'/api/setting/symbol/create',
    // 修改品种
    setting_symbol_update:'/api/setting/symbol/update',
    // 删除品种
    setting_symbol_delete:'/api/setting/symbol/delete',
        // 贺词管理
    // 获取贺词
    list_congratulations:'/api/congratulations/list_congratulations',
    // 创建贺词
    create_congratulations:'/api/congratulations/create_congratulations',
    // 修改贺词
    update_congratulations:'/api/congratulations/update_congratulations',
    // 删除贺词
    delete_congratulations:'/api/congratulations/delete_congratulations',
    // 启用贺词
    enable_congratulations:'/api/congratulations/enable_congratulations',
    // 禁用贺词
    disable_congratulations:'/api/congratulations/disable_congratulations',
    // 喜报管理
    // 高手贺词列表
    list_congratulations_master:'/api/congratulations/list_congratulation_master',
    // 修改高手贺词
    update_congratulations_master:'/api/congratulations/update_congratulation_master',
    // 删除高手贺词
    delete_congratulations_master:'/api/congratulations/delete_congratulations_master',
    // 启用高手贺词
    enable_congratulations_master:'/api/congratulations/enable_congratulations_master',
    // 禁用高手贺词
    disable_congratulations_master:'/api/congratulations/disable_congratulations_master',
    // app上架
    app_shelves:'/api/app/shelves',
    // 添加app上架
    app_shelves_create:'/api/app/shelves/create',
    // 修改app上架
    app_shelves_update:'/api/app/shelves/update',
    // 删除app上架
    app_shelves_delete:'/api/app/shelves/delete',
    // app版本
    app_version:'/api/app/version',
    // 添加app版本
    app_version_create:'/api/app/version/create',
    // 修改app版本
    app_version_update:'/api/app/version/update',
    // 删除app版本
    app_version_delete:'/api/app/version/delete',

    // 广告设置
    // 获取banner
    banner:'/api/banner',
    // 获取banner位置
    banner_position:'/api/banner/position',
    // 添加banner
    banner_create:'/api/banner/create',
    // 修改banner
    banner_update:'/api/banner/update',
    // 删除banner
    banner_delete:'/api/banner/delete',
    // 启用banner
    banner_enable:'/api/banner/enable',
    // 禁用banner
    banner_disable:'/api/banner/disable',
    // 广告位置
    advert_position_list:'/api/advert_position/get_list',
    // 添加位置
    advert_position_create:'/api/advert_position/create_position',
    // 修改位置
    advert_position_update:'/api/advert_position/update_position',
    // 删除位置
    advert_position_delete:'/api/advert_position/delete_position',
    // 启用位置
    advert_position_enable:'/api/advert_position/enable_position',
    // 禁用位置
    advert_position_disable:'/api/advert_position/disable_position',

    // MT4设置
    // 订单平仓
    close_out_close_order:'/api/close_out/close_order',
    // 订单平仓记录
    close_out_order_list:'/api/close_out/get_close_order_list',

    // 报表
    // 佣金报表
    // 报表类型
    // report_commission_type:'/api/report/commission/type',
    // 查看用户返佣报表
    commissions:'/api/commissions',
    // 查看用户返佣报表(根据交易账号)
    // commission_user_rebate_account:'/api/commission/user/rebate/account',
    // 查看用户返佣报表详情
    // commission_user_rebate_account_detail:'/api/commission/user/rebate/account/detail',
    // 账户报表
    // 报表类型
    // report_account_type:'/api/report/account/type',
    // 报表
    report_accounts:'/api/report/accounts',
    // 业绩报表
    report_performances:'/api/report/performances',
    // 报表下载记录
    report_download:'/api/report/download',

    // 消息
    // 消息分类
    message_type:'/api/message/type',
    // 收件箱
    message_inbox:'/api/message/inbox',
    // 发件箱
    message_outbox:'/api/message/outbox',
    // 草稿箱
    message_draftbox:'/api/message/draftbox',
    // 回收站
    message_recyclebin:'/api/message/recyclebin',
    // 消息详情
    message_detail:'/api/message/detail',
    // 添加消息
    message_create:'/api/message/create',
    // 修改消息
    message_update:'/api/message/update',
    // 消息标记已读
    message_read:'/api/message/read',
    // 消息全部标记已读
    message_read_all:'/api/message/read/all',
    // 消息放进回收站
    message_recycle:'/api/message/recycle', 
    // 回收站消息恢复
    message_recovery:'/api/message/recovery',
    // 回收站删除消息
    message_delete:'/api/message/delete',
    // 模板详情
    message_template_detail:'/api/message/template/detail',


    // 资讯管理
    news:'/api/news',
    // 获取分类
    news_category:'/api/news/category',
    // 添加资讯
    news_create:'/api/news/create',
    // 修改资讯
    news_update:'/api/news/update',
    // 删除资讯
    news_delete:'/api/news/delete',
    // 发布资讯
    news_publish:'/api/news/publish',
    // 草稿资讯
    news_draft:'/api/news/draft',
    // 分类管理
    news_types:'/api/news/types',
    // 添加分类
    news_types_create:'/api/news/types/create',
    // 修改分类
    news_types_update:'/api/news/types/update',
    // 删除分类
    news_types_delete:'/api/news/types/delete',
    // 标签选项
    news_tags_list:'/api/news/tags/list',
    // 标签管理
    news_tags:'/api/news/tags',
    // 添加标签
    news_tags_create:'/api/news/tags/create',
    // 修改标签
    news_tags_update:'/api/news/tags/update',
    // 删除标签
    news_tags_delete:'/api/news/tags/delete',
    // 策略管理
    // 获取策略
    strategy:'/api/strategy',
    // 添加策略
    strategy_create:'/api/strategy/create',
    // 修改策略
    strategy_update:'/api/strategy/update',
    // 删除策略
    strategy_delete:'/api/strategy/delete',
    // 启用策略
    strategy_enable:'/api/strategy/enable',
    // 禁用策略
    strategy_disable:'/api/strategy/disable',


    // 获取活动
    activity:'/api/activity',
    // 添加活动
    activity_create:'/api/activity/create',
    // 修改活动
    activity_update:'/api/activity/update',
    // 删除活动
    activity_delete:'/api/activity/delete',
    // 获取活动参与范围
    activity_scopes:'/api/activity/scopes',
    // 获取活动任务
    activity_tasks:'/api/activity/tasks',
    // 获取活动参与人
    activity_participant:'/api/activity/participant',
    // 添加活动参与人
    activity_participate:'/api/activity/participate',
    // 获取任务组
    tasks_groups_index:'/api/tasks/groups/index',
    // 修改任务组
    tasks_groups_update:'/api/tasks/groups/update',
    // 添加任务组
    tasks_groups_create:'/api/tasks/groups/create',
    // 删除任务组
    tasks_groups_delete:'/api/tasks/groups/delete',
    // 禁用任务组
    tasks_groups_disable:'/api/tasks/groups/disable',
    // 启用任务组
    tasks_groups_enable:'/api/tasks/groups/enable',
    // 获取任务
    tasks:'/api/tasks',
    // 修改任务
    tasks_update:'/api/tasks/update',
    // 添加任务
    tasks_create:'/api/tasks/create',
    // 删除任务
    tasks_delete:'/api/tasks/delete',
    // 获取任务要求
    tasks_requirements:'/api/tasks/requirements',
    // 获取任务要求详情
    // tasks_requirements_detail:'/api/tasks/requirements/detail',
    // 获取任务奖励
    tasks_rewards:'/api/tasks/rewards',
    // 获取任务跳转
    tasks_redirects:'/api/tasks/redirects',
    // 获取任务任务组
    tasks_groups:'/api/tasks/groups',
    // 任务参与人
    tasks_participant:'/api/tasks/participant',
    // 任务参与人状态设置
    tasks_participant_status:'/api/tasks/participant/set-status',
    // 添加任务参与人
    tasks_participant_create:'/api/tasks/participate',
    // 审核中任务参与人数量
    tasks_participant_count:'/api/tasks/participant/count',
    // 留言反馈
    feedback:'/api/feedback',
    // 添加留言反馈
    feedback_create:'/api/feedback/create',
    // 修改留言反馈
    feedback_update:'/api/feedback/update',
    // 删除留言反馈
    feedback_delete:'/api/feedback/delete',
    // 导出留言反馈
    feedback_export:'/api/feedback/export',
    // 置顶
    feedback_top:'/api/feedback/top',
    // 取消置顶
    feedback_untop:'/api/feedback/untop',


  
    // 仪表板 来源名称参数请求
    customer_source: '/api/customer/customer_source'
}

// const apiURL = 'https://bigdata.gqfxcn.com';
const apiURL = 'https://bigdata.svofx.com';
export const API = {
    // 登录
    // login:'https://api.gqfxcn.com/',
    // andrew
    // 新增客户
    customer:apiURL+'/api/customer',
    // 首次入金客户
    customer_first_recharge:apiURL+'/api/customer/first-recharge',
    // 首次交易客户
    customer_first_trade:apiURL+'/api/customer/first-trade',
    // 新增账户
    account:apiURL+'/api/account',
    // 首次入金账户
    account_first_recharge:apiURL+'/api/account/first-recharge',
    // 首次交易账户
    account_first_trade:apiURL+'/api/account/first-trade',
    // 新增客户明细
    customer_list_detail:apiURL+'/api/customer/list-detail',

    // 累计客户
    customer_total:apiURL+'/api/customer/total',
    // 累计账户
    account_total:apiURL+'/api/account/total',
    // 累计客户/每天
    customer_existed_customer:apiURL+'/api/customer/existed-customer',
    // 累计账户/每天
    account_existed_account:apiURL+'/api/account/existed-account',
    // 累计客户明细
    customer_list_existed_customer:apiURL+'/api/customer/list-existed-customer',

    // 交易手数
    trade_volume:apiURL+'/api/trade/volume',
    // 入金
    trade_deposit:apiURL+'/api/trade/deposit',
    // 出金
    trade_withdraw:apiURL+'/api/trade/withdraw',
    // 净入金
    trade_profit:apiURL+'/api/trade/profit',
    // 入金客户数/每天
    customer_num_deposit:apiURL+'/api/customer/num-deposit',
    // 出金客户数/每天
    customer_num_withdraw:apiURL+'/api/customer/num-withdraw',
    // 入金额区间分布
    trade_deposit_by_money:apiURL+'/api/trade/deposit/by-money',
    // 资金交易明细
    trade_list_detail:apiURL+'/api/trade/list-detail',

    // 交易品种分布
    trade_symbol_detail:apiURL+'/api/trade/symbol-detail',

    // 客户来源分析

    // 来源转化漏斗
    source_analysis_funnel:apiURL+'/api/source_analysis/funnel',

    // 来源转换趋势
    source_analysis_trend: apiURL + '/api/source_analysis/trend',

    // 客户数据分析

    // 业绩统计
    exploit_rank: apiURL+'/api/exploit/rank',

    // 佣金统计
    commission_statistics: apiURL + '/api/exploit/commission',

    // 客户排行
    customer_list: apiURL + '/api/data_analysis/customer_rank_of_customer',

    // 账户排行
    account_number: apiURL + '/api/data_analysis/customer_rank_of_account',

    // 活跃用户
    data_analysis_customer_active:apiURL+'/api/data_analysis/customer_active',

    
}
