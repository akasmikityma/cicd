// import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '@/app/db';
export const authOptions ={
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
              name: { label: "Name", type: "text", placeholder: "jhon", required: true },
              username:{label:"Email",type:"text",placeholder:"bishalmaity@gmail.com",required:true},
              password: { label: "Password", type: "password", required: true }
            },
            // TODO: User credentials type from next-aut
            async authorize(credentials: any) {
              // Do zod validation, OTP validation her
              
              const existingUser = await prisma.cook.findFirst({
                  where: {
                      email: credentials.username,
                      password:credentials.password
                  }
              });
              console.log(existingUser)
              if (existingUser) {
                  const passwordValidation =credentials.username===existingUser.email
                  console.log(passwordValidation)
                  if (passwordValidation) {
                      return {
                          id: existingUser.id.toString(),
                          name: existingUser.name,
                          email: existingUser.email
                      }
                  }
                  return null;
              }
  
              try {
                  const user = await prisma.cook.create({
                      data: {
                          name:credentials.name,
                          email: credentials.username,
                          password: credentials.password
                      }
                  });
              
                  return {
                      id: user.id.toString(),
                      name: user.name,
                      email: user.email
                  }
              } catch(e) {
                  console.error(e);
              }
  
              return null
            },
          })
        ],
        secret:"thisisthesecret",
        callbacks:{
            async session({token,session}:any){
                session.user.id = token.sub;
                
                return session;
            }
        }
}
