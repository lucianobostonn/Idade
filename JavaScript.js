var cri2m = "img/a-crianca-de-2-anos.jpg"
        var cri2f = "img/menina-2-anos.jpg"
        var cri5m = "img/menino-5++.jpg"
        var cri5f = "img/menina-5++.jpg"
        var menina = "img/menina-15.jpg"
        var menino = "img/menino-15.jpg"
        var moca = "img/moca.webp"
        var moco = "img/Moco.jpg"
        var Sr30 = "img/Sr.30.jpg"
        var Sra30 = "img/Sra.30.jpeg"
        var Sr40 = "img/Sr.40.jpg"
        var Sra40 = "img/Sra.40.jpg"
        var idoso = "img/Idoso.jpg"
        var idosa = "img/idosa.jpeg"

        var res = document.getElementById("info")
        var imagem = document.getElementById("isso")

        function calcular(){
            var atual = new Date().getFullYear()
            var gen = document.querySelector('input[name="sex"]:checked')
            var idade = atual - Number(iano.value)

            if(iano.value < 1960 || iano.value >= atual)
            {
                window.alert("ERRO!, verifique os dados e tente novamente")
            } 
            
            // var genero = ""

            // if(gen.value == "M")
            // {
            //     genero = "Homem"
            // ...
            // }
            // else if(gen.value == "F")
            // {
            //     genero = "Mulher"
            //  ...
            // }
            // E usando esta extrutura, eu reduziria o meu código, porém eu usei esta outra para estar mais especificado
            

            if(idade < 4 && idade>=1 && gen.value == "M")
            {
                res.innerText = `Detectamos criança com ${idade} anos`
                res.style.textAlign = "center"
                imagem.src = cri2m
                document.body.style.background = "#1e83e9"
            }
            else if(idade < 4 && idade>=1 && gen.value =="F")
            {
                res.innerText = `Detectamos criança com ${idade} anos`
                res.style.textAlign = "center"
                imagem.src = cri2f
                document.body.style.background = "#1e83e9"
            }
            

            else if(idade >=4 && idade <12 && gen.value == "M")
            {
                res.innerText = `Detectamos menino com ${idade} anos`
                res.style.textAlign = "center"
                imagem.src = cri5m
                document.body.style.background = "#1e83e9"
            } else if(idade >=4 && idade <12 && gen.value == "F")
            {
                res.innerText = `Detectamos menina com ${idade} anos`
                res.style.textAlign = "center"
                imagem.src = cri5f
                document.body.style.background = "#1e83e9"
            }
            
            
            else if(idade >=12 && idade <18 && gen.value == "M")
            {
                res.innerText = `Detectamos Adolescente com ${idade} anos`
                res.style.textAlign = "center"
                imagem.src = menino
                document.body.style.backgroundImage = "url(img/background/back-adolescente.jpg)"
            } else if(idade >=12 && idade <18 && gen.value == "F")
            {
                res.innerText = `Detectamos Adolescente com ${idade} anos`
                res.style.textAlign = "center"
                imagem.src = menina
                document.body.style.backgroundImage = "url(img/background/back-adolescente.jpg)"
            }


            else if(idade >=18 && idade <26 && gen.value == "M")
            {
                res.innerText = `Detectamos Homem com ${idade} anos`
                res.style.textAlign = "center"
                imagem.src = moco
                document.body.style.backgroundImage = "url(img/background/back-man.jpg)"
            } else if(idade >=18 && idade <26 && gen.value == "F")
            {
                res.innerText = `Detectamos Mulher com ${idade} anos`
                res.style.textAlign = "center"
                imagem.src = moca
                document.body.style.backgroundImage = "url(img/background/back-womam.jpg)"
            }


            else if(idade >=26 && idade <40 && gen.value == "M")
            {
                res.innerText = `Detectamos Homem com ${idade} anos`
                res.style.textAlign = "center"
                imagem.src = Sr30
                document.body.style.backgroundImage = "url(img/background/back-man.jpg)"
            } else if(idade >=26 && idade <40 && gen.value == "F")
            {
                res.innerText = `Detectamos Mulher com ${idade} anos`
                res.style.textAlign = "center"
                imagem.src = Sra30
                document.body.style.backgroundImage = "url(img/background/back-womam.jpg)"
            }


            else if(idade >=40 && idade <55 && gen.value == "M")
            {
                res.innerText = `Detectamos Homem com ${idade} anos`
                res.style.textAlign = "center"
                imagem.src = Sr40
                document.body.style.backgroundImage = "url(img/background/back-cotaM.jpg)"
            } else if(idade >=40 && idade <55 && gen.value == "F")
            {
                res.innerText = `Detectamos Mulher com ${idade} anos`
                res.style.textAlign = "center"
                imagem.src = Sra40
                document.body.style.backgroundImage = "url(img/background/back-cotaF.jpg)"
            }


            else if(idade >=55 && idade<=65 && gen.value == "M")
            {
                res.innerText = `Detectamos Sr. Idoso com ${idade} anos`
                res.style.textAlign = "center"
                imagem.src = idoso
                document.body.style.backgroundImage = "url(img/background/back-cotaM.jpg)"
            } else if(idade >=55 && idade<=65 && gen.value == "F")
            {
                res.innerText = `Detectamos Sra. Idosa com ${idade} anos`
                res.style.textAlign = "center"
                imagem.src = idosa
                document.body.style.backgroundImage = "url(img/background/back-cotaF.jpg)"
            }
        }