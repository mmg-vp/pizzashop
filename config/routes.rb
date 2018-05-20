Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/admin' => 'pages#admin'

  resources :pizzas, only: [:index]
  resource :orders, only: [:new, :create, :index]

  root 'pizzas#index'
end
