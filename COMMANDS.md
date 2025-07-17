# Pasos para la creación de proyectos Angular 13

Este documento registra todos los comandos ejecutados para la creación de los tres proyectos Angular (web-home, web-recargas y web-apuestas).

## Configuración inicial del ambiente

### 1. Configuración de Node.js
```bash
# Instalación de la versión de Node.js compatible con Angular 13
nvm install 16.13.0
nvm use 16.13.0
```

### 2. Instalación de Angular CLI 13
```bash
# Desinstalación de la versión actual de Angular CLI
npm uninstall -g @angular/cli

# Limpieza de caché npm
npm cache clean --force

# Instalación de Angular CLI versión 13
npm install -g @angular/cli@13.0.0
```

### 3. Creación de proyectos

#### Web-Home
```bash
# Creación del proyecto web-home
ng new web-home --routing --style=scss
cd web-home
cd ..
```

#### Web-Recargas
```bash
# Creación del proyecto web-recargas
ng new web-recargas --routing --style=scss
cd web-recargas
cd ..
```

#### Web-Apuestas
```bash
# Creación del proyecto web-apuestas
ng new web-apuestas --routing --style=scss
cd web-apuestas
cd ..
```

## Siguientes pasos

### 4. Verificación de versiones
Se ha verificado que todos los proyectos están en Angular 13:

- web-home: Angular 13.3.12
- web-recargas: Angular 13.3.0
- web-apuestas: Angular 13.3.0

## Próximos pasos
- Configurar Git para cada proyecto
- Instalar dependencias comunes necesarias
- Configurar ambientes (dev, qa, prod)

## Nota
Este documento se irá actualizando conforme se vayan ejecutando más comandos en el proyecto.
