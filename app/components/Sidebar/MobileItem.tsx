"use client"

import Link from "next/link";
import clsx from "clsx";

interface MobileItemProps {
    href: string;
    icon: any;
    onClick?: () => void;
    active?: boolean;
}

const MobileItem: React.FC<MobileItemProps> = ({href, icon: Icon, onClick, active}) => {
    const handleClick = () => {
        if (onClick) {
            return onClick()
        }
    }

    return ( 
        <Link onClick = {handleClick} href = {href} className={clsx('group flex gap-x-3 text-sm leading-6 font-semibold w-full justify-center p-4 text-gray-400 hover:text-white hover:bg-neutral-800', active && 'bg-neutral-800 text-white')}>
            <Icon className = "h-6 w-6" />
        </Link>
     );
}
 
export default MobileItem;