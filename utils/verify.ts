import InvalidCpfError from "../errors/InvalidCpfError"

class Verify{
  length(cpf: string[]) {
    if(cpf.length !== 11) {
      throw new InvalidCpfError('Please inform a valid CPF.')
    }
  }

  sequence(cpf: string[]){
    if(cpf[0].repeat(11) === cpf.join('')) {
      throw new InvalidCpfError('Please inform a valid CPF.')
    }
  }

  firstDigit(cpfLimpo: string[], digito: string) {
    const total = cpfLimpo.map(Number).reduce((acc, value, indice) => {
      return acc += value * (indice + 1)
    }, 0)

    if(total % 11 !== Number(digito)) {
      throw new InvalidCpfError('Please inform a valid CPF.')
    }
  }

  secondDigit(cpfLimpo: string[], digito: string[]) {
    const cpfNumbers = [...cpfLimpo, digito[0]]
  
    const total = cpfNumbers.map(Number).reduce((acc, value, indice) => {
      return acc += value * indice
    }, 0)
  
    if(total % 11 !== Number(digito[1])) {
      throw new InvalidCpfError('Please inform a valid CPF.')
    }
  }
}

export default new Verify()