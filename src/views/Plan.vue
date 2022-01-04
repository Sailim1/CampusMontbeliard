<template>
    <div class="main">
        <div class="campus1">
           <div class="campus1-1">
               <h1><br><span>Plan Campus </span></h1>
           </div>
        </div>

        <div class="campus2">
           <div class="campus2-1">
               <img src="https://aer-bfc.com/wp-content/uploads/2020/11/carte-hydrogen-en-bourgogne-franche-comte-1.png" alt="">
           </div>
        </div>
    </div>
</template>

<style scoped>
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
.campus2-1 img{
    height: 500px;
    width: 500px;
    object-fit: contain;
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