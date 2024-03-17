export async function getData(){
  const res = await fetch('http://192.168.1.28/api/wifi-info')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
// import type { Types } from '@/types/Types'
// import { array, object, string, validate } from 'superstruct'
 
// const UsersStruct = array(
//   object({
//     status: string(),
//     ssid: string(),
//     ip: string(),
//   })
// )
// export async function getUsers(): Promise<Types[]> {
//   const request = await fetch('http://192.168.1.28/api/wifi-info')
//   const data = await request.json()
 
//   const [error, users] = validate(data, UsersStruct)
//   if (error) {
//     throw error
//   }
 
//   return users
// }
