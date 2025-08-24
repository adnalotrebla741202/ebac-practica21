<h1>Práctica #21 de mi curso de FrontEnd de EBAC</h1>
<h2>Descripción del proyecto</h2>
Este proyecto es una tienda web de productos gastronómicos poblanos que permite a los usuarios:
<ul>
  <li>Visualizar un catálogo de productos (como memelas, chalupas, pelonas, bebidas, etc.).</li>
  <li>Agregar productos al carrito de compras con un click.</li>
  <li>Visualizar el contenido del carrito, el total acumulado y confirmar la compra.</li>
  <li>Navegar por un menú lateral interactivo con secciones como: Inicio, Galería, Nosotros, Contacto y Eventos.</li>
</ul>
Además, el diseño es responsivo y se adapta a distintos tamaños de pantalla (celulares, tabletas y escritorio), con una experiencia interactiva y amigable para el usuario.
<h2>Tecnologías utilizadas</h2>
<ul>
  <li><b>HTML5</b></li>
  <ul>
    <li>Define la estructura del sitio.</li>
    <li>Utiliza semántica clara (<b>&lt;header&gt;</b>, <b>&lt;main&gt;</b>, <b>&lt;section&gt;</b>, <b>&lt;article&gt;</b>, etc.).</li>
    <li>Incluye íconos, imágenes, títulos y botones de compra.</li>
  </ul>
  <li><b>SASS</b></li>
  <ul>
    <li>Preprocesador de CSS que permite usar mixins, nesting y variables.</li>
    <li>Utiliza mixins (<b><em>@mixin tablets</em></b> y <b><em>@mixin cellphones</em></b>) para manejo responsivo.</li>
    <li>Define estilos personalizados para cada componente: menú lateral, productos, carrito, banner, etc.</li>
  </ul>
  <li><b>CSS3 (Compilado desde SCSS)</b></li>
  <ul>
    <li>Aplicado mediante el archivo styles.css (se genera desde styles.scss).</li>
    <li>Controla la apariencia del layout, la tipografía, colores, y animaciones (<b><em>transform</em></b>, <b><em>transition</em></b>).</li>
  </ul>
  <li><b>Google Fonts</b></li>
  <ul>
    <li>Se usa la fuente <b>Lexend</b> para mejorar la estética y legibilidad.</li>
  </ul>
  <li><b>Font Awesome</b></li>
  <ul>
    <li>Proporciona íconos SVG para el menú lateral (como <b><em>fa-home</em></b>, <b><em>fa-image</em></b>, <b><em>fa-users</em></b>, etc.).</li>
  </ul>
  <li><b>Imágenes e Íconos</b></li>
  <ul>
    <li>Las imágenes de productos y botones (<b><em>shopping.png</em></b>, <b><em>remove.svg</em></b>, etc.) se usan para visualización interactiva.</li>
    <li>Se agrupan en carpetas como <b><em>assets/img</em></b> y <b><em>assets/ico</em></b>.</li>
  </ul>
  <li><b>JavaScript (JS) - Lógica e Interactividad)</b></li>
  <ul>
    <li><b>DOM Manipulation</b></li>
    <ul>
      <li>Se accede y modifica dinámicamente el DOM con <b><em>document.querySelector</em></b>, <b><em>getElementById</em></b>, etc.</li>
    </ul>
    <li><b>Eventos del Usuario</b></li>
    <ul>
      <li>click, <b><em>mouseenter</em></b>, <b><em>mouseleave</em></b>, <b><em>addEventListener</em></b> para detectar acciones del usuario como:</li>
      <ul>
        <li>Agregar productos al carrito.</li>
        <li>Quitar productos.</li>
        <li>Confirmar compra.</li>
        <li>Mostrar/ocultar el menú y el carrito.</li>
      </ul>
    </ul>
    <li><b>Gestión del Carrito</b></li>
      <ul>
        <li>Añade dinámicamente secciones (<b><em>&lt;section&gt;</em></b>) con productos seleccionados.
        <li>Calcula y actualiza el total del carrito en tiempo real.</li>
        <li>Usa variables globales (<b><em>cartCount</em></b>, <b><em>totalAmount</em></b>) para controlar cantidades.</li>
      </ul>
  </ul>
