import {mock} from '../utils';
import {RequestUrl} from '@/axios';

const loginResult = {
    token_type:"Bearer",
    expires_in:"1800",
    access_token:'eyJFDSsdfdsfjkJDKLFJSLlfjdl'
}

mock(RequestUrl.login,loginResult)