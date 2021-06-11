import { gql, useQuery } from '@apollo/client';

import React from 'react';

// const TEST_QUERY = gql`query { currentTime }`;
const PRODUCT_QUERY = gql`query { allProducts {
  title
  description
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
    return data.allProducts.map(({ title, description }) => (
      <div key={title}>
        <p>
          {title}: {description}
        </p>
      </div>
    ));
  }
}
