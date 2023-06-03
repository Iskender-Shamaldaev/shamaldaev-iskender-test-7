import React from 'react';
import {IProduct} from "../types";

interface OrderProps {
    order: IProduct[];
    totalPrice: number;
    removeClick: (id: string, price: number, count: number) => void;
}

const Order: React.FC<OrderProps> = ({order, totalPrice, removeClick}) => {
    return (
        <div className="left">
            {order.length === 0 ? (
                <strong>
                    Order is empty!
                    <span style={{display: "block"}}>Please add some items.</span>
                </strong>
            ) : (
                <>
                    <div>
                        <b>Total price: {totalPrice}</b>
                    </div>
                    {order.map((item) => (
                        <div key={item.id}>
                            <strong> {item.name}</strong> - x{item.count} : {(item.count * item.price)}
                            <button className="btn-remove"
                                    onClick={() => removeClick(item.id, item.price, item.count)}></button>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default Order;