</ul>
<h2>Instrucciones de instalación y uso</h2>
<ul>
  <li>Hay que asegurarse de tener Node.js y npm instalados en el sistema los cuales pueden ser descargados desde: https://nodejs.org/.</li>
  <li>Después de ejecutar el paso anterior, instala <b>SASS</b> globalmente utilizando la línea de comandos: npm install -g sass.</li>
  <li>Para usar este código hay que ir a la pestaña Code | Download ZIP.</li>
  <li>Descomprimir el archivo zipeado, entrar a la carpeta creada y buscar el archivo <b>index.html</b>.</li>
  <li>Una vez localizado el archivo <b>index.html</b> le damos doble click a dicho archivo y se nos abrirá el proyecto HTML en nuestro navegador de Internet predeterminado.</li>
  <li><b>Navegar el menú lateral</b></li>
  <ul>
    <li>Haz click en el ícono de menú <b>(☰)</b> para mostrar el panel de navegación lateral.</li>
    <li>Haz click en el ícono de menú <b>(X)</b> para ocultar el panel de navegación lateral.</li>
  </ul>
  <li><b>Agregar productos al carrito</b></li>
  <ul>
    <li>Haz click en cualquier producto o en el botón <b><em>Agregar al carrito</em></b>.</li>
    <li>El contador del carrito <b>(ícono rojo)</b> se actualizará.</li>
    <li>El producto aparecerá en la sección de <b>CARRITO</b>.</li>
  </ul>
  <li><b>Ver/ocultar carrito</b></li>
  <ul>
    <li>Haz clic en el ícono del carrito (🛒) en el encabezado para abrir/cerrar el panel del carrito.</li>
  </ul>
  <li>Eliminar productos<b></b></li>
  <ul>
    <li>Dentro del carrito, haz clic en el ícono de "remove" (🗑️) para quitar productos del carrito.</li>
  </ul>
  <li><b>Confirmar compra</b></li>
  <ul>
    <li>Haz clic en <b>Confirmar Compra</b>.</li>
    <li>Si el carrito no está vacío, se mostrará una alerta con el total y se vaciará el carrito.</li>
    <li>Si el carrito está vacío, mostrará una alerta indicando eso.</li>
  </ul>
  <li>Cuando cambiamos el diseño de tamaño los elementos que conforman el diseño web se ajustan de tal manera que se adaptan al tamaño del dispositivo de despliegue y de esta manera el usuario puede seguir viendo el contenido completo del sitio web sin que falte o se desborde algún elemento.</li>
</ul>
<h2>Ejemplos de uso</h2>
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/01c91893-e821-4ce1-8d59-9465026bba0b" />

---

<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/75aad5b4-8406-4983-8274-6601408f1601" />

---

<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/7f261364-c150-4163-b5d2-522c2fbb86a7" />

---

<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/aeada0c9-875a-4211-b3eb-13916eebbe33" />

---

<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/9a5eb1fe-c167-4fbd-a547-14a5f49b90ac" />

---

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/0f9dff44-c726-49b3-9191-06f2f6fcb084" />

---

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/db81a247-d6b4-44c1-990a-1e18468b2ed4" />

---

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/16358abf-a96a-4576-b554-222a5e4a63cf" />

---

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/ce374ecd-6c98-44a5-88b9-422dc79e9ff7" />

---

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/2c1492bf-c455-4a26-ad99-273816b1df67" />

---

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/635106c9-b1bc-4a6b-a2e3-c7684cba5391" />

---

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/ec6827e1-87ab-4f42-ada4-01911dcf880b" />

---

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/4656a273-4dd6-4309-9d2b-42d6586a6983" />

---

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/4f5ae003-e254-4797-9100-ec4092eb9cb6" />

---

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/9b8b54dc-01da-44b6-bd2b-c0e0e865fb77" />

---

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d48c0053-b74c-4792-b722-eda22860c560" />

---

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/4285c5c3-7c3e-4142-a741-11f19be3a498" />

---

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/e224afb7-4e55-4236-9241-ff019dd7d370" />

---

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/9ab3f962-49c2-4e44-b2a3-5697fbd2416a" />

---

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/af097315-cbe3-4769-a514-6baa1b222f03" />

---

<img width="1562" height="1080" alt="image" src="https://github.com/user-attachments/assets/e9f607c2-7bcf-45c2-ab4f-60b77327bfd6" />

---

<img width="1259" height="1080" alt="image" src="https://github.com/user-attachments/assets/80b40fcd-c3dc-4bd2-8e08-e567c3b2a7d4" />

---

<img width="956" height="1080" alt="image" src="https://github.com/user-attachments/assets/17e57155-0f52-45fe-8106-98e2a585ca78" />

---

<img width="767" height="1080" alt="image" src="https://github.com/user-attachments/assets/bb2c31ab-3aa4-4cdf-a9df-5cf29d158f0a" />

---

<img width="502" height="1080" alt="image" src="https://github.com/user-attachments/assets/90f582c8-bbda-4644-9766-ac0aa0ea0f81" />

---

<img width="502" height="1080" alt="image" src="https://github.com/user-attachments/assets/b0254e1b-ad4f-4a32-bacf-fe58ac4021c4" />

---

<img width="502" height="1080" alt="image" src="https://github.com/user-attachments/assets/a3df7528-5c1d-4dd3-9f4f-cdd5cc71ccb1" />

---

<img width="502" height="1080" alt="image" src="https://github.com/user-attachments/assets/3e444300-ea1e-4871-957d-31dcc699f54d" />

---

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/ba46a6f6-c966-42e4-9743-f444d1b22b77" />

---

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/fb60d605-4098-44df-b734-ed549d01576e" />

---

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/a2bb867e-96cc-4a61-86f5-5ed50e4b7287" />

---

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/1de818ef-9da7-4646-be8b-738e0a0ff4f3" />

---

## <p align="center"><a href="https://github.com/adnalotrebla741202">REGRESAR</a></p>
