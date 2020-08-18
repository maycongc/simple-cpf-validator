import verify from './utils/verify'

class Pessoa {
  private name: string
  private cpf: string = ''

  constructor(name: string, cpf: string){
    this.name = name
    this.setCpf = cpf
  }

  set setCpf(cpf: string) {
    try{
      const cpfArray = Array.from(cpf).filter(value => !isNaN(Number(value)))

      verify.length(cpfArray)
      verify.sequence(cpfArray)

      const cpfCorpo = cpfArray.splice(0, 9)
      const digitos = cpfArray.splice(cpfArray.length - 2, 2)

      verify.firstDigit(cpfCorpo, digitos[0])
      verify.secondDigit(cpfCorpo, digitos)

      this.cpf = cpf
    }catch(e) {
      console.log(e)
    }
  }
}

const p1 = new Pessoa('Nome', '547.882.940-44')
