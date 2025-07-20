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

---

Este documento se irá actualizando conforme se realicen más pasos en la migración a Module Federation.
