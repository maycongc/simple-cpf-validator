export default class InvalidCpfError extends Error {
  constructor(){
    super('Please inform a valid CPF.')
  }
}