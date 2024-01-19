#  ♕check-mate-forge-frontend♔

> react + vite + typescript + eslint application

Frontend of a chess game web application.

## basic commands

```bash
# run the app for development
npm run dev

# build app
npm run build

# call eslint on the project for linting
npm run lint

# preview with vite
npm run preview
```

## modules

- `@hello-pangea/dnd`: easy drag & drop additions
  - fork of `react-beautiful-dnd`
  - got problems with `ReactStrict` mode

## Docker

> Useful commands for docker image and containers.

```bash
# create an image based on the Dockerfile
docker build . -t check-mate-forge-frontend

# create and run a container on localhost:8080 from the image
docker run -p 8080:8080 -d check-mate-forge-frontend

# stop the container
docker stop check-mate-forge-frontend

# start stopped container
docker start check-mate-forge-frontend

# restart container
docker restart check-mate-forge-frontend

# remove container
docker rm check-mate-forge-frontend

# remove image
docker rmi check-mate-forge-frontend
```
