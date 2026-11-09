	build:
	docker build --load -t tasktrack-api .

run:
	docker run -d -p 3000:3000 --name tasktrack tasktrack-api

stop:
	docker stop tasktrack && docker rm tasktrack

logs:
	docker logs -f tasktrack