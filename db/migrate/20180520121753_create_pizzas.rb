class CreatePizzas < ActiveRecord::Migration[5.1]
  def change
    create_table :pizzas do |t|
      t.string :name
      t.text :description
      t.decimal :price
      t.boolean :is_best_offer
      t.string :image_path

      t.timestamps
    end
  end
end
