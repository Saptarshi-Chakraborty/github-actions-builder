import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { ChevronDown, Plus, Trash2 } from 'lucide-react'
import Trigger from './Triggers/Trigger'

function BuilderSpace({
    steps,
    onStepClick,
    onAddStep,
    onDeleteStep,
    onAddAction
}) {
    return (
        <div className="flex-1 p-4 bg-gray-200 overflow-y-auto max-h-full">
            <Trigger />

            {/* Added max-h-full */}
            {steps.map((step, index) => (
                <div key={step.id} className="mb-8">
                    <Card className="w-full max-w-md mx-auto">
                        <CardContent className="pt-6 relative">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute top-2 right-2"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onDeleteStep(step.id);
                                }}
                            >
                                <Trash2 className="h-4 w-4" />
                            </Button>
                            <div
                                className="font-semibold mb-2 cursor-pointer"
                                onClick={() => onStepClick(step)}
                            >
                                {step.content}
                            </div>
                            {step.actions.map((action, actionIndex) => (
                                <div key={actionIndex} className="text-sm text-gray-600 ml-4">
                                    • {action}
                                </div>
                            ))}
                        </CardContent>
                        <CardFooter className="justify-end">
                            <div className="flex space-x-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => onAddAction(step.id, 'Email')}
                                >
                                    <Plus className="h-4 w-4 mr-1" /> Email
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => onAddAction(step.id, 'SMS')}
                                >
                                    <Plus className="h-4 w-4 mr-1" /> SMS
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => onAddAction(step.id, 'Notification')}
                                >
                                    <Plus className="h-4 w-4 mr-1" /> Notify
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                    {index < steps.length - 1 && (
                        <div className="flex justify-center my-4">
                            <ChevronDown className="h-6 w-6 text-gray-400" />
                        </div>
                    )}
                    {index === steps.length - 1 && (
                        <div className="flex justify-center mt-4">
                            <Button onClick={() => onAddStep(step.id, 'Next')}>
                                <Plus className="h-4 w-4 mr-1" /> Add Next Step
                            </Button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default BuilderSpace

