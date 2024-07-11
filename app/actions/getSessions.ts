import { getServerSession } from "next-auth";
import { authOptions } from "../libs/authOptions";

export default async function getSessions() {
    return await getServerSession(authOptions);
}
