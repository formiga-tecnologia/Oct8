/*
  CREATE EVENTS TO PROCESSING
   * FISICS EVENTS (Where colider, where move, where wind..etc)
   * ANIMATION EVENTS Where Animate (Where animate the target object)
   * OBJECT EVENT Where modify one proprie with Heigth or widht
   * GENERIC EVENTS mouse, keyboard and other events providers with periferics
*/
export default class Oct8Events {
    WhereColide(PyshicsOct8, timeColider, Callfunction) {
        setInterval(() => {
            if (PyshicsOct8.colider == true) {
                Callfunction();
            }
            console.log(PyshicsOct8.colider);
        }, timeColider);
    }
}
