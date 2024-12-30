import React from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

function RightPanel({ selectedStep, onStepUpdate }) {
  if (!selectedStep) {
    return (
      <div className="w-64 bg-gray-100 p-4 overflow-y-auto max-h-full">
        <h2 className="text-lg font-semibold mb-4">Step Properties</h2>
        <p className="text-gray-500">Select a step to edit its properties</p>
      </div>
    )
  }

  const handleContentChange = (e) => {
    onStepUpdate({ ...selectedStep, content: e.target.value })
  }

  return (
    <div className="w-64 bg-gray-100 p-4 overflow-y-auto max-h-full">
      <h2 className="text-lg font-semibold mb-4">Step Properties</h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="step-id">Step ID</Label>
          <Input
            id="step-id"
            type="text"
            value={selectedStep.id}
            readOnly
            className="bg-gray-200"
          />
        </div>
        <div>
          <Label htmlFor="step-content">Content</Label>
          <Textarea
            id="step-content"
            value={selectedStep.content}
            onChange={handleContentChange}
            rows={4}
          />
        </div>
        <div>
          <Label>Actions</Label>
          <ul className="list-disc list-inside">
            {selectedStep.actions.map((action, index) => (
              <li key={index} className="text-sm">{action}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default RightPanel

