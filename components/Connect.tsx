"use client"

import { Types } from "@/types/Types";
import { useEffect, useState } from 'react';
import { Skeleton } from "./ui/skeleton";

export default function Connect() {
  const [data, setData] = useState<Object[Types]>([]) // @ts-ignore
  const [isLoading, setLoading] = useState(true)
 

  
  useEffect(() => {
    fetch('http://192.168.1.28/api/wifi-info')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])
 
  if (isLoading) return (<div className="flex items-center flex-col space-y-3">
  <Skeleton className="h-[125px] w-[250px] rounded-xl" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>
)
  if (!data) return <p>No profile data</p>
  
  return (
    <div className='m-auto flex flex-col items-center gap-2'>
      <p className=' p-4 '>{data.ssid}</p> 
      <p className=' p-4 '>{data.status}</p> 
      <p className=' p-4 '>{data.ip}</p> 
    </div>
  )
}

// @ts-nocheck