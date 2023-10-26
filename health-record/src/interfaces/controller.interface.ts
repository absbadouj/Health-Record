export interface ControllerInterface<T> {
    findAll: () => void;
    findOne: (id: string) => void;
    create: (object: T) => void;
    update: (id: string, object: T) => void;
    delete: (id: string) => void;
}
