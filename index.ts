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

      const cpfBody = cpfArray.splice(0, 9)
      const digit = cpfArray.splice(cpfArray.length - 2, 2)

      verify.firstDigit(cpfBody, digit[0])
      verify.secondDigit(cpfBody, digit)

      this.cpf = cpf
    }catch(e) {
      console.log(e.message)
    }
  }
}

// valid cpf: 547.882.940-44

const p1 = new Pessoa('Nome', '547.832.940-44')
