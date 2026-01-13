//Modelo necesario para decodificar el token de forma ordenada
export interface JwtPayload{
    sub: string;
    exp: number; //Tiempo de caducidad
    iat: number; // Tiempo de creacion
    role: string;
    email: string;
}