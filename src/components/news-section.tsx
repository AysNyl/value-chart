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

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import type { News } from "@/lib/chart-data";


export default async function NewsSection({data}: {data: News[]}) {
  const news = data;

  return (
    <div>
      <div className="grid gap-8">
        {news.map(content => (
          <Card key={content.id} className="flex flex-col justify-between">
            <CardHeader className="flex-row gap-4 items-center">
              {/* <Avatar>
                                      <AvatarImage src={`/img/${content.image}`} alt="content image"></AvatarImage>
                                      <AvatarFallback>
                                          {content.name.slice(0,2)}
                                      </AvatarFallback>
                                      </Avatar> */}
              <div>
                <CardTitle className="flex justify-between">{content.title}<Badge variant="secondary">{content.analysis[0].relevancy_score*1000} score</Badge></CardTitle>
                <CardDescription>{content.date}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                {content.text}
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
              >
                <AccordionItem value="item-2">
                  <AccordionTrigger><Badge>AI Analysis</Badge></AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p className="font-light">
                      {content.analysis[0].relevancy_analysis}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              {/* <Button>View content</Button> */}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}