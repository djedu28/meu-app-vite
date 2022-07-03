import {Link} from 'react-router-dom'

export type ItemProps = {
  id: Number;
  nome: String;
  valor: Number;
  detalhes?: String;
}

export function Item(props:ItemProps) {
  return (
    <div style={{ display: "block", margin: "1rem 0", padding: "1rem" }}>
      <Link to={`/Catalogo/${props.id}`}>
        <h2> {props.nome} </h2>
        <p> Por R$ {props.valor.toFixed(2).replace(".",",")} </p>
        {props.detalhes&&<p>{props.detalhes}</p>}
      </Link>
    </div>
  )
}
