import { useNavigate } from "react-router-dom";

export default function LinkTo(props) {
    const navigate = useNavigate();
    const { name, to } = props;
    return (
        <button className="bg-cyan-500 p-4 mt-8 rounded-md" onClick={() => {
            navigate(`/${to}`);
            
        }}>
            {name}
        </button>
    );
}
