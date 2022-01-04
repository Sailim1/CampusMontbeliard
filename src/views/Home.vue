<template>
    <div class="main">
        <div class="campus1">
           <div class="campus1-1">
               <h1>Le Campus métropolitain<br><span>Belfort-Montbéliard </span></h1>
           <p>Découvrez les formations et bons plans du Campus Belfort-Montbéliard.</p> 
           <p>Le campus Belfort-Montbéliard se classe troisième campus dans la liste des campus de Bourgogne Franche-Comté.</p> 

           <form action="" method="post">
               <div>
                   <div class="input">
                   <div>
                       <input type="text"><i class="fas fa-chevron-down"></i>
                   </div>
                   <div>
                       <input type="text"><i class="fas fa-chevron-down"></i>
                   </div>
                   </div>
               </div>
                   <i class="fas fa-search search1"></i>
               
           </form>
           </div>
        </div>

        <div class="campus2">
           <div class="campus2-1">
               <div class="campus2-1-text">
                   <div class="input">
                   <div>
                       <input type="text"><i class="fas fa-search search2"></i>
                   </div>
                   </div>
                   <h2>  ÉTUDIER</h2>
               </div>
               <div class="div-img">
                   <img src="../assets/carte1.png" alt="">
                   <div>
                       <p>Le campus Belfort-Montbéliard est un campus consacré aux besoins et informations sur la vie des étudiants, aux futurs étudiants. L’objectif recherché à travers ce campus est d’assurer à ses visiteurs d’y retrouver les informations qu’il recherche et d’en apprendre plus sur la région et sur tout ce qui entoure la vie étudiante. Quelle que soit votre question ou besoin, le Campus saura vous répondre et vous guider Le campus de Belfort-Montbéliard se divise en 3 site , sur les villes de Belfort, Montbéliard et Sevenans. .</p>
                   </div>
               </div>
           </div>
        </div>

        <div class="campus3">
           <div class="campus2-1">
               <div class="campus2-1-text">
                   <h2>  Vivre</h2>
               </div>
               <div class="div-img">
                   <div>
                       <p>La région Nord Franche-Comté offre de nombreuses formations diverses et variées aux étudiants et futurs étudiants. Il est possible de réussir après le bac grâce à un large choix de diplômes. Vous pouvez réaliser un diplôme bac +2, une licence, un master, un doctorat ou entrer dans une école d’ingénieur, de commerce, d’infirmières et kiné et bien plus encore. Tous ces diplômes sont spécialisés dans des domaines variés comme le multimédia, le droit, l’économie, le commerce, la science et la technologie, la santé, l'environnement, la mode, le sport, l'art, etc… Il y en a donc pour tous les goûts !</p>
                   </div>
                  

                        <router-link to="/formations" class="right"><i class="fas fa-long-arrow-alt-right"></i> Plus d'informations</router-link>
               </div>
           </div>
        </div>


        <div class="campus4">
           <div class="campus2-1">
               <div class="campus2-1-text">
                   <h2>  Sortir</h2>
               </div>
               <div class="div-img">
                   <img src="../assets/prez.jpg" alt="">
                   <div>
                       <p>Le campus s'efforce également de mettre en avant la vie étudiante notamment sur ce qui concerne la qualité de vie, la proximité, les journées et soirées d’intégration, les nuits sportives, le coaching, les événements du jeudi, les passerelles entre formations, les asso étudiantes…</p>
                   </div>
               </div>
           </div>
        </div>

        <div class="campus5">
           <div class="campus5-1">
               <div class="campus2-1-text">
                   <h3>  Pourquoi faire ses études à Belfort-Montbéliard ?</h3>
               </div>
               <div class="div-img-campus5">
                   <div>
                       <p>Le campus s'efforce également de mettre en avant la vie étudiante notamment sur ce qui concerne la qualité de vie, la proximité, les journées et soirées d’intégration, les nuits sportives, le coaching, les événements du jeudi, les passerelles entre formations, les asso étudiantes…</p>
                   </div>
                   <div class="div2-img">
                       <img class="img-campus5" src="@/assets/logomontbel.jpg" alt="">
                       <p>
                           Les nombreux parcs sont rapidement accessibles à pied depuis les centres villes. Il y a également de nombreuses pistes cyclables. Un grand nombre d’activités sportives comme la natation, le patinage, le football, le handball, l’équitation et beaucoup d’autres sont disponibles dans la région. L’aire urbaine offre aussi un large choix d'activités culturelles avec un grand nombre de musées, théâtres et bibliothèques.
                       </p>
                   </div>
               </div>
           </div>
        </div>
    </div>
