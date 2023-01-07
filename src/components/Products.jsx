import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Product } from './Product';
import { popularProducts } from '../data';
import axios from 'axios';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:5000/api/products?category=${category}`
            : 'http://localhost:5000/api/products',
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) => item[key].includes(value)),
        ),
      );
  }, [category, filters, products]);

  return (
    <Container>
      {filteredProducts.map((el) => (
        <Product item={el} key={el.id} />
      ))}
    </Container>
  );
};
