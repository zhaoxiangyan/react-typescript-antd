import Mock from 'mockjs';

const success = {
    is_succ:true,
    code:"0",
    message:"",
  };
  
  const token = {
    token_type:"Bearer",
    expires_in:"1800",
    access_token:'eyJFDSsdfdsfjkJDKLFJSLlfjdl'
  };
  
  function getUrl(apiFn) {
    if (!apiFn || (typeof apiFn === 'function' && !apiFn.url)) {
      throw new Error('mock请求url不能为空');
    }
    if (typeof apiFn === 'string') return apiFn;
    return apiFn.url;
  }
  
  function mock(apiFn, result = {}) {
    const url = getUrl(apiFn);
    const data = {
      ...success,
      data: result,
    };
    Mock.mock(new RegExp(url), data);
  }
  
  export { mock, success, token };
  