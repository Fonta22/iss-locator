const body = document.body;
const switcher = document.querySelector('.js-toggle');

const theme = () => {
    let state = localStorage.getItem('theme');
    if (state) {
        return state;
    }
    else{
        localStorage.setItem('theme', 'light');
        return 'light';
    }
}

const toggleTheme = () => {
    if (theme() === 'dark') 
    {
        body.classList.remove('dark-mode');
        switcher.classList.remove('js-toggle--checked');
        localStorage.setItem('theme', 'light');
    } 
   else if (theme() === 'light') 
    {
        body.classList.add('dark-mode');
        switcher.classList.add('js-toggle--checked');
        localStorage.setItem('theme', 'dark');
    }

}

// Click on dark mode icon. Add dark mode classes and wrappers. Store user preference through sessions
switcher.addEventListener("click", toggleTheme);

// Check if dark mode is selected. Add dark mode classes and wrappers
if (theme() === 'dark')  {
    body.classList.add('dark-mode');
    switcher.classList.add('js-toggle--checked');
    
}
