"use client"
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import React from 'react'

const Appbar = () => {
    const { data: session, status } = useSession();
    const router = useRouter();
    if (status === "loading") {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {session ? (
                <button onClick={() => signOut()}>{`Sign Out  ${session.user?.name}`}</button>
            ) : (
                <div>
                    <button onClick={() => router.push('/signin')}>Sign In</button>
                </div>
            )}
        </div>
    )
}

export default Appbar
