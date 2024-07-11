"use client"

import Avatar from "@/app/components/Avatar";
import { FullMessageType } from "@/app/types";
import clsx from "clsx";
import { format } from "date-fns";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import ImageModal from "./ImageModal";

interface MessageBoxProps {
    data: FullMessageType;
    isLast?: boolean;
}

const MessageBox: React.FC<MessageBoxProps> = ({
    data, isLast
}) => {
    const session = useSession()
    const [imageModalOpen, setImageModalOpen] = useState(false)
    const isMe = session?.data?.user?.email === data?.sender?.email
    const seenList = (data.seen || []).filter((user) => user.email !== data?.sender?.email).map((user) => user.name).join(', ')

    const container = clsx(
        'flex gap-3 p-4',
        isMe && 'justify-end',
    );
    
    const avatar = clsx(
        isMe && 'order-2',
    )

    const body = clsx(
        'flex flex-col gap-2',
        isMe && 'items-end'
    )

    const message = clsx(
        'text-sm w-fit overflow-hidden',
        isMe ? 'bg-sky-500 text-white' : 'bg-neutral-600 text-white',
        data.image ? 'rounded-md p-0' : 'rounded-full py-2 px-3'
    )

    return ( 
        <div className={container}>
            <div className={avatar}>
                <Avatar user = { data.sender } />
            </div>
            <div className={body}>
                <div className="flex items-center gap-1">
                    <div className="text-sm text-gray-500">
                        {data.sender.name}
                    </div>
                    <div className="text-xs text-gray-400">
                        {format(new Date(data.createdAt), 'p')}
                    </div>
                </div>
                <div className={message}>
                    <ImageModal src = {data.image} isOpen = {imageModalOpen} onClose = {() => setImageModalOpen(false)} />
                    {data.image ? (
                        <Image alt="image" height="288" width="288" src={data.image} onClick={() => setImageModalOpen(true)} className="object-cover cursor-pointer hover:scale-110 transition translate"/>
                    ) : (<div>{data.body}</div>)}
                </div>
                {
                    isLast && isMe && seenList.length > 0 && (
                        <div className="text-xs font-light text-gray-500">
                            {`Seen by ${seenList}`}
                        </div>
                    )
                }
            </div>
        </div>
     );
}
 
export default MessageBox;