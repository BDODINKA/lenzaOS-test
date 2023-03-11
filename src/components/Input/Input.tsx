import React, {ChangeEvent, FC, FormEvent, useRef, useState} from 'react';
import style from './Input.module.scss'
import {useAppDispatch} from "../../utils/hooks/useAppDispatch";
import {setMyMessageAC} from "../../app/chatReducer";

export const Input:FC = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [value,setValue] = useState('')
    const dispatch=useAppDispatch()

    const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('upload')
    }
    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(setMyMessageAC(value))
        setValue('')
    }

    return (
        <div className={style.wrapper}>
            <form className={style.form} onSubmit={submitHandler}>
                <input type="text"
                       className={style.input_text}
                       placeholder={'TypeMessage'}
                       onChange={(event)=>setValue(event.currentTarget.value)}
                       value={value}
                />
                <label className={style.input_file}>
                    <input type={"file"}
                           style={{display:"none"}}
                           ref={inputRef}
                           onChange={uploadHandler}
                    />
                    <span/>
                </label>
                <button type={'submit'} className={style.btn}>
                </button>
            </form>
        </div>
    );
};
