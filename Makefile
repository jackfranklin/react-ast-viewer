server:
	./node_modules/.bin/serve -p 9876

jsx:
	./node_modules/.bin/jsx --watch app/ build/

install:
	npm install
	jspm install

