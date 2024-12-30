'use client'

import React, { useState } from 'react'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
import BuilderSpace from './BuilderSpace'
import TopBar from './TopBar'

function BuilderPageBody() {
    const [steps, setSteps] = useState([
        { id: '1', content: 'Initial Step', actions: [] }
    ])
    const [selectedStep, setSelectedStep] = useState(null)

    const addStep = (parentId, actionType) => {
        const newStep = {
            id: `step-${steps.length + 1}`,
            content: `New ${actionType} Step`,
            actions: []
        }
        const parentIndex = steps.findIndex(step => step.id === parentId)
        const newSteps = [
            ...steps.slice(0, parentIndex + 1),
            newStep,
            ...steps.slice(parentIndex + 1)
        ]
        setSteps(newSteps)
    }

    const updateStep = (updatedStep) => {
        const updatedSteps = steps.map(step =>
            step.id === updatedStep.id ? updatedStep : step
        )
        setSteps(updatedSteps)
        setSelectedStep(updatedStep)
    }

    const deleteStep = (stepId) => {
        const updatedSteps = steps.filter(step => step.id !== stepId)
        setSteps(updatedSteps)
        setSelectedStep(null)
    }

    const addAction = (stepId, actionType) => {
        const updatedSteps = steps.map(step => {
            if (step.id === stepId) {
                return { ...step, actions: [...step.actions, actionType] }
            }
            return step
        })
        setSteps(updatedSteps)
    }

    return (
        <div className="flex flex-col h-screen pt-14"> {/* Added pt-14 for TopBar height */}
            <TopBar />
            <div className="flex flex-1 overflow-hidden max-h-[calc(100vh-3.5rem)]"> {/* Added max-height calc */}
                <LeftPanel />
                <BuilderSpace
                    steps={steps}
                    onStepClick={setSelectedStep}
                    onAddStep={addStep}
                    onDeleteStep={deleteStep}
                    onAddAction={addAction}
                />
                <RightPanel
                    selectedStep={selectedStep}
                    onStepUpdate={updateStep}
                />
            </div>
        </div>
    )
}

export default BuilderPageBody
