export default function InputBox(props){
    const type = props.type
    const placeholder = props.placeholder
    const value = props.value
    const name = props.name
    const id = props.id

    return (
        <input className="" type={type} placeholder={placeholder} value={value} name={name} id={id} />
    )
}