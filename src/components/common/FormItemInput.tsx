import React from 'react';
import {Form,Input,Select,Radio,Checkbox,InputNumber,Upload,Button} from 'antd';
import {UploadOutlined} from '@ant-design/icons';
// import {FormItemProps} from 'antd/lib/form';
import {CheckboxOptionType} from 'antd/lib/checkbox';
import {SelectProps,LabeledValue} from 'antd/lib/select';
import {InputProps} from 'antd/lib/input';
import {NamePath,Rule} from 'rc-field-form/lib/interface';

const {Option} = Select;

interface FormItemInputProps {
    name?: NamePath;
    rules?: Rule[];
    type?:string;
    options?:Array<CheckboxOptionType | LabeledValue>;
    UploadText?:string;
    inputProps?:InputProps;
    selectProps?:SelectProps<any>;
    [key: string]:any
}

const FormItemInput = ({name,rules,type,options=[],UploadText,inputProps,selectProps,...otherOptions}:FormItemInputProps) =>{

    const CustomInput = ()=>{
        switch(type){
            case 'upload':
                return <Upload {...otherOptions}>
                    <Button>
                        <UploadOutlined />{UploadText}
                    </Button>
                </Upload>
            case 'number':
                return <InputNumber {...otherOptions} />;
            case 'radio':
                return <Radio.Group options={options} />;
            case 'checkbox':
                return <Checkbox.Group options={options} />;
            case 'select':
                return <Select {...selectProps}>
                    {(options as LabeledValue[]).map(v=><Option key={v.value} value={v.value}>{v.label}</Option>)}
                </Select>
            case 'password':
                return <Input.Password {...inputProps} />
            default: 
                return <Input {...inputProps} />
        }
    }
    return(
        <Form.Item 
        name={name}
        rules={rules}
        >
            {CustomInput()}
        </Form.Item>
    )
}

export default FormItemInput;