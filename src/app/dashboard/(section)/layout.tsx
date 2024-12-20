import Headers from "../_components/Headings";
import Sidebar from "./_components/Sidebar";


export default function SectionLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div>
            <div className='md:w-80 hidden md:block fixed'>
                <Sidebar />
            </div>
            <div className='md:ml-80'>
                <Headers />
                {children}
            </div>
        </div>
    )
}