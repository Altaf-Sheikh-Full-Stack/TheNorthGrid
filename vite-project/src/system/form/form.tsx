

interface FormProps {
    children:React.ReactNode
    classname?:string
}



const Form = ({children, classname}: FormProps) => {
    return(
        <form className={classname}>
            {children}
        </form>
    )
}

export default Form