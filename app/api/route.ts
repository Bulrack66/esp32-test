export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {
  
  return new Response('Hello, Next.js!', {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}
 
export async function HEAD(request: Request) {}
 
export async function POST(request: Request) {
  
}
 
export async function PUT(request: Request) {}
 
export async function DELETE(request: Request) {}