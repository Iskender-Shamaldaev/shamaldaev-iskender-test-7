import React from 'react';
import { IProduct } from "../types";

interface ProductListProps {
    products: IProduct[];
    buttonClick: (id: string) => void;
    updateProductState: (updatedProducts: IProduct[]) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, buttonClick, updateProductState }) => {
    return (
        <div style={{ border: '1px solid black', display: "flex", width: "500px", flexWrap: "wrap", justifyContent: "space-around" }}>
            {products.map((item) => (
                <div key={item.id} style={{ border: '1px solid black', margin: "27px" }}>
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
    );
};

export default ProductList;
