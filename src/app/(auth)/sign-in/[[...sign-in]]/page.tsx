import { SignIn } from '@clerk/nextjs'

export default function Page() {
  
    
    return (
        <main className='flex items-center justify-center pt-32'>
            <SignIn />
        </main>
        )
}