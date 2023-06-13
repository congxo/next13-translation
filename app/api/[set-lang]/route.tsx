import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
 
export async function POST(request: Request) {
  const langCookie  = request.url.slice(-2);
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  // cookies().set('i18next', langCookie)
  // // or
  // cookies().set('name', langCookie, { secure: true })
  // // or
  cookies().set({
    name: 'i18next',
    value: langCookie,
    httpOnly: true,
    path: '/',
  })
 
  return NextResponse.json({lang:langCookie})
}
// import { NextResponse } from 'next/server';
// export async function GET() {
//   const data = {name:"test"}
//   // const data = await product.json();
//   return NextResponse.json(data);
// }