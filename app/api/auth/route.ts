// // middleware/auth.ts
// import { NextResponse } from 'next/server';
// import jwt from 'jsonwebtoken';
// import cookie from 'cookie';

// const SECRET_KEY = process.env.JWT_SECRET_KEY; // Ensure to use a secret key from your environment variables

// export async function authMiddleware(req: any, res: any, next: any) {
//   try {
//     // Extract token from cookies
//     const cookies = cookie.parse(req.headers.cookie || '');
//     const token = cookies.token;

//     if (!token) {
//       return res.status(401).json({ msg: 'Unauthorized: No token provided' });
//     }

//     // Verify the token
//     const decoded = jwt.verify(token, 'SECRET_KEY');

//     // Attach decoded user ID to req.cookid
//     req.cookid = decoded.id;

//     // Proceed to next middleware or route handler
//     next();
//   } catch (err) {
//     // Handle token verification errors
//     return res.status(401).json({ msg: 'Unauthorized: Invalid token', err: err.message });
//   }
// }
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  // Your authentication logic here
  return NextResponse.json({ success: true });
}