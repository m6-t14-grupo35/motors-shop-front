import { IadOptional } from "@/interfaces/componentProps.interface";
import { Iuser } from "@/interfaces/user.interfaces";
import { tUserEditeData } from "@/schemas/user.schemas";

export const getInitials = (name:string) =>{
  const names = name.split(" ");

if (names.length >= 2) {
  const firstInitial = names[0][0];
  const secondInitial = names[1][0];
  return `${firstInitial}${secondInitial}`
}else{
  return name[0]
}}


export const calculateElapsedTime = (dataString: string | Date)  => {
  var date = new Date(dataString);
  var now = new Date();

  if(date > now){
    return "viajante temporal"
  }
  // @ts-ignore
  var diference = now - date;
  var seconds = Math.floor(diference / 1000);

  if (seconds < 120) {
    return "agora";
  } else if (seconds < 3600) {
    var minutes = Math.floor(seconds / 60);
    return `há ${minutes} minuto(s) atrás`;
  } else if (seconds < 86400) {
    var hours = Math.floor(seconds / 3600);
    return `há ${hours} hora(s) atrás`;
  } else if (seconds < 5184000) {
    var weeks = Math.floor(seconds / 604800);
    return `há ${weeks} semana(s) atrás`;
  } else if (seconds < 31536000) {
    var mounths = Math.floor(seconds / 2592000);
    return `há ${mounths} mês(es) atrás`;
  } else {
    var years = Math.floor(seconds / 31536000);
    return  `há ${years}+ ano(s) atrás`;
  }
}


export const filterEmptyData = (data:any) => {
  return Object.entries(data).reduce((acc, [key, value]) => {
    if (value !== '' && value !== 0 && value !== undefined) {
      // @ts-ignore
      acc[key] = value;
    }
    return acc;
  }, {});
}

export const formatDate = (dateString:Date)=> {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export const transformObject = (obj: Iuser) => {
  const { birthdate, ...rest } = obj;
  const formattedBirthdate = formatDate(birthdate);
  return {
    name: rest.name,
    email: rest.email,
    cpf: rest.cpf,
    phone_number: rest.phone_number,
    birthdate: formattedBirthdate,
    description: rest.description,
    is_seller: rest.is_seller
  };
}
