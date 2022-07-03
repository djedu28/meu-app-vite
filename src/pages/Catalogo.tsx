import { Outlet } from "react-router-dom";
import { getCatalogo,getCatalogoById } from "../data";
import { Item, ItemProps } from "../components/Item";

export function Catalogo() {

  return (
    <main>
      <h1>Catalogo</h1>
      {getCatalogo().map(
        (item: ItemProps) => {
          return <Item id={item.id} key={`it-${item.id}`} nome={item.nome} valor={item.valor} />
        }
      )}
      {/* <Outlet /> */}
    </main>
  )
}

import { useParams } from "react-router-dom";
export function CatalogoDetalhado() {
  const id:Number = useParams().id
  const item: ItemProps = getCatalogoById(id)
  console.log({id,item})
  return (
    <main>
      <h1>Catalogo Detalhado</h1>
      {/* <Item
        id={0}
        nome={"Abobora"}
        valor={123}
      /> */}
      <Item
        id={item.id}
        nome={item.nome}
        valor={item.valor}
        detalhes={item.detalhes}
      />
      {/* <Outlet /> */}
    </main>
  )
}
