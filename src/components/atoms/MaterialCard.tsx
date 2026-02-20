import { Card } from '@heroui/react';
import React from 'react';
import { cn } from '../../lib/utils';

type MaterialCardProps = React.HTMLAttributes<HTMLDivElement> & {
    label: string;
};

const MaterialCard: React.FC<MaterialCardProps> = ({ label, className, ...props }) => {
    return (
        <Card {...props} className={cn('aspect-square w-24 p-3', className)} variant='tertiary'>
            <p className={cn('text-center text-sm font-semibold')}>{label}</p>
        </Card>
    );
};

export default MaterialCard;
