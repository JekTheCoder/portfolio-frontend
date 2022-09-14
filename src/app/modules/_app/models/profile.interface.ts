export interface Profile {
    id: unknown,
    username: string,
    name?: string | null,
    lastname?: string | null, 
    email?: string | null,
    roleId: unknown,
    profileImg?: string | null
    createdAt: Date,

    /**
     * @Deprecated
     */
    __role__: {
        id: unknown,
        name: string,
        permissions: { id: unknown, name: string }[]
    }
}