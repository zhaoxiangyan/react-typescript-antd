/**
 * http通用工具函数
 */
import axios from 'axios';
import {message} from 'antd';
import {CRM,Test} from './api';


const language = navigator.language||navigator.userLanguage;
switch (window.localStorage.getItem('lang')||(language&&((language.indexOf("-")!== -1)?language.substr(0,2):language))){
    case 'zh':
    case 'zh-CN':
    case 'zh_CN': 
        axios.defaults.headers['x-api-lang']='zh_cn';
        break;
    case 'zh-TW':
    case 'zh_TW': 
        axios.defaults.headers['x-api-lang']='zh_cn';
        break;
    case 'en':
    case 'en-US':
    case 'en_US': 
        axios.defaults.headers['x-api-lang']='en';
        break;
    case 'ja':
    case 'ja_JP': 
        axios.defaults.headers['x-api-lang']='jp';
        break;
    default:
        axios.defaults.headers['x-api-lang']='jp';
}
/**
 * 公用请求
 * @param url       接口地址
 * @param data      接口参数
 * @param headers   接口所需header配置
 */
export const get = ({url, data, headers}) => axios.get(url, data&&{params:data}, headers).then(Response).catch(Error_res);

export const post = ({url, data, headers}) => axios.post(url, data, headers).then(Response).catch(Error_res);

// 处理res返回

function Response(res){
    // console.log(res)
    if(localStorage.getItem('token')&&res.headers.authorization&&(localStorage.getItem('token')!==res.headers.authorization)){
        // console.log(res.headers)
        axios.defaults.headers['Authorization']=res.headers.authorization;
        localStorage.setItem('token',res.headers.authorization);
        return res.data;
    }else{
        return res.data;
    }
}
// 处理err返回
function Error_res(err){
    if(err.response&&(err.response.data.code === 100025||err.response.data.code === 100024||err.response.data.code === 100010)){
        window.location.href="/login";
        localStorage.removeItem('token')
    }
    return (!Boolean(err.response)||!Boolean(err.response.status)||err.response.status===500)?{is_succ:false,message:'Error'}:err.response.data;
}

let ajax = '';
// export default function Ajax(type,url,msg,data){
//     return new Promise((resolve,reject)=>{
//         if(msg&&ajax===url){
//             message.warn('Submit multiple times')
//         }else{
//             msg&&(ajax = url);
//             (type==='get'?get({url:CRM[url],data}):post({url:CRM[url],data})).then(res=>{
//                 msg&&(ajax = '');
//                 if(res&&res.is_succ){
//                     resolve(res.data||res)
//                 }else{
//                     message.error(res.message);
//                     data&&reject(res.message||res)
//                 }
//             })
//         }
//     })
// }

export const api = (type,url,msg,data)=>{
    return new Promise((resolve,reject)=>{
        if(msg&&ajax===url){
            reject({alert:true})
        }else{
            if (process.env.NODE_ENV !== 'production') console.log('request options:', {type,url,data});
            msg&&(ajax = url);
            (type==='get'?get({url,data}):post({url,data})).then(res=>{
                msg&&(ajax = '');
                if(res&&res.is_succ){
                    if (process.env.NODE_ENV !== 'production') console.log('request success:', res.data||res);
                    resolve(res.data||res)
                }else{
                    message.error(res.message);
                    if (process.env.NODE_ENV !== 'production') console.log('request Error', data&&(res.message||res));
                    data&&reject(res.message||res)
                }
            })
        }
    })
}

export {
    Test as RequestUrl
}
export default api;