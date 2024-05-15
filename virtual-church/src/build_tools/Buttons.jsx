export default function Buttons(props){
    const {label, children, width} = props;
    return(
       <button className={`rounded-md bg-slate-300 text-cyan-700 ${width}`} >{label || children}</button> 
    )
}