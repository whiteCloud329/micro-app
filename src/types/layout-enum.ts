export interface LyEnumType<T> {
    [key: string]: LyEnumItem<T>
}

interface LyEnumItem<T> {
    value: T
    desc: string
}
