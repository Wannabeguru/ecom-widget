import { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableRow, Button } from "@mui/material";
import productData from "../data/product-fixtures.json";
import Link from "next/link";
import { useRouter } from "next/router";
import ColorFilter from "../src/app/components/ColorFilter";
import PaginationComponent from "@/app/components/Pagination";




const ProductList = () => {
  const [products, setProducts] = useState(productData);
  const router = useRouter();
  const { updatedProduct } = router.query;
  const [colorFilter, setColorFilter] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    if (updatedProduct && typeof updatedProduct === "string") {
      const product = JSON.parse(updatedProduct);
      setProducts((prevProducts) => {
        const productIndex = prevProducts.findIndex(
          (p) => p.sku === product.sku
        );
        if (productIndex > -1) {
          const newProducts = [...prevProducts];
          newProducts[productIndex] = product;
          return newProducts;
        } else {
          return [...prevProducts, product];
        }
      });
    }
  }, [updatedProduct]);
  
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };


  const handleDelete = (id: string) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <>
      <ColorFilter colorFilter={colorFilter} onColorFilterChange={setColorFilter} />
      <Table>
        <TableBody>
          {products
            .filter(product => colorFilter === "" || product.color === colorFilter)
            .slice((page - 1) * itemsPerPage, page * itemsPerPage)
            .map((product) => (
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
      <PaginationComponent count={products.length} page={page} itemsPerPage={itemsPerPage} onChange={handleChange}/>
    </>
  );
};

export default ProductList;
