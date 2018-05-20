class OrdersController < ApplicationController

  def new
  end

  def create
    @order = Order.new order_params

    if !@order.save
      render action: 'new'
    end
  end

  private

  def order_params
    params.require(:order).permit(:name, :phone, :order_content)
  end
end
