<template>
    <header>
        <nav>
            <router-link to="/">Accueil</router-link>
           
            <div>
                <router-link to="/formations">Les Formations</router-link>
                <router-link to="/plan">Plan Campus</router-link>
                <router-link to="/bibliotheques">Bibliothèques</router-link>
                <router-link to="/contacter">Contacter</router-link>
                <router-link to="/etudier">Etudier</router-link>
                <router-link to="/vivre">Vivre</router-link>
            </div>
           
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header'
    }
</script>

<style scoped>
header{
    position: sticky;
    top: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    width: 100%;
}
header nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height:50px;
    color:white;
    font-weight:bold;
    padding:15px;
    background: rgb(0, 0, 0);
background: linear-gradient(0deg, rgba(3, 3, 3, 0.662) 0%, rgba(1,1,1,0.3113620448179272) 100%);
width: 100%;
    }
header a {
    text-decoration: none;
    color:white;
}
nav div {
    width: 700px;
    display:flex;
    justify-content: space-between;
}
a:hover{
    border-bottom: solid 1px white;
}

</style>