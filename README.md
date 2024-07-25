This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

features - a cook signs up 
         - creates a bunch of dishes-- lists  for the day
         - dish would be having a certain price ,qauntity , description ..

         id ,name,type,price,quantity,description,availability  

         pages -- signUP-- signIN -- HOME[listing of the dishes one has and another list of the dises for the day (drag and drop would be another good practice)] -- Create Dish --Update dish 


         backend stuff --
          /pages/api
                    /users
                        index.ts (GET and POST for users)
                        [id].ts (GET, PUT, DELETE for a specific user)
                    /auth
                        login.ts (POST for login)
                        register.ts (POST for registration)
                    /posts
                        index.ts (GET and POST for posts)
                        [id].ts (GET, PUT, DELETE for a specific post)

 create some users and get them >> [done]

 1st ) use next auth for signin/signup and signOut [done]
 2nd ) create the client side comp to create dishes and update .. 
 3rd ) create the handlers for the above client side code 
 4th ) have another route to give the users functionality to change their passwords/credentials 

 the dish must be updated/deleted only by the cook that is registered to that very dish 


 //think of having recoil .. and making updates real time 

 //create the functionality for listing items .. make component for the dishes 