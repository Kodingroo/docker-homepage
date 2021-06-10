module Mutations
    class CreateProduct < BaseMutation
      # arguments passed to the `resolve` method
      argument :title, String, required: true
      argument :description, String, required: true

      # return type from the mutation
      type Types::ProductType

      def resolve(title: nil, description: nil)
        Product.create!(
          title: title,
          description: description,
        )
      end
    end
  end
