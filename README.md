# graphql-template

## Prisma GraphQL-Yoga Backend Template

This is a template for a GraphQL backend, using Prisma and GraphQL-Yoga.

This setup is based on the original recording of Wes Bos' Advanced React and GraphQL course.

## Setup

### 1. Install Node Modules

Run npm i --s

### 2. Initialize Prisma

Run prisma init

--From here you can set up prisma the way you see fit, however, I would recommend the dev server, and to not generate. Note, you will have to sign up for an account if you have not already. --

Run prisma deploy

### 3. Add Deploy Hooks For Prisma

Add the following to the bottom of your prisma.yml file

hooks:
post-deploy: - graphql get-schema -p prisma

### 4. Environmental Variables

In the variables.env file, change the variables to create your own secret passwords.

Copy the endpoint variable from your prisma.yml file, and paste that into your PRISMA_ENDPOINT environmental variable.

Back in your prisma.yml file, change the endpoint variable to point towards your PRISMA_ENDPOINT environmental variable.
endpoint: \${env:PRISMA_ENDPOINT}

### 5. Start Your Server

npm run dev
