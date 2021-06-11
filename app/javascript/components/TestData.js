import { gql, useQuery } from '@apollo/client';

import React from 'react';

// const TEST_QUERY = gql`query { currentTime }`;
const PRODUCT_QUERY = gql`query { allProducts {
  title
}}`;

export default function TestData() {
  const {loading, error, data} = useQuery(PRODUCT_QUERY);

  if (loading) {
    return (
      <div>Loading</div>
    );
  } else if (error) {
    return (
      <div>Something went wrong!</div>
    );
  } else {
    console.log("Product data: ", data.allProducts);
    return data.allProducts.map(({ title }) => (
      <div key={title}>
        <p>
          {title}
        </p>
      </div>
    ));
  }
}
