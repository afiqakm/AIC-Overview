import InputOutputLane from '../components/molecules/InputOutputLane';
import { cn } from '../lib/utils';

const TheHub = () => {
    return (
        <div className={cn('flex h-full flex-col gap-4 overflow-auto p-1')}>
            <header>
                <h1 className={cn('text-2xl font-semibold')}>The Hub</h1>
                <p className={cn('text-foreground/70')}>Basic input to output flow component with animated conveyor belt.</p>
            </header>

            <div className={cn('grid gap-4')}>
                <InputOutputLane input='Originium Slag' output='Pure Originium' quantity={6} />
                <InputOutputLane input='Raw Ore' output='Refined Alloy' quantity={3} />
                <InputOutputLane input='Coolant' output='Power Cell' quantity={2} />
            </div>
        </div>
    );
};

export default TheHub;
