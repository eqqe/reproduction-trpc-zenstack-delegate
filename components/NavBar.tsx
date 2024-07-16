import { User } from 'next-auth';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import Avatar from './Avatar';

type Props = {
    user: User | undefined;
};

export default function NavBar({ user }: Props) {
    const onSignout = async () => {
        await signOut({ callbackUrl: '/signin' });
    };

    return (
        <div className="navbar bg-base-100 px-8 py-2 border-b">
            
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar"
                    >
                        {user && <Avatar user={user!} />}
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li className="border-b border-gray-200">
                            {user && <div>{user.name || user.email}</div>}
                        </li>
                        <li>
                            <a onClick={onSignout}>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
