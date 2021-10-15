import * as CreateTransactionService from "./CreateTransactionService"
import * as TransactionsRepository from "../repositories/TransactionsRepository"

// @ponicode
describe("execute", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new TransactionsRepository.TransactionsRepository()
        inst2 = new CreateTransactionService.default(inst)
    })

    test("0", () => {
        let callFunction: any = () => {
            inst2.execute({ title: "Direct Functionality Orchestrator", value: 64, type: "income" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            inst2.execute({ title: "Internal Interactions Strategist", value: 0, type: "outcome" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            inst2.execute({ title: "Direct Functionality Orchestrator", value: 256, type: "income" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            inst2.execute({ title: "Dynamic Quality Specialist", value: 256, type: "income" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            inst2.execute({ title: "Direct Functionality Orchestrator", value: 32, type: "outcome" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            inst2.execute({ title: "", value: NaN, type: "outcome" })
        }
    
        expect(callFunction).not.toThrow()
    })
})
