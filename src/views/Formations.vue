<template>
    <div class="main">
        <div class="campus1">
           <div class="campus1-1">
               <h1><br><span>Les Formations </span></h1>
           </div>
        </div>
        <div class="container">
            <div class="col">
                    <div class="div2">
                        <i class="fas fa-circle"></i>
                        <div class="titre">   <h3> MFR (Maison Familiale & Rurale)</h3>
                        <hr>
                        <p>18 Rue du Pont, 25350 Mandeure</p>
                        </div>   
                    </div>
                    <div class="div2">
                        <i class="fas fa-circle"></i>
                        <div class="titre">   <h3> ÉCOLE D’ART DE BELFORT</h3>
                        <hr>
                        <p>1 Rue du Maréchal Juin, 25200 Montbéliard</p>
                        </div>   
                    </div>
                    <div class="div2">
                        <i class="fas fa-circle"></i>
                        <div class="titre">   <h3> LYCÉE NELSON MANDELA</h3>
                        <hr>
                        <p>6 Rue René Girardot, 25400 Audincourt</p>
                        </div>   
                    </div>
                    <div class="div2">
                        <i class="fas fa-circle"></i>
                        <div class="titre">   <h3> LYCÉE GERMAINE TILLION</h3>
                        <hr>
                        <p>1bis Rue Pierre Donzelot, 25200 Montbéliard</p>
                        </div>   
                    </div>

            </div>

            <div class="col">
                    <div class="div2">
                        <i class="fas fa-circle"></i>
                        <div class="titre">   <h3> ÉCOLE NATIONALE DE POLICE</h3>
                        <hr>
                        <p>1 Rue du Maréchal Juin, 25200 Montbéliard</p>
                        </div>   
                    </div>
                    <div class="div2">
                        <i class="fas fa-circle"></i>
                        <div class="titre">   <h3>IUT</h3>
                        <hr>
                        <p>19 Av. du Maréchal Juin, 90016 Belfort</p>
                        </div>   
                    </div>
                    <div class="div2">
                        <i class="fas fa-circle"></i>
                        <div class="titre">   <h3>ÉCOLE D’ART DE BELFORT</h3>
                        <hr>
                        <p>2 Av. de l'Espérance, 90000 Belfort</p>
                        </div>   
                    </div>
                    <div class="div2">
                        <i class="fas fa-circle"></i>
                        <div class="titre">   <h3> LYCÉE LUCIEN QUELET</h3>
                        <hr>
                        <p>95 Rue de Turenne, 90300 Valdoie</p>
                        </div>   
                    </div>

            </div>

            <div class="col">
                    <div class="div2">
                        <i class="fas fa-circle"></i>
                        <div class="titre">   <h3> TRAJECTOIRE FORMATION</h3>
                        <hr>
                        <p>13 Av. Léon Blum, 25200 Montbéliard</p>
                        </div>   
                    </div>
                    <div class="div2">
                        <i class="fas fa-circle"></i>
                        <div class="titre">   <h3>ECM/CNAM</h3>
                        <hr>
                        <p>16 Rue Becquerel, Techn'hom 3 Centre d'affaires, 90000 Belfort</p>
                        </div>   
                    </div>
                    <div class="div2">
                        <i class="fas fa-circle"></i>
                        <div class="titre">   <h3> LYCÉE COURBET </h3>
                        <hr>
                        <p>Rue Général Gambiez, 90000 Belfort</p>
                        </div>   
                    </div>
                    <div class="div2">
                        <i class="fas fa-circle"></i>
                        <div class="titre">   <h3> LYCÉE LES HUISSELETS</h3>
                        <hr>
                        <p>8 Av. du Maréchal de Lattre de Tassigny, 25200 Montbéliard</p>
                        </div>   
                    </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
.titre{
    display: flex;
    flex-direction: column;
    height: 100px;
    justify-content: space-between;
}
.div2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 20px;
    
}
.col {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.container{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 700px;
}
.campus1{
    height: 300px;
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
    width: 50%;
    border: white 1px solid;
    background: rgb(2,0,36);
background: linear-gradient(131deg, rgba(2,0,36,1) 0%, rgba(21,0,255,0) 100%);
}

.campus2{
    height: 700px;
    color: #ffffff;
    position: relative;
    background-image:
    url("https://aer-bfc.com/wp-content/uploads/2020/11/carte-hydrogen-en-bourgogne-franche-comte-1.png");
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
h3{
    color: #EC7116;
    text-align: left;
}
.fa-circle{
    color: #EC7116;
    margin-right: 15px;
    margin-top: -55px;
}
p{
    width: 150px;
    text-align: left;
    color: #FFFFFF;
}
h1{
    color: #EC7116;
    text-align: left;
    font-size: 65px;
}
</style>