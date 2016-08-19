



function Parallax(obj) {

    console.log('Parallax', obj.img.getAttribute('speed'));

    var y = 0;

    this.scroll = function () {
        if (obj.img.offsetTop === 0) {
            y = Math.abs(obj.img.offsetTop - window.scrollY) / Number(obj.img.getAttribute('speed'));
            obj.img.style.transform = 'translateY(' + y + 'px)';

        } else {
            if ((obj.img.offsetTop - window.outerHeight) < window.scrollY) {

                y = (window.scrollY - obj.img.offsetTop) / Number(obj.img.getAttribute('speed'));
                obj.img.style.transform = 'translate3d(0, ' + y + 'px, 0)';
            }
        }
    }

    window.addEventListener("scroll", this.scroll);
}
