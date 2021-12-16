FROM golang:1.17-buster AS builder
WORKDIR /app
COPY . .
RUN go build -o /api

FROM gcr.io/distroless/base-debian10
COPY --from=builder /api /api
EXPOSE 8000
CMD [ "/api" ]
