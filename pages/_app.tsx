import {
    useCurrentUser,
    UserContext,
} from '@lib/context';
import { trpc } from '@lib/trpc';
import AuthGuard from 'components/AuthGuard';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';

function AppContent(props: { children: JSX.Element | JSX.Element[] }) {
    const user = useCurrentUser();

    return (
        <AuthGuard>
            <UserContext.Provider value={user}>
                    <div className="h-screen flex flex-col">
                        {props.children}
                    </div>
            </UserContext.Provider>
        </AuthGuard>
    );
}

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <SessionProvider session={session}>
            <AppContent>
                <div className="flex-grow h-100">
                    <Component {...pageProps} />
                    <ToastContainer
                        position="top-center"
                        autoClose={2000}
                        hideProgressBar={true}
                    />
                </div>
            </AppContent>
        </SessionProvider>
    );
}

export default trpc.withTRPC(MyApp);
