export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Nom d'utilisateur obligatoire";
  }
  else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    errors.name = 'le nom doit contenir seulemnt des caractères';
  }

  if (!values.email) {
    errors.email = 'E-mail obligatoire';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email invalide';
  }
  if (!values.password) {
    errors.password = 'Mot de passe obligatoire';
  } else if (values.password.length < 6) {
    errors.password = 'Le mot de passe doit contenir au moins 6 carctères';
  }

  if (!values.password2) {
    errors.password2 = 'Mot de passe obligatoire';
  } else if (values.password2 !== values.password) {
    errors.password2 = 'Mot de passe incorrect';
  }
  if (!values.niveau) {
    errors.niveau = 'Niveau obligatoire';
  }
  else if (!/^[A-Za-z]+/.test(values.niveau)) {
    errors.niveau= 'Le niveau doit contenir seulemnt des caractères';
  }
 if (!values.domaine()) {
    errors.domaine= ' Domaine obligatoire';
  }
  else if (!/^[A-Za-z]+/.test(values.domaine)) {
    errors.domaine = 'Le niveau doit contenir seulemnt des caractères';
  }
  if (!values.tell) {
    errors.tell = 'Numéro de tell obligatoire';
  } else if (!/^[1..9]+/.test(values.tell)) {
    errors.tell = 'Numéro de tell invalide';
   }
  return errors;
}
