import {User} from './User'
import {UserClass} from './UserClass'


export const About = () =>{
    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">About</h1>
            <h2 className="text-2xl text-gray-600 mb-6">This is Namstae React WebSeries</h2>
            <User/>
            <UserClass name={"Nitin Gupta"}/>
        </div>
    )
}