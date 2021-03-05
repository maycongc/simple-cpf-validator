interface CpfList {
  name: string,
  cpf: string
}

const List: CpfList[] = [
  {
    name: 'Valido',
    cpf: '547.882.940-44'
  },
  {
    name: 'Invalido1',
    cpf: '1411.111.111-11'
  },
  {
    name: 'Invalido2',
    cpf: '111.111.111-11'
  },
  {
    name: 'Invalido3',
    cpf: '111.131.111-11'
  },
  {
    name: 'Invalido4',
    cpf: '111.111.111-12'
  },
]

export default List