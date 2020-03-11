import zh_CN from './json/zh_CN.json';
import en_US from './json/en_US.json';
import ja_JP from './json/ja_JP.json';
import zh_TW from './json/zh_TW.json';

import zhCN from 'antd/es/locale/zh_CN';
import enUS from 'antd/es/locale/en_US';
import jaJP from 'antd/es/locale/ja_JP';
import zhTW from 'antd/es/locale/zh_TW';

const locale = {
    zh_CN,
    en_US,
    ja_JP,
    zh_TW,
    antd:{
        zh_CN:zhCN,
        en_US:enUS,
        ja_JP:jaJP,
        zh_TW:zhTW
    }
}

export const getAntdLocale =(lang:string)=>{
    if(lang==='en_US'){
        return locale.antd.en_US;
    }else if(lang==='ja_JP'){
        return locale.antd.ja_JP;
    }else{
        return locale.antd.zh_CN;
    }
}

export const getMessagesLocale =(lang:string)=>{
    if(lang==='en_US'){
        return locale.en_US;
    }else if(lang==='ja_JP'){
        return locale.ja_JP;
    }else{
        return locale.zh_CN;
    }
}

export const getLocaleString = (lang:string)=>{
    if(lang==='en_US'){
        return 'en';
    }else if(lang==='ja_JP'){
        return 'ja';
    }else{
        return 'zh';
    }
}



export default locale;
