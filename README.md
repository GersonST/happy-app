<p align="center">
  <img alt="Logo" src="./.github/Happy_Logo.png" width="20%"/>
  
<br/>  
<br/>
                                              
<a href="https://nodejs.org/en/">
 <img alt="Node js" title="node js" src="https://img.shields.io/static/v1?label=node%20js&message=javascript%20runtime%20environment&color=0193AD&labelColor=282a36&style=flat&logo=node.js&logoColor=white" />
</a>

<a href="https://classic.yarnpkg.com/en/docs/install#debian-stable">
 <img alt="Yarn" title="yarn" src="https://img.shields.io/static/v1?label=yarn&message=package%20manager&color=0193AD&labelColor=282a36&style=flat&logo=Yarn&logoColor=white" />
</a>

<a href="https://www.mapbox.com">
 <img alt="Mapbox" title="Mapbox" src="https://img.shields.io/static/v1?label=mapbox&message=map%20and%20location&color=0193AD&labelColor=282a36&style=flat&logo=Mapbox&logoColor=white"/>
</a>


<a href="https://pt-br.reactjs.org">
 <img alt="React js" title="React js" src="https://img.shields.io/static/v1?label=react%20js&message=library&color=0193AD&labelColor=282a36&style=flat&logo=REACT&logoColor=white" />
</a>

<a href="https://reactnative.dev">
 <img alt="React native" title="React native" src="https://img.shields.io/static/v1?label=react%20native&message=library&color=0193AD&labelColor=282a36&style=flat&logo=REACT&logoColor=white" />
</a>


<a href="https://docs.expo.io/get-started/installation/">
 <img alt="Expo" title="Expo" src="https://img.shields.io/static/v1?label=expo&message=mobile%20dev%20tool&color=0193AD&labelColor=282a36&style=flat&logo=Expo&logoColor=white" />
</a>


<img alt="GitHub repo size" title="GitHub repo size" src="https://img.shields.io/github/repo-size/GersonST/happy-app?color=0193AD&labelColor=282a36&logo=GitHub&logoColor=white" />


<img alt="GitHub last commit" title="GitHub last commit" src="https://img.shields.io/github/last-commit/GersonST/happy-app?&color=0193AD&labelColor=282a36" />

<img alt="GitHub language coun" title="GitHub language coun" src="https://img.shields.io/github/languages/count/GersonST/happy-app?&color=0193AD&labelColor=282a36" />

<img alt="GitHub top language" title="GitHub top language" src="https://img.shields.io/github/languages/top/GersonST/happy-app?&color=0193AD&labelColor=282a36" />


</p>

---

### O que ?? a plataforma ???

O **Happy** ???? ?? uma aplica????o criada com o intuito de mostrar as casas de acolhimento institucional na regi??o, fazendo assim com que as pessoas se conectem com elas com mais facilidade, levando ent??o a felicidade no dia a dia de muito pequeninos ????.

<img alt="Happy" src="./.github/Happy_Devices.png"/>


<br/>


### ???? **Atualmente na plataforma do Happy voc?? consegue:**
- [x] Visualizar o mapa das casas de acolhimento institucional na regi??o
- [x] Cadastrar uma casa de acolhimento institucional 
- [x] Visualizar detalhes sobre uma casa de acolhimento institucional
- [x] Tra??ar um rota at?? a casa de acolhimento institucional escolhida

<br/>

### ???? **Portas utilizadas**

Servidor ???? | Porta ????
---------:|:--------
back-end  |  3333
front-end |  3000


<br/>

### ?????? **Utilizando projeto localmente**

>No diret??rio desejado execute no terminal o c??digo abaixo ???? 
~~~bash
git clone https://github.com/GersonST/happy-app.git
~~~

<br>

#### ???? Back-end

> Depois dentro do diret??rio/pasta `backend` execute no terminal o comando abaixo para baixar as depend??ncias do servidor back-end.

~~~bash
yarn install
~~~

> E depois execute o comando abaixo para iniciar o servidor back-end.

~~~bash
yarn start
~~~

#### ???? Importando ??rea de trabalho para o insomnia

> Basta clicar : 

&ensp;&ensp;[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Happy&uri=https%3A%2F%2Fgist.githubusercontent.com%2FAntonioNarcilio%2Fa586fbcaaf5a87d5d6895e33829549e1%2Fraw%2F8ae53fd80fc97e5c825704ac49a4e9be7bf6ad86%2Fhappy-insomnia)

> Depois em `import Happy` que ir?? lhe direcionar para uma p??gina contendo um arquivo no formato de JSON, copie a url e depois no insomnia va em:

  &ensp;&ensp;<kbd>Application</kbd> <kbd>></kbd> <kbd>Preferences</kbd> <kbd>></kbd> <kbd>Data</kbd> <kbd>></kbd> <kbd>Import Data</kbd> <kbd>></kbd> <kbd>From URL</kbd>
  
> e passe/cole ???? a url copiada. Pronto ???? voc?? j?? pode testar o back-end!

---

<br>

#### ???? Front-end

> **??? Antes de prosseguir com o passo a passo deve-se configurar a vari??vel ambiente `.env`**.<br> Dentro do diret??rio/pasta `web/` existe um arquivo chamado ALTERAR_KEY.env dentro desse arquivo existe uma vari??vel que recebe uma api referente ao mapa utilizado no projeto web, (*voc?? pode pegar essa api de forma gratuita [aqui](https://www.mapbox.com/maps/)*) depois de ter obtido essa api, basta adicionar no arquivo `.env` (*Altere o nome do arquivo ALTERAR_KEY.env ??? para apenas ??? .env*) e pronto, siga para o pr??ximo passo ????.

> Dentro do diret??rio/pasta `web` execute o comando abaixo no terminal para baixar as depend??ncias do servidor front-end.

~~~bash
yarn install
~~~

> E depois execute o comando abaixo para iniciar o servidor front-end.

~~~bash
yarn start
~~~

> Pronto ???? automaticamente abrir?? em seu navegador padr??o a p??gina web

---

<br>

#### ???? Mobile

> E caso queira testar o `app mobile`, dentro do diret??rio/pasta `mobile` execute o comando abaixo no terminal para baixar as depend??ncias do projeto mobile. 

~~~bash
yarn install
~~~

> E por fim execute o mesmo comando dos demais para iniciar o projeto. 

~~~bash
yarn start
~~~

> Caso n??o tenha o **Expo CLI** instalado na m??quina o procedimento de instala????o se encontra [aqui](https://docs.expo.io/get-started/installation/)

> Espere abrir uma pagina relacionado ao expo no seu navegador padr??o, caso a op????o de conex??o `LAN` n??o esteja selecionado, selecione-a e depois leia o `qr code` utilizando o app do expo no celular e pronto ?? s?? aguardar a aplica????o carregar ???.

<br>

---


<br/>

### ???? Agradecimento

<a href="https://rocketseat.com.br">
 <img src="https://img.shields.io/static/v1?label=rocketseat&message=ir&color=8257e5&labelColor=282a36&style=flat&logo=Apache%20RocketMQ&logoColor=white" alt="rocketseat"/>
</a>
