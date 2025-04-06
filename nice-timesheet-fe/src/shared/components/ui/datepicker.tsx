"use client"

import * as React from "react"
import { format, setYear } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "../../lib/utils"
import { Button } from "../../components/ui/button"
import { Calendar } from "../../components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "./popover"

export interface DatePickerProps {
    value?: Date,
    onChange?: (value?: Date) => void,
}

//TODO: rivedere lo stile
export function DatePicker({ value, onChange }: DatePickerProps) {

    const setMandatoryDate = () => {
        const today = new Date();
        const year = today.getFullYear() - 18;

        return setYear(today, year);
    }

    const mandatoryDate = setMandatoryDate();

    return (

        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-full justify-start text-left font-normal",
                        !value && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon />
                    {value ? format(value, "PPP") : <span>Pick a date</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        mode="single"
                        captionLayout="dropdown"
                        selected={value}
                        onSelect={onChange}
                        fromDate={new Date(1900, 0, 1)}
                        toDate={mandatoryDate}
                        initialFocus
                    />
            </PopoverContent>
        </Popover>
)
}
