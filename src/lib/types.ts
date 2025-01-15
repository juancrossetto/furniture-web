

export interface HomeProps {
    title: string;
    description: any;
    slogan: any;
    cover: any;
}

export interface ProductCategory {
    type: 'special' | 'collection' | 'feature'
    title: string
    description?: string
    imageUrl: string
    href: string
    className?: string
    features?: string[]
}

export interface Product {
    name: string;
    isActive: boolean;
    price: number;
    product_category: any;
    description: any;
    color: string;
    images: any;
    stock: number;
    slug: string;
}


export interface Testimonial {
    id: number;
    clientName: string;
    description: any;
}

export interface InfoBox {
    id: number;
    title: string;
    description: any;
    icon: IconProps;
}


export interface IconProps {
    name: string;
    size?: string;
    color?: string;
}
