# Guía de Configuración: Module Federation en Angular 13

Este documento describe los pasos realizados para migrar una arquitectura de múltiples proyectos Angular (web-home, web-apuestas, web-recargas) a una arquitectura basada en Module Federation, donde `web-home` actúa como shell y los otros dos como remotos.

## 1. Instalación de dependencias necesarias

Se utiliza el paquete `@angular-architects/module-federation` para facilitar la configuración de Module Federation en Angular 13.

**Comando a ejecutar en cada proyecto:**

```bash
ng add @angular-architects/module-federation@13
```

> Si hay problemas con el comando `ng`, asegúrate de tener el entorno Node.js y Angular CLI configurados correctamente.

## 2. Configuración de los proyectos

- `web-home`: Se configura como shell (host), que cargará los módulos remotos de apuestas y recargas.
- `web-apuestas` y `web-recargas`: Se configuran como remotos, exponiendo módulos para ser consumidos por el shell.

## 3. Exposición de módulos remotos

En cada remoto, se expone el módulo principal de la funcionalidad (por ejemplo, `ApuestasModule` o `RecargasModule`).

## 4. Configuración de rutas en el shell

El shell (`web-home`) debe cargar los remotos usando rutas lazy y el mecanismo de Module Federation.

## 5. Adaptación de la navegación

El menú de navegación debe usar el router de Angular para evitar recargar toda la página y solo actualizar el contenido central.

## 6. Configuración de webpack para Module Federation

Se editaron los archivos `webpack.config.js` de cada proyecto:

- **web-home**: configurado como shell (host), define los remotos `web-apuestas` y `web-recargas`.
- **web-apuestas**: configurado como remoto, expone el módulo `ApuestasModule`.
- **web-recargas**: configurado como remoto, expone el módulo `RecargasModule`.

Esto permite que el shell cargue los módulos de los remotos dinámicamente mediante Module Federation.

## 7. Configuración de rutas y navegación en el shell (web-home)

- Se agregaron rutas lazy en `app-routing.module.ts` para cargar los módulos remotos `RecargasModule` y `ApuestasModule` usando Module Federation.
- El menú de navegación en `app.component.html` fue actualizado para usar `routerLink` en vez de redirecciones de URL, permitiendo navegación sin recargar la página.
- Se eliminó la función `goTo` del componente principal, ya que la navegación ahora es gestionada por Angular Router.

Esto permite que el contenido de los remotos se cargue dinámicamente en el `<router-outlet>` del shell, manteniendo la experiencia SPA.

## 8. Corrección de configuración de webpack en Angular 13

- Se corrigió la configuración de `webpack.config.js` en el shell (`web-home`) para usar `ModuleFederationPlugin` directamente, evitando el error `mf.withModuleFederationPlugin is not a function`.
- Esta es la forma recomendada y estable para Angular 13.

## 9. Despliegue a Producción (WAF / Proxy Inverso)

> [!IMPORTANT]
> **Redireccionamiento para recargas de navegador (Fallback)**
> Es vital configurar el servidor web o WAF (ej. Apache) para que ceda el control de las rutas al router de Angular (Host). Si un usuario recarga la página manualmente (`F5`) estando en una ruta como `https://midominio.com/recargas`, Apache intentará buscar un directorio real llamado "recargas" y arrojará un **Error 404**.
> 
> Para solucionar esto, es obligatorio configurar un *Fallback* hacia el `index.html` de `web-home` cuando el recurso o archivo solicitado no exista físicamente:
> ```apache
> <Directory "/ruta/a/los/archivos/de/web-home">
>     RewriteEngine On
>     RewriteCond %{REQUEST_FILENAME} !-f
>     RewriteCond %{REQUEST_FILENAME} !-d
>     RewriteRule ^ index.html [L]
> </Directory>
> ```
> **Recomendaciones adicionales:**
> - Mantener siempre el `<base href="/">` en el `index.html` del host (`web-home`).
> - Asegurarse de que el WAF use una ruta distinta para descargar el microfrontend (ej. `/web-recargas/remoteEntry.js`) vs la ruta que el usuario ve en el navegador (`/recargas`) para evitar bucles o colisiones en la resolución de Angular.

---

Este documento se irá actualizando conforme se realicen más pasos en la migración a Module Federation.
