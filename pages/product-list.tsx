import { useState } from "react";
import { Table, TableBody, TableCell, TableRow, Button } from "@mui/material";
import productData from "../data/product-fixtures.json";
import Link from "next/link";

const ProductList = () => {
  const [products, setProducts] = useState(productData);

  const handleDelete = (id: string) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <Table>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product.color}</TableCell>
            <TableCell>{product.type}</TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell>
              <Link href={`/product-detail/${product.sku}`}>
                <Button>Edit</Button>
              </Link>
              <Button onClick={() => handleDelete(product.id)}>Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProductList;
