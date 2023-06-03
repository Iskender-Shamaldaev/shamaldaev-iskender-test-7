import React, { useState } from 'react';
import foodImage from './assets/food.png';
import drinkImage from './assets/drinks.png';
import './App.css';
import { nanoid } from 'nanoid';
import { IProduct } from "./types";

const App = () => {
    const [products] = useState<IProduct[]>([
        { id: nanoid(), name: 'Hamburger', price: 80, image: foodImage, count: 0 },
        { id: nanoid(), name: 'Cheeseburger', price: 90, image: foodImage, count: 0 },
        { id: nanoid(), name: 'Fries', price: 45, image: foodImage, count: 0 },
        { id: nanoid(), name: 'Coffee', price: 70, image: drinkImage, count: 0 },
        { id: nanoid(), name: 'Tea', price: 50, image: drinkImage, count: 0 },
        { id: nanoid(), name: 'Cola', price: 40, image: drinkImage, count: 0 },
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
                setOrder((prevOrder) => [...prevOrder, newOrderItem]);
            }
            setTotalPrice((prevPrice) => prevPrice + selected.price);
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
        setTotalPrice((prevPrice) => prevPrice - removedProductPrice);
    };


    return (
        <div className="App">
            <div className="left">
                {order.length === 0 ? (
                    <strong>
                        Order is empty!
                        <span style={{ display: "block" }}>Please add some items.</span>
                    </strong>
                ) : (
                    <>
                        <div>
                            <b>Total price: {totalPrice}</b>
                        </div>
                        {order.map((item) => (
                            <div key={item.id}>
                                {item.name} - {item.count} : {(item.count * item.price)}
                                <button onClick={() => removeClick(item.id, item.price, item.count)}>X</button>
                            </div>
                        ))}
                    </>
                )}
            </div>
            <div style={{ border: '1px solid black' }}>
                {products.map((item) => (
                    <div key={item.id} style={{ border: '1px solid black' }}>
                        <button style={{ width: '100%' }} onClick={() => buttonClick(item.id)}>
                            <img style={{ width: '75px' }} src={item.image} alt={item.name} />
                            <div>
                                <strong>{item.name}</strong>
                                <p>Price: {item.price} KGS</p>
                            </div>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
