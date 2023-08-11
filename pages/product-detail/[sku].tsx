import { useRouter} from 'next/router';
import React, { useState, useEffect } from 'react';
import {Button, TextField } from '@mui/material'

const ProductDetail = () => {
    const router = useRouter();
    const { sku } = router.query;

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [color, setColor] = useState('');
    const [price, setPrice] = useState('');




    const handleUpdate = () => {
        if(Number(price) < 0) {
            alert('Price should not be less than 0');
            return;
        }
    
        if(!type || !description || !color) {
            alert('Type, description, and color are required');
            return;
        }
    
        if(type.length > 56 || description.length > 56 || color.length > 56) {
            alert('Type, description, and color should be less than 56 characters long');
            return;
        }

        const updatedProduct = {sku, name, type, description, color, price};


        router.push({
            pathname: '/product-list',
            query: {updatedProduct: JSON.stringify(updatedProduct)},
        });
    }

   


    return (
        <div>
            <h1>Product Detail Page</h1>
            <TextField label="Name" value={name} onChange={e => setName(e.target.value)}></TextField>
            <TextField label="Type" value={type} onChange={e => setType(e.target.value)}></TextField>
            <TextField label="Description" value={description} onChange={e => setDescription(e.target.value)}></TextField>
            <TextField label="Color" value={color} onChange={e => setColor(e.target.value)}></TextField>
            <TextField label="Price" value={price} onChange={e => setPrice(e.target.value)}></TextField>
            <Button onClick={handleUpdate}>Update</Button>
        </div>
    )
}

export default ProductDetail;