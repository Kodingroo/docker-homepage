import { gql, useMutation } from '@apollo/client';

import React from 'react';

const ADD_PRODUCT = gql`
  mutation CreateProduct($type: String!) {
    createProduct(title: $type) {
    title
  }
}
`;

export default function AddProduct() {
  let input;
  const [addProduct, { data }] = useMutation(ADD_PRODUCT);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addProduct({ variables: { type: input.value } });
          input.value = '';
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}
