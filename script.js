const translations = {
  pt: {
    //HEADER
    menu_home: "Início",
    menu_about: "Sobre mim",
    menu_projects: "Projetos",

    //HOME
    title: "Guilherme Csizmar",
    subtitle: "Desenvolvedor Front-End",
    about: "Sempre tive uma grande paixão por tecnologia. Programar, desenvolver e explorar o universo da informática são coisas que me motivam todos os dias. Também sou fascinado pela impressão 3D, onde posso transformar ideias em criações reais. Para mim, nada se compara à satisfação de desenvolver soluções, experimentar novas possibilidades e aprender continuamente ao longo do caminho.",

    //SOBRE
    about_title: "Sobre Mim",
    about_p1: "Olá! Sou o Guilherme, aspirante a desenvolvedor e atualmente curso o 3º semestre de Ciência da Computação. Antes disso, estudei 10 semestres de Engenharia de Controle e Automação na Universidade Federal de Itajubá - Campus Itabira. Apesar de não ter concluído o curso, foi nesse período que construí uma base sólida em tecnologia e sistemas.",
    about_p2: "Tenho experiência em projetos com microcontroladores, modelagem e impressão 3D, além de programação em C++, HTML, CSS e JavaScript. Também atuo com design e marketing, desenvolvendo materiais visuais, identidade gráfica e conteúdos voltados para comunicação digital, sempre buscando alinhar estética, funcionalidade e estratégia.",
    about_p3: "Apaixonado por tecnologia, sou movido pela curiosidade e pelo desejo de transformar ideias em soluções práticas. Gosto de transitar entre o lado técnico e criativo, entendendo o produto como um todo, desde o desenvolvimento até a forma como ele é apresentado ao usuário.",
    about_p4: "Busco constantemente aprender novas ferramentas, colaborar em projetos desafiadores e evoluir continuamente na área de desenvolvimento. Estou aberto a conexões e oportunidades para trocar experiências em tecnologia, programação, design, marketing e inovação.",

    //PROJETOS

    project_title: "Projetos",
    legend: "Todos os projetos estão upados em repositórios no github com uma descrição em Português e Inglês, descrevendo cada projeto!",
    project1: "Home Spotify",
    project2: "Coleta Correta",
    project3: "Curso Educação Financeira",
    project4: "To-Do List",
    project5: "Biblioteca de Jogos em C", 
    project6: "Calculadora",
    findout: "Saiba mais"

  },
  en: {
    //HEADER
    menu_home: "Home",
    menu_about: "About me",
    menu_projects: "Projects",

    //HOME
    title: "Guilherme Csizmar",
    subtitle: "Front-End Developer",
    about: "I've always had a deep passion for technology. Programming, developing, and exploring the world of computing are things that motivate me every single day. I'm also fascinated by 3D printing, where I can turn ideas into real creations. For me, nothing compares to the satisfaction of developing solutions, experimenting with new possibilities, and continuously learning along the way.",

    //ABOUT
    about_title: "About me",
    about_p1: "Hello! I'm Guilherme, an aspiring developer currently in my third semester of Computer Science. Before that, I studied 10 semesters of Control and Automation Engineering at Universidade Federal de Itajubá - Campus Itabira. Although I did not complete the degree, during this time I built a solid foundation in technology and systems.",
    about_p2: "I have experience working on projects involving microcontrollers, 3D modeling and printing, as well as programming in C++, HTML, CSS, and JavaScript. I also have experience in design and marketing, creating visual materials, graphic identities, and digital communication content, always aiming to align aesthetics, functionality, and strategy.",
    about_p3: "Passionate about technology, I am driven by curiosity and the desire to turn ideas into practical solutions. I enjoy bridging the gap between technical and creative fields, understanding products as a whole — from development to how they are presented to users.",
    about_p4: "I am constantly seeking to learn new tools, collaborate on challenging projects, and continuously grow in the development field. I am open to connections and opportunities to exchange experiences in technology, programming, design, marketing, and innovation.",

    //PROJECTS

    project_title: "Projects",
    legend: "All the projects are uploaded to github with a descriptions in both Portuguese and English, describing each project!",
    project1: "Home Spotify",
    project2: "Coleta Correta",
    project3: "Curso Educação Fincanceira",
    project4: "To-Do List",
    project5: "Biblioteca de Jogos em C",
    project6: "Calculator",
    findout: "Find out more"
  }
};


let currentLang = localStorage.getItem("lang") || "pt";

document.getElementById("lang-toggle").addEventListener("click", () => {
  currentLang = currentLang === "pt" ? "en" : "pt";
  localStorage.setItem("lang", currentLang);
  updateLanguage(currentLang);
});

function updateLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.innerText = translations[lang][key];
  });

  document.getElementById("lang-toggle").innerText = lang === "pt" ? "En" : "Pt";
}

updateLanguage(currentLang);
