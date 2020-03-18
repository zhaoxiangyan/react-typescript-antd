import React from 'react';
import {Form,Input,Select,Radio,Checkbox,InputNumber,Upload,Button,DatePicker,Switch} from 'antd';
import {UploadOutlined} from '@ant-design/icons';
import {CheckboxOptionType} from 'antd/lib/checkbox';
import {SelectProps,LabeledValue} from 'antd/lib/select';
import {InputProps} from 'antd/lib/input';
import {NamePath,Rule} from 'rc-field-form/lib/interface';
import RangeDatePicker from '../date/RangeDatePicker';


const {RangePicker} = DatePicker;
const {Option} = Select;

export interface FormItemInputProps {
    name?: NamePath;
    label?: React.ReactNode;
    rules?: Rule[];
    type?:string;
    options?:Array<CheckboxOptionType | LabeledValue>;
    UploadText?:string;
    inputProps?:InputProps;
    selectProps?:SelectProps<any>;
    noStyle?: boolean;
    valuePropName?:string;
    [key: string]:any;
}

const FormItemInput = ({name,noStyle=false,label,rules,type,valuePropName="value",options=[],UploadText="请上传",inputProps,selectProps,...otherOptions}:FormItemInputProps) =>{

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
            case 'checkbox_group':
                return <Checkbox.Group options={options} />;
            case 'checkbox':
                return <Checkbox>{label}</Checkbox>
            case 'select':
                return <Select {...selectProps}>
                    {(options as LabeledValue[]).map(v=><Option key={v.value} value={v.value}>{v.label}</Option>)}
                </Select>
            case 'password':
                return <Input.Password {...inputProps} />
            case 'hidden':
                return <input type="hidden" />
            case 'RangeDatePicker':
                return RangeDatePicker();
            case 'RangePicker':
                return <RangePicker />
            case 'textarea':
                return <Input.TextArea rows={3} />
            case 'switch':
                return <Switch />
            default: 
                return <Input {...inputProps} />
        }
    }

    const props = {
        name,
        rules,
        label,
        noStyle,
        valuePropName
    }
    return(
        <Form.Item {...props}>
            {CustomInput()}
        </Form.Item>
    )
}
export {FormItemInput};
export default FormItemInput;