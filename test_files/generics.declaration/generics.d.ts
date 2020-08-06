export declare function identity<T, U>(arg: T): U;
export interface HasThing<T> {
    thing: T;
}
export interface Lengthwise {
    length: number;
}
export declare function loggingIdentity<T extends Lengthwise>(arg: T): T;
export declare class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}
export declare class LengthwiseContainer<T extends Lengthwise> {
    private t;
    constructor(t: T);
    incrementLength(): number;
}
export declare class DefaultGeneric<T extends {} = {}> {
}
declare global {
    namespace ಠ_ಠ.clutz {
        export { DefaultGeneric as module$contents$test_files$generics$declaration$generics_DefaultGeneric, GenericNumber as module$contents$test_files$generics$declaration$generics_GenericNumber, HasThing as module$contents$test_files$generics$declaration$generics_HasThing, Lengthwise as module$contents$test_files$generics$declaration$generics_Lengthwise, LengthwiseContainer as module$contents$test_files$generics$declaration$generics_LengthwiseContainer, identity as module$contents$test_files$generics$declaration$generics_identity, loggingIdentity as module$contents$test_files$generics$declaration$generics_loggingIdentity };
        export namespace module$exports$test_files$generics$declaration$generics {
            export { DefaultGeneric, GenericNumber, HasThing, Lengthwise, LengthwiseContainer, identity, loggingIdentity };
        }
    }
}
