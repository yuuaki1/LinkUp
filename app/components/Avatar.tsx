"use client"

import { User } from "@prisma/client";
import Image from "next/image";
import useActiveList from "../hooks/useActiveList";

interface AvatarProps {
    user?: User;
}

const Avatar: React.FC<AvatarProps> = ({ user }) => {
    const { members } = useActiveList()
    const isActive = members.toString().indexOf(user?.email!) !== -1
    return ( 
        <div className="text-white relative">
            <div className="relative inline-block rounded-full overflow-hidden h-8 w-8s md:h-11 md:w-11">
                <Image src = {user?.image || '/images/placeholder.jpg'} alt = "Avatar" fill/>
            </div>
            {isActive ? (
                <span className="absolute block rounded-full bg-green-500 ring-2 ring-white top-0 right-0 md:h-3 md:w-3"/>
            ) : (
                <span className="absolute block rounded-full bg-rose-500 ring-2 ring-white top-0 right-0 md:h-3 md:w-3"/>
            )}
        </div>
     );
}
 
export default Avatar;