interface MyInterfaceFour {
    property1: string,
    property2?: number,
    property3? : boolean
}

const obj: Partial<MyInterfaceFour> = {} // makes all property optional

const objTwo: Omit<MyInterfaceFour, 'property2' | 'property3'> = { // remove/omit properties
    property1: 'nice'
}