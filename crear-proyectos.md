# 🧱 Guía para crear proyectos Angular base

Esta guía genera tres proyectos Angular independientes:
- **web-home**
- **web-apuestas**
- **web-recargas**

> ⚙️ Todos serán configurados con Angular CLI, listos para posteriormente integrarse como microfrontends.

---

## 1️⃣ Instalar Angular CLI (si aún no lo tienes)

```bash
npm install -g @angular/cli
```

## 2 Crear proyectos
```bash
ng new web-home --routing --style=scss
ng new web-apuestas --routing --style=scss
ng new web-recargas --routing --style=scss
```

## 3. Subir cada proyecto 
```bash
cd web-home
npm start
```
```bash
cd web-apiestas
npm start
```
```bash
cd web-recargas
npm start
```

# ⚙️ Configurar puertos por defecto y proxy en proyectos Angular

Esta guía configura puertos fijos y un archivo `proxy.conf.json` para conectar Angular con microservicios **Spring Boot**.

Aplica los pasos dentro de cada proyecto:
- **web-home**
- **web-apuestas**
- **web-recargas**

---

## 1️⃣ Asignar un puerto por defecto

Abre el archivo `angular.json` en la raíz de cada proyecto y busca la sección:

```json
"serve": {
  "builder": "@angular-devkit/build-angular:dev-server",
  "options": {
    "browserTarget": "web-home:build"
  },
  },
```
En el angular.json Agregar la propiedad "port" dentro de "options", por ejemplo:

```json
"serve": {
  "builder": "@angular-devkit/build-angular:dev-server",
  "options": {
    "port": 4201,
    "proxyConfig": "src/proxy.conf.json"
  },
  },
  ```
2️⃣ Crear el archivo de configuración del proxy

En cada proyecto, crea el archivo:

`📄 src/proxy.conf.json`

Con el siguiente contenido base:

```json
{
  "/api": {
    "target": "http://localhost:8080",
    "secure": false,
    "changeOrigin": true,
    "logLevel": "debug"
  }
}
```

