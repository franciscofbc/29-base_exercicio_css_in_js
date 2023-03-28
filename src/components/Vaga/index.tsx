import { UlVaga, VagaLink, VagaTitle } from './styles'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <UlVaga>
    <li>
      <VagaTitle>{props.titulo}</VagaTitle>
    </li>
    <li>Localizacao: {props.localizacao}</li>
    <li>Senioridade: {props.nivel}</li>
    <li>Tipo de contratacao: {props.modalidade}</li>
    <li>
      Salário: {props.salarioMin} - {props.salarioMax}
    </li>
    <li>Requisitos: {props.requisitos.join(', ')}</li>
    <li>
      <VagaLink href="#">Ver detalhes e candidatar-se</VagaLink>
    </li>
  </UlVaga>
)

export default Vaga
