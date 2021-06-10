module Types
  class ProductType < Types::BaseObject
    field :title, String, null: false
    field :description, String, null: false
  end
end
