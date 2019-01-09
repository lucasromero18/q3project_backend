
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {category_id: "1", name: "Hex-bells",  img: "https://www.roguefitness.com/media/catalog/product/cache/1/rogue_header_2015/472321edac810f9b2465a359d8cdc0b5/r/o/rogue-dumbbells-h.jpg", price: 880.00, description: "Sold in sets of 5lbs - 80lbs only. 6 sided and Rubber. Multi-purpose.", rating: 4},
        {category_id: "1", name: "Urethane-bells",  img: "https://www.thegymrevolution.co.uk/media/catalog/product/cache/1/image/800x800/9df78eab33525d08d6e5fb8d27136e95/p/u/pud-atx-atmo-03_1.jpg", price: 1900.00, description: "Sold in sets of 5lbs - 80lbs only. Circular urethane dumbbells, multi-purpose.", rating: 5},
        {category_id: "2", name: "Silver Barbell",  img: "https://cdn.shopify.com/s/files/1/1950/1891/products/ob1500_1_3cd57b95-788e-4f4c-b4dc-87898cf1c814_700x.jpg?v=1521423277", price: 150.00, description: "Extreme grip, 45lb FIT barbell.", rating: 5},
        {category_id: "3", name: "Wall Mount",  img: "https://images-na.ssl-images-amazon.com/images/I/31-738icoQL._SX425_.jpg", price: 500.00, description: "Easy mount, durable, and folds up to keep out of your way when not in use!", rating: 4},
        {category_id: "3", name: "Power Rack - 390c",  img: "https://www.roguefitness.com/media/catalog/product/cache/1/image/1500x1500/472321edac810f9b2465a359d8cdc0b5/r/m/rml-390-web-2.jpg", price: 915.00, description: "Squat rack with safety support.", rating: 5},
        {category_id: "3", name: "Power Rack - 690c",  img: "https://www.roguefitness.com/media/catalog/product/cache/1/image/1500x1500/472321edac810f9b2465a359d8cdc0b5/r/m/rml-690-web4.jpg", price: 1400.00, description: "Squat rack with safety support, and plate racks.", rating: 5},
        {category_id: "4", name: "Flat Bench",  img: "https://lifefitness.com/product-photos/6521/frame_color:7016,upholstery_color:7126/", price: 200.00, description: "Multi-purpose Flat Bench!, optimize your workouts!", rating: 4},
        {category_id: "4", name: "Flat / Incline bench",  img: "https://www.adamantbarbell.com/1493-thickbox_default/york-sts-flat-incline-bench.jpg", price: 300.00, description: "Multi-purpose adjustable Bench, optimize your workouts!", rating: 5},
        {category_id: "4", name: "Flat / Incline / Decline Bench",  img: "https://images-na.ssl-images-amazon.com/images/I/61jM%2B06jD4L._SX425_.jpg", price: 600.00, description: "Multi-purpose adjustable Bench, optimize your workouts!", rating: 5},
        {category_id: "5", name: "T-bar Row",  img: "https://www.bestgymequipment.co.uk/media/catalog/product/cache/1/image/700x700/9df78eab33525d08d6e5fb8d27136e95/1/6/16280_tbarrow.jpeg", price: 1200.00, description: "Utilize the T-bar row with close grip and wide grip back rows!", rating: 5},
        {category_id: "5", name: "V-Grip",  img: "https://images-na.ssl-images-amazon.com/images/I/31GjNVK5dxL._SY355_.jpg", price: 60.00, description: "Utilize the V-Grip for all of your Tricep and Bicep needs!", rating: 4},
        {category_id: "5", name: "Arm Blaster",  img: "https://www.ironcompany.com/media/catalog/product/cache/image/1000x1000/af097278c5db4767b0fe9bb92fe21690/c/a/cap-barbell-arm-blaster-front.jpg", price: 45.00, description: "Isolate those biceps with the Arm Blaster!", rating: 5},
        {category_id: "5", name: "Climbing Rope",  img: "https://cdn.shopify.com/s/files/1/0212/8106/products/Knotted-Climbing-Ropes-1_1024x1024.png?v=1441100735", price: 100.00, description: "Build endurance and explosiveness With the FIT Climbing Rope!", rating: 4},
        {category_id: "5", name: "Tricep Rope Pulldown",  img: "https://images-na.ssl-images-amazon.com/images/I/71uJ2ZyUjgL._AC_UL320_SR244,320_.jpg", price: 35.00, description: "Kill those triceps with Tricep Rope Pulldowns!", rating: 5},
        {category_id: "6", name: "Sled",  img: "https://www.fitnessdepot.ca/P11UTD8918/assets/ProductImages/CBSLEDPD.jpg?v=1543868097", price: 300.00, description: "Build explosiveness, strength, and endurance with the FIT Sled!", rating: 4},
        {category_id: "6", name: "Leg Press",  img: "https://images-na.ssl-images-amazon.com/images/I/81St0dA4VwL._SX425_.jpg", price: 1000.00, description: "Work the Quads and Hamstrings with our Leg Press!", rating: 5},
        {category_id: "6", name: "Hamstring Curls",  img: "https://lifefitness.com/product-photos/7556/frame_color:6931,second_frame_color:436,upholstery_color:7126/", price: 900.00, description: "Destroy your hamstrings with our FIT Leg Curl Machine!", rating: 4},
        {category_id: "6", name: "Squat Box",  img: "https://www.elitefts.com/media/catalog/product/cache/1/image/1500x/602f0fa2c1f0d1ba5e241f914e856ff9/b/o/box-squat-box-std_1.jpg", price: 75.00, description: "Break down your Squats with perfect form using our Squat Box!", rating: 5},
        {category_id: "7", name: "12-Sided Urethane Plates",  img: "https://cdn10.bigcommerce.com/s-dk84kd/products/179/images/576/OPHR3_001__84531.1428605333.225.225.jpg?c=2", price: 350.00, description: "Sold in sets of 2, (2.5lb - 45lb).", rating: 5},
        {category_id: "7", name: "Metal Olympic Plates",  img: "https://i2.wp.com/www.garagegymreviews.com/wp-content/uploads/2017/05/Rogue-Machined-Olympic-Plates-10-specs.jpg", price: 550.00, description: "Sold in sets of 2, (2.5lb - 45lb).", rating: 5},
        {category_id: "8", name: "Kettle Bells",  img: "https://pimage.sport-thieme.de/detail-fillscale/sport-thieme-kettlebells/219-8008", price: 275.00, description: "Sold in sets (5lb - 70lb)", rating: 5},
        {category_id: "8", name: "Resistance Band Pack",  img: "https://cdn.shopify.com/s/files/1/0763/4541/files/Resistance_Loop_Bands_by_Vive_3995d965-a568-462a-a68b-b74970b47a33_large.jpg?v=1520455686", price: 25.00, description: "Sold in packs of 5, resistance based on color.", rating: 4},
        {category_id: "8", name: "Battle Ropes",  img: "http://muscleropes.com/product_images/uploaded_images/muscleropestrio.jpg", price: 125.00, description: "Work the full body, build endurance and explosiveness with Battle Ropes!", rating: 5},
        {category_id: "8", name: "Medicine Balls",  img: "http://www.totalstrengthandspeed.com/content/images/thumbs/0000316_ultrafit-demolition-medicine-balls-14.jpeg", price: 100.00, description: "Enjoy full body explosive workouts with our Medicine Balls!", rating: 5}
      ]);
    });
};
