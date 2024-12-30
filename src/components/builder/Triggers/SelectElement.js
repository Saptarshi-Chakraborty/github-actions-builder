import React, { useState } from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import WORKFLOW_TRIGGERS from "@/data/Triggers"

const SelectElement = ({ selected, setSelected, setActivities }) => {

    let allTriggers = [...WORKFLOW_TRIGGERS];
    console.log(`allTriggers`, allTriggers);

    async function handleChange(value) {
        console.log(`value:`, value)
        let selectedTrigger = await WORKFLOW_TRIGGERS.filter(trigger => trigger.event_payload === value)
        console.log(`selectedTrigger`, selectedTrigger);

        if (selectedTrigger.length <= 0) {
            setSelected('')
        }
        selectedTrigger = selectedTrigger[0];

        setSelected(selectedTrigger.event_payload);

        const activities = selectedTrigger.trigger_activities || [];
        console.log(`activities`, activities);

        setSelected(selectedTrigger.event_payload);
        setActivities(activities);
    }

    return (
        <Select value={selected} onValueChange={handleChange}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a trigger" />
            </SelectTrigger>
            <SelectContent>

                <SelectGroup>
                    <SelectLabel>All Triggers</SelectLabel>

                    {allTriggers.map((trigger, index) => (
                        <SelectItem key={index} value={trigger.event_payload}>
                            {trigger.name}
                        </SelectItem>
                    ))}
                </SelectGroup>

            </SelectContent>
        </Select>
    )
}

export default SelectElement