import { Button } from "@/src/components/ui/button"
import Link from "next/link"

const NotFoundPage = () => {
    return (
        <>
        <div className="flex h-screen w-screen bg-primary overflow-x-hidden items-center justify-center flex-col">

            <h2>this page could not found </h2>
            <Link href={"/"}>
                <Button >
                {"Go back to home"}
                </Button>
            </Link>
        </div>
        </>
    )
}



export default NotFoundPage