</template>

<style scoped>
.campus1{
    height: 600px;
    color: #ffffff;
    position: relative;
    background-image:
    url("../assets/campus.jpg");
    background-size: cover;
    background-blend-mode: saturation;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
  font-family: 'Playfair Display', serif;

}

.campus1-1 { 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    width: 80%;
    border: white 1px solid;
    background: rgb(2,0,36);
background: linear-gradient(131deg, rgba(2,0,36,1) 0%, rgba(21,0,255,0) 100%);
}

.campus2{
    height: 700px;
    color: #ffffff;
    position: relative;
    background-image:
    url("../assets/carte1.png");
    background-blend-mode: saturation;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  font-family: 'Playfair Display', serif;

}
.campus2-1-text{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.campus3 {
    height: 600px;
    color: #ffffff;
    position: relative;
    background-image:
    url("../assets/montagne.jpg");
    background-blend-mode: saturation;
    background-repeat: no-repeat;
    background-position: right;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  font-family: 'Playfair Display', serif;
}
.campus4 {
    height: 600px;
    color: #ffffff;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  font-family: 'Playfair Display', serif;
}
.campus5 {
    height: 600px;
    color: black;
    position: relative;
    background-image:
    url("../assets/chateau.jpg");
    background-blend-mode: saturation;
    background-repeat: no-repeat;
    background-position: right;
    display: flex;
    flex-direction: column;
    align-items: center;
  font-family: 'Playfair Display', serif;
}

.campus5-1 {
    height: 100%;
    width: 80%; 
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background: rgba(255, 255, 255, 0.692);
background: linear-gradient(0deg, rgba(255, 255, 255, 0.746) 0%, rgba(255, 255, 255, 0.712) 100%);
}
.campus5 .div-img p {
    width: 80%;
}
.campus2-1 {
    height: 100%;
    width: 80%; 
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background: rgb(23,23,23);
background: linear-gradient(0deg, rgba(23,23,23,0.9304096638655462) 0%, rgba(23,23,23,0.8267682072829132) 100%);
}
.div-img-campus5{
    display: flex;
    flex-direction: column;
}
.img-campus5{
    height: 300px;
    width: 300px;
    object-fit: contain
}
.cam
pus2-1-text{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 70%;
    border: 1px solid white ;
}
.div-img{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 80%;
}
.div2-img{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.div2-img img { 
    margin: 40px;
}

.div-img p {
    width: 400px;
}
input{
    padding:8px;
    border: none;
    outline: none;
    height:23px;
    width: 200px;
}
i{
    font-size:10px;
    padding: 10px;
    background-color:#EC7116;
    color:black;
    height:19px;

}
form{
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height:250px;
    width:300px;
} form div {
    height: 150px;
}
.input{
    display:flex;
    flex-direction: column;
    align-items: center;
}
.input div {
    display: flex;
    align-items: center;
}
.search1{
    height: 90px;
    padding: 10px;
    display: flex;
    align-items: center;
    font-size: 25px;
    color:white;
}
.search2{
    color:white;
    font-size: 15px;
}
h1 {
    font-size: 50px;
    text-align: left;
}
h2 {
    color:#EC7116;
    font-size: 105px;
}
span{
    color: #EC7116;
}
h3 {
    color:#EC7116;
    font-size: 65px;
}
img {
    height: 550px;
    width:550px;
    object-fit: contain;
}
.right{
    margin: 15px;
    display: flex;
    align-items: center;
    background-color: transparent;
    color: white !important;
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
    background-color: transparent;
    height: 35px;
}
</style>