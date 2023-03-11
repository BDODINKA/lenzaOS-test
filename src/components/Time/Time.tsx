import React, {FC} from 'react';
import style from './Time.module.scss'

export const Time:FC<{time:string,My:boolean,className?:string}> = ({time,My,className}) => {
const finalWrapper = className ? `${style.wrapper} ${className}`:style.wrapper
    return (
        <div className={finalWrapper}>
            <div className={style.time}>{time}</div>
            {My && <div className={style.check}/>}
        </div>
    );
};

