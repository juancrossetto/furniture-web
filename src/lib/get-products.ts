import { query } from "./strapi";
import { Product } from "./types";
const { NEXT_PUBLIC_STRAPI_HOST } = process.env;

export const getProductsByCategory = (categoryId: string): Promise<any> => {
    return query(`product?filters[product_category][slug][$contains]=${categoryId}&populate=images`).then(
        res => {
            const { data, meta } = res;
            const products = data.map((product: Product) => {
                const { name, slug, description, images: rawImages, price } = product;
                const images = `${NEXT_PUBLIC_STRAPI_HOST}${rawImages.url}`
                return { name, slug, description, price, images }
            })
            return { products, pagination: meta.pagination };
        }
    )
}