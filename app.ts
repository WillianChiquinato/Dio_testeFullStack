import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { WillAccount } from './class/WillAccount'

//Will Account
const willAccount = new WillAccount('Willian', 123456)
willAccount.deposit(100)
willAccount.getBalance()
willAccount.withdraw(50)
willAccount.getBalance()

//People Account
// const peopleAccount = new PeopleAccount(12345678900, 'Maria', 654321)
// peopleAccount.deposit(200)
// peopleAccount.getBalance()
// peopleAccount.withdraw(100)
// peopleAccount.getBalance()

// //Company Account
// const companyAccount = new CompanyAccount('Empresa X', 987654)
// companyAccount.deposit(1000)
// companyAccount.getBalance()
// companyAccount.getLoan(500)
// companyAccount.getBalance()
// companyAccount.withdraw(200)
// companyAccount.getBalance()