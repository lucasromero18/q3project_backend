
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {name: "Dumbbells", img: "https://sep.yimg.com/ay/fitnessgiant/vtx-5-75lb-dumbbells-w-3-tier-shelf-dumbbell-rack-31.png" },
        {name: "Barbells", img: "https://cdn3.volusion.com/vgshx.xqrck/v/vspfiles/photos/BB-CLR-2.jpg?1544417347" },
        {name: "Rigs/Racks", img: "https://garagegymplanner.com/wp-content/uploads/2017/07/ROGUE-MONSTER-LITE-RML-490C-POWER-RACK.jpg" },
        {name: "Benches", img: "https://www.elitefts.com/media/catalog/product/cache/1/image/1000x/602f0fa2c1f0d1ba5e241f914e856ff9/0/-/0-90-incline-bench2.jpg" },
        {name: "Upper Body", img: "https://www.mensjournal.com/wp-content/uploads/mf/rope_pushdown_main_0.jpg" },
        {name: "Lower Body", img: "https://www.t-nation.com/system/publishing/articles/10005932/original/Surprising-New-Research-on-Rep-Ranges.jpg?1518640084" },
        {name: "Plates", img: "https://i.ebayimg.com/00/s/NDc5WDUwMA==/z/sBkAAOxycmBSyITp/$_35.JPG?set_id=2" },
        {name: "Miscellaneous", img: "https://masonfit.com/wp-content/uploads/2017/04/Screen-Shot-2017-04-24-at-10.39.34-AM.png" }
      ]);
    });
};
