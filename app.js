
            const c = document.getElementById('sort-container');
            let array = [40, 80, 20, 90, 50, 70];
            
            function render() {
                c.innerHTML = '';
                array.forEach(v => {
                    const bar = document.createElement('div');
                    bar.className = 'sort-bar';
                    bar.style.height = `${v}%`;
                    c.appendChild(bar);
                });
            }

            window.bubbleSort = function() {
                array.sort((a, b) => a - b);
                render();
                alert("Sorting complete!");
            }
            render();
        