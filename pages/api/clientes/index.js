import { Cliente } from '../../../models/clientes';

const clientes = async (req, res) => {
    if (req.method === 'GET') {
        //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
        try {
            const clientes = await Cliente.findAll({
                // include: {
                //     model: Maquina,
                //     attributes: ['NroMaquina', 'Descripcion'],
                // },
                order: [['id', 'ASC']],
            });
            res.status(200).json({
                data: clientes,
            });
        } catch (error) {
            console.log(error);
        }
    } else if (req.method === 'POST') {
        //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
        try {
            const { id, nombre, maximo3, entero, nonulo, positivo } = req.body;
            let nuevoCliente = await Cliente.create(
                {
                    id,
                    nombre,
                    maximo3,
                    entero,
                    nonulo,
                    positivo,
                },
                {
                    fields: [
                        'id',
                        'nombre',
                        'maximo3',
                        'entero',
                        'nonulo',
                        'positivo',
                    ],
                }
            );
            if (nuevoCliente) {
                return res.status(201).send({
                    type: 'success',
                    title: 'Nuevo Cliente',
                    message: 'Cliente creado exitosamente!!!',
                });
            }
        } catch (error) {
            console.log(error);
        }
    }
};

export default clientes;
