import verify from './utils/verify'
import List from './utils/CpfList'

class Pessoa {
  private name: string
  private cpf: string = ''

  constructor(name: string, cpf: string){
    this.name = name
    this.setCpf = cpf
  }

  set setCpf(cpf: string) {
    // Transformando a string em um array e filtrando tudo que não for numero
    const cpfArray = Array.from(cpf).filter(value => !isNaN(Number(value)))

    verify.length(cpfArray)
    verify.sequence(cpfArray)

    const cpfBody = cpfArray.splice(0, 9)
    const digit = cpfArray.splice(cpfArray.length - 2, 2)

    verify.firstDigit(cpfBody, digit[0])
    verify.secondDigit(cpfBody, digit)

    // Se chegou até aqui cpf é valido e vai ser registrado no objeto
    this.cpf = cpf
  }
}

for(let i=0; i < List.length; i++)
  try{
    let p = new Pessoa(List[i].name, List[i].cpf)
    console.log(p)
  }catch(e){
    console.log(e.message)
  }
