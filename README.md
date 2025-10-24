This is a [Next.js](https://nextjs.org) project

## Getting Started

First, run the development server:

```bash
#install dependencies
npm i

#run locally
cp .env.exmaple .env

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Running in docker

To run the project using docker container, run the following command,

```bash
docker run -p 3000:3000 \
  -e NEXTAUTH_SECRET="supersecretkey" \
  -e NEXTAUTH_URL="http://localhost:3000" \
  -e GOOGLE_CLIENT_ID="google client" \
  -e GOOGLE_CLIENT_SECRET="google client secret" \
  -e NEXT_PUBLIC_API_BASE_URL="http://localhost:4000" \
  --name my-nextjs-app \
  armanalam/basic-nextjs-app:v1.0.0

```
