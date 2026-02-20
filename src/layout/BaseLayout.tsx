import React from 'react';
import topographyPattern from '../assets/svg/topography.svg';
import { cn } from '../lib/utils';

type BaseLayoutProps = {
    children: React.ReactNode;
    className?: string;
};

const BaseLayout = ({ children, className }: BaseLayoutProps) => {
    return (
        <main className={cn('relative h-screen w-screen overflow-hidden bg-background p-6 text-foreground', className)}>
            <div
                aria-hidden='true'
                className={cn('topography-pattern absolute inset-0')}
                style={{
                    WebkitMaskImage: `url(${topographyPattern})`,
                    maskImage: `url(${topographyPattern})`,
                }}
            />
            <div className={cn('relative z-10 h-full w-full')}>{children}</div>
        </main>
    );
};

export default BaseLayout;
