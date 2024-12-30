import React from 'react'

function LeftPanel() {
    return (
        <div className="w-64 bg-gray-100 p-4 overflow-y-auto max-h-full">
            <h2 className="text-lg font-semibold mb-4">Step Builder</h2>
            <p className="text-sm text-gray-600">
                Use the central panel to build your step-by-step workflow. Add actions to each step and create new steps as needed.
            </p>
        </div>
    )
}

export default LeftPanel

