Process:
The config file or data-source file must be outside a folder next to index or app

Npm init -y
npm install express typeorm reflect-metadata pg dotenv
npm install -D typescript ts-node @types/node @types/express
npx tsc --init

So in github for boilerplate migration u can see the package json consisting of migration:run,migration:revert,migration:generate

First u generate the file with migration:generate

You need to configure the file structure according to the githubboilerplate

Then run the migration 
Npm run migration:run
