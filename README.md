# Reportar Noticias

Este proyecto es un prototipo de un portal de noticias profesional en español. La meta es ofrecer una experiencia moderna, elegante y adaptable a dispositivos móviles con énfasis en periodismo independiente y contenido verificado.

## Vista previa del sitio

El sitio principal se encuentra en `index.html` e incluye:

- Encabezado con navegación principal, búsqueda y CTA de suscripción.
- Hero destacado con noticia principal e historias secundarias.
- Sección de últimas noticias con tarjetas visuales.
- Bloque de análisis y opinión para columnas editoriales.
- Formulario de suscripción al boletín con mensaje de confirmación.
- Pie de página con enlaces institucionales y redes sociales.

## Estructura del proyecto

```
reportar/
├── index.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js
│   └── img/
└── README.md
```

Puedes sustituir las imágenes de ejemplo en `assets/img` por material propio para personalizar el sitio.

## Desarrollo local

1. Clona el repositorio y entra en la carpeta del proyecto.
2. Lanza un servidor estático, por ejemplo con `python -m http.server 8000`.
3. Abre `http://localhost:8000` en tu navegador para visualizar el portal.

## Próximos pasos sugeridos

- Integrar un CMS o backend ligero para administrar las noticias.
- Añadir paginación y páginas de detalle por artículo.
- Configurar un pipeline de despliegue continuo hacia un dominio `.com`.
- Implementar pruebas de accesibilidad y performance.
