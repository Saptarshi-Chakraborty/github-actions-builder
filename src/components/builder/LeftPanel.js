"use client";

import { useBuilderContext } from '@/context/BuilderContext';
import React, { useEffect, useMemo, useState } from 'react'
import { Button } from '../ui/button';
import { Copy, ArrowDownToLine, Trash2 } from 'lucide-react'
import YAML from "json-to-pretty-yaml";
import WORKFLOW_TRIGGERS from '@/data/Triggers';


function LeftPanel() {
    const { workflowCode } = useBuilderContext();

    const [yamlCode, setYamlCode] = useState('')

    const convertedYaml = useMemo(() => {
        if (!workflowCode || !workflowCode.on) return '';
        try {
            return YAML.stringify(workflowCode);
        } catch (err) {
            console.error('Error converting to YAML:', err);
            return '';
        }
    }, [workflowCode]);

    useEffect(() => {
        if (convertedYaml) {
            setYamlCode(convertedYaml);
        }
    }, [convertedYaml]);

    async function copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }

    async function downloadFile(text) {
        const blob = new Blob([text], { type: 'text/yaml' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'workflow.yaml';
        a.click();
        URL.revokeObjectURL(url);
    }

    return (
        <div className="w-64 bg-gray-100 p-4 overflow-y-auto max-h-full">
            <h2 className="text-lg font-semibold mb-4">Generated Code</h2>
            {/* Toolbar */}
            <div className="flex justify-between items-center mb-4">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => downloadFile(yamlCode)}
                >
                    <ArrowDownToLine className="h-4 w-4" />
                    <span className="ml-2">Download</span>
                </Button>

                <Button
                    variant="default"
                    size="sm"
                    onClick={() => copyToClipboard(yamlCode)}
                >
                    <Copy className="h-4 w-4" />
                    <span className="ml-2">Copy</span>
                </Button>

            </div>
            <hr className="mb-4 border-gray-300" />
            {/* Code */}
            <p className="text-sm text-white whitespace-pre-wrap text-nowrap overflow-x-auto overflow-y-auto max-h-[calc(100vh-13rem)] bg-slate-700 ps-3 py-2 rounded-md ">
                {yamlCode}
            </p>
        </div>
    )
}

export default LeftPanel

