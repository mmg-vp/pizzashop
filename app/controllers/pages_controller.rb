class PagesController < ApplicationController
  def admin
    @orders = Order.all.order(created_at: :desc)
  end
end
