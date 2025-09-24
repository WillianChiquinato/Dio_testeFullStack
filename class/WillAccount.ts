import { DioAccount } from "./DioAccount";

export class WillAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (value: number) => {
    this.balance += value + 10;
    console.log("Depósito Acresce com sucesso!");
  }
}
