From node

RUN git clone https://github.com/Kiofu7w7/NewGuajalotas.git /app

WORKDIR /app

COPY . .

RUN npm install

CMD ["npm","install"]
