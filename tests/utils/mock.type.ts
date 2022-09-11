export type Mock<T extends object> = {
    [key in keyof T]?: T[key] extends Function ? jasmine.Spy : T[key]
}