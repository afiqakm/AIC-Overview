import { useEffect, useMemo, useState } from 'react';
import { Button, ButtonGroup } from '@heroui/react';
import SciencePark from './pages/SciencePark';
import TheHub from './pages/TheHub';
import ValleyPass from './pages/ValleyPass';
import BaseLayout from './layout/BaseLayout';
import PageSurface from './layout/PageSurface';
import { cn } from './lib/utils';

const routes = {
    '/': TheHub,
    '/valley-pass': ValleyPass,
    '/originium-science-park': SciencePark,
} as const;

const App = () => {
    const [pathname, setPathname] = useState(window.location.pathname);

    useEffect(() => {
        const onPopState = () => setPathname(window.location.pathname);
        window.addEventListener('popstate', onPopState);
        return () => window.removeEventListener('popstate', onPopState);
    }, []);

    const CurrentPage = useMemo(() => {
        return routes[pathname as keyof typeof routes] ?? TheHub;
    }, [pathname]);

    const navigate = (to: keyof typeof routes) => {
        if (window.location.pathname === to) {
            return;
        }

        window.history.pushState({}, '', to);
        setPathname(to);
    };

    return (
        <BaseLayout>
            <div className={cn('flex h-full flex-col gap-4')}>
                <nav>
                    <ButtonGroup>
                        <Button variant={pathname === '/' ? 'primary' : 'outline'} onPress={() => navigate('/')}>
                            The Hub
                        </Button>
                        <Button
                            variant={pathname === '/valley-pass' ? 'primary' : 'outline'}
                            onPress={() => navigate('/valley-pass')}
                        >
                            Valley Pass
                        </Button>
                        <Button
                            variant={pathname === '/originium-science-park' ? 'primary' : 'outline'}
                            onPress={() => navigate('/originium-science-park')}
                        >
                            Originium Science Park
                        </Button>
                    </ButtonGroup>
                </nav>
                <section className={cn('min-h-0 flex-1')}>
                    <PageSurface>
                        <CurrentPage />
                    </PageSurface>
                </section>
            </div>
        </BaseLayout>
    );
};

export default App;
