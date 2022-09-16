/*
  CREATE EVENTS TO PROCESSING
   * FISICS EVENTS (Where colider, where move, where wind..etc)
   * ANIMATION EVENTS Where Animate (Where animate the target object)
   * OBJECT EVENT Where modify one proprie with Heigth or widht
   * GENERIC EVENTS mouse, keyboard and other events providers with periferics
*/
export default class Oct8Events {
    constructor() {
        this.AlertResponsivePage = 0;
    }
    WhereColide(PyshicsOct8, timeColider, Callfunction) {
        setInterval(() => {
            if (PyshicsOct8.colider == true) {
                Callfunction();
            }
            console.log(PyshicsOct8.colider);
        }, timeColider);
    }
    ResponsiveForMobile(HorizontalMobile, VerticalMobile) {
        var w = window.innerWidth;
        var h = window.innerHeight;
        if (w < 500) {
            VerticalMobile();
        }
        if (w > 400 && h < 400) {
            HorizontalMobile();
        }
        window.addEventListener("resize", () => {
            window.location.reload();
        }, false);
        window.addEventListener("load", () => {
            if (w < 500) {
                VerticalMobile();
            }
            if (w > 400 && h < 400) {
                HorizontalMobile();
            }
        }, false);
    }
}
