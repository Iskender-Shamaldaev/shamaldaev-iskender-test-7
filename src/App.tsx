import React, { useState } from 'react';
import hamburgerImage from './assets/hamburger.jpg';
import cheeseburgerImage from './assets/cheeseburger.jpg';
import friesImage from './assets/fries.png';
import coffeeImage from './assets/cofee.png';
import teaImage from './assets/tea.png';
import colaImage from './assets/cola.png';
import { nanoid } from 'nanoid';
import { IProduct } from "./types";
import Order from "./Order/Order";
import ProductList from "./ProductList/ProductList";
import './App.css';

const App = () => {
    const [products, setProducts] = useState<IProduct[]>([
        { id: nanoid(), name: 'Hamburger', price: 80, image: hamburgerImage, count: 0 },
        { id: nanoid(), name: 'Cheeseburger', price: 90, image: cheeseburgerImage, count: 0 },
        { id: nanoid(), name: 'Fries', price: 45, image: friesImage, count: 0 },
        { id: nanoid(), name: 'Coffee', price: 70, image: coffeeImage, count: 0 },
        { id: nanoid(), name: 'Tea', price: 50, image: teaImage, count: 0 },
        { id: nanoid(), name: 'Cola', price: 40, image: colaImage, count: 0 },
    ]);

    const [order, setOrder] = useState<IProduct[]>([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const buttonClick = (id: string) => {
        const selected = products.find((item) => item.id === id);
        if (selected) {
            const existingItem = order.find((item) => item.id === id);
            if (existingItem) {
                const updatedOrder = order.map((item) => {
                    if (item.id === id) {
                        return {
                            ...item,
                            count: item.count + 1,
                        };
                    }
                    return item;
                });
                setOrder(updatedOrder);
            } else {
                const newOrderItem = {
                    ...selected,
                    count: 1,
                };
                setOrder((prevState) => [...prevState, newOrderItem]);
            }
            setTotalPrice((prevState) => prevState + selected.price);
        }
    };

    const removeClick = (id: string, price: number, count: number) => {
        const updatedOrder = order.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    count: 0,
                };
            }
            return item;
        });

        const filteredOrder = updatedOrder.filter((item) => item.count > 0);
        setOrder(filteredOrder);

        const removedProductPrice = price * count;
        setTotalPrice((prevState) => prevState - removedProductPrice);
    };

    const updateProductState = (updatedProducts: IProduct[]) => {
        setProducts(updatedProducts);
    };

    return (
        <div className="App">
            <Order order={order} totalPrice={totalPrice} removeClick={removeClick} />
            <ProductList products={products} buttonClick={buttonClick} updateProductState={updateProductState} />
        </div>
    );
};

export default App;
