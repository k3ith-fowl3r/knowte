import { CollectionOperation } from "./collectionOperation";

export class AddNoteResult {
    constructor(operation: CollectionOperation) {
        this.operation = operation;
    }

    public noteId: string;
    public noteTitle: string;
    public operation: CollectionOperation;
}