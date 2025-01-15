import { query } from "./strapi";
import { Testimonial } from "./types";
const { NEXT_PUBLIC_STRAPI_HOST } = process.env;

export const getTestimonials = (): Promise<Testimonial[]> => {
    return query("testimonials").then(
        res => {
            return (res.data || [])
        }
    )
}