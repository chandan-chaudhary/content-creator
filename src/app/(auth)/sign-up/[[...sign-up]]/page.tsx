import { SignUp } from '@clerk/nextjs'

export default function Page() {

    return (
        <main className='flex items-center justify-center pt-32'>
            <SignUp />
        </main>
    )
}