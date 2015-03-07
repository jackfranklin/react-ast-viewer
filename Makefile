server:
	./node_modules/.bin/serve -p 9876

install:
	npm install
	jspm install

build:
	mkdir -p dist/
	cp jspm_packages/traceur-runtime.js dist/traceur-runtime.js
	node build-script.js
	jspm bundle-sfx app/main.jsx! --minify dist/dist.min.js


