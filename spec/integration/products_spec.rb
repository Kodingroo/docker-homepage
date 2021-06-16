# spec/integration/products_spec.rb
require 'swagger_helper'

describe 'Products API' do

  path '/products/{id}' do

    get 'Retrieves a product' do
      tags 'products', 'Another Tag'
      produces 'application/json', 'application/xml'
      parameter name: :id, in: :path, type: :string

      response '200', 'product found' do
        schema type: :object,
          properties: {
            id: { type: :integer },
            title: { type: :string }
          },
          required: [ 'id', 'title' ]

        let(:id) { Product.create(title: 'foo').id }
        run_test!
      end

      response '404', 'product not found' do
        let(:id) { 'invalid' }
        run_test!
      end

      response '406', 'unsupported accept header' do
        let(:'Accept') { 'application/foo' }
        run_test!
      end
    end
  end
end
