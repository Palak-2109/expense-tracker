// yhaa prr ek common card bnare jo ki multiple elements me common hhh...using composition of components
import './Card.css'
function Card(props){
    const classNames = 'card ' + props.className
    return <div className={classNames}>{props.children}</div>
}
export default Card