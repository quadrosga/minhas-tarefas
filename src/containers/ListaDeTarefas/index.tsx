import Tarefa from '../../styles/components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Estudar Typescript',
    descricao: 'Assistir aula',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Pagar conta',
    descricao: 'Baixa boleto',
    prioridade: 'normal',
    status: 'concluída'
  },
  {
    titulo: 'Trocar pneu',
    descricao: 'Comprar pneu novo',
    prioridade: 'urgente',
    status: 'pendente'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;catergoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            status={t.status}
            prioridade={t.prioridade}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
