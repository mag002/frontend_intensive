export interface User {
    id: string,
    avatar: string,
    name: string,
    status: 'online' | 'offline'
}

export interface Message {
    from: string,
    to: string,
    text: string
}