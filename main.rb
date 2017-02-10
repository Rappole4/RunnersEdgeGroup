require 'sinatra'
require 'json'
require 'geolocater'
require 'sendgrid-ruby'
require 'ruby_http_client'

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
post '/contact' do
	from = SendGrid::Email.new email: params[:email]

	subject = params[:subject]
	to = SendGrid::Email.new email: "rappole4@yahoo.com"

	content = SendGrid::Content.new(
		type: 'plain/text',
		value: params[:comment]
	)

	mail = SendGrid::Mail.new(from, subject, to, content)

	sg = SendGrid::API.new( api_key: ENV['SENDGRID_API_KEY'])

	response = sg.client.mail._('send').post(
		request_body: mail.to_json)

	response.inspect
end

get '/cart' do
	erb :cart
end
