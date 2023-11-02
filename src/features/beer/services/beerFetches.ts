import { Api } from "@services/axios/AxiosInstance";
import { Beer } from "../data/types";

export async function fetchPaginatedBeers(page:number){
    return Api.get<Beer[]>('beers',{
        params:{
            page:page,
            per_page:50
        }
    })
}