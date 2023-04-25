const PREGUNTAS = [
    {
        test: "5 - 10", 
        respuesta: -5
    },
    {
        test: "15 + 1", 
        respuesta: 16
    },
    {
        test: "3 * 20", 
        respuesta: 60
    },
    {
        test: "50 / 10", 
        respuesta: 10
    },
    {
        test: "20 + 9", 
        respuesta: 29
    },
    {
        test: "14 - 5", 
        respuesta: 9
    },
    {
        test: "9 * 14", 
        respuesta: 126
    },
    {
        test: "8 - 3", 
        respuesta: 5
    },
    {
        test: "16 / 8", 
        respuesta: 2
    }
]

const APP$$ = document.querySelector("#app");
const COMPROBAR$$ = document.querySelector(".comprobar");

const pintarPreguntas = (preguntas) => {

    for (let i = 0; i < preguntas.length; i++) {

        let pregunta = preguntas[i];
        
        const pregunta$$ = document.createElement("div");
        const test$$ = document.createElement("h2");
        const igual$$ = document.createElement("p");
        const respuesta$$ = document.createElement("input");

        test$$.textContent = pregunta.test;
        igual$$.textContent = "=";
        test$$.className = "test";
        igual$$.className = "igual";
        respuesta$$.className = "respuesta";
        pregunta$$.className = "pregunta";

        respuesta$$.type = "number";

        APP$$.appendChild(pregunta$$);
        pregunta$$.appendChild(test$$);
        pregunta$$.appendChild(igual$$);
        pregunta$$.appendChild(respuesta$$);

    }

}

pintarPreguntas(PREGUNTAS);

const comprobar = () => {

    const ALLRESPUESTAS$$ = document.querySelectorAll(".respuesta");
    let acertadas = 0;

    for (let i = 0; i < ALLRESPUESTAS$$.length; i++) {
        
        if (parseInt(ALLRESPUESTAS$$[i].value) === PREGUNTAS[i].respuesta) {
            acertadas ++;
        }
        
    }

    if (acertadas >= ALLRESPUESTAS$$.length / 2) {
        
        APP$$.innerHTML = `
            <h2>Has aprobado acertando ${acertadas}!</h2>
            <img src="https://gifs.org.es/gifs/2020/08/5233/gif-cangrejo-bailando-feliz.gif" class="final"/>
        `
    
    } else {
        APP$$.innerHTML = `
        <h2>Has suspendido acertando ${acertadas}!</h2>
        <img src="https://s.yimg.com/ny/api/res/1.2/63KoTFcLlhQyFuubJT7Nhg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTk2MA--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/f524cfbf60200aa9346f308d700e3eec" class="final"/>
    `
    }

    COMPROBAR$$.style.display = "none";

}

COMPROBAR$$.addEventListener("click", comprobar);