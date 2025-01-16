import { query } from "./strapi";
import { ProductCategory } from "./types";
const { NEXT_PUBLIC_STRAPI_HOST } = process.env;

export const getCategories = (): Promise<ProductCategory[]> => {
    return query("product-categories?populate[image][fields][0]=url").then(
        res => {
            console.log("res categories:", res)
            return (res.data || []).map((category: any) => {
                const { name: title, slug, description, feature, className, href, type, image: rawImage } = category
                // const imageUrl = `${NEXT_PUBLIC_STRAPI_HOST}${rawImage.url}`
                const imageUrl = `${rawImage.url}`
                return { title, slug, description, feature, className, href, type, imageUrl }
            })
        }
    )
}