import { merge } from 'lodash'


export interface Operation<T> {

    add?: T
    update?: T
    delete?: T

}

const mergeOperation = <T>(operation: Operation<T>): Operation<T> => {

    if (operation.delete && operation.add) return null
    if (operation.add && operation.update) return {
        add: merge(operation.add, operation.update),
    }
    if (operation.delete && operation.update) return {
        delete: operation.delete
    }

    return operation

}

export default mergeOperation