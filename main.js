const listProductContent = document.getElementById('list-product');

const listProducts = [
    {
        label: 'Giftset 6 bánh mini',
        price: 480000,
        img: 'img/img-1.jpg'
    },
    {
        label: 'Giftset 6 bánh mini',
        price: 480000,
        img: 'img/img-2.jpg'
    },
    {
        label: 'Giftset 6 bánh mini',
        price: 480000,
        img: 'img/img-3.jpg'
    },
    {
        label: 'Giftset 6 bánh mini',
        price: 480000,
        img: 'img/img-4.jpg'
    },
    {
        label: 'Giftset 6 bánh mini',
        price: 480000,
        img: 'img/img-5.jpg'
    },
    {
        label: 'Giftset 6 bánh mini',
        price: 480000,
        img: 'img/img-6.jpg'
    },
    {
        label: 'Giftset 6 bánh mini',
        price: 480000,
        img: 'img/img-7.jpg'
    },
    {
        label: 'Giftset 6 bánh mini',
        price: 480000,
        img: 'img/img-8.jpg'
    },
    {
        label: 'Giftset 6 bánh mini',
        price: 480000,
        img: 'img/img-7.jpg'
    },
    {
        label: 'Giftset 6 bánh mini',
        price: 480000,
        img: 'img/img-8.jpg'
    }
];

const showListProduct = (listProducts) => {
    const content = listProducts.map((product) => {
        return `<div class="product-item">
            <img src=${product.img} alt=${product.label}/>
                <div>
                    <h3>${product.label}</h3>
                    <p><span>${product.price.toLocaleString()} VNĐ</span> <button class="btn">Mua ngay</button></p>
                </div>
            </div>`
    });

    listProductContent.innerHTML = content.join('');
};

showListProduct(listProducts);
