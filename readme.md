docker commands --> 
1. To build the container image -> `docker build -t docker-nodejs-basics .`
2. To make the container live and running -> `docker run -it docker-nodejs-basics` { but this will not run the app on localhost also the app cannot be controlled ussing terminal }
3. To make the app works in terminal -> `docker run -it --init  docker-nodejs-basics`
4. To make the app work in both terminal and host -> `docker run -it --init --publish 3001:3000  docker-nodejs-basics` { using this now the app and host can communitate from 3001 port of host }