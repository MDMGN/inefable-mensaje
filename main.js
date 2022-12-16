const $app=document.getElementById("app");
      const options= {name:["tu nombre","myriam"],signo:["tu signo zodiacal","acuario"],color:["tu color favorito","negro"]};
      const $style_dynamic=document.querySelector("#style-dymanic");

      let count=0;
      let key= Object.keys(options)[count];
      const validator=(e)=>{
            if(e.target.value.toLowerCase()==options[key][1]){
              count++;
              key=Object.keys(options)[count];
              $app.innerHTML=null;
              (count < Object.values(options).length)  ? $app.append(views(key)) : message();
            }
      }
      
      const views=(key)=> {
        const $form_box=document.createElement("div");
        $style_dynamic.innerHTML=
        `
         body{
          padding: 16px;
          margin: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          width: 100vw;
        }
        #form-box label{
          color: red;
          font-size: 1.2em;
        }
        #form-box{
          width:50%;
          height: 100px;
        }
        #form-box input{
          width: 200px;
          font-size: 1em;
          margin-top: .3em;
          transform: translateX(0);
          animation: move ease-in .5s;
      .        }
        @keyframes move {
          10%{
            transform: translateX(-25px);
            opacity: 0;
          }
          50%{transform: translateX(-75px)};
          100%{ transform: translateX(-135px);}
        }
        `;
        $form_box.innerHTML=
        `
          <form id="form">
            <label for="${key}">Escribe ${options[key][0]}: </label>
            <input type="text" name="${key}" id="${key}">
        </form>
        `;
        const $input=$form_box.querySelector(`#${key}`);
        $input.addEventListener("keyup",validator);
        $input.addEventListener("blur",validator);
        return $form_box;
      }
      $app.append(views(key));
      const message=()=>{

      $style_dynamic.innerHTML=null;
      $style_dynamic.innerHTML=
      `
      *{
        cursor: none;
      }
      p {
        font-size: 1em;
        text-align: justify;
        line-height: 1.8em;
        padding: 0 2em;
      }
      #flashlight {
        --Xpos: 50vw;
        --Ypos: 50vh;
      }
      #flashlight:before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        pointer-events: none;
        background: -o-radial-gradient(
          var(--Xpos) var(--Ypos),
          circle 10em,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 1)
        );
        background: radial-gradient(
          circle 10em at var(--Xpos) var(--Ypos),
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 1)
        );
      }
      `;
      alert("Tus ojos siempre son luz en mi!")
      $app.innerHTML=
            `
                <div id="flashlight"></div>
              <br>
              <p>
                Myriam, quiero que sepas que me alegre mucho al verte, eres una persona muy especial para mi y me gustaria volver a verte.
                Así que ya me dirás cuando tengas tiempo para tomar un café.</p>
                <p>Saludos y cuídate 😉</p>
            `;
        let mouseX = 0;
        let mouseY = 0;
        let flashlight = document.getElementById("flashlight");
        const isTouchDevice = () => {
          try {
            document.createEvent("TouchEvent");
            return true;
          } catch (e) {
            return false;
          }
        };
        function getMousePosition(e) {
        try{
          mouseX = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
          mouseY = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
          flashlight.style.setProperty("--Xpos", mouseX + "px");
          flashlight.style.setProperty("--Ypos", mouseY + "px");
        }
        catch(e){
        }
        }
        document.addEventListener("mousemove", getMousePosition);
        document.addEventListener("touchmove", getMousePosition);
  }