require 'sinatra'

set :menu, [
	{title: "Home",
		route: "/"},
	{title: "Products",
		route: "/product"},
	{title: "About Us",
		route: "/about"},
	{title: "Contact",
		route:"/contact"},
	{title: "Cart",
		route: "/cart"},
	]

get '/' do
	erb :index
end
get '/product' do
	erb :product
end
get '/about' do
	erb :about
end
get '/contact' do
	erb :contact
end
get '/cart' do
	erb :cart
end
