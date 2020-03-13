import {mock} from '../utils';
import {CRM} from '@/axios/api';

const loginResult = {
    token_type:"Bearer",
    expires_in:"1800",
    access_token:'eyJFDSsdfdsfjkJDKLFJSLlfjdl'
}

mock(CRM.login,loginResult)