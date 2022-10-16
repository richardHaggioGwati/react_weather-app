import classes from './Container.module.css'

interface Props {
    children: React.ReactNode
}

const Container: React.FC<Props> = ({ children }) => {
    return (
        <div className={classes.container}>
            { children }
        </div>
    )
}
 
export default Container