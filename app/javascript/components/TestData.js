import { gql, useQuery } from '@apollo/client';

import React from 'react';

// const TEST_QUERY = gql`query { currentTime }`;
const PRODUCT_QUERY = gql`query { allProducts {
  title
  description
}}`;

export default function TestData() {
  const {loading, error, data} = useQuery(PRODUCT_QUERY);
  console.log("Product data: ", data);

  if (loading) {
    return (
      <div>Loading</div>
    );
  } else if (error) {
    return (
      <div>Something went wrong!</div>
    );
  } else {
    return (
      <p>Loaded!</p>
      // <p>{data.currentTime}</p>
      // <p>{data.forEach((product) => {
      //   <li>{product.title}</li>
      // })}</p>
    );
  }
}
