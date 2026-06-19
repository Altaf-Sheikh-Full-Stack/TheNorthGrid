

type InputType = "text" | "password" | "email" | "number"  

interface InputProps {
    placeholder?: string
    className?: string
    type?: InputType
}

const Input = ({ placeholder, className, type, }: InputProps) => {

      const styles: React.CSSProperties = {
            height:"100%",
            width:"100%",
            padding:15,
            borderRadius:10,
            border:'1px grey solid',
            
        };

    return (
        <>
        <input style={styles} placeholder={placeholder} className={className} type={type} /> <br />
        </>
    )


}


export default Input