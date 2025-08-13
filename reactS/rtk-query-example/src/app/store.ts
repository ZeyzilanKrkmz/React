import { configureStore} from "@reduxjs/toolkit";
import { usersApi } from "./api";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


export const store=configureStore({
    //Store'un bağlı olduğu reducerlar
    //reducer:store'dan gelen isteği işleyen birimlerdir.
    reducer:{
        [usersApi.reducerPath]:usersApi.reducer
        //usersApi:usersApi.reducer
    },
    //Store'a giden istekleri arka planda çalıştırıp işleyen birimlerdir.
    //reducerlar haricinde bir şeyler yapılacaksa burada yapılır.
    //middleware neler yapar?
    //loglama:redux'a hangi istekler gidiyor.
    //localStorage:verilerin kalıcı olarak kaydedilmesi
    //web istekleri: store'a giden web isteklerini middleware ile karşılarız.
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(usersApi.middleware),
});

//TypeScript'le uyumlu hale getirmek için
export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;
export const useAppDispatch:()=>AppDispatch=useDispatch;
export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector;