import React from 'react';
import { cn } from '../lib/utils';

type PageSurfaceProps = {
    children: React.ReactNode;
    className?: string;
};

const PageSurface = ({ children, className }: PageSurfaceProps) => {
    return (
        <section className={cn('h-full w-full rounded-3xl border border-border/30 bg-surface/40 p-4 backdrop-blur-[0.1rem]', className)}>
            {children}
        </section>
    );
};

export default PageSurface;
