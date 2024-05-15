export default function InputBox(props){
    const type = props.type
    const placeholder = props.placeholder
    const value = props.value
    const name = props.name
    const id = props.id

    return (
        <input className="w-full p-1 border rounded-md font-Montserrat  outline-none focus:ring-2 focus:ring-gray-400"  type={type} placeholder={placeholder} value={value} name={name} id={id} />
    )
}