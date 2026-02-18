import { Card } from '@heroui/react';
import React from 'react';

type MaterialCardProps = React.HTMLAttributes<HTMLDivElement> & {
    label: string;
};

const MaterialCard: React.FC<MaterialCardProps> = ({ label, ...props }) => {
    return (
        <Card {...props} className='w-[100px] aspect-square' variant='tertiary'>
            <p className='text-lg font-semibold'>{label}</p>
        </Card>
    );
};

export default MaterialCard;
