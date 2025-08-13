import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";



export type User={
    id:string;
    name:string;
};

const API_URL="http://localhost:3003"
//reducerPath:api'ye benzersiz bir anahtar string verilen yer.
export const usersApi=createApi({
    reducerPath:"usersApi",
    //istek geldiğinde ne yapılacaksa onu burada yönetiyoruz.
    //fetchBaseQuery: aslında fetc(API_URL) benzeri şeyler yapıyor.
    baseQuery:fetchBaseQuery({baseUrl:API_URL}),
    //api içindeki tag'ler burada belirtilir.
    tagTypes:["Users"],
    //endpoint listesi veriliyor.
    endpoints:(builder)=>({
        getUsers:builder.query<User[],void>({
            query:()=>"/users",
            providesTags:["Users"]
        }),
        //.....
        addUser:builder.mutation<User,string>({
            query:(name)=>({
                url:"/users",
                method:"POST",
                body:{name},

            }),
            invalidatesTags:["Users"]
        })
    }),
});

export const {useGetUsersQuery,useAddUserMutation}=usersApi;