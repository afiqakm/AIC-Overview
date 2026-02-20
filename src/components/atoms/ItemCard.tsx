import { Card } from '@heroui/react';
import React, { useState } from 'react';

import { cn } from '../../lib/utils';
import type { TItem } from '../../types/item';

type ItemCardProps = React.HTMLAttributes<HTMLDivElement> & {
    item: TItem;
};

const ItemCard: React.FC<ItemCardProps> = ({ item, className, ...props }) => {
    return (
        <Card
            {...props}
            className={cn(
                'group aspect-square w-24 p-3 relative',
                className,
            )}
            variant='tertiary'
        >
            <img src={item.imageUrl} alt={item.name} className={cn('h-full w-full object-contain')} />
            <div
                className={cn(
                    'absolute bottom-2 left-0 right-0 px-1 py-0.5',
                    'pointer-events-none',
                    'transition-all duration-300 ease-out',
                    'opacity-0 translate-y-3',
                    'group-hover:opacity-100 group-hover:translate-y-0',
                )}
            >
                <p className='text-center text-xs'>{item.name}</p>
            </div>
        </Card>
    );
};

export default ItemCard;
