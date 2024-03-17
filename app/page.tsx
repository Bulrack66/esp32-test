"use client"
import Connect from "@/components/Connect";
import Humidity from "@/components/Humidity";
import Temperature from "@/components/Temperature";
import { Button } from "@/components/ui/button";
// import TestSubmit from "@/components/TestSubmit";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FormEvent, useState } from "react";

export default function Home({ initialId, onSave }) {
  const [name, setName] = useState(initialId)
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api', {
      method: 'POST',
      body: formData,
    })
 
    // Handle response if necessary
    const dataiP = await response.json()
    // ...
  }
  return (
    <div className="flex flex-col gap-4 mt-4">
{/* <TestSubmit/> */}
<form onSubmit={onSubmit}>
      <div className="flex w-[400px] m-auto max-w-sm items-center space-x-2">
        
          <Input id="iP" name="name" type="text" placeholder="Adresse Ip Esp32"/>
          <Button type="submit">ok</Button>
        
      </div>

      </form>
      <Card className="flex w-[400px] m-auto max-w-sm items-center space-x-2"><Connect/></Card>
      <Card className="flex w-[400px] m-auto max-w-sm items-center space-x-2"><Temperature/></Card>
      <Card className="flex w-[400px] m-auto max-w-sm items-center space-x-2"><Humidity/></Card>
      
    </div>
  )
}
