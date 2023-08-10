import { useState } from "react";
import {Table, TableBody, TableCell, TableRow, Button} from '@mui/material';
import productData from '../data/product-fixtures.json'

const ProductList = () => {
    const [products, setProducts]= useState(productData);
    
    return(
        <Table>
          <TableBody>
            {products.map(product => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.color}</TableCell>
                <TableCell>{product.type}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>
                  <Button>Edit</Button>
                  <Button>Delete</Button>
                </TableCell>
              </TableRow>
        ))}
          </TableBody>
        </Table>

    );
};


export default ProductList;