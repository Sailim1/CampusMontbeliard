<template>
    <div class="container">
        <h1>Nous Contacter</h1>
        <div class="row" style="justify-content: center;">
            <form action="">
                <div class="nom">
                    <label for="name">Nom</label>
                    <input type="text" name="name" required placeholder="Votre Nom">
                    <label for="prenom">Prénom</label>
                    <input type="text" name="prenom" required placeholder="Votre Prénom">
                    <div>
                        <span>Statut</span>
                        <div class="checkbox">
                        <div>
                            <input type="checkbox" id="scales" name="lyc"
                                    checked>
                            <label for="lyc">Lycéen(ne)</label>
                        </div>
                        <div>
                            <input type="checkbox" id="horns" name="etudiant">
                            <label for="etudiant">Étudiant</label>
                        </div>
                        <div>
                            <input type="checkbox" id="horns" name="horns">
                            <label for="horns">Association étudiante</label>
                        </div>
                    </div>
                    </div>
                    <label for="maim">Nom</label>
                    <input type="text" name="mail" required placeholder="Votre adresse mail">
                </div>
                <div class="text">
                    <label for="name">Votre Texte</label>
                    <textarea ></textarea>
                    <button type="submit" class="right">
                            <i class="fas fa-long-arrow-alt-right"></i> Envoyer
                        </button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
.text{
    display: flex;
    flex-direction: column;
}
.checkbox{
    display: flex;
    flex-direction: row;
    height: 30px;
    background-color: white;
    margin: 10px;
    width:260px;
    padding: 20px;
}
.checkbox input {
    padding: 15px;
    margin-left: 15px;
    margin-right: 15px;
}
.checkbox div {
    display: flex;
    flex-direction: row;
}
.checkbox label {
    color: black !important;
    font-size: 12px !important;
    margin-left: -10px;
}
.nom{
    display: flex;
    flex-direction: column;
}
form {
    width: 60%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.container{
    height: 550px;
    display: flex;
    flex-direction: column;
    font-family: 'Playfair Display', serif;
    background-color: #171717;
}
.row{
    display: flex;
    flex-direction: row;
    font-family: 'Playfair Display', serif;
}
.col {
    display: flex;
    flex-direction: column;
    font-family: 'Playfair Display', serif;
}
input {
    padding: 10px;
}
h1{
    color:#EC7116 !important;
    font-size: 60px;
    text-align: left;
}
label {
color:#EC7116 !important;
    font-size: 30px;
    text-align: left;
}
span{
   color:#EC7116 !important;
    font-size: 30px;
    text-align: left !important; 
}
textarea {
    height: 250px;
    width: 320px;
}
.right{
    margin: 15px;
    display: flex;
    align-items: center;
    background-color: transparent;
} 
button{
    border: none;
    color:white ;
}
.fa-long-arrow-alt-right {
     border: 1px solid #EC7116 ;
    border-right: none;
    margin-right: -5px;
    color: #000000;
    font-weight: 600;
    padding-left: 15px;
    margin-right: 15px;
    font-size:40px;
}
 a {
        text-decoration:none;
    }  
</style>