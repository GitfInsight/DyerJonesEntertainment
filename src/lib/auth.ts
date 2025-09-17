import { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-this-in-production';
const secret = new TextEncoder().encode(JWT_SECRET);

export async function verifyAdminToken(request: NextRequest) {
  try {
    const token = request.cookies.get('admin-token')?.value;
    
    if (!token) {
      return null;
    }

    const { payload } = await jwtVerify(token, secret);
    
    if (payload.isAdmin) {
      return payload;
    }
    
    return null;
  } catch {
    return null;
  }
}

export function createUnauthorizedResponse() {
  return new Response(
    `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Access Denied</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 40px; text-align: center; }
          .container { max-width: 500px; margin: 0 auto; }
          .error { color: #d32f2f; }
          .login-link { 
            display: inline-block; 
            margin-top: 20px; 
            padding: 10px 20px; 
            background: #333; 
            color: white; 
            text-decoration: none; 
            border-radius: 5px; 
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1 class="error">Access Denied</h1>
          <p>You need to be logged in as an admin to access this page.</p>
          <a href="/admin/login" class="login-link">Go to Admin Login</a>
        </div>
      </body>
    </html>
    `,
    {
      status: 401,
      headers: {
        'Content-Type': 'text/html',
      },
    }
  );
} 