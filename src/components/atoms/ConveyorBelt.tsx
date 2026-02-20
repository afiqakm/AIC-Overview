import { useId } from 'react';
import { cn } from '../../lib/utils';

type ConveyorBeltProps = {
    className?: string;
};

const ConveyorBelt = ({ className }: ConveyorBeltProps) => {
    const clipId = useId();
    const shimmerId = useId();
    const laneTriangleXs = [
        48,
        // 70,
        92,
        // 114,
        136,
        // 158,
        180,
        // 202,
        224,
        // 246,
        268
    ];

    return (
        <svg
            aria-label='Conveyor belt'
            className={cn(className)}
            viewBox='0 0 320 72'
            xmlns='http://www.w3.org/2000/svg'
        >
            <defs>
                <clipPath id={clipId}>
                    <rect x='2' y='10' width='316' height='52' rx='24' />
                </clipPath>
                <linearGradient id={shimmerId} x1='0%' y1='0%' x2='100%' y2='0%'>
                    <stop offset='0%' stopColor='rgba(235, 153, 31, 0)' />
                    <stop offset='50%' stopColor='rgba(235, 153, 31, 0.95)' />
                    <stop offset='100%' stopColor='rgba(235, 153, 31, 0)' />
                </linearGradient>
            </defs>

            <rect x='20' y='10' width='280' height='52' rx='26' fill='rgba(241, 164, 43, 0.5)' />
            <polygon points='30,36 8,24 8,48' fill='rgba(241, 164, 43, 0.5)' />
            <polygon points='318,36 296,24 296,48' fill='rgba(241, 164, 43, 0.5)' />

            <g clipPath={`url(#${clipId})`}>
                <rect x='-120' y='10' width='120' height='52' rx='24' fill={`url(#${shimmerId})`} className={cn('conveyor-sweep')} />
            </g>

            {laneTriangleXs.map((x) => (
                <polygon key={x} points={`${x},36 ${x - 8},30 ${x - 8},42`} fill='rgba(235, 153, 31, 0.95)' />
            ))}

            <line x1='10' y1='12' x2='310' y2='12' stroke='rgb(246, 173, 49)' strokeWidth='3' strokeLinecap='round' />
            <line x1='10' y1='60' x2='310' y2='60' stroke='rgb(246, 173, 49)' strokeWidth='3' strokeLinecap='round' />
        </svg>
    );
};

export default ConveyorBelt;
