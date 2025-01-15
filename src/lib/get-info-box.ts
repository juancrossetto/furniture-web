import { query } from "./strapi";
import { InfoBox } from "./types";

export const getInfoBoxes = (): Promise<InfoBox[]> => {
    return query("info-boxes").then(
        res => {
            return (res.data || [])
        }
    )
}