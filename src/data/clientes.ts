export interface Cliente{
    id: number;
    nombre: string;
    apellidos?: string; //es opcional
    telefono: number;
    direccion: string;
    ciudad: string; //pide filtrar por ciudad
    email?: string; //es opcional
}

export const clientes: Cliente[] = [
    {
        id: 1,
        nombre: "Julieta",
        apellidos: "Martinez",
        telefono: 1133550055,
        direccion: "Av. Rodriguez 1981",
        ciudad: "Lima",
        email: "juli@gmail.com",
    },
    {
        id: 2,
        nombre: "Francisco",
        apellidos: "Gonzalez",
        telefono: 1158485432,
        direccion: "Donovan 1074",
        ciudad: "Arequipa",
        email: "fran@gmail.com",
    },
    {
        id: 3,
        nombre: "Maria",
        apellidos: "Ilamendi",
        telefono: 1142493937,
        direccion: "Av. Galvez 1679",
        ciudad: "Viña",
        email: "mari@gmail.com",
    },
    {
        id: 4,
        nombre: "Emanuel",
        apellidos: "Fort",
        telefono: 1145633935,
        direccion: "Av. Hudson 5452",
        ciudad: "Buenos Aires",
        email: "ema@gmail.com",
    },
    {
        id: 5,
        nombre: "Emilia",
        apellidos: "Eisbruch",
        telefono: 1140282832,
        direccion: "Lavalleja 272",
        ciudad: "Lima",
        email: "emi@gmail.com",
    },
    {
        id: 6,
        nombre: "Alejandro",
        apellidos: "Parisi",
        telefono: 1187564637,
        direccion: "Av. Viamonte 1919",
        ciudad: "Lima",
        email: "andy@gmail.com",
    },
    {
        id: 7,
        nombre: "Micaela",
        apellidos: "Sanchez",
        telefono: 1166478392,
        direccion: "Arenales 878",
        ciudad: "Viña",
        email: "mica@gmail.com",
    },
]