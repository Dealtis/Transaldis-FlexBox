<?php
if(isset($_FILES['inputfile']))
{
     $dossier = '';
     $fichier = basename($_FILES['inputfile']['name']);
     if(move_uploaded_file($_FILES['inputfile']['tmp_name'], $dossier . $fichier)) //Si la fonction renvoie TRUE, c'est que ça a fonctionné...
     {
       echo "{}";
     }
     else //Sinon (la fonction renvoie FALSE).
     {
       echo "{Error}";
     }
}
?>
