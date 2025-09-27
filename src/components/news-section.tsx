import { getNews } from "@/lib/get-news";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { resolve } from "path";
import getData from "@/lib/chart-data";


export default async function NewsSecton() {
  const news = (await getData())[1];

  return (
      <div className="grid grid-cols-3 gap-8">
        {news.map(content => (
          <Card key={content.date} className="flex flex-col justify-between">
            <CardHeader className="flex-row gap-4 items-center">
              {/* <Avatar>
                <AvatarImage src={`/img/${content.image}`} alt="content image"></AvatarImage>
                <AvatarFallback>
                  {content.name.slice(0,2)}
                </AvatarFallback>
              </Avatar> */}
              <div>
                <CardTitle>{content.change}</CardTitle>
                {/* <CardDescription>{content.cookTime} to cook.</CardDescription> */}
              </div>
            </CardHeader>
            <CardContent>
              <p>
                {content.event}
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button>View content</Button>
              {/* {content.difficulty && <Badge variant="secondary">{recipe.cuisine}</Badge>} */}
            </CardFooter>
          </Card>
        ))}
      </div>
  );
}