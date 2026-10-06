/** Runs before first paint so a saved light or dark choice never flashes the wrong theme. */
export const themeInitScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;
