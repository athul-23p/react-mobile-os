import './card.css';
function Card(props){

    return(
        <div>
            <Heading title={props.data.title}/>
            <List items={props.data.items} />
        </div>
    )
}

function Heading(props){
    return (<h1>{props.title}</h1>)
}

function List(props){
    return (<ul>{
                props.items.map(el => <li className={el.listStyle ? el.listStyle : 'disc'}>{el.content}</li>)
        }</ul>)
}

export default Card;