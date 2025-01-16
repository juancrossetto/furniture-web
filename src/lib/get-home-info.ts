import { query } from "./strapi";
import { HomeProps } from "./types";

export const getHomeInfo = (): Promise<HomeProps> => {
    return query("home?populate=cover").then(
        res => {
            console.log("res home:", res)
            return res.data
           
        }
    )
}