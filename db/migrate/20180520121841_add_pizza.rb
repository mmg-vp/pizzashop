class AddPizza < ActiveRecord::Migration[5.1]
  def change
    Pizza.create({
        name: 'Hawaiian',
        description: 'This is Hawaiian pizza',
        price: 101.50,
        is_best_offer: false,
        image_path: 'Hawaiian.jpg'})

    Pizza.create({
                     name: 'Diablo',
                     description: 'This is diablo pizza',
                     price: 111.11,
                     is_best_offer: true,
                     image_path: 'Diablo.jpg'})
  end
end
