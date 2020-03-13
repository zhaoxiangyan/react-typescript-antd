import React, { ReactElement } from 'react';
import {Form} from 'antd';
import {FormItemProps} from 'antd/lib/form';
import {RuleObject,RuleRender} from 'rc-field-form/lib/interface';
import {MessageFormatElement} from 'intl-messageformat-parser/lib/intl-messageformat-parser';


type IntlRule = RuleObject & {message?:MessageFormatElement|string|ReactElement;}

type Rule = IntlRule|RuleRender;
interface Props extends FormItemProps {
    rules?:Rule[]
}
const FormItem = (props:Props)=>{
    return(
        <Form.Item {...props} />
    )
}

export default FormItem;