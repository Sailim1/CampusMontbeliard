<template>
<div>
  <Header/>
  <router-view></router-view>
  <Footer/>
</div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  
}
h1{font-size: 35px;
}
p{
 text-align: start;
}

body {
    background-color:#171717;
}
.right{
    margin: 15px;
    display: flex;
    align-items: center;
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
