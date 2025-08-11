🌱 PlantHub - Tienda de Plantas
Una aplicación web moderna de comercio electrónico especializada en plantas, construida con React y Redux Toolkit. PlantHub ofrece una experiencia de compra intuitiva para plantas de interior, exterior y suculentas.
📋 Tabla de Contenidos

🎯 Características
🛠️ Tecnologías
📦 Instalación
🚀 Uso
📁 Estructura del Proyecto
🔧 Funcionalidades Redux
📱 Páginas
🎨 Diseño
📈 Criterios de Calificación
👨‍💻 Autor

🎯 Características
✅ Página Principal con información de la empresa y llamada a la acción
✅ Catálogo de Productos con 6 plantas organizadas en 3 categorías
✅ Sistema de Carrito completo con Redux para gestión de estado
✅ Interfaz Responsiva con diseño moderno y animaciones
✅ Navegación Fluida entre todas las páginas
✅ Gestión de Cantidades con botones de incremento/decremento
✅ Cálculos Automáticos de totales y subtotales
✅ Funcionalidades Redux implementadas correctamente
🛠️ Tecnologías

React 18.2.0
Redux Toolkit 1.9.5
React Redux 8.1.1
Lucide React 0.263.1 (Iconos)
Tailwind CSS (Estilos)
JavaScript ES6+

📦 Instalación
Prerrequisitos

Node.js (versión 14 o superior)
npm o yarn

Pasos de instalación

Clona el repositorio
bashgit clone https://github.com/victormbm15/Revision-de-Pares.git
cd Revision-de-Pares

Instala las dependencias
bashnpm install

Inicia el servidor de desarrollo
bashnpm start

Abre tu navegador

La aplicación estará disponible en http://localhost:3000



🚀 Uso
Navegación

Página Principal: Información sobre PlantHub y botón para comenzar
Catálogo: Explora las plantas por categorías y añádelas al carrito
Carrito: Revisa, modifica cantidades y finaliza tu compra

Funcionalidades del Carrito

Añadir plantas: Botón "Añadir a la cesta" (se desactiva tras usar)
Modificar cantidades: Botones + y - para cada planta
Eliminar plantas: Botón de papelera para remover del carrito
Ver total: Cálculo automático del precio total

📁 Estructura del Proyecto
src/
├── 📁 store/
│   ├── 📄 CartSlice.jsx         # Slice de Redux con reducers
│   └── 📄 store.js              # Configuración del store
├── 📁 components/
│   ├── 📄 HomePage.jsx          # Página principal
│   ├── 📄 ProductsPage.jsx      # Catálogo de productos
│   └── 📄 CartPage.jsx          # Página del carrito
├── 📁 data/
│   └── 📄 plants.js             # Datos de las plantas
├── 📄 App.js                    # Componente principal
└── 📄 index.js                  # Punto de entrada
🔧 Funcionalidades Redux
CartSlice.jsx
El slice principal contiene tres funciones reductoras esenciales:
addItem()
javascriptaddItem: (state, action) => {
  const plant = action.payload;
  const existingItem = state.items.find(item => item.id === plant.id);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.items.push({ ...plant, quantity: 1 });
  }
}
removeItem()
javascriptremoveItem: (state, action) => {
  const plantId = action.payload;
  state.items = state.items.filter(item => item.id !== plantId);
}
updateQuantity()
javascriptupdateQuantity: (state, action) => {
  const { id, quantity } = action.payload;
  const item = state.items.find(item => item.id === id);
  if (item && quantity > 0) {
    item.quantity = quantity;
  }
}
📱 Páginas
🏠 Página Principal

Marca: Logo de PlantHub con icono animado
Descripción: Información sobre la empresa y experiencia
CTA: Botón "Comenzar" para ir al catálogo

🌿 Página de Productos

Categorías: Interior, Exterior, Suculentas
Productos: 6 plantas únicas con imagen, nombre y precio
Interacción: Botones "Añadir a la cesta" que se desactivan
Carrito: Icono con contador dinámico

🛒 Página del Carrito

Resumen: Total de plantas y precio total
Gestión: Incrementar, decrementar y eliminar plantas
Checkout: Resumen final del pedido

🎨 Diseño
Paleta de Colores

Primary: Verde (#16a34a, #15803d)
Secondary: Gris (#6b7280, #4b5563)
Accent: Rojo para notificaciones (#ef4444)

Características Visuales

Gradientes: Fondos con gradientes verdes
Animaciones: Hover effects y transiciones suaves
Iconos: Lucide React para consistencia visual
Responsive: Diseño adaptable a móviles y desktop

📈 Criterios de Calificación
CriterioPuntosEstadoRepositorio público en GitHub2 pts✅Código relacionado con Redux4 pts✅Imagen de fondo1 pt✅Párrafo sobre la empresa1 pt✅Nombre de la empresa1 pt✅Botón "Comenzar" enlaza a productos2 pts✅Seis plantas únicas con datos2 pts✅Agrupadas en tres categorías1 pt✅Botón "Añadir a la cesta" funcional6 pts✅Icono del carrito con contador3 pts✅Navegación entre páginas2 pts✅Total de plantas en carrito2 pts✅Coste total calculado2 pts✅Plantas en carrito con detalles6 pts✅Botón incremento por planta3 pts✅Botón decremento por planta3 pts✅Botón eliminar planta3 pts✅Resumen final del pedido4 pts✅
Total: 50/50 puntos ✅
🚀 Scripts Disponibles
En el directorio del proyecto, puedes ejecutar:
npm start
Ejecuta la aplicación en modo desarrollo.
Abre http://localhost:3000 para verla en el navegador.
npm run build
Construye la aplicación para producción en la carpeta build.
npm test
Ejecuta las pruebas en modo interactivo.
npm run eject
Nota: esta es una operación irreversible. ¡Una vez que ejecutes eject, no podrás volver atrás!
🤝 Contribuciones
Las contribuciones son bienvenidas. Para cambios importantes:

Fork el proyecto
Crea una rama para tu feature (git checkout -b feature/AmazingFeature)
Commit tus cambios (git commit -m 'Add some AmazingFeature')
Push a la rama (git push origin feature/AmazingFeature)
Abre un Pull Request

📝 Licencia
Este proyecto está bajo la Licencia MIT. Ver el archivo LICENSE para más detalles.
👨‍💻 Autor
Victor Bermúdez

GitHub: @victormbm15
Proyecto: Revision-de-Pares


📞 Soporte
Si tienes preguntas o problemas, puedes:

Abrir un issue en GitHub
Contactar al autor a través de GitHub


¡Gracias por usar PlantHub! 🌱
Transformando hogares con plantas hermosas desde 2024
