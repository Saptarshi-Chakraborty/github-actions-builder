import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronDown, Plus, Trash2 } from 'lucide-react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "@/components/ui/select"
import SelectElement from './SelectElement'
import { useBuilderContext } from '@/context/BuilderContext'


const Trigger = () => {
    const [selected, setSelected] = useState('');
    const [activities, setActivities] = useState({}); // { activity: isSelected }

    const { updateWorkflow } = useBuilderContext();

    useEffect(() => {
        if (selected) {
            const selectedActs = Object.keys(activities).filter(activity => activities[activity]);
            const triggerConfig = selectedActs.length > 0 
                ? {
                    [selected]: {
                        types: selectedActs
                    }
                }
                : selected;

            updateWorkflow({
                on: triggerConfig
            });
        }
    }, [selected, activities]);


    const handleActivityClick = (activity) => {
        setActivities(prev => ({
            ...prev,
            [activity]: !prev[activity]
        }));
    };

    const selectedActivities = Object.keys(activities).filter(activity => activities[activity]);
    const availableActivities = Object.keys(activities).filter(activity => !activities[activity]);


    return (
        <div className="mb-8">
            <Card className="w-full max-w-md mx-auto">
                <CardContent className="pt-6 relative">
                    <div className="font-semibold mb-2" >
                        Trigger
                    </div>

                    {/* an dropdown */}
                    <SelectElement
                        selected={selected}
                        setSelected={setSelected}
                        setActivities={(newActivities) => {
                            const activitiesObj = {};
                            newActivities.forEach(activity => {
                                activitiesObj[activity] = false;
                            });
                            setActivities(activitiesObj);
                        }}
                    />

                    {selectedActivities.length > 0 && (
                        <div className="mt-4">
                            <div className="text-sm text-gray-600 mb-2">Selected Activities:</div>
                            <div className="flex flex-wrap gap-2">
                                {selectedActivities.map((activity, index) => (
                                    <Button
                                        key={index}
                                        variant="default"
                                        size="sm"
                                        onClick={() => handleActivityClick(activity)}
                                    >
                                        {activity}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    )}
                </CardContent>

                {(selected !== '' && availableActivities.length > 0) &&
                    <CardFooter className="justify-start">
                        <div className="flex flex-wrap gap-2">
                            {availableActivities.map((activity, index) => (
                                <Button
                                    key={index}
                                    variant="outline"
                                    size="sm"
                                    onClick={() => handleActivityClick(activity)}
                                >
                                    <Plus className="h-4 w-4 mr-1" /> {activity}
                                </Button>
                            ))}
                        </div>
                    </CardFooter>
                }

            </Card>

            <div className="flex justify-center my-4">
                <ChevronDown className="h-6 w-6 text-blue-600 " />
            </div>

        </div>
    )
}

export default Trigger