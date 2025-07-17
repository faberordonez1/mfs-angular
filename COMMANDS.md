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

### 5. Configuración de Git
Se realizó un commit inicial que incluye los tres proyectos en el repositorio principal.

### 6. Instalación de dependencias comunes
Instalaremos las siguientes dependencias en cada proyecto:
- Angular Material para componentes de UI
- ESLint para análisis de código
- Prettier para formateo de código

```bash
# Para web-home
cd web-home
# Instalando Angular Material
ng add @angular/material

# Instalando ESLint
ng add @angular-eslint/schematics
npm install --save-dev prettier prettier-eslint eslint-config-prettier eslint-plugin-prettier

# Creando archivos de configuración
echo '{
  "semi": true,
  "trailingComma": "none",
  "singleQuote": true,
  "printWidth": 80
}' > .prettierrc

cd ..

# Para web-recargas
cd web-recargas
# Instalando Angular Material
ng add @angular/material

# Instalando ESLint
ng add @angular-eslint/schematics
npm install --save-dev prettier prettier-eslint eslint-config-prettier eslint-plugin-prettier

# Creando archivos de configuración
echo '{
  "semi": true,
  "trailingComma": "none",
  "singleQuote": true,
  "printWidth": 80
}' > .prettierrc

cd ..

# Para web-apuestas
cd web-apuestas
# Instalando Angular Material
ng add @angular/material

# Instalando ESLint
ng add @angular-eslint/schematics
npm install --save-dev prettier prettier-eslint eslint-config-prettier eslint-plugin-prettier

# Creando archivos de configuración
echo '{
  "semi": true,
  "trailingComma": "none",
  "singleQuote": true,
  "printWidth": 80
}' > .prettierrc

cd ..
```

### 7. Configuración de Puertos y Environments
Se configuraron los puertos y environments para permitir la comunicación entre los tres proyectos:

#### Configuración de Puertos
Cada proyecto se ejecuta en un puerto diferente:
- web-home: Puerto 4200
- web-recargas: Puerto 4201
- web-apuestas: Puerto 4202

#### Configuración de Environments
Cada proyecto tiene configurado su ambiente local y de producción con las URLs necesarias para comunicarse con los otros proyectos:

##### Web-Home (Puerto 4200)
```typescript
// environment.ts (local)
export const environment = {
  production: false,
  recargasUrl: 'http://localhost:4201',
  apuestasUrl: 'http://localhost:4202'
};

// environment.prod.ts
export const environment = {
  production: true,
  recargasUrl: 'https://recargas.production.com',
  apuestasUrl: 'https://apuestas.production.com'
};
```

##### Web-Recargas (Puerto 4201)
```typescript
// environment.ts (local)
export const environment = {
  production: false,
  homeUrl: 'http://localhost:4200',
  apuestasUrl: 'http://localhost:4202'
};

// environment.prod.ts
export const environment = {
  production: true,
  homeUrl: 'https://home.production.com',
  apuestasUrl: 'https://apuestas.production.com'
};
```

##### Web-Apuestas (Puerto 4202)
```typescript
// environment.ts (local)
export const environment = {
  production: false,
  homeUrl: 'http://localhost:4200',
  recargasUrl: 'http://localhost:4201'
};

// environment.prod.ts
export const environment = {
  production: true,
  homeUrl: 'https://home.production.com',
  recargasUrl: 'https://recargas.production.com'
};
```

Para ejecutar los proyectos simultáneamente:
```bash
# Terminal 1
cd web-home && ng serve

# Terminal 2
cd web-recargas && ng serve

# Terminal 3
cd web-apuestas && ng serve
```

## Nota
Este documento se irá actualizando conforme se vayan ejecutando más comandos en el proyecto.
