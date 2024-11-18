const usuarios = [
    { nombre: "Ana", edad: 25, email: "ana@gmail.com" },
    { nombre: "Luis", edad: 32, email: "luis@gmail.com" },
    { nombre: "María", edad: 29, email: "maria@gmail.com" },
    { nombre: "Luis", edad: 32, email: "luis@gmail.com" },
  ];

  let emails=[];
  const correos= usuarios.map(correo=> emails.push(correo.email));
  const correosUnicos= new Set(emails);
  console.log(correosUnicos)


  const usuariosConMap = new Map();
  usuarios.map(usuario=> usuariosConMap.set(usuario.email,usuario.nombre));


  console.log(usuariosConMap);

  const usuariosOrdenados = usuarios.sort((usuario1, usuario2) => {
    return usuario1.nombre.localeCompare(usuario2.nombre);
  });
  
  console.log(usuariosOrdenados);