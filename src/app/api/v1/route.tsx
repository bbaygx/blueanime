import { redirect } from "next/navigation";

export async function GET(request: Request) {
    redirect('/api/v1/manga/')
}