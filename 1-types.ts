interface MyInterface {
    property1?: string, // ? makes optional
    property2: number, // Required
    property3: boolean // Required
}

interface MyInterfaceThree {
    property5: boolean
}

interface MyInterfaceTwo extends MyInterface, MyInterfaceThree {
    property4: string
}

type MyType = {
    property1: string
}

type MyTypeTwo = {
    property2: boolean,
} & MyType

enum MyEnum {
    enumOne = "enumOne",
    enumTwo = "enumTwo"
}

function myFunction(input: MyInterface): MyInterface {
    return input;
}

function myFunctionTwo(input: MyInterface): void {
}

async function myFunctionThree(input: MyInterface): Promise<MyInterface> {
    return input;
}

async function myFunctionFour(input: MyInterfaceTwo): Promise<MyInterface> {
    return input;
}

async function myFunctionFive(input: MyTypeTwo): Promise<MyTypeTwo> {
    return input;
}

myFunctionFive({
    property1: MyEnum.enumOne,
    property2: true
})