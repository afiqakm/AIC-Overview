import { Card } from '@heroui/react';
import React from 'react';
import { cn } from '../../lib/utils';
import type { TItem } from '../../types/item';

type MaterialCardProps = React.HTMLAttributes<HTMLDivElement> & {
    item: TItem;
};

const MaterialCard: React.FC<MaterialCardProps> = ({ item, className, ...props }) => {

    return (
        <Card {...props} className={cn('aspect-square w-24 p-3', className)} variant='tertiary'>
            <img src={item.imageUrl} alt={item.name} className={cn('h-full w-full object-contain')} />
        </Card>
    );
};

export default MaterialCard;
