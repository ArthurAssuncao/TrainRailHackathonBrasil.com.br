[comment]: # 'Logo'

<p align="center">
    <img src="https://raw.githubusercontent.com/ArthurAssuncao/TrainRailHackathonBrasil.com.br/main/src/assets/images/logo-oficial.png" width="300px" />
</p>

[comment]: # 'Badges'

<p align="center">
	<img alt="Vercel" src="http://therealsujitk-vercel-badge.vercel.app/?app=trainrailhackathon">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=97C510&labelColor=5A5A5A">
</p>

<p align="center">
	<img src="https://img.shields.io/static/v1?label=Arthur%20Assuncao&message=2021&color=8A47F5&labelColor=5A5A5A" alt="Arthur Assuncao 2021" />
  <img src="https://img.shields.io/static/v1?label=ReactJS&message=yes&color=61dbfb&labelColor=5A5A5A" alt="ReactJS" />
  <img src="https://img.shields.io/static/v1?label=NextJS&message=yes&color=000000&labelColor=5A5A5A" alt="NextJS" />
  <img src="https://img.shields.io/static/v1?label=types&message=typescript&color=0f80c0&labelColor=5A5A5A" alt="Typescript" />
  <img src="https://img.shields.io/static/v1?label=SASS&message=yes&color=cc6699&labelColor=5A5A5A" alt="SASS" />
</p>

<p align="center">
	<a href="README.md" alt="README em Português">PT-BR</a>
</p>

### :link: Acesse em [https://trainrailhackathon.vercel.app/](https://trainrailhackathon.vercel.app/).

[comment]: # 'Foto do app'
[comment]: # 'Mockup IPhone https://mockuphone.com/device/iphone12black'
[comment]: # 'Mockup IPad https://mockuphone.com/device/ipadsilver'
[comment]: # 'Emoji list https://gist.github.com/rxaviers/7360908'

<table align="center">
	  <tr>
    	<td align="center"><strong>Seção Header</strong></td>
        <td align="center"><strong>Seção Cronômetro</strong></td>
    </tr>
    <tr>
        <td align="center"><img src="https://raw.githubusercontent.com/ArthurAssuncao/TrainRailHackathonBrasil.com.br/main/docs/screenshots/mobile-1-mockup.png" alt="Tela mobile" width="75%" /></td>
        <td align="center"><img src="https://raw.githubusercontent.com/ArthurAssuncao/TrainRailHackathonBrasil.com.br/main/docs/screenshots/mobile-2-mockup.png"  alt="Tela mobile home" width="75%" /></td>
    </tr>
</table>

## :bookmark_tabs: Índice

1.  [O que é o projeto?](#abstract)
2.  [Funcionalidades](#features)
3.  [Layout do projeto](#images)
4.  [Tecnologias utilizadas](#stack)
5.  [Como executar o código](#how-to-run)
6.  [Licença](#license)

<div id='abstract'/>

## :computer: O que é Trainrail Hackathon Brasil

> O TrainRail Hackathon Brasil é a fase brasileira do primeiro Rail Hackathon global que é direcionado a universidades e empresas ferroviárias como uma iniciativa do Union Internationale des Chemins de fer (UIC). Este hackathon oferece aos participantes e entusiastas do transporte ferroviário a oportunidade de imaginar o futuro e desenvolver soluções para que os operadores ferroviários possam enfrentar melhor as situações de pandemia. As soluções procuradas podem ser aplicadas nos diversos setores de atividade destas empresas. O hackathon incluirá diversos temas e atividades, tais como: treinamento, atendimento a bordo de trens e estações, oficinas de manutenção, gestão de casos suspeitos, comunicação e informação, etc. O concurso final a nível internacional será em maio de 2022, no âmbito do Congresso Mundial de Treinamento, Talento e Desenvolvimento Ferroviário (WCRT).

<div id='features'/>

## :clap: Funcionalidades técnicas

- :wrench: Design feito por mim no Figma;
- :heavy_check_mark: Itens do menu com animação na borda inferior;
- :star2:Hero com imagem vetorial simulando linhas de metro/ferrovia de forma animada;
- :star2: Linha animada ao longo das seções simulando linhas férrias (essa feature foi a mais complexa e desafiadora)
- :star2: Cronometro com meses, dias, horas, minutos e segundos até a data do evento. Com animações bacanas;
- :heavy_check_mark: Accordion em perguntas frequentes;
- :waning_crescent_moon: Contato realizado com formik, yup e Formspree;
- :up: i18n para multiplos idiomas no site, afinal é um evento que faz parte de um evento internacional.
- :heavy_check_mark: Uso de SASS em vez de CSS no CSS Modules;
- :up: Uso de Gitflow e pre-commit.

<div id='images'/>

## :camera: Layout do projeto

O layout do projeto foi desenvolvido utilizando o software Figma e pode ser acessado no link Layout do projeto [Site para o Trainrail Hackathon Brasil](https://www.figma.com/file/wlZvFPbGD0nzGZE4bcCWwB/trailrail-hackathon-design?node-id=0%3A1).

#### :iphone: Tela mobile

<table align="center">
	  <tr>
    	<td align="center"><strong>Seção Header</strong></td>
        <td align="center"><strong>Seção Cronômetro</strong></td>
    </tr>
    <tr>
        <td align="center"><img src="https://raw.githubusercontent.com/ArthurAssuncao/TrainRailHackathonBrasil.com.br/main/docs/screenshots/mobile-1-mockup.png" alt="Tela mobile" width="75%" /></td>
        <td align="center"><img src="https://raw.githubusercontent.com/ArthurAssuncao/TrainRailHackathonBrasil.com.br/main/docs/screenshots/mobile-2-mockup.png"  alt="Tela mobile home" width="75%" /></td>
    </tr>
</table>

#### :computer: Seção Header em desktop

<p align="center">
<img src="https://raw.githubusercontent.com/ArthurAssuncao/TrainRailHackathonBrasil.com.br/main/docs/screenshots/desktop-1-mockup.png" height="500px" alt="Seção Header em desktop" />
</p>

#### :computer: Seção Cronômetro em desktop

<p align="center">
<img src="https://raw.githubusercontent.com/ArthurAssuncao/TrainRailHackathonBrasil.com.br/main/docs/screenshots/desktop-2-mockup.png" height="500px" alt="Seção Cronômetro em desktop" />
</p>

<div id='stack'/>

## :sparkles: Tecnologias utilizadas

O Front-end do site é feito utilizando:

- **Nextjs** com o uso de renderização no lado servidor (SSR - Server Side Rendering);
- **ReactJS**: diversos pacotes são utilizados;
- **CSS Modules com SASS**: para isolar os componentes e ter maior controle;
- **Variáveis CSS** para manter consistência nos valores de propriedades;
- **i18n**: uso de internacionalização para suportar múltiplos idiomas;

<div id='how-to-run'/>

## :runner: Como executar o código

Para rodar localmente utilize o comando abaixo:

```bash
yarn dev
```

Para realizar o build local, utilize o comando:

```bash
yarn build
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.

<div id='license'/>

# :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

### :up: Agradecimentos

Mockups criados a partir do site [MockuPhone.com](https://mockuphone.com/).

<hr>

Feito com :hearts: por Arthur Assuncao.
