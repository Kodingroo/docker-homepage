class CreateProducts < ActiveRecord::Migration[5.2]
  def self.up
    create_table :products  do |t|
      t.string :title
      t.string :description
      t.integer :total_inventory
      t.timestamps
    end
  end

  def self.down
    drop_table :products
  end
end
