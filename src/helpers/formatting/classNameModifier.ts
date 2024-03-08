export function addClass(e:HTMLElement, classes:string) {
    e.classList && e.classList.add(...classes.split(" "));
}
  
export function removeClass(e:HTMLElement, classes:string) {
e.classList && e.classList.remove(...classes.split(" "));
}
  