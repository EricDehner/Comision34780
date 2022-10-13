const products = [
    {
        "id": 1,
        "description": "Combo de almohadones",
        "name": "Combo Cleo",
        "price": 3500,
        "img": "./images/productos/almohadones/01.png",
        "stock": 11,
        "category": "Almohadon"
    },
    {
        "id": 2,
        "description": "Combo de almohadones",
        "name": "Combo Suri",
        "price": 3500,
        "img": "./images/productos/almohadones/02.png",
        "stock": 7,
        "category": "Almohadon"
    },
    {
        "id": 3,
        "description": "Combo de almohadones",
        "name": "Combo JoJo",
        "price": 3500,
        "img": "./images/productos/almohadones/03.png",
        "stock": 6,
        "category": "Almohadon"
    },
    {
        "id": 4,
        "description": "Combo de almohadones",
        "name": "Combo Kohl’s",
        "price": 3500,
        "img": "./images/productos/almohadones/04.png",
        "stock": 9,
        "category": "Almohadon"
    },
    {
        "id": 5,
        "description": "Combo de almohadones",
        "name": "Combo Daisy",
        "price": 3500,
        "img": "./images/productos/almohadones/05.png",
        "stock": 3,
        "category": "Almohadon"
    },
    {
        "id": 6,
        "description": "Combo de almohadones",
        "name": "Combo Libél",
        "price": 3500,
        "img": "./images/productos/almohadones/06.png",
        "stock": 7,
        "category": "Almohadon"
    },
    {
        "id": 7,
        "description": "Combo de almohadones",
        "name": "Combo Benit",
        "price": 3500,
        "img": "./images/productos/almohadones/07.png",
        "stock": 5,
        "category": "Almohadon"
    },
    {
        "id": 8,
        "description": "Combo de almohadones",
        "name": "Combo Igls",
        "price": 5500,
        "img": "./images/productos/almohadones/08.png",
        "stock": 11,
        "category": "Almohadon"
    },
    {
        "id": 9,
        "description": "Combo de almohadones",
        "name": "Combo Summer",
        "price": 5500,
        "img": "./images/productos/almohadones/09.png",
        "stock": 13,
        "category": "Almohadon"
    },
    {
        "id": 10,
        "description": "Combo de almohadones",
        "name": "Combo Haven",
        "price": 6500,
        "img": "./images/productos/almohadones/010.png",
        "stock": 20,
        "category": "Almohadon"
    },
    {
        "id": 11,
        "description": "Combo de almohadones",
        "name": "Combo Snow",
        "price": 5500,
        "img": "./images/productos/almohadones/011.png",
        "stock": 3,
        "category": "Almohadon"
    },
    {
        "id": 12,
        "description": "Combo de almohadones",
        "name": "Combo BouBash",
        "price": 6500,
        "img": "./images/productos/almohadones/012.png",
        "stock": 1,
        "category": "Almohadon"
    },
    {
        "id": 13,
        "description": "Combo de barbijo",
        "name": "Combo Fine",
        "price": 1400,
        "img": "./images/productos/barbijos/1.png",
        "stock": 0,
        "category": "Barbijo"
    },
    {
        "id": 14,
        "description": "Combo de barbijo",
        "name": "Combo Tricton",
        "price": 1400,
        "img": "./images/productos/barbijos/2.png",
        "stock": 8,
        "category": "Barbijo"
    },
    {
        "id": 15,
        "description": "Combo de barbijo",
        "name": "Combo Brossoc",
        "price": 1400,
        "img": "./images/productos/barbijos/3.png",
        "stock": 4,
        "category": "Barbijo"
    },
    {
        "id": 16,
        "description": "Combo de barbijo",
        "name": "Combo Zed",
        "price": 900,
        "img": "./images/productos/barbijos/4.png",
        "stock": 7,
        "category": "Barbijo"
    },
    {
        "id": 17,
        "description": "Combo de barbijo",
        "name": "Combo Cozway",
        "price": 1400,
        "img": "./images/productos/barbijos/5.png",
        "stock": 9,
        "category": "Barbijo"
    },
    {
        "id": 18,
        "description": "Combo de barbijo",
        "name": "Combo Borla ",
        "price": 900,
        "img": "./images/productos/barbijos/6.png",
        "stock": 4,
        "category": "Barbijo"
    },
    {
        "id": 19,
        "description": "Combo de barbijo",
        "name": "Combo Oxxon",
        "price": 900,
        "img": "./images/productos/barbijos/7.png",
        "stock": 6,
        "category": "Barbijo"
    },
    {
        "id": 20,
        "description": "Combo de barbijo",
        "name": "Combo Alfiezza",
        "price": 1400,
        "img": "./images/productos/barbijos/8.png",
        "stock": 7,
        "category": "Barbijo"
    },
    {
        "id": 21,
        "description": "Combo de barbijo",
        "name": "Combo Olokuti",
        "price": 900,
        "img": "./images/productos/barbijos/9.png",
        "stock": 6,
        "category": "Barbijo"
    },
    {
        "id": 22,
        "description": "Combo de barbijo",
        "name": "Combo Rescá",
        "price": 1400,
        "img": "./images/productos/barbijos/10.png",
        "stock": 3,
        "category": "Barbijo"
    },
    {
        "id": 23,
        "description": "Combo de barbijo",
        "name": "Combo Etam",
        "price": 900,
        "img": "./images/productos/barbijos/11.png",
        "stock": 2,
        "category": "Barbijo"
    },
    {
        "id": 24,
        "description": "Combo de barbijo",
        "name": "Combo Geox",
        "price": 1400,
        "img": "./images/productos/barbijos/12.png",
        "stock": 4,
        "category": "Barbijo"
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => {
                return prod.id === parseInt(id)
            }))
        }, 1000)
    })
}