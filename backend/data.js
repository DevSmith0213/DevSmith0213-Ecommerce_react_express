import bcrypt from 'bcryptjs';

const data = {
    users:[
        {
            name:'Basir',
            email:'admin@example.com',
            password:bcrypt.hashSync('1234', 8),
            isAdmin:true
        },
        {
            name:'John',
            email:'user@example.com',
            password:bcrypt.hashSync('1234', 8),
            isAdmin:false
        },
    ],
    products:[
        {
            _id: '1',
            name: 'Nike Slim Shirt',
            category:'Short',
            image:'/images/p1.jpg',
            price:120,
            countInStock:20,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description:'high quality product'
        },
        {
            _id: '2',
            name: 'Adidas Slim Shirt',
            category:'Short',
            image:'/images/p2.jpg',
            price:100,
            countInStock:14,
            brand:'Nike',
            rating:4.0,
            numReviews:10,
            description:'high quality product'
        },
        {
            _id: '3',
            name: 'Lacoste Free Shirt',
            category:'Short',
            image:'/images/p3.jpg',
            price:220,
            countInStock:46,
            brand:'Lacoste',
            rating:4.8,
            numReviews:10,
            description:'high quality product'
        },
        {
            _id: '4',
            name: 'Nike Slim Pant',
            category:'Pant',
            image:'/images/p4.jpg',
            price:78,
            brand:'Nike',
            countInStock:12,
            rating:4.5,
            numReviews:3,
            description:'high quality product'
        },
        {
            _id: '5',
            name: 'Puma Slim Pant',
            category:'Pant',
            image:'/images/p5.jpg',
            price:65,
            brand:'Puma',
            countInStock:7,
            rating:4.5,
            numReviews:5,
            description:'high quality product'
        },
        {
            _id: '6',
            name: 'Adidas Fit Pant',
            category:'Pant',
            image:'/images/p6.jpg',
            price:139,
            brand:'Adidas',
            countInStock:57,
            rating:5,
            numReviews:15,
            description:'high quality product'
        },

    ]
}

export default data;