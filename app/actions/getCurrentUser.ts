import prisma from '../libs/prismadb'
import getSessions from './getSessions'

const getCurrentUser = async () => {
    try{
        const session = await getSessions()

        if (!session?.user?.email) {
            return null
        }

        const currentUser = await prisma.user.findUnique({
            where: {
                email: session.user.email as string
            }
        })

        if (!currentUser) {
            return null
        }

        return currentUser;
    }
    catch(e : any){
        return null
    }
}

export default getCurrentUser;