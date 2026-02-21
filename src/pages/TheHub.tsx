import { useState } from 'react';

import Pipeline from '../components/molecules/Pipeline';
import type { TPipeline } from '../types/item';

import AddPipelineModal from './components/AddPipelineModal';

const TheHub = () => {
    const [pipelineData, setPipelineData] = useState<TPipeline[]>([]);

    const handleSavePipeline = (inputId: string, outputId: string) => {
        setPipelineData((previous) => [
            ...previous,
            {
                id: `pl_${previous.length + 1}`,
                input: inputId,
                output: outputId,
            },
        ]);
    };

    return (
        <div className='flex h-full flex-col gap-4 overflow-auto p-1'>
            <header>
                <h1 className='text-2xl font-semibold'>The Hub</h1>
                <p className='text-foreground/70'>
                    Basic input to output flow component with animated conveyor belt.
                </p>
            </header>

            <div className='grid gap-4'>
                {pipelineData.map((item) => (
                    <Pipeline key={item.id} input={item.input} output={item.output} />
                ))}
            </div>
            <div className='w-fit'>
                <AddPipelineModal onSave={handleSavePipeline} />
            </div>
        </div>
    );
};

export default TheHub;
