import React, { createContext, useContext, useState } from 'react';

const BuilderContext = createContext();

const initialWorkflow = {
    name: "Workflow",
    on: {}
};

const BuilderProvider = ({ children }) => {
    const [workflowCode, setWorkflowCode] = useState(initialWorkflow);

    const updateWorkflow = (updates) => {
        setWorkflowCode(prev => ({
            ...prev,
            ...updates
        }));
    };

    return (
        <BuilderContext.Provider value={{ workflowCode, updateWorkflow }}>
            {children}
        </BuilderContext.Provider>
    );
}

const useBuilderContext = () => {
    if (!BuilderContext) {
        throw new Error('useBuilderContext must be used within a BuilderProvider');
    }
    return useContext(BuilderContext);
}

export { BuilderProvider, useBuilderContext };

