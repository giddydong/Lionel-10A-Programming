        function changeHeading() {
        document.getElementById("heading").textContent = "Hello, World!";
        }
        function resetHeading() {
            document.getElementById("heading").textContent = "Bounjour!";
        }
        let Count= 0;
        const counterDisplay = document.getElementById('counterDisplay');
        const button =  document.getElementById("button")
        const box =  document.getElementById("Division")
        
        button.addEventListener('click',function () {
        Count++;
        counterDisplay.textContent ='Click Counter: ' + Count;
        const color = '#' + Math.floor(Math.random()*16777215).toString(16);
        box.style.background = color;x
        });