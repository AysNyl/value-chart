"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "./ui/textarea"
import { useState } from "react"
import { useRef } from "react"

export function NewsCard() {

  // const [title, setTitle] = useState("")
  const dateRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<string>(" ");
  
  async function generatePrompt (e: React.FormEvent<HTMLFormElement>) {

    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const date = dateRef.current?.value;
    const title = formData.get("title");
    const news = formData.get("news");
    console.log(date, title, news);
    const response = await fetch("/api", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({date: `${date}`, title: `${title}`, text: `${news}`})
      });
      
    window.location.reload();
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Add news to database</CardTitle>
        <CardDescription>
          Enter date below to append the news
        </CardDescription>
        {/* <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction> */}
      </CardHeader>
      <CardContent>
        <form id="myForm" onSubmit={generatePrompt}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="date">Date</Label>
              <Input
                name="date"
                ref={dateRef}
                id="date"
                type="date"
                placeholder="YYYY/MM/DD"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input
                name="title"
                ref={titleRef}
                id="title"
                type="text"
                placeholder="Enter title"
                required
              />
            </div>

            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="news">News</Label>
                {/* <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a> */}
              </div>
              <Textarea name="news" placeholder="Type your message here." required/>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full" form="myForm">
          Add
        </Button>
        {/* <Button variant="outline" className="w-full">
          Login with Google
        </Button> */}
      </CardFooter>
    </Card>
  )
}
