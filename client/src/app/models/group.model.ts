export interface Group {
    string: string
    connections: Connection[]
}

interface Connection {
    connectionId: string
    username: string
}