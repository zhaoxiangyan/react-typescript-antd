import React from 'react';
import Image from '@/assets/img/404.png';
import styles from './index.module.less';

const NotFound = ()=>{
    return(
        <div className={styles.notfound}>
            <img src={Image} alt="404" />
        </div>
    )
}

export default NotFound;