type Category = 'Orge' | 'Knight' | 'Archer' | 'Peon'  // literal union type

// Generic Type 
interface Managing<T> {
    addTask(param: T):void
    removeTask(param: T):void
}

export {
    Category,
    Managing
}

