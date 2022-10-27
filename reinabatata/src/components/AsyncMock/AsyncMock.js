const products = [
    {
        id: 1,
        description: "Combo de almohadones",
        name: "Combo Cleo",
        price: 3500,
        img: "https://i.imgur.com/NooRAH8.png",
        stock: 11,
        category: "almohadon"
    },
    {
        id: 2,
        description: "Combo de almohadones",
        name: "Combo Suri",
        price: 3500,
        img: "https://i.imgur.com/N8VCMcn.png",
        stock: 7,
        category: "almohadon"
    },
    {
        id: 3,
        description: "Combo de almohadones",
        name: "Combo JoJo",
        price: 3500,
        img: "https://i.imgur.com/2xVHSMN.png",
        stock: 6,
        category: "almohadon"
    },
    {
        id: 4,
        description: "Combo de almohadones",
        name: "Combo Kohl’s",
        price: 3500,
        img: "https://i.imgur.com/fVahXWy.png",
        stock: 9,
        category: "almohadon"
    },
    {
        id: 5,
        description: "Combo de almohadones",
        name: "Combo Daisy",
        price: 3500,
        img: "https://i.imgur.com/ZN5vUxE.png",
        stock: 3,
        category: "almohadon"
    },
    {
        id: 6,
        description: "Combo de almohadones",
        name: "Combo Libél",
        price: 3500,
        img: "https://i.imgur.com/pXbBepj.png",
        stock: 7,
        category: "almohadon"
    },
    {
        id: 7,
        description: "Combo de almohadones",
        name: "Combo Benit",
        price: 3500,
        img: "https://i.imgur.com/42ixrLG.png",
        stock: 5,
        category: "almohadon"
    },
    {
        id: 8,
        description: "Combo de almohadones",
        name: "Combo Igls",
        price: 5500,
        img: "https://i.imgur.com/piUPQNH.png",
        stock: 11,
        category: "almohadon"
    },
    {
        id: 9,
        description: "Combo de almohadones",
        name: "Combo Summer",
        price: 5500,
        img: "https://i.imgur.com/re0NGlw.png",
        stock: 13,
        category: "almohadon"
    },
    {
        id: 10,
        description: "Combo de almohadones",
        name: "Combo Haven",
        price: 6500,
        img: "https://i.imgur.com/5NmZ29g.png",
        stock: 20,
        category: "almohadon"
    },
    {
        id: 11,
        description: "Combo de almohadones",
        name: "Combo Snow",
        price: 5500,
        img: "https://i.imgur.com/Ho6NrYu.png",
        stock: 3,
        category: "almohadon"
    },
    {
        id: 12,
        description: "Combo de almohadones",
        name: "Combo BouBash",
        price: 6500,
        img: "https://i.imgur.com/rIPtLtA.png",
        stock: 1,
        category: "almohadon"
    },
    {
        id: 13,
        description: "Combo de barbijo",
        name: "Combo Fine",
        price: 1400,
        img: "https://i.imgur.com/k3ta0CN.png",
        stock: 0,
        category: "barbijo"
    },
    {
        id: 14,
        description: "Combo de barbijo",
        name: "Combo Tricton",
        price: 1400,
        img: "https://i.imgur.com/paHoFLF.png",
        stock: 8,
        category: "barbijo"
    },
    {
        id: 15,
        description: "Combo de barbijo",
        name: "Combo Brossoc",
        price: 1400,
        img: "https://i.imgur.com/2zuKYL0.png",
        stock: 4,
        category: "barbijo"
    },
    {
        id: 16,
        description: "Combo de barbijo",
        name: "Combo Zed",
        price: 900,
        img: "https://i.imgur.com/ZIvQu5e.png",
        stock: 7,
        category: "barbijo"
    },
    {
        id: 17,
        description: "Combo de barbijo",
        name: "Combo Cozway",
        price: 1400,
        img: "https://i.imgur.com/RUWOtvO.png",
        stock: 9,
        category: "barbijo"
    },
    {
        id: 18,
        description: "Combo de barbijo",
        name: "Combo Borla ",
        price: 900,
        img: "https://i.imgur.com/7TPt2XK.png",
        stock: 4,
        category: "barbijo"
    },
    {
        id: 19,
        description: "Combo de barbijo",
        name: "Combo Oxxon",
        price: 900,
        img: "https://i.imgur.com/5lTFbs0.png",
        stock: 6,
        category: "barbijo"
    },
    {
        id: 20,
        description: "Combo de barbijo",
        name: "Combo Alfiezza",
        price: 1400,
        img: "https://i.imgur.com/s5htt4W.png",
        stock: 7,
        category: "barbijo"
    },
    {
        id: 21,
        description: "Combo de barbijo",
        name: "Combo Olokuti",
        price: 900,
        img: "https://i.imgur.com/L7JURp9.png",
        stock: 6,
        category: "barbijo"
    },
    {
        id: 22,
        description: "Combo de barbijo",
        name: "Combo Rescá",
        price: 1400,
        img: "https://i.imgur.com/egV8PZN.png",
        stock: 3,
        category: "barbijo"
    },
    {
        id: 23,
        description: "Combo de barbijo",
        name: "Combo Etam",
        price: 900,
        img: "https://i.imgur.com/CodhsB8.png",
        stock: 2,
        category: "barbijo"
    },
    {
        id: 24,
        description: "Combo de barbijo",
        name: "Combo Geox",
        price: 1400,
        img: "https://i.imgur.com/Gaub8s6.png",
        stock: 4,
        category: "barbijo"
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
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products.find(prod => {
                return prod.id === parseInt(id)
            }))
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}