

 document.getElementById('btn1').addEventListener('click', function() {
          document.querySelector('.form-container').classList.toggle('active')
          console.log('click')
     })
     document.getElementById('close-login').addEventListener('click', function() {
          document.querySelector('.form-container').classList.remove('active')
          console.log('click')
     })
     document.getElementById('login-click').addEventListener('click', function() {
          document.getElementById('login-form').style.left = "-800px";
          document.getElementById('regis-form').style.left = "10px"
          console.log('click')
     })
     document.getElementById('regis-click').addEventListener('click', function() {
          document.getElementById('login-form').style.left = "10px";
          document.getElementById('regis-form').style.left = "800px"
          console.log('click')
     })
     // function btnbooknow(img){
     //      document.getElementById('book-mobil').addEventListener('click', function() {
     //           var nama = document.getElementById('nama-mobil').innerText
     //           var harga = document.getElementById('harga-mobil').innerText
     //           // document.getElementById('book-nama').value = 
     //           // document.getElementById('book-harga').value = 
     //           document.querySelector('.from-booknow').classList.toggle('activet')
     
     //           console.log('click')
     //      })
     //      document.getElementById('close-book').addEventListener('click', function() {
     //           document.querySelector('.from-booknow').classList.remove('activet')
     //           console.log('click')
     //      })
     // }
     // document.getElementById('book-mobil').addEventListener('click', function() {
     //      var nama = document.getElementById('nama-mobil').innerText
     //      var harga = document.getElementById('harga-mobil').innerText
     //      document.getElementById('book-nama').value = nama
     //      document.getElementById('book-harga').value = harga
     //      document.querySelector('.from-booknow').classList.toggle('activet')

     //      console.log('click')
     // })
     document.getElementById('close-book').addEventListener('click', function() {
          document.querySelector('.from-booknow').classList.remove('activet')
          console.log('click')
     })