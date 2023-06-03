import React from 'react';
import {IProduct} from "../types";

interface ProductListProps {
    products: IProduct[];
    buttonClick: (id: string) => void;
}

const ProductList: React.FC<ProductListProps> = ({products, buttonClick}) => {
    return (
        <div style={{border: '1px solid black'}}>
            {products.map((item) => (
                <div key={item.id} style={{border: '1px solid black'}}>
                    <button style={{width: '100%'}} onClick={() => buttonClick(item.id)}>
                        <img style={{width: '75px'}} src={item.image} alt={item.name}/>
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
