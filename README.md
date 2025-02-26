
# Visualización de Consultas Realizadas

Este proyecto es una interfaz de usuario desarrollada en React para visualizar y buscar consultas realizadas a través de una API. Permite listar las consultas, buscar por correo electrónico y mostrar información relevante de cada consulta de manera interactiva.

## Características

- **Listado de Consultas**: Muestra una lista de todas las consultas realizadas, con detalles como correo, mensaje, fuente y fecha de creación.
- **Búsqueda Dinámica**: Permite filtrar las consultas ingresando un correo electrónico en un campo de búsqueda.
- **Interfaz Intuitiva**: Diseño limpio y responsivo que utiliza componentes reutilizables como tarjetas y entradas.
- **Manejo de Errores**: Indica mensajes claros al usuario en caso de fallos al cargar datos.

## Tecnologías Usadas

- **React**: Biblioteca principal para la interfaz de usuario.
- **TypeScript**: Proporciona tipado estático para un desarrollo más seguro y escalable.
- **TailwindCSS**: Framework de CSS para un diseño rápido y estilizado.
- **date-fns**: Para formatear fechas con soporte para idiomas como español.
- **Lucide React**: Iconos modernos y personalizables.
- **Shadcn/UI**: Componentes reutilizables para una mejor experiencia de usuario.

## Cómo Funciona

### Estructura Principal

- **`Home`**: Componente principal que envuelve el título y el listado de consultas.
- **`InquiriesList`**: Componente que maneja la lógica para mostrar y filtrar las consultas.

### Flujo de Datos

1. **Carga Inicial**: Cuando la página se carga, el componente `InquiriesList` realiza una llamada a la API (`/api/inquiries`) para obtener las consultas.
2. **Búsqueda por Correo**: Cada vez que el usuario escribe en el campo de búsqueda, se realiza una nueva solicitud a la API, filtrando los resultados por el correo proporcionado.
3. **Renderizado Condicional**: Dependiendo del estado (cargando, error, resultados encontrados), se muestra el contenido adecuado.

### Código de Ejemplo

#### Componente `Home`

```tsx
import InquiriesList from '@/components/InquiriesList';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Consultas Realizadas
        </h1>
        <InquiriesList />
      </div>
    </main>
  );
}
```

#### Componente `InquiriesList`

Incluye la lógica para manejar la búsqueda, cargar datos de la API, y renderizar las consultas.


## Requisitos Previos

- Node.js (>=14.0.0)
- Un backend que sirva la API de consultas (`/api/inquiries`).

## Instalación y Configuración

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tuusuario/visualizacion-consultas.git
   cd visualizacion-consultas
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Ejecuta el proyecto en modo desarrollo:
   ```bash
   npm run dev
   ```

4. Accede al proyecto en tu navegador en [http://localhost:3000](http://localhost:3000).

## API Esperada

La API debe responder a las siguientes rutas:

- **`GET /api/inquiries`**: Devuelve un listado de consultas.
- **`GET /api/inquiries?email=<email>`**: Devuelve consultas filtradas por correo electrónico.

Formato de respuesta esperado:

```json
[
  {
    "_id": "123",
    "email": "usuario@example.com",
    "message": "Este es un mensaje de prueba",
    "source": "Formulario Web",
    "createdAt": "2025-01-25T14:35:00Z"
  }
]
```
