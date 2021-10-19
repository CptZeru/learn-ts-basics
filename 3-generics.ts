function myFunc<T>(input: T):T {
    return input
}

const result = myFunc<{name: string}>({
    name: "Gan"
})

const resultTwo = myFunc<string[]>(["Gan"])