Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'subpage/index'
      post 'subpage/create'
      get 'subpage/show', to: 'subpage#show'
      get '/listsubpage', to: 'subpage#listsubpage'
      post '/deletesubpage', to: 'subpage#destroy'
      get 'subpage/destroy'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'createpages/index'
      post 'createpages/create'
      # get '/show/:id', to: 'createpages#listpage'
      get '/show', to: 'createpages#listpage'
      get '/destroy/:id', to: 'createpages#destroy'
      post '/getpage', to: 'createpages#show'
      post '/updatepage', to: 'createpages#updatepage'
      post '/deletepage', to: 'createpages#destroy'
      get '/listuser', to: 'sessions#listuser'
      # get '/'
    end
  end
  get 'homepage/index'
  post "/users", to: "users#create"
  # post "/update", to: "sessions#update"
  post "/sessions", to: "sessions#create"
  get "/logout", to: "sessions#destroy"
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  post "/check", to: "sessions#checklogged"
  post '/userdata', to: "sessions#getuser"
  post '/updateuser', to: "sessions#update"
  post '/users/listuser', to: 'sessions#listuser'
  post '/deleteuser', to: 'sessions#deleteuser'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

