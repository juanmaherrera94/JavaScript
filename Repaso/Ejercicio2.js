const usuarios = [
    { nombre: "Ana", edad: 25, email: "ana@gmail.com" },
    { nombre: "Luis", edad: 32, email: "luis@gmail.com" },
    { nombre: "María", edad: 29, email: "maria@gmail.com" },
    { nombre: "Luis", edad: 32, email: "luis@gmail.com" }, // Usuario duplicado
  ];


  const correosUnicos= new Set(usuarios.map(usuario=>usuario.email));


  const usuariosConMap = new Map(usuarios.map(usuario=> [usuario.email,usuario]));

  const usuariosOrdenados = [usuarios].sort((usuario1, usuario2) => {
    return usuario1.nombre.localeCompare(usuario2.nombre);
  });
  
  console.log(usuariosConMap);
  console.log(correosUnicos);
  console.log(usuariosOrdenados);