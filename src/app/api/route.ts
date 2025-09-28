import { writeFile } from "fs";

export async function POST(request: Request) {
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    const body = await request.json();
    const details = JSON.stringify([body]);
    const prompt = `Evaluate how relevant the following news will be in the future valuation of tatamotors (a publicly listed company).
                    Details: ${details}`

    console.log(prompt);

    try {
        const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent", {
            method: "POST",
            headers: { "x-goog-api-key": `${GEMINI_API_KEY}`, 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: prompt
                            }
                        ]
                    }
                ],
                generationConfig: {
                    responseMimeType: "application/json",
                    responseSchema: {
                        type: "ARRAY",
                        items: {
                            type: "OBJECT",
                            properties: {
                                relevancy_analysis: { "type": "STRING" },
                                relevancy_score: { "type": "NUMBER" }
                            },
                            propertyOrdering: ["relevancy_analysis", "relevancy_score"]
                        }
                    },
                    thinkingConfig: {
                        thinkingBudget: 0
                    }
                }
            })
        }
        )

        if (!response) {
            throw new Error(`API returned status ${response}`);
        }

        const check = await response.json()

        await fetch("http://localhost:5000/news", {
            method: "POST",
            headers: {"Content-Type": "application/JSON"},
            body: JSON.stringify({...body, analysis: JSON.parse(check.candidates[0].content.parts[0].text) })
        })
        // writeFile("./_data/responseschema.json", JSON.stringify(check), (err) => {
        //     if (err) {
        //         console.log("Error while saving the response");
        //     }

        //     console.log(JSON.stringify(check));
        // })
        return new Response(JSON.stringify({ message: "prompt recieved successfully" }))

    } catch (error) {
        console.log("Error during AI processing:", error);
    }
    // console.log(JSON.stringify([{ message: 'hello', ...body }]))
    // return new Response(JSON.stringify({ message: "hello" }))
}