


































































































import type {Request, Response, NextFunction } from "express";

export const validarCrearProducto = (req: Request, res: Response, next: NextFunction): void => {
  const { nombre, categoria, precio, disponible } = req.body;

  if (!nombre || !categoria || precio === undefined || disponible === undefined) {
    res.status(400).json({ 
      error: 'Campos obligatorios requeridos: nombre, categoria, precio, disponible.' 
    });
    return;
  }

  if (typeof nombre !== 'string' || typeof categoria !== 'string') {
    res.status(400).json({ error: 'Los campos nombre y categoria deben ser texto.' });
    return;
  }

  if (typeof precio !== 'number' || precio <= 0) {
    res.status(400).json({ error: 'El precio debe ser un número mayor a 0.' });
    return;
  }

  if (typeof disponible !== 'boolean') {
    res.status(400).json({ error: 'El campo disponible debe ser un valor booleano (true/false).' });
    return;
  }

  next();
};

export const validarActualizarProducto = (req: Request, res: Response, next: NextFunction): void => {
  const { nombre, categoria, precio, disponible } = req.body;

  if (!nombre && !categoria && precio === undefined && disponible === undefined) {
    res.status(400).json({ 
      error: 'Debes enviar al menos un campo a actualizar (nombre, categoria, precio o disponible).' 
    });
    return;
  }

  if (precio !== undefined && (typeof precio !== 'number' || precio <= 0)) {
    res.status(400).json({ error: 'Si actualizas el precio, debe ser un número mayor a 0.' });
    return;
  }

  if (disponible !== undefined && typeof disponible !== 'boolean') {
    res.status(400).json({ error: 'El campo disponible debe ser un valor booleano (true/false).' });
    return;
  }

  next();
};
