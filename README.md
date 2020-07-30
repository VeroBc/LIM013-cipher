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
![Dataflow for the application](https://user-images.githubusercontent.com/55853256/88183726-6e882c00-cbf7-11ea-9e5c-9dbdaf264ec5.jpg)


### First Sketch on paper:
![Sketch v1](https://user-images.githubusercontent.com/55853256/88182836-4d730b80-cbf6-11ea-91d1-5d18d7564ef5.jpg)


### Feedback received:
      - Offer the possibility that the encryption will be generated automatically.
      - Offer the possibility of the encryption is being displayed on a single page.
      - Offer the possibility that you can add other types of encryption or decryption.
      - Offer the possibility that it is more flexible in the type of alphabet, spaces, capital letters, etc.


### Sketch version 2 after feedback:  
![Sketch v2](https://user-images.githubusercontent.com/55853256/88182888-6085db80-cbf6-11ea-94ec-09bd7208e523.jpg)

     
### Final Sketch:
![Final Sketch](https://user-images.githubusercontent.com/55853256/88182962-77c4c900-cbf6-11ea-90ea-23bb11c6dc8c.jpg)


### Mockup:

![Mockup 1 of 3](https://user-images.githubusercontent.com/55853256/88181993-3d0e6100-cbf5-11ea-8c2d-b8878217f31f.jpg)

![Mockup 2 of 3](https://user-images.githubusercontent.com/55853256/88182086-60391080-cbf5-11ea-9f15-e8d706239646.jpg)

![Mockup 3 of 3](https://user-images.githubusercontent.com/55853256/88182199-852d8380-cbf5-11ea-88e8-4001867b6190.jpg)


### Final Images:


![Final Screen 1](https://user-images.githubusercontent.com/55853256/88878565-db01bd00-d1ed-11ea-8a72-319b28cae3d5.jpg)

![Final Screen 2](https://user-images.githubusercontent.com/55853256/88878616-f2d94100-d1ed-11ea-805b-258f349efe4e.jpg)

![Final Screen 3](https://user-images.githubusercontent.com/55853256/88878650-01bff380-d1ee-11ea-9e81-a4f5c92d79bf.jpg)


![Final Screen 1(responsive)](https://user-images.githubusercontent.com/55853256/88878705-1a300e00-d1ee-11ea-9bda-60e0bf159c3a.jpg)

![Final Screen 2 (responsive)](https://user-images.githubusercontent.com/55853256/88878728-25833980-d1ee-11ea-870a-b74be72a49a5.jpg)

![Final Screen 3 (responsive)](https://user-images.githubusercontent.com/55853256/88878802-4fd4f700-d1ee-11ea-94ca-c93d180e2491.jpg)



## 5. Hacker edition

We have included blank spaces and the ThrowError.


## 6. Unit Tests

![Unit tests](https://user-images.githubusercontent.com/55853256/88877297-c112ab00-d1ea-11ea-80ab-762cc1e5f698.jpg)



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

