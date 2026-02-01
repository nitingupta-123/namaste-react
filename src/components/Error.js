import { useRouteError } from "react-router"

export const Error = () => {
    const err = useRouteError();
    return (
        <div>
            <h1>Oops!!</h1>
            <h2>Something Went Wrong!!</h2>
            <h3>{err.status}:{err.statusText}</h3>
        </div>
    )
}