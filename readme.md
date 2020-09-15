# Caesar Cipher

## Index

* [1. Background Project](#1-background-project)
* [2. Project Summary](#2-project-summary)
* [3. Scope of the Project](#3-scope-of-the-project)
* [4. Project Development](#4-project-development)
* [5. Hacker Edition](#5-hacker-edition)
* [6. Unit Tests](#6-unit-tests)
* [7. How to install](#7-how-to-install)

***

## 1. Background

This is my first project in the Laboratoria Bootcamp in Perú. 
I am very happy to be part of of the 13th tech-loving female team, we are around 50 students.
Currently we are already moving two weeks out of the 24 weeks that will be in total.

Since this repository is in English, I have decided to do it in this language for everyone!


## 2. Project Summary

Our site is named SecureTXT. The aim of this website is to crypt and decrypt a text according to the César Encryption method with user-specified offsets of 2 to 25 characters.
It is mainly oriented to the protection of messages of social network users, but since it is very intuitive, almost anyone can use it.


## 3. Scope of the Project

This encryption and decryption uses only uppercase alphabet not including the ñ:

* A B C D E F G H I J K L M N O P Q R S T U V W X Y Z


### Product definition (UX)

The final product at the level of experience and interface:

* The main users of the product are the users of social networks who are constantly communicating through text messages through chats, emails, public or private posts, among others.
* This application is an easy tool for instant encryption and decryption of these messages, protecting the user's data sent through the networks.


### User Interface (UI)

The interface allows the user to:

* Choose an offset indicating how many positions we want encryption moves each character in three ways:
  * Through the input button 
  * Through directly inserting the amount of displacement
  * Through pressing the + or - button

* Insert a message (text) that we want to encrypt with a maximum of 500 characters.

* Automatically generate the encryption without the need to press any button or click for this.

* As the text to be encrypted or decrypted is written you can see the result automatically.

* The encryption or decryption is generated automatically as users change the offset with the + or - buttons or insert a number of offset. 


## 4. Project Development

### Data Flow:
![Dataflow for the application](https://user-images.githubusercontent.com/55853256/88960213-cb738a00-d268-11ea-9db3-3e69b7b3da26.jpg)

### First Sketch on paper:
![Sketch v1](https://user-images.githubusercontent.com/55853256/88959686-ff9a7b00-d267-11ea-8de2-8ba45c1b70f4.jpg)

### Feedback received:
      - Offer the possibility that the encryption will be generated automatically.
      - Offer the possibility of the encryption is being displayed on a single page.
      - Offer the possibility that you can add other types of encryption or decryption.
      - Offer the possibility that it is more flexible in the type of alphabet, spaces, capital letters, etc.


### Sketch version 2 after feedback:  
![Sketch v2](https://user-images.githubusercontent.com/55853256/88959825-3bcddb80-d268-11ea-9908-3bcd9107e863.jpg)
     
### Final Sketch:
![Final Sketch](https://user-images.githubusercontent.com/55853256/88960018-7f284a00-d268-11ea-8fcf-c9fdbc215a1a.jpg)


### Mockup:

![Mockup 1 of 3](https://user-images.githubusercontent.com/55853256/88958118-a16c9880-d265-11ea-881e-c49630b8a2e4.jpg)

![Mockup 2 of 3](https://user-images.githubusercontent.com/55853256/88959141-26a47d00-d267-11ea-897a-22c391a41c6a.jpg)

![Mockup 3 of 3)](https://user-images.githubusercontent.com/55853256/88959331-6d927280-d267-11ea-9a3d-4496f6668c8a.jpg)

### Final Images:


![Final Screen 1](https://user-images.githubusercontent.com/55853256/88999802-30f06680-d2bb-11ea-8ca6-56489325ff86.jpg)

![Final Screen 2](https://user-images.githubusercontent.com/55853256/89000740-bf65e780-d2bd-11ea-89fb-eac8c76c2c96.jpg)

![Final Screen 3](https://user-images.githubusercontent.com/55853256/89000151-3ef2b700-d2bc-11ea-85a6-7d220bd4af37.jpg)


![Final Screen 1(responsive)](https://user-images.githubusercontent.com/55853256/89000256-8d07ba80-d2bc-11ea-846e-33e0469bfd4c.jpg)

![Final Screen 2 (responsive)](https://user-images.githubusercontent.com/55853256/89000301-a7419880-d2bc-11ea-821c-6c9d3442eb42.jpg)

![Final Screen 3 (responsive)](https://user-images.githubusercontent.com/55853256/89000341-bfb1b300-d2bc-11ea-86ec-5402efe86776.jpg)



## 5. Hacker edition

We have included blank spaces and the ThrowError.


## 6. Unit Tests

![Unit tests](https://user-images.githubusercontent.com/55853256/88945383-8c870980-d253-11ea-9ae8-09570b8beb24.jpg)

## 7. How to install

1. Antes que nada, asegúrate de tener un :pencil: editor de texto en
  condiciones, algo como [Atom](https://atom.io/) o
  [Code](https://code.visualstudio.com/).
2. Para ejecutar los comandos a continuación necesitarás una :shell:
  [UNIX Shell](https://github.com/Laboratoria/bootcamp/tree/master/topics/shell),
  que es un programita que interpreta líneas de comando (command-line
  interpreter) así como tener [git](https://github.com/Laboratoria/bootcamp/tree/master/topics/scm/01-git)
  instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS,
  ya tienes una _shell_ (terminal) instalada por defecto (y probablemente `git`
  también). Si usas Windows puedes usar la versión completa de [Cmder](https://cmder.net/)
  que incluye [Git bash](https://git-scm.com/download/win) y si tienes Windows 10
  o superior puedes usar [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10).
3. Una de las integrantes del equipo debe realizar un :fork_and_knife:
  [fork](https://help.github.com/articles/fork-a-repo/) del repo de tu cohort,
  tus _coaches_ te compartirán un _link_ a un repo y te darán acceso de lectura
  en ese repo. La otra integrante del equipo deber hacer un fork **del
  repositorio de su compañera** y
  [configurar](https://gist.github.com/BCasal/026e4c7f5c71418485c1) un `remote`
  hacia el mismo.
4. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
  tu _fork_ a tu computadora (copia local).
5. 📦 Instala las dependencias del proyecto con el comando `npm install`. Esto
  asume que has instalado [Node.js](https://nodejs.org/) (que incluye [npm](https://docs.npmjs.com/)).
6. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
  pruebas unitarias (unit tests) con el comando `npm test`.
7. Para ver la interfaz de tu programa en el navegador, usa el comando
  `npm start` para arrancar el servidor web y dirígete a
  `http://localhost:5000` en tu navegador.
8. A codear se ha dicho! :rocket:

