import { useCurrentUser } from '@lib/context';
import { trpc } from '@lib/trpc';
import WithNavBar from 'components/WithNavBar';
import type { NextPage } from 'next';


const Home: NextPage = () => {
    const user = useCurrentUser();

    const create = trpc.post.create.useMutation()

    const onClick = async() => {
        if (user?.id)
        {
            await create.mutateAsync({
                data: {
                    title: "title post",
                }
            });
        }
    }

    return (
        <WithNavBar>
            {user && (
                <div className="mt-8 text-center flex flex-col items-center w-full">
                    <h1 className="text-2xl text-gray-800">
                        Welcome {user.name || user.email}!
                    </h1>

                    <div className="w-full p-8">
                        <button onClick={onClick} className="text-lg md:text-xl text-left mb-8 text-gray-700">
                            Create a Post
                        </button>
                    </div>
                </div>
            )}
        </WithNavBar>
    );
};

export default Home;
