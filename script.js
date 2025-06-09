            document.addEventListener('DOMContentLoaded', function () {
            document.querySelectorAll('nav a[href^="#"]').forEach(function(anchor) {
            anchor.addEventListener('click', function (e) {
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
            });
            });
            });

            var today = new Date();
            var hourNow = today.getHours();
            var greeting;
            if (hourNow > 18) {
                greeting = 'Good evening!';
            } else if (hourNow > 12) {
                greeting = 'Good afternoon!';
            } else if (hourNow > 0) {
                greeting = 'Good morning!';
            } else {
                greeting = 'Welcome!';
            }
            document.addEventListener('DOMContentLoaded', function () {
                document.getElementById('greeting').textContent = greeting;
            });