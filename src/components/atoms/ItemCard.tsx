import { Card } from '@heroui/react';
import React from 'react';

import { cn } from '../../lib/utils';
import type { TItem } from '../../types/item';

type ItemCardProps = React.HTMLAttributes<HTMLDivElement> & {
    item: TItem;
    isButton?: boolean;
    isSelected?: boolean;
    disabled?: boolean;
};

const tierAccentStyles: Record<number, string> = {
    1: 'from-zinc-500 via-zinc-400 to-zinc-500',
    2: 'from-lime-500 via-lime-400 to-green-500',
    3: 'from-sky-500 via-cyan-400 to-blue-500',
    4: 'from-violet-600 via-fuchsia-500 to-purple-500',
};

const tierBorderStyles: Record<number, string> = {
    1: 'border-zinc-700/80',
    2: 'border-lime-500/45',
    3: 'border-sky-500/45',
    4: 'border-violet-500/50',
};

const ItemCard: React.FC<ItemCardProps> = ({
    item,
    className,
    isButton = false,
    isSelected,
    ...props
}) => {
    const accentStyle = tierAccentStyles[item.tier] ?? tierAccentStyles[1];
    const borderStyle = tierBorderStyles[item.tier] ?? tierBorderStyles[1];

    const renderSelect = () => {
        if (isButton) {
            if (isSelected) {
                return (
                    <div
                        aria-hidden='true'
                        className='pointer-events-none absolute inset-x-0 top-0 h-full bg-linear-to-b from-accent/90 to-transparent'
                    />
                );
            }
            return null;
        }

        return (
            <div
                aria-hidden='true'
                className='pointer-events-none absolute inset-x-0 top-0 h-6 bg-linear-to-b from-white/12 to-transparent'
            />
        );
    };

    return (
        <Card
            {...props}
            className={cn(
                'group relative aspect-square w-24 min-w-24 shrink-0 overflow-hidden rounded-3xl border',
                borderStyle,
                'bg-linear-to-b from-zinc-900 via-zinc-900 to-zinc-950 p-2',
                'shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_14px_24px_rgba(0,0,0,0.45)]',
                className,
            )}
            variant='tertiary'
        >
            <div
                aria-hidden='true'
                className='pointer-events-none absolute inset-0 opacity-35'
                style={{
                    backgroundImage:
                        'repeating-radial-gradient(circle at 20% 15%, rgba(255,255,255,0.07) 0 1px, transparent 1px 16px)',
                }}
            />

            {renderSelect()}

            <div
                aria-hidden='true'
                className={cn(
                    'pointer-events-none absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r',
                    accentStyle,
                )}
            />
            <img
                src={item.imageUrl}
                alt={item.name}
                className={cn('relative z-10 h-full w-full object-contain')}
            />
            <div
                className={cn(
                    'absolute inset-x-0 bottom-0 z-20 flex h-1/2 items-end px-1 pb-1',
                    'pointer-events-none',
                    'transition-all duration-300 ease-out',
                    'opacity-0 translate-y-3',
                    'group-hover:opacity-100 group-hover:translate-y-0',
                    'bg-linear-to-t from-black/80 via-black/45 to-transparent',
                )}
            >
                <p className='w-full rounded-sm py-0.5 text-center text-xs text-white'>
                    {item.name}
                </p>
            </div>
        </Card>
    );
};

export default ItemCard;
