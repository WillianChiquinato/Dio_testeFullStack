export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }
  
  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      if (value > 0){
        this.balance += value
        console.log('Voce depositou')
      }
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus()){
      if (value > 0 && this.balance >= value){
        this.balance -= value
        console.log('Voce Sacou')
      }
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  public validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
