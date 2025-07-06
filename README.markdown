# Watchlist App README

## Descripción

Este proyecto es una aplicación web de lista de películas desarrollada con **Create React App** y **Vite**, utilizando **Tailwind CSS** para los estilos. Permite a los usuarios agregar y eliminar películas de una lista de observación (watchlist) que se guarda localmente en el navegador. Este README detalla paso a paso el propósito y las modificaciones realizadas en cada archivo subido, así como las mejoras en la interfaz, organizadas de forma clara y ordenada.

---

## Archivos Subidos y su Propósito

### App.jsx

- **Propósito**: Componente principal que sirve como punto de entrada de la aplicación.
- **Pasos Realizados**:
  1. Importa los estilos globales desde `index.css`.
  2. Importa el componente `Home` desde `pages/Home`.
  3. Define una función `App` que renderiza únicamente el componente `Home` dentro de un `div`.
  4. Exporta `App` como componente predeterminado.
- **Modificaciones**: No se realizaron cambios significativos; se mantuvo como estructura básica.

### MovieCard.jsx

- **Propósito**: Componente que muestra una tarjeta individual para cada película con imagen, título y botón de agregar.
- **Pasos Realizados**:
  1. Importa `React` para usar JSX.
  2. Define `MovieCard` que recibe `movie` y `onAddToWatchlist` como props.
  3. Crea un `div` con clases Tailwind para un diseño de tarjeta (`max-w-sm`, `rounded`, `shadow-lg`).
  4. Añade una imagen con `src` y `alt` desde `movie`, un título con `font-bold`, y un botón con `bg-blue-500` que llama a `onAddToWatchlist`.
  5. Exporta el componente.
- **Modificaciones**: Se añadió `dark:bg-gray-800` al contenedor y `dark:text-white` al título para visibilidad en modo oscuro.

### Header.jsx

- **Propósito**: Componente que muestra el título y un botón para abrir la watchlist, ahora con un interruptor de tema.
- **Pasos Realizados**:
  1. Define `Header` que recibe `onOpenWatchlist`, `isDarkMode`, y `setIsDarkMode` como props.
  2. Crea un `header` con un gradiente (`bg-gradient-to-r from-blue-600 to-green-500`), título (`text-4xl`), y un botón `bg-red-500` para `onOpenWatchlist`.
  3. Añade un `label` con un checkbox que usa `isDarkMode` y `setIsDarkMode` para togglear el tema.
  4. Exporta el componente.
- **Modificaciones**: Se integró el interruptor de modo oscuro y se aseguró `text-white` para visibilidad.

### WatchlistModal.jsx

- **Propósito**: Componente que muestra un modal con la lista de películas guardadas y opciones para eliminarlas.
- **Pasos Realizados**:
  1. Importa `React` para JSX.
  2. Define `WatchlistModal` con props `watchlist`, `onClose`, y `onRemoveFromWatchlist`.
  3. Crea un `div` fijo con fondo semi-transparente y un contenedor `bg-white` para la lista.
  4. Muestra un título, una lista de películas con botones `bg-red-500` para eliminar, o un mensaje si está vacía.
  5. Añade un botón `bg-gray-500` para cerrar.
  6. Exporta el componente.
- **Modificaciones**: Se añadió `dark:bg-gray-800` al contenedor y `dark:text-white` a textos para modo oscuro.

### Button.jsx

- **Propósito**: Componente genérico y reutilizable para botones con estilos personalizables.
- **Pasos Realizados**:
  1. Define `Button` con props `children`, `onClick`, y `className` opcional.
  2. Crea un `button` con clases base `bg-blue-500`, `hover:bg-blue-700`, y permite personalización vía `className`.
  3. Renderiza `children` como contenido del botón.
  4. Exporta el componente.
- **Modificaciones**: No se modificó; se mantuvo como componente reutilizable.

### MovieList.jsx

- **Propósito**: Componente que renderiza una cuadrícula de tarjetas de películas usando `MovieCard`.
- **Pasos Realizados**:
  1. Importa `MovieCard`.
  2. Define `MovieList` con props `movies` y `onAddToWatchlist`.
  3. Usa un `div` con `grid grid-cols-1 md:grid-cols-3` para una disposición responsiva.
  4. Mapea `movies` y renderiza un `MovieCard` por cada elemento.
  5. Exporta el componente.
- **Modificaciones**: Se mejoró la responsividad con `md:grid-cols-3`.

### useWatchlist.js

- **Propósito**: Hook personalizado que gestiona el estado de la watchlist y su persistencia.
- **Pasos Realizados**:
  1. Importa `useState` y `useEffect` de React.
  2. Define `useWatchlist` con estado `watchlist` y `setWatchlist`.
  3. Inicializa `watchlist` con datos de `localStorage` usando una función en `useState`.
  4. Usa `useEffect` para guardar `watchlist` en `localStorage` cuando cambie.
  5. Implementa `addToWatchlist` para agregar sin duplicados y `removeFromWatchlist` para eliminar.
  6. Retorna las funciones y el estado.
  7. Exporta el hook.
- **Modificaciones**: Se cambió la inicialización de `watchlist` para cargar desde `localStorage` directamente.

### Home.jsx

- **Propósito**: Componente principal que integra la lista, el modal y el manejo del tema.
- **Pasos Realizados**:
  1. Importa `useState`, `useEffect`, y componentes/hoooks necesarios.
  2. Define `Home` con estados `isModalOpen`, `isDarkMode`, y usa `useWatchlist`.
  3. Inicializa `isDarkMode` desde `localStorage` y usa `useEffect` para togglear `dark` y guardar preferencia.
  4. Define un array `movies` con ejemplos.
  5. Renderiza `Header`, `MovieList`, y `WatchlistModal` con props adecuadas.
  6. Exporta el componente.
- **Modificaciones**: Se añadió manejo de tema y `text-white`/`text-gray-900` para contraste.

### index.css

- **Propósito**: Archivo de estilos globales con configuración de Tailwind.
- **Pasos Realizados**:
  1. Incluye `@tailwind base;`, `@tailwind components;`, y `@tailwind utilities;`.
- **Modificaciones**: No se modificó; se mantuvo como configuración base.

---

## Otras Modificaciones de la Interfaz

- **Colores Vivos**: Se usaron gradientes (ej. `bg-gradient-to-r from-blue-600 to-green-500`) y colores como `bg-red-500`.
- **Transiciones**: Se añadieron `transition duration-300` a botones.
- **Diseño Responsivo**: Se ajustó `MovieList` con `grid-cols-3` para pantallas medianas.
- **Estilo General**: Se mejoraron sombras (`shadow-lg`) y espaciados (`p-4`, `m-4`).

---

## Tecnologías Utilizadas

- **React**: Componentes y estado.
- **Vite**: Bundler y servidor.
- **Tailwind CSS**: Estilos responsivos.
- **Local Storage**: Persistencia.

---

## Notas Adicionales

- Modifica `movies` en `Home.jsx` para más películas.
- Personaliza colores en `tailwind.config.js`.
- El tema persiste en `localStorage`.

¡Sugerencias bienvenidas!
