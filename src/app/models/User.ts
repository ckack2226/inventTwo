export class User {
    constructor(
      public UsuarioID: number,
      public NombreUsuario: string,
      public password: string
    ) {}

}
export const UserModel: { new (
    NombreUsuario: string,
    password: string
): User } = User as any;


