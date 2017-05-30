FROM ethereumjs/testrpc:latest

RUN git clone https://github.com/Giveth/milestonetracker-ui.git
WORKDIR /src/milestonetracker-ui
#COPY webpack.config.js webpack.config.js
#COPY package.json package.json

RUN npm install

#COPY dapp/js/blockchain/index.js dapp/js/blockchain/index.js

COPY start.sh /src/start.sh

EXPOSE 8080

ENTRYPOINT /src/start.sh
