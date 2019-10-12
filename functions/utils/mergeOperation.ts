import { merge } from 'lodash'


export interface Operation {

    add?: any
    update?: any
    delete?: boolean

}

const mergeOperation = (operation: Operation): Operation => {

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