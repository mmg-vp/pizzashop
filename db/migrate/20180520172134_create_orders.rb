class CreateOrders < ActiveRecord::Migration[5.1]
  def change
    create_table :orders do |t|
      t.string :name
      t.string :phone
      t.text :order_content

      t.timestamps
    end
  end
end
