import { auth } from '@/auth';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


const protectedRoutes = [
    '/timesheet',
    '/add-users'
]

export async function middleware(request: NextRequest) {

  const session = await auth();

  const { pathname } = request.nextUrl;

  const isProtected = protectedRoutes.some((route) => pathname.startsWith(route));

  if(isProtected && !session){
      //return keycloakLogin();
      return NextResponse.redirect(new URL('/api/auth/signin', request.url));
  }

  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/timesheet', request.url));
  }
  return NextResponse.next();
}

// export const config = {
//   matcher: '/',
// };