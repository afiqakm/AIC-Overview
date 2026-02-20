import MaterialCard from '../components/atoms/ItemCard';
import Pipeline from '../components/molecules/Pipeline';

type Props = {};

const ValleyPass = ({}: Props) => {
    return (
        <div className='flex h-full flex-col gap-4 overflow-auto p-1'>
            <header>
                <h1 className='text-2xl font-semibold'>Valley Pass</h1>
                <p className='text-foreground/70'>Basic input to output flow component with animated conveyor belt.</p>
            </header>

            <div className='grid gap-4'>
                <Pipeline input='Originium Slag' output='Pure Originium' quantity={6} />
            </div>
        </div>
    );
};

export default ValleyPass;
