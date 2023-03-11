import React from 'react';
import {PageIndex} from "../pages/index";
import style from './App.module.scss'
import {useWindowSize} from "../utils/hooks/useWindowSize";
export const  App = ()=> {
    const size = useWindowSize()

    if(size.width !== undefined && size.width < 700 ) {
        return <div className={style.error}>
            <h1>ПРОСТИТЕ! НО ДЛЯ МОБИЛЬНЫХ ТЕЛЕФОНОВ У НАС ЕСТЬ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ</h1>
        </div>
    }

    return (
    <div className={style.App}>
      <PageIndex />
    </div>
  );
}

