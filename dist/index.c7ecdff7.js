!function(){let e=document.getElementById("form"),t=document.getElementById("username"),n=document.getElementById("age"),a=document.getElementById("email"),o=document.getElementById("password"),c=document.getElementById("password2");function s(e,t){let n=e.parentElement;n.className="form-control error",n.querySelector("small").innerText=t}function r(e){e.parentElement.className="form-control success"}function l(e,t,n){e.value.length<t?s(e,`${u(e)} debe tener al menos ${t} caracteres`):e.value.length>n?s(e,`${u(e)} debe tener menos de ${n} caracteres`):r(e)}function u(e){return e.id.charAt(0).toUpperCase()+e.id.slice(1)}e.addEventListener("submit",function(e){e.preventDefault(),function(e){e.forEach(function(e){""===e.value.trim()?s(e,`${u(e)} es obligatorio`):r(e)})}([t,a,o,c]),l(t,3,15),l(o,8,25),/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a.value.trim())?r(a):s(a,"El correo electrónico no es válido"),o.value!==c.value&&s(c,"Las contraseñas no coinciden"),function(e){let t=parseInt(e.value);isNaN(t)||t<0||t>=100?s(e,"La edad debe estar entre 0 y 99 años"):r(e)}(n),function(e){let t=e.value;/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[`~!@#$%^&*()_+\-=\{\}\[\]|:;'"<>,.?/\\]).{8,}$/.test(t)?r(e):s(e,"La contraseña debe constar de al menos 8 caracteres, including mayúsculas, minúsculas, dígitos, y caracteres especiales: ` ~ ! @ # $ % ^ & * ( ) _ + - = { } | [ ] \\ : \" ; ' < > ? , . /")}(o)})}();