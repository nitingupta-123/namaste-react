import {User} from './User'
import {UserClass} from './UserClass'


export const About = () =>{
    return (
        <div>
            <h1>About</h1>
            <h2>This is Namstae React WebSeries</h2>
            <User/>
            <UserClass name={"Nitin Gupta"}/>
        </div>
    )
}