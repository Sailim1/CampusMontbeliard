<template>
    <footer>
        <nav>
            <div class="footer-logo">
                <router-link to="/"><img src="../assets/logobase.png" alt=""></router-link>
            </div>
            <div>
                <h3>Rubriques</h3>
                <router-link to="/etudier">Etudier</router-link>
                <router-link to="/vivre">Vivre</router-link>
                <router-link to="/contacter">Contacter</router-link>
                <router-link to="/">Accueil</router-link>
               
               
            </div>

            <div class="social-media">
                <h3>Réseaux Sociaux</h3>
                <p>Suivez nous sur</p>
                <div>
                    <a href=""><i class="fab fa-instagram-square"></i></a>
                    <a href=""><i class="fab fa-facebook-square"></i></a>
                    <a href=""><i class="fab fa-linkedin"></i></a>
                </div>
            </div>
        </nav>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
    }
</script>

<style scoped>
footer {
    background-color: rgb(85, 70, 70);
    }
nav {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
}
.footer-logo img{
    height: 300px;
    width: 300px;
    object-fit: contain;
}
nav div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-between;

}
.social-media div{
 display: flex;
 flex-direction: row;
 width:200px;
 justify-content: space-between;
}
.social-mecdia p {
    color: white;
}
.social-mecdia h3 {
    color:gray;
}
a {
    text-decoration:none;
    color: white;
    padding: 0;
}
p {
    color:white;
}
i {
    color: rgb(255, 255, 255);
    font-size: 40px;
    margin: 0;
}
</style>