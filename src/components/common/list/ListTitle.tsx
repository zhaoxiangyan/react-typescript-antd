import React from 'react';
import {Row,Col} from 'antd';
import {ButtonProps} from 'antd/lib/button';
import '../index.less';

interface Props{
    title:string;
    buttonActions?:ButtonProps[];
    actions:React.ReactNode[];
}
const ListTitle = ({title,buttonActions,actions=[]}:Props) =>{
    // let actionsList = buttonActions.map((action,index)=><Button key={`action_${index}`} {...action}>{action.children}</Button>);
    // console.log(actions);
    
    return(
        <Row className="list_title">
            <Col>
                <span className="title">{title}</span>
                {actions}
                {/* {buttonActions.map((action,index)=><Button key={`action_${index}`} {...action} />)} */}
            </Col>
        </Row>
    )
}

export default ListTitle;