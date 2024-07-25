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


