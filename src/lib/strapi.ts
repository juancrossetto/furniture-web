const { NEXT_PUBLIC_STRAPI_HOST, NEXT_PUBLIC_STRAPI_TOKEN } = process.env;

// const NEXT_PUBLIC_STRAPI_HOST = "http://localhost:1337"
// const NEXT_PUBLIC_STRAPI_TOKEN = "136373669f746d15e7963d53a9d170911055816b16f339ea2caae0f818c4a7e489263a235d793fdf5822764165e2ea7140a131e792569498990f5c2a101a707eeeb67c56d8c350a3343192f67aca528f8cd4ec93d8dc5e01af0cb0e0b3e4293db0efcb35d6323ee4fc3667ea7d138d98ea1c783442484e96d3e8aaddc77de352"

export function query(url: string) {
    return fetch(`${NEXT_PUBLIC_STRAPI_HOST}/api/${url}`, {
            headers: {
        Authorization: `Bearer ${NEXT_PUBLIC_STRAPI_TOKEN}`,
    },
    }).then((response) => response.json());
}