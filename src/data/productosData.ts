import fs from "node:fs/promises";
import path from "node:path";

import type {Producto} from "../types/producto.js";

export let productos: Producto[] = [];

export async function cargarDatos() {
    try {
        const ruta = path.resolve("src/productos.json");
        const data = await fs.readFile(ruta, "utf-8");
        productos = JSON.parse(data);
        console.log(
            `Datos cargados en memoria ${productos.length} productos cargados`
        );
    } catch (error) {
        console.log("No se encontraron productos en la lista o lista vacia");
        productos = [];
    }
}

export function setListaProductos(nuevaLista: Producto[]) {
    productos = nuevaLista;
}

