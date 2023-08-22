
import Link from 'next/link'
import styles from './backbutton.module.css'

import { FaCircleArrowLeft} from 'react-icons/fa6'

export default function Buttonback() {
    return(

        <div className={styles.backhome}>
            <button>
                <Link href={'/'} className='block'>
                <FaCircleArrowLeft className='w-5 h-5'/>
                </Link>
            </button>
            <span>Back</span>
        </div>
    )
}