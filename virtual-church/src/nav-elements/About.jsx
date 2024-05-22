import LinkTo from "../build_tools/LinkTo";
import {Link} from 'react-router-dom'

export default function About() {
    return (
        <div>
            <Link to="dashboard" className="font-poppins bg-cyan-900 rounded-md p-2">
                test dashboard
            </Link>
        </div>
    );
}
