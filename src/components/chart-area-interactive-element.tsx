"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import type { Data } from "@/lib/chart-data"
import { YAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export const description = "An interactive area chart"

const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    CH_CLOSING_PRICE: {
    label: "CH_CLOSING_PRICE",
    color: "var(--chart-2)",
    },
    indicator: {
        label: "indicator",
        color: "var(--chart-1)",
    },
} satisfies ChartConfig

export function ChartAreaInteractive({data}: {data: Data[]}) {
    
    const chartData = data;
    const [timeRange, setTimeRange] = React.useState("90d")

    const filteredData = chartData.filter((item) => {
        const date = new Date(item.CH_TIMESTAMP)
        const referenceDate = new Date("2025-09-24")
        let daysToSubtract = 90
        if (timeRange === "30d") {
            daysToSubtract = 30
        } else if (timeRange === "7d") {
            daysToSubtract = 7
        }
        const startDate = new Date(referenceDate)
        startDate.setDate(startDate.getDate() - daysToSubtract)
        return date >= startDate
    })
    const minValue = Math.min(
        ...filteredData.flatMap((item) => [item.CH_CLOSING_PRICE])
    );
    const maxValue = Math.max(
        ...filteredData.flatMap((item) => [item.CH_CLOSING_PRICE])
    );
    const yAxisMin = Math.floor(minValue / 50) * 50;
    const yAxisMax = Math.floor(maxValue / 20) * 20;

    return (
        <div>
            <Card className="pt-0">
                <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
                    <div className="grid flex-1 gap-1">
                        <CardTitle>Tatamotors chart - Interactive</CardTitle>
                        <CardDescription>
                            Showing price movement for the last 3 months
                        </CardDescription>
                    </div>
                    <Select value={timeRange} onValueChange={setTimeRange}>
                        <SelectTrigger
                            className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
                            aria-label="Select a value"
                        >
                            <SelectValue placeholder="Last 3 months" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl">
                            <SelectItem value="90d" className="rounded-lg">
                                Last 3 months
                            </SelectItem>
                            <SelectItem value="30d" className="rounded-lg">
                                Last 30 days
                            </SelectItem>
                            <SelectItem value="7d" className="rounded-lg">
                                Last 7 days
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </CardHeader>
                <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
                    <ChartContainer
                        config={chartConfig}
                        className="aspect-auto h-[300px] w-[70vw]"
                    >
                        <AreaChart data={filteredData}>
                            <defs>
                                <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                                    <stop
                                        offset="5%"
                                        stopColor="var(--color-indicator)"
                                        stopOpacity={0.8}
                                    />
                                    <stop
                                        offset="95%"
                                        stopColor="var(--color-indicator)"
                                        stopOpacity={0.1}
                                    />
                                </linearGradient>
                                <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                                    <stop
                                        offset="5%"
                                        stopColor="var(--color-CH_CLOSING_PRICE)"
                                        stopOpacity={0.8}
                                    />
                                    <stop
                                        offset="95%"
                                        stopColor="var(--color-CH_CLOSING_PRICE)"
                                        stopOpacity={0.1}
                                    />
                                </linearGradient>
                            </defs>
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="CH_TIMESTAMP"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                minTickGap={32}
                                tickFormatter={(value) => {
                                    const date = new Date(value)
                                    return date.toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                    })
                                }}
                            />
                            <YAxis
                                domain={[yAxisMin, 'auto']}
                                allowDataOverflow={true}
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                            />

                            <ChartTooltip
                                cursor={false}
                                content={
                                    <ChartTooltipContent
                                        labelFormatter={(value) => {
                                            return new Date(value).toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "numeric",
                                            })
                                        }}
                                        indicator="dot"
                                    />
                                }
                            />
                            <Area
                                dataKey="CH_CLOSING_PRICE"
                                type="natural"
                                fill="url(#fillMobile)"
                                stroke="var(--color-CH_CLOSING_PRICE)"
                            // stackId="a"
                            />
                            <Area
                                dataKey="indicator"
                                type="natural"
                                fill="url(#fillDesktop)"
                                stroke="var(--color-indicator)"
                            // stackId="a"
                            />
                            <ChartLegend content={<ChartLegendContent />} />
                        </AreaChart>
                    </ChartContainer>
                </CardContent>
            </Card>
        </div>
    )
}
