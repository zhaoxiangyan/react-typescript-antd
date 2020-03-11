import {createReducer} from './types';
import * as type from './action-types';
import axios from 'axios'
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'moment/locale/ja';

// moment.locale('en');

// // 国际化
const setLanguage = (lang:string) =>{
    window.localStorage.setItem('lang',lang);
    switch (lang){
        case 'zh_CN': 
            axios.defaults.headers['x-api-lang']='zh_cn';
            moment.locale('zh-cn');
            break;
        case 'zh_TW': 
            axios.defaults.headers['x-api-lang']='zh_cn';
            moment.locale('zh-cn');
            break;
        case 'en_US': 
            axios.defaults.headers['x-api-lang']='en';
            moment.locale('en');
            break;
        case 'ja_JP': 
            axios.defaults.headers['x-api-lang']='jp';
            moment.locale('ja');
            break;
        default:
            axios.defaults.headers['x-api-lang']='jp';
            moment.locale('ja');
    }
    return {type:type.setLanguage,lang}
};

export interface State {
    lang:string;
    refresh:boolean;
    setting_collapsed:boolean;
    is_mobile:boolean
}

export const action = {
    setLanguage
};

// interface navigator extends Navigator{}

const {language} = navigator;

export const reducer = createReducer(
    {
        lang: window.localStorage.getItem('lang')||(()=>{switch (language&&((language.indexOf("-")!== -1)?language.substr(0,2):language) ){
            case 'zh':
            case 'zh-TW':
            case 'zh-CN': return 'zh_CN';
            case 'en-US':
            case 'en': return 'en_US';
            case 'ja': return 'ja_JP';
            default: return 'ja_JP'; 
        }})(),
        refresh:false,
        setting_collapsed:true,
        is_mobile:false
    },
    {
        [type.setLanguage](state,{lang}){
            return {
                ...state,
                lang:lang,
            }
        }
    }
)