<template>
    <div class="main">
        <div class="campus1">
           <div class="campus1-1">
               <h1><span>ÉTUDIER </span></h1>
               <p>Trouvez votre formation idéale grâce aux campus du Nord Franche-Comté.</p>
                <div class="input">
                   <div>
                       <input class="input-search" type="text"><i class="fas fa-search search2"></i>
                   </div>
                   </div>
            <div class="container">
               <h4>NIVEAU</h4>
               <div class="row" style="width: 700px">
                   <div class="col">
                       <p>Brevet PRO (Niveau Bac)</p>
                       <p>PREPA (Bac + 1)</p>
                       <p>BTS (Bac + 2 ou équivalent)</p>
                       <p>DUT / DEUST (Bac + 2)</p>
                   </div>
                   <div class="col">
                       <p>Brevet PRO (Niveau Bac)</p>
                       <p>PREPA (Bac + 1)</p>
                       <p>BTS (Bac + 2 ou équivalent)</p>
                       <p>DUT / DEUST (Bac + 2)</p>
                   </div>
                   <div class="col">
                       <p>Brevet PRO (Niveau Bac)</p>
                       <p>PREPA (Bac + 1)</p>
                       <p>BTS (Bac + 2 ou équivalent)</p>
                       <p>DUT / DEUST (Bac + 2)</p>
                   </div>
                        <router-link to="/formations" class="right-1"> <i class="fas fa-long-arrow-alt-right"></i> Voir les Formations</router-link>
               </div>
               <a href="#scroll"><i class="fas fa-angle-double-down"></i></a>
           </div>
           </div>
        </div>
        <div class="row">
                <img class="ins" src="@/assets/inscription.jpg" alt="">
                <div class="col" style="width: 600px">
                    <h3 id="scroll">COMMENT S'INSCRIRE ?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                 <a href="#ins" class="right" >
                            <i class="fas fa-long-arrow-alt-right"></i>  
                        </a>  
                </div>
                
        </div>
        <div class="container" >
            <h4 > <i class="fas fa-circle"></i> Parcoursup</h4>
            <div class="row" id="ins">
                    <div class="col" style="width: 300px">
                        <h5 >Première inscription ?</h5>
                        <p>L’inscription à l’enseignement supérieur commence par Parcoursup qui est la plateforme nationale d’admission au sein des formations du 1er cycle. Cependant, vous pouvez vous inscrire à des formations qui ne sont pas gérées par Parcoursup.</p>
                    </div>
                    <div class="col" style="width: 300px">
                        <h5>Les pièces de votre dossier :</h5>
                        <p>- un dossier complété de votre université, - une copie de votre carte d’identité ou passeport, - 2 photos d’identité, - l’attestation d’assurance Responsabilité Civile, - un moyen de paiement, - une photocopie de la CVEC.</p>
                    </div>
            </div>
            <div class="row">
                <div class="col" style="width: 500px; height: 400px">
                    <h5>Avec Parcoursup vous pouvez faire votre inscription dans l’un des cursus suivants :</h5>
                         
                    <p>1ère année de licence à l'université :
                        <ul>
                            <li>- Institut universitaire de technologie (IUT)</li>
                            <li>- Classe préparatoire aux grandes écoles (CPGE)</li>
                            <li>- Section de techniciens supérieurs (STS)</li>
                            <li>- Diplôme de comptabilité et de gestion (DCG)</li>
                            <li>- Formation d'ingénieurs</li>
                        </ul>
                    </p>
                </div>
                <div class="col" style="width: 300px">
                </div>
            </div>
            
        </div>

        <div class="container" >
            <h4 class="h4"> <i class="fas fa-circle"></i> Qui peut s’inscrire à  l’enseignement supérieur ?</h4>
            <div class="row">
                <div class="col" style="width: 500px; height: 500px">
                    <h5>Avec Parcoursup vous pouvez faire votre inscription dans l’un des cursus suivants :</h5>
                         
                    <p>
                        - 1ère année de licence à l'université <br> - Institut universitaire de technologie (IUT) <br> - Classe préparatoire aux grandes écoles (CPGE) <br> - Section de techniciens supérieurs (STS) <br> - Diplôme de comptabilité et de gestion (DCG) <br> - Formation d'ingénieurs <br> - Élève d'une classe de terminale précédant l'année universitaire pour laquelle vous souhaitez vous inscrire
                        <br> - Non-bachelier, mais titulaire du DAEU (diplôme d'accès aux études universitaires)  <br> - Non-bachelier, engagé ou non dans la vie active, et que vous avez obtenu une validation des acquis de l'expérience (VAE) <br> 
                    </p>
                </div>
                <div class="col" style="width: 300px">
                    <p>
                        - Bachelier et que vous souhaitez reprendre vos études <br> - Titulaire d'un baccalauréat français obtenu à l'étranger ou d'un baccalauréat européen <br> - Étudiant européen titulaire d'un baccalauréat européen <br> - Étudiant non-européen titulaire d'un baccalauréat français obtenu dans un lycée de l'Agence française pour l'enseignement français à l'étranger (AEFE)
                    </p>
                </div>
            </div>
            
        </div>

                <div class="container" >
            <h4 class="h4"> <i class="fas fa-circle"></i> Inscription définitive</h4>
            <div class="row">
                <div class="col" style="width: 500px; height: 500px">
                    <p>Pour l’inscription définitive, lorsque vous avez accepté la proposition d’admission vous devez faire votre inscription administrative auprès de l’établissement. Les formalités d’inscriptions varient en fonction de l’établissement. Lors de votre inscription vous devez régler les droits d'inscriptions. Ceux-ci vont vous permettre d’obtenir la carte étudiante.</p>
                </div>
                <div class="col" style="width: 300px">
                    
                </div>
            </div>
            
        </div>
    </div>
</template>

<style scoped>
.ins{
    height: 500px !important;
    width: 400px !important;
    object-fit: contain !important;
}
.right{
    margin: 15px;
    display: flex;
    align-items: center;
    background-color: transparent;
    color: white !important;
    transform: rotate(90deg ) translateX(360px);
} 
.right-1{
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
    color: #d8cccc;
    font-weight: 600;
    padding-left: 15px;
    margin-right: 15px;
    font-size:40px;
    background-color: transparent;
    height: 35px;
}

a{
    text-decoration:none;
    color:white;
}
.fa-angle-double-down{
    font-size: 40px;
}
.container{
    display: flex;
    padding:20px;
    flex-direction: column;
  font-family: 'Playfair Display', serif;
}
.row{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  font-family: 'Playfair Display', serif;
}

.col {
    display: flex;
    flex-direction: column;
}

.campus1{
    height: auto;
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
.input-search{
    width: 260px;
        
}
.fa-search{
    font-size:10px;
    padding: 10px;
    background-color:#EC7116;
    color:black;
    height:19px;
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
    font-size: 85px;
}
span{
    color: #EC7116;
}
h3 {
    color:#EC7116;
    font-size: 55px;
}
img {
    height: 550px;
    width:550px;
    object-fit: contain;
}
p{
    color:white;
}
.row img{
    width:300px;
    height:300px;
}
.container h4 {
    color:#E9AD81;
    font-size: 70px;
    text-align: left;
    margin-left: 150px;
    display: flex;
    align-items: center;
}


.col h5 {
    color:#FFFFFF;
    font-size: 20px;
    }
ul {
    color:white;
    list-style-type: none;
    text-align: left
}
.fa-circle{
    background-color:transparent !important;
    color:white !important;
    font-size: 30px;
}
</style>