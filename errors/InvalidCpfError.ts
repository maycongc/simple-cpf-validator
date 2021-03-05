class InvalidCpfError extends Error {
  constructor(name: string){
    super(`[${name}] Please inform a valid CPF.`)
  }
}

export default InvalidCpfError