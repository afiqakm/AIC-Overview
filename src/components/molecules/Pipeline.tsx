import { useEffect, useState } from 'react';
import MaterialCard from '../atoms/MaterialCard';
import ConveyorBelt from '../atoms/ConveyorBelt';
import { cn } from '../../lib/utils';
import { itemDetails } from '../../constants/itemDetails';

type PipelineProps = {
    input: string;
    output: string;
    quantity?: number;
};

const MIN_QUANTITY = 1;

const clampQuantity = (value: number) => Math.max(MIN_QUANTITY, value);

const Pipeline = ({ input, output, quantity = MIN_QUANTITY }: PipelineProps) => {
    const [currentQuantity, setCurrentQuantity] = useState(clampQuantity(quantity));

    useEffect(() => {
        setCurrentQuantity(clampQuantity(quantity));
    }, [quantity]);

    return (
        <div className={cn('inline-flex w-fit max-w-full items-stretch gap-3')}>
            <div
                className={cn(
                    'inline-flex w-fit max-w-full items-center overflow-x-auto rounded-4xl border border-border/70 bg-surface/80 px-5 py-4'
                )}
            >
                <MaterialCard item={itemDetails[0]} />
                <ConveyorBelt className={cn('-mx-7 h-18 w-72 shrink-0')} />
                <MaterialCard item={itemDetails[1]} className={cn('z-20 w-24 shrink-0')} />
            </div>

            <div
                aria-label='Quantity'
                className={cn(
                    'flex min-w-14 shrink-0 flex-col overflow-hidden rounded-3xl border border-border/70 bg-surface/80'
                )}
            >
                <button
                    type='button'
                    aria-label='Increase quantity'
                    className={cn(
                        'w-full',
                        'min-h-0 flex flex-1 items-center justify-center rounded-none border-0 px-0',
                        'text-lg font-semibold leading-none text-foreground select-none transition-colors',
                        'focus-visible:outline-none',
                        'hover:bg-accent! hover:text-accent-foreground!',
                        'active:bg-accent/90! active:text-accent-foreground!'
                    )}
                    onClick={() => setCurrentQuantity((value) => value + 1)}
                >
                    +
                </button>
                <div
                    className={cn(
                        'flex min-h-0 flex-1 items-center justify-center',
                        'border-y border-border/70 bg-surface px-2 text-center text-xl font-semibold tabular-nums'
                    )}
                >
                    {currentQuantity}
                </div>
                <button
                    type='button'
                    aria-label='Decrease quantity'
                    className={cn(
                        'w-full',
                        'min-h-0 flex flex-1 items-center justify-center rounded-none border-0 px-0',
                        'text-lg font-semibold leading-none text-foreground select-none transition-colors',
                        'focus-visible:outline-none',
                        'hover:bg-accent! hover:text-accent-foreground!',
                        'active:bg-accent/90! active:text-accent-foreground!'
                    )}
                    onClick={() => setCurrentQuantity((value) => Math.max(MIN_QUANTITY, value - 1))}
                >
                    -
                </button>
            </div>
        </div>
    );
};

export default Pipeline;
