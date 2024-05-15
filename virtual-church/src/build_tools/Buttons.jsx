export default function Buttons(props){
    const type = props.type
    const value = props.value

    return(
        <input className="px-4 w-20 cursor-pointer bg-slate-600 border-r-4" type={type} value={value} />
    )
}