import React, {FC} from 'react';
import style from './SystemMessage.module.scss'
export const SystemMessage:FC<{data:number}> = ({data}) => {

    return (
        <div className={style.wrapper}>{`${new Date(data).getDate()}.${new Date(data).getMonth()}.${new Date(data).getFullYear()}`}</div>
    );
};
