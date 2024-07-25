# Challenge-Baufest
 
Desafío de Automatización

Para este reto, les proponemos que investiguen y utilicen Playwright, una herramienta
de automatización para pruebas end-to-end. Su misión, si deciden aceptarla, es
automatizar el proceso de creación de un nuevo personal en la web de OrangeHRM
(https://opensource-demo.orangehrmlive.com/web/index.php/auth/login).

Objetivos del Reto
1. Casos de Prueba:

- Redacta los casos de Prueba que hayas identificado para la funcionalidad
solicitada.

- Indica la técnica de diseño de caso de prueba utilizado.

- Colocar la información dentro del archivo README.md.

2. Investigación de Playwright:
   
- Aprendan los conceptos básicos y avanzados de Playwright.

- Comprendan cómo instalar y configurar Playwright en su entorno local.

3. Automatización de la Web:

- Accedan a OrangeHRM.

- Automatice el proceso de inicio de sesión en la plataforma.

- Cree un nuevo empleado con detalles completos.

- Valide que el empleado ha sido creado correctamente y que aparece en la lista de empleados.

4. Repositorio en GitHub:
   
- Suban su código a un repositorio en su cuenta personal de GitHub, deben crear un branch con su nombre ejemplo: Feature/RetoPlaywright_PepitoLopez

- Asegúrense de incluir una guía de instalación y uso para su proyecto.

5. Consideraciones:
   
- Debe aplicar un patrón de diseño.

- Utilice redacción con lenguaje gherkin.


# Casos de prueba:
Se redactaron los siguientes casos de prueba en base a las pantallas asociadas a las funciones solicitadas(Login y Add User):

1.Login:

<img width="702" alt="Screenshot 2024-07-25 at 3 45 05 PM" src="https://github.com/user-attachments/assets/c3ec0d9e-190a-486a-ac48-9e7463a453e3">

<img width="705" alt="Screenshot 2024-07-25 at 3 53 11 PM" src="https://github.com/user-attachments/assets/803cd5fb-6e7e-4719-9b9e-e2c4f99ba40a">

Ambos casos candidatos a automatizar, se redactaron los escenarios en lenguaje Gherkin:

@login

Feature: User Authentication Tests

Background: Login page

Given User goes to the webpage

Scenario: User with correct credentials

When User enters "<USERNAME>" and "<PASSWORD>"

Then User is logged in

Examples:

        |   USERNAME      |   PASSWORD |
        |   Admin         |   admin123 |
        

Scenario: User with incorrect credentials

When User enters wrong credentials "<USERNAME>" and "<PASSWORD>"

Then User is not logged in

Examples:

        |   USERNAME      |   PASSWORD |
        |   Test1         |   admin777 |


<img width="703" alt="Screenshot 2024-07-25 at 3 53 35 PM" src="https://github.com/user-attachments/assets/ac4670b3-c689-4e48-8ecb-89aeff7740fa">


2.Add User:

<img width="702" alt="Screenshot 2024-07-25 at 4 20 27 PM" src="https://github.com/user-attachments/assets/ef39a7dd-024c-4df5-bc8e-adc03723c578">

Caso candidato a automatizar

@addUser

Feature: Add User Tests

Background: Admin page

  Given User goes to Admin page

Scenario: Add user successfully

  When user selects the User Role "<UserRole>"
  
    And user fills in the Employee Name field with "<EmployeeName>"
    
    And user selects the Status "<Status>"
    
    And user fills in the Username field with "<Username>"
    
    And user fills in the Password field with "<Password>"
    
    And user fills in the Confirm Password field with "<Password>"
    
    And user clicks the Save button
    
    Then new user is added successfully
    

Examples:

  | UserRole    | EmployeeName | Username  | Password   | Status       |
  | <FakeRole>  | <FakeName>   | <FakeUser>| <FakePass> | <FakeStatus> |


<img width="702" alt="Screenshot 2024-07-25 at 4 21 08 PM" src="https://github.com/user-attachments/assets/8e824345-19c6-4b85-9104-106173a7375e">

# Instalacion

El framework ha sido implementado usando el patrón de diseño Page Object Model(POM), separando los features, tests, locators, metodos y otros en distintas clases para un mejor entendimiento y mantenimiento del codigo y bajo enfoque de desarrollo BDD y lenguaje Gherkin

![image](https://github.com/user-attachments/assets/37777e8c-2bac-4f5e-9f51-e5331e1b21e8)


<img width="1036" alt="Screenshot 2024-07-25 at 4 38 22 PM" src="https://github.com/user-attachments/assets/1d680d0b-e42d-470a-9b93-ded7673d71fa">


1.Contar con VS Code 

2.Instalar las extensiones de Playwright y Cucumber en VS Code

3.Setear navegadores en playwright desde VS Code o en la terminal con el comando "npm init playwright@latest --yes -- --quiet --browser=chromium --browser=firefox --browser=webkit --gha

4.Instalar dependencias:

- Instalar node.js

- npm i @cucumber/cucumber -D

- npm i ts-node -D

- npm i cucumber-html-reporter -D

- npm i @playwright/test -D

- npm i typescript -D 

5.Crear el package.json ejecuando npm init


#Ejecucion de las pruebas:

1.Correr el comando npm test desde la terminal para ejecutar todos los casos de prueba

2.Correr el comando npx cucumber-js --tags "@addUser" para ejecutar solo los casos de Add User

3.Correr el comando npx cucumber-js --tags "@login" para ejecutar solo los casos de login

4.Correr el comando npm run test-report para generar el reporte de cucumber
