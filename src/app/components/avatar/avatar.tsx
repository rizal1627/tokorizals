
import Image from 'next/image'
import profilePic from '../../../assets/christopher.jpg'

export default function Avatar() {
    return(
        <>
             <Image
                src={profilePic}
                alt="Picture of the author"
                width={100}
                className={`border border-slate-900 rounded-full shadow-md h-20 w-20 object-cover`}
                />
        </>
    )
}