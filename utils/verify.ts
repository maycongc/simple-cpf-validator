import InvalidCpfError from "../errors/InvalidCpfError"

class Verify{
  length(cpf: string[]) {
    if(cpf.length !== 11) {
      throw new InvalidCpfError('LengthError')
    }
  }

  sequence(cpf: string[]){
    if(cpf[0].repeat(11) === cpf.join('')) {
      throw new InvalidCpfError('SequenceError')
    }
  }

  firstDigit(cpfBody: string[], digit: string) {
    const total = cpfBody.map(Number).reduce((acc, value, indice) => {
      return acc += value * (indice + 1)
    }, 0)

    if(total % 11 !== Number(digit)) {
      throw new InvalidCpfError('FirstDigitError')
    }
  }

  secondDigit(cpfBody: string[], digit: string[]) {
    const cpfNumbers = [...cpfBody, digit[0]]
  
    const total = cpfNumbers.map(Number).reduce((acc, value, indice) => {
      return acc += value * indice
    }, 0)
  
    if(total % 11 !== Number(digit[1])) {
      throw new InvalidCpfError('SecondDigitError')
    }
  }
}

export default new Verify()