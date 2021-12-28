# EcommerceAngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Creación del proyecto

1. En CMD: `ng new ecommerce-angular-app`
2. Would you like to add Angular Routing? `Y`
3. Which stylesheet format would you like to use? `SCSS`
4. Empezará la instalación

## Configuración Ambiente de desarrollo (DEV)

1. Creación de `environment.dev.ts` en la ruta `src/environments`
2. En el archivo `environment.dev.ts` agregar lo siguiente:
```
export const environment = {
  production: false,
  name: 'dev'
};
```
 
3. En el archivo `environment.prod.ts` agregar lo siguiente: 
```
export const environment = {
  production: true,
  name: 'prod'
};
```
4. En el archivo de la raíz angular.json, cambiar el valor del outputPath (no borrar lo demás):
```
"projects": {
    "ecommerce-angular-app": {
      "architect": {
        "build": {
          "options": {
            "outputPath": "dist",
```
5. El contenido de "production" lo copiamos y lo pegamos sobre "development":
```
"projects": {
    "ecommerce-angular-app": {
      "architect": {
          "configurations": {
            "production": {
		...
            }
            "development": {
		...
            }
```
6. Debe quedar de la siguiente manera:
```
"projects": {
    "ecommerce-angular-app": {
      "architect": {
          "configurations": {
            "production": {
		...
            }
            "production": {
		...
            }
```
7. Renombramos ambos con prod y dev respectivamente.
```
"projects": {
    "ecommerce-angular-app": {
      "architect": {
          "configurations": {
            "prod": {
		...
            }
            "dev": {
		...
            }
```
8. En `"dev"`, `"fileReplacements"` lo colocamos al inicio. Sirve para reemplazar el archivo environments con el que tiene las propiedades de desarrollo.
```
	"dev": {
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.dev.ts"
                }
              ],
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kb",
                  "maximumError": "1mb"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "2kb",
                  "maximumError": "4kb"
                }
              ],
```
9. "budgets" con su contenido y `"outputHashing"` se pasan a la ruta `"projects"/"ecommerce-angular-app"/"architect"/"options"` justo antes de `"assets:"`
```
"projects": {
    "ecommerce-angular-app": {
      "projectType": "application",
      "schematics": {
        "@schematics/angular:component": {
          "style": "scss"
        },
        "@schematics/angular:application": {
          "strict": true
        }
      },
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "tsconfig.app.json",
            "inlineStyleLanguage": "scss",
	    "outputHashing": "all",
            "budgets": [
              {
                "type": "initial",
                "maximumWarning": "500kb",
                "maximumError": "1mb"
              },
              {
                "type": "anyComponentStyle",
                "maximumWarning": "2kb",
                "maximumError": "4kb"
              }
            ],
	    ...
```
10. Agregar `"optimization: false"`, `"sourcemap: true"` y `"buildOptimizer": false` después de `"outputHashing"`.
11. Del paso 7, en `"prod"` agregamos `"optimization: true"`, `"sourcemap: false"` y `"buildOptimizer": true` al inicio.
12. Borrar `"defaultConfiguration": "production"` que esta debajo de `"dev"`
13. Hacer los siguientes cambios en `"serve"`:
```
"serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "options": {
            "browserTarget": "ecommerce-angular-app:build",
            "port": 5200
          },
          "configurations": {
            "prod": {
              "browserTarget": "ecommerce-angular-app:build:prod"
            },
            "dev": {
              "browserTarget": "ecommerce-angular-app:build:dev"
            }
          },
          "defaultConfiguration": "development"
        },
```
14. En el archivo `package.json` copiar lo siguiente para `"scripts"`
```
  "scripts": {
    "ng": "ng",
    "start": "npm run start:dev",
    "build": "npm run build:dev",
    "watch": "ng build --watch --configuration development",
    "test": "ng test",
    "start:dev": "ng serve --c=dev",
    "build:dev": "ng build --c=dev",
    "start:prod": "ng serve --c=prod",
    "build:prod": "ng build --c=prod"
  },
```
15. En la terminal ejecutar el proyecto con el comando `"npm start"`y se ejecutará el proyecto con la configuración del ambiente de desarrollo :)