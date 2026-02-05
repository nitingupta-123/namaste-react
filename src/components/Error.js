import { useRouteError } from "react-router"

export const Error = () => {
    const err = useRouteError();
    return (
        <div className="p-8 text-center">
            <h1 className="text-5xl font-bold mb-4 text-red-600">Oops!!</h1>
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">Something Went Wrong!!</h2>
            <h3 className="text-xl text-gray-600">{err.status}:{err.statusText}</h3>
        </div>
    )
}