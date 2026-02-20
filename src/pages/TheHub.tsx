import Pipeline from '../components/molecules/Pipeline';

const TheHub = () => {
    return (
        <div className='flex h-full flex-col gap-4 overflow-auto p-1'>
            <header>
                <h1 className='text-2xl font-semibold'>The Hub</h1>
                <p className='text-foreground/70'>Basic input to output flow component with animated conveyor belt.</p>
            </header>

            <div className='grid gap-4'>
                <Pipeline input='Originium Slag' output='Pure Originium' quantity={6} />
            </div>
        </div>
    );
};

export default TheHub;
