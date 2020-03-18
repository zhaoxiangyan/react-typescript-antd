import React from 'react';
import {DatePicker} from 'antd';
import {RangePickerProps} from 'antd/lib/date-picker';
import moment from 'moment';

const {RangePicker} = DatePicker;

const RangeDatePicker = () =>{

    const props:RangePickerProps = {
        allowClear:false,
        ranges:{
            "今天":[moment(),moment()],
            "昨天":[moment().subtract(1,'days'),moment().subtract(1,'days')],
            "7天前":[moment().subtract(6,'days'),moment()],
            "30天前":[moment().subtract(29,'days'),moment()],
            "当月":[moment().startOf('month'),moment().endOf('month')],
            "上月":[moment().month(moment().month() - 1).startOf('month'),moment().month(moment().month() - 1).endOf('month')],
        }
    }
    
    return (
        <RangePicker {...props} />
    )
}

export default RangeDatePicker;