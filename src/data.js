
const catalogo = [
  { id:1, nome : "Arduino UNO", valor : 50.00, detalhes:"Placa Arduino Uno"},
  { id:2, nome : "Arduino Mega", valor : 80, detalhes:"Placa Arduino Mega"},
  { id:3, nome : "Botão Árcade PSB-29", valor : 7.5, detalhes:"Botão colorido, PSB-29, utilizado em fliperamas/árcades, o botão possui 26mm de diâmetro"},
  { id:4, nome : "Modulo Sensor IR", valor : 3, detalhes:"Modulo Sensor InfraVerelho. Sensor de distância ou refletância"},
]

export function getCatalogo(){
  return catalogo
}
export function getCatalogoById(id){
  return catalogo.find(x=>x.id==id)
}
