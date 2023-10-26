export interface RepositoryInterface<T> {
    findAll(): Promise<T[]>;
    findById(id: string): Promise<T | undefined>;
    create(object: T): Promise<T>;
    update(id: string, updatedObject: T): Promise<T | undefined>;
    delete(id: string): Promise<T>;
}