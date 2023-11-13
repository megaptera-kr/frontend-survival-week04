import { Dispatch, SetStateAction } from 'react';

export type Menu = {
    id : string,
    name : string,
    price : number
}

export type Restaurant = {
    id : string,
    category : string,
    name : string,
    menu : Menu[]
}

export type Receipt = {
    id : string,
    menu : Menu[],
    totalPrice : number
}

export type SetValue<T> = Dispatch<SetStateAction<T>>

export type Category = '전체' | '중식' | '한식' | '일식';
