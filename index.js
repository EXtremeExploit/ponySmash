const ORDERED_LIST = [
    // Mane 6 
    { name: 'Applejack', img: 'mane6/Applejack', filly: false, eqg: false, gender: 'female' },
    { name: 'Fluttershy', img: 'mane6/Fluttershy', filly: false, eqg: false, gender: 'female' },
    { name: 'Pinkie Pie', img: 'mane6/Pinkie_Pie', filly: false, eqg: false, gender: 'female' },
    { name: 'Rainbow Dash', img: 'mane6/Rainbow_Dash', filly: false, eqg: false, gender: 'female' },
    { name: 'Rarity', img: 'mane6/Rarity', filly: false, eqg: false, gender: 'female' },
    { name: 'Twilight Sparkle', img: 'mane6/Twilight_Sparkle', filly: false, eqg: false, gender: 'female' },

    // EQG
    { name: 'Adagio Dazzle (EQG)', img: 'eqg/Adagio_Dazzle', filly: false, eqg: true, gender: 'female' },
    { name: 'Apple Bloom (EQG)', img: 'eqg/Apple_Bloom', filly: true, eqg: true, gender: 'female' },
    { name: 'Applejack (EQG)', img: 'eqg/Applejack', filly: false, eqg: true, gender: 'female' },
    { name: 'Aria Blaze (EQG)', img: 'eqg/Aria_Blaze', filly: false, eqg: true, gender: 'female' },
    { name: 'Big McIntosh (EQG)', img: 'eqg/Big_McIntosh', filly: false, eqg: true, gender: 'male' },
    { name: 'Bulk Biceps (EQG)', img: 'eqg/Bulk_Biceps', filly: false, eqg: true, gender: 'male' },
    { name: 'Cadance (EQG)', img: 'eqg/Cadance', filly: false, eqg: true, gender: 'female' },
    { name: 'Canter Zoom (EQG)', img: 'eqg/Canter_Zoom', filly: false, eqg: true, gender: 'male' },
    { name: 'Chestnut Magnifico (EQG)', img: 'eqg/Chestnut_Magnifico', filly: false, eqg: true, gender: 'female' },
    { name: 'Cranky Doodle (EQG)', img: 'eqg/Cranky_Doodle', filly: false, eqg: true, gender: 'male' },
    { name: 'Derpy (EQG)', img: 'eqg/Derpy', filly: false, eqg: true, gender: 'female' },
    { name: 'Diamond Tiara (EQG)', img: 'eqg/Diamond_Tiara', filly: true, eqg: true, gender: 'female' },
    { name: 'DJ Pon-3 (EQG)', img: 'eqg/DJ_Pon-3', filly: false, eqg: true, gender: 'female' },
    { name: 'Flash Sentry (EQG)', img: 'eqg/Flash_Sentry', filly: false, eqg: true, gender: 'male' },
    { name: 'Fluttershy (EQG)', img: 'eqg/Fluttershy', filly: false, eqg: true, gender: 'female' },
    { name: 'Gloriosa Daisy (EQG)', img: 'eqg/Gloriosa_Daisy', filly: false, eqg: true, gender: 'female' },
    { name: 'Transformed Gloriosa Daisy (EQG)', img: 'eqg/Gloriosa_Daisy_2', filly: false, eqg: true, gender: 'female' },
    { name: 'Granny Smith (EQG)', img: 'eqg/Granny_Smith', filly: false, eqg: true, gender: 'female' },
    { name: 'Indigo Zap (EQG)', img: 'eqg/Indigo_Zap', filly: false, eqg: true, gender: 'female' },
    { name: 'Juniper Montage (EQG)', img: 'eqg/Juniper_Montage', filly: false, eqg: true, gender: 'female' },
    { name: 'Kiwi Lollipop (EQG)', img: 'eqg/Kiwi_Lollipop', filly: false, eqg: true, gender: 'female' },
    { name: 'Lemon Zest (EQG)', img: 'eqg/Lemon_Zest', filly: false, eqg: true, gender: 'female' },
    { name: 'Lyra Heartstrings (EQG)', img: 'eqg/Lyra_Heartstrings', filly: false, eqg: true, gender: 'female' },
    { name: 'Maud Pie (EQG)', img: 'eqg/Maud_Pie', filly: false, eqg: true, gender: 'female' },
    { name: 'Micro Chips (EQG)', img: 'eqg/Micro_Chips', filly: false, eqg: true, gender: 'male' },
    { name: 'Miss Cheerilee (EQG)', img: 'eqg/Miss_Cheerilee', filly: false, eqg: true, gender: 'female' },
    { name: 'Octavia Melody (EQG)', img: 'eqg/Octavia_Melody', filly: false, eqg: true, gender: 'female' },
    { name: 'Photo Finish (EQG)', img: 'eqg/Photo_Finish', filly: false, eqg: true, gender: 'female' },
    { name: 'Pinkie Pie (EQG)', img: 'eqg/Pinkie_Pie', filly: false, eqg: true, gender: 'female' },
    { name: 'Pixel Pizzaz (EQG)', img: 'eqg/Pixel_Pizzaz', filly: false, eqg: true, gender: 'female' },
    { name: 'Celestia (EQG)', img: 'eqg/Principal_Celestia', filly: false, eqg: true, gender: 'female' },
    { name: 'Cinch (EQG)', img: 'eqg/Principal_Cinch', filly: false, eqg: true, gender: 'female' },
    { name: 'Rainbow Dash (EQG)', img: 'eqg/Rainbow_Dash', filly: false, eqg: true, gender: 'female' },
    { name: 'Rarity (EQG)', img: 'eqg/Rarity', filly: false, eqg: true, gender: 'female' },
    { name: 'Sandalwood (EQG)', img: 'eqg/Sandalwood', filly: false, eqg: true, gender: 'male' },
    { name: 'Sci-Twi (EQG)', img: 'eqg/Sci-Twi', filly: false, eqg: true, gender: 'female' },
    { name: 'Scootaloo (EQG)', img: 'eqg/Scootaloo', filly: true, eqg: true, gender: 'female' },
    { name: 'Silver Spoon (EQG)', img: 'eqg/Silver_Spoon', filly: true, eqg: true, gender: 'female' },
    { name: 'Snails (EQG)', img: 'eqg/Snails', filly: true, eqg: true, gender: 'male' },
    { name: 'Snips (EQG)', img: 'eqg/Snips', filly: true, eqg: true, gender: 'male' },
    { name: 'Sonata Dusk (EQG)', img: 'eqg/Sonata_Dusk', filly: false, eqg: true, gender: 'female' },
    { name: 'Sour Sweet (EQG)', img: 'eqg/Sour_Sweet', filly: false, eqg: true, gender: 'female' },
    { name: 'Spike (EQG)', img: 'eqg/Spike', filly: false, eqg: true, gender: 'male' },
    { name: 'Starlight Glimmer (EQG)', img: 'eqg/Starlight_Glimmer', filly: false, eqg: true, gender: 'female' },
    { name: 'Sugarcoat (EQG)', img: 'eqg/Sugarcoat', filly: false, eqg: true, gender: 'female' },
    { name: 'Sunny Flare (EQG)', img: 'eqg/Sunny_Flare', filly: false, eqg: true, gender: 'female' },
    { name: 'Sunset Shimmer (EQG)', img: 'eqg/Sunset_Shimmer', filly: false, eqg: true, gender: 'female' },
    { name: 'Supernova Zap (EQG)', img: 'eqg/Supernova_Zap', filly: false, eqg: true, gender: 'female' },
    { name: 'Sweetie Belle (EQG)', img: 'eqg/Sweetie_Belle', filly: true, eqg: true, gender: 'female' },
    { name: 'Sweetie Drops (Bon Bon) (EQG)', img: 'eqg/Sweetie_Drops', filly: false, eqg: true, gender: 'female' },
    { name: 'Timber Spruce (EQG)', img: 'eqg/Timber_Spruce', filly: false, eqg: true, gender: 'male' },
    { name: 'Trixie (EQG)', img: 'eqg/Trixie', filly: false, eqg: true, gender: 'female' },
    { name: 'Twilight Sparkle (EQG)', img: 'eqg/Twilight_Sparkle', filly: false, eqg: true, gender: 'female' },
    { name: 'Luna (EQG)', img: 'eqg/Vice_Principal_Luna', filly: false, eqg: true, gender: 'female' },
    { name: 'Vignette Valencia (EQG)', img: 'eqg/Vignette_Valencia', filly: false, eqg: true, gender: 'female' },
    { name: 'Violet Blurr (EQG)', img: 'eqg/Violet_Blurr', filly: false, eqg: true, gender: 'female' },
    { name: 'Wallflower Blush (EQG)', img: 'eqg/Wallflower_Blush', filly: false, eqg: true, gender: 'female' },
    { name: 'Zephyr Breeze (EQG)', img: 'eqg/Zephyr_Breeze', filly: false, eqg: true, gender: 'male' },

    // Unsorted (Please help)
    { name: 'Adagio Dazzle', img: 'unsorted/Adagio_Dazzle', filly: false, eqg: false, gender: 'female' },
    { name: 'Ahuizotl', img: 'unsorted/Ahuizotl', filly: false, eqg: false, gender: 'female' },
    { name: 'Aloe Vera', img: 'unsorted/Aloe_Vera', filly: false, eqg: false, gender: 'female' },
    { name: 'Amethyst Star', img: 'unsorted/Amethyst_Star', filly: false, eqg: false, gender: 'female' },
    { name: 'Angel', img: 'unsorted/Angel', filly: false, eqg: false, gender: 'male' },
    { name: 'Angel Wings', img: 'unsorted/Angel_Wings', filly: false, eqg: false, gender: 'female' },
    { name: 'Apple Bloom', img: 'unsorted/Apple_Bloom', filly: true, eqg: false, gender: 'female' },
    { name: 'Apple Rose', img: 'unsorted/Apple_Rose', filly: false, eqg: false, gender: 'female' },
    { name: 'Apple Strudel', img: 'unsorted/Apple_Strudel', filly: false, eqg: false, gender: 'male' },
    { name: 'Applesauce', img: 'unsorted/Applesauce', filly: false, eqg: false, gender: 'female' },
    { name: 'Aria Blaze', img: 'unsorted/Aria_Blaze', filly: false, eqg: false, gender: 'female' },
    { name: 'Aunt Holiday', img: 'unsorted/Aunt_Holiday', filly: false, eqg: false, gender: 'female' },
    { name: 'Aunt Orange', img: 'unsorted/Aunt_Orange', filly: false, eqg: false, gender: 'female' },
    { name: 'Aunt Lofty', img: 'unsorted/Auntie_Lofty', filly: false, eqg: false, gender: 'female' },
    { name: 'Autumn Blaze', img: 'unsorted/Autumn_Blaze', filly: false, eqg: false, gender: 'female' },
    { name: 'Babs Seed', img: 'unsorted/Babs_Seed', filly: true, eqg: false, gender: 'female' },
    { name: 'Barley Barrel', img: 'unsorted/Barley_Barrel', filly: true, eqg: false, gender: 'female' },
    { name: 'Big McIntosh', img: 'unsorted/Big_McIntosh', filly: false, eqg: false, gender: 'male' },
    { name: 'Blaze', img: 'unsorted/Blaze', filly: false, eqg: false, gender: 'female' },
    { name: 'Bloomberg', img: 'unsorted/Bloomberg', filly: false, eqg: false, gender: 'female' },
    { name: 'Blossomforth', img: 'unsorted/Blossomforth', filly: false, eqg: false, gender: 'female' },
    { name: 'Boneless', img: 'unsorted/Boneless', filly: false, eqg: false, gender: 'female' },
    { name: 'Boulder', img: 'unsorted/Boulder', filly: false, eqg: false, gender: 'female' },
    { name: 'Bow Hothoof', img: 'unsorted/Bow_Hothoof', filly: false, eqg: false, gender: 'male' },
    { name: 'Braeburn', img: 'unsorted/Braeburn', filly: false, eqg: false, gender: 'male' },
    { name: 'Bright Mac', img: 'unsorted/Bright_Mac', filly: false, eqg: false, gender: 'male' },
    { name: 'Bulk Biceps', img: 'unsorted/Bulk_Biceps', filly: false, eqg: false, gender: 'male' },
    { name: 'Caballeron', img: 'unsorted/Caballeron', filly: false, eqg: false, gender: 'male' },
    { name: 'Capper', img: 'unsorted/Capper', filly: false, eqg: false, gender: 'male' },
    { name: 'Captain Celaeno', img: 'unsorted/Captain_Celaeno', filly: false, eqg: false, gender: 'female' },
    { name: 'Celestia', img: 'unsorted/Celestia', filly: false, eqg: false, gender: 'female' },
    { name: 'Chancellor Neighsay', img: 'unsorted/Chancellor_Neighsay', filly: false, eqg: false, gender: 'male' },
    { name: 'Cheerilee', img: 'unsorted/Cheerilee', filly: false, eqg: false, gender: 'female' },
    { name: 'Cheese Sandwich', img: 'unsorted/Cheese_Sandwich', filly: false, eqg: false, gender: 'male' },
    { name: 'Cherry Jubilee', img: 'unsorted/Cherry_Jubilee', filly: false, eqg: false, gender: 'female' },
    { name: 'Chief Thunderhooves', img: 'unsorted/Chief_Thunderhooves', filly: false, eqg: false, gender: 'male' },
    { name: 'Claude', img: 'unsorted/Claude', filly: false, eqg: false, gender: 'male' },
    { name: 'Clear Sky', img: 'unsorted/Clear_Sky', filly: false, eqg: false, gender: 'female' },
    { name: 'Cloud Chaser', img: 'unsorted/Cloud_Chaser', filly: false, eqg: false, gender: 'male' },
    { name: 'Cloudy Quartz', img: 'unsorted/Cloudy_Quartz', filly: false, eqg: false, gender: 'female' },
    { name: 'Coco Pommel', img: 'unsorted/Coco_Pommel', filly: false, eqg: false, gender: 'female' },
    { name: 'Coloratura', img: 'unsorted/Coloratura', filly: false, eqg: false, gender: 'female' },
    { name: 'Coconut Cream', img: 'unsorted/Coconut_Cream', filly: true, eqg: false, gender: 'female' },
    { name: 'Cookie Crumbles', img: 'unsorted/Cookie_Crumbles', filly: false, eqg: false, gender: 'female' },
    { name: 'Coriander Cumin', img: 'unsorted/Coriander_Cumin', filly: false, eqg: false, gender: 'male' },
    { name: 'Cozy Glow', img: 'unsorted/Cozy_Glow', filly: true, eqg: false, gender: 'female' },
    { name: 'Cranky Doodle', img: 'unsorted/Cranky_Doodle', filly: false, eqg: false, gender: 'male' },
    { name: 'Daring Do', img: 'unsorted/Daring_Do', filly: false, eqg: false, gender: 'female' },
    { name: 'Davenport', img: 'unsorted/Davenport', filly: false, eqg: false, gender: 'male' },
    { name: 'Derpy', img: 'unsorted/Derpy', filly: false, eqg: false, gender: 'female' },
    { name: 'Diamond Tiara', img: 'unsorted/Diamond_Tiara', filly: true, eqg: false, gender: 'female' },
    { name: 'Discord', img: 'unsorted/Discord', filly: false, eqg: false, gender: 'male' },
    { name: 'DJ Pon-3', img: 'unsorted/DJ_Pon-3', filly: false, eqg: false, gender: 'female' },
    { name: 'Doc Top', img: 'unsorted/Doc_Top', filly: false, eqg: false, gender: 'male' },
    { name: 'Doctor Horse', img: 'unsorted/Doctor_Horse', filly: false, eqg: false, gender: 'male' },
    { name: 'Double Diamond', img: 'unsorted/Double_Diamond', filly: false, eqg: false, gender: 'male' },
    { name: 'Dr. Hooves', img: 'unsorted/Dr._Hooves', filly: false, eqg: false, gender: 'male' },
    { name: 'Fancy Pants', img: 'unsorted/Fancy_Pants', filly: false, eqg: false, gender: 'male' },
    { name: 'Feather Bangs', img: 'unsorted/Feather_Bangs', filly: false, eqg: false, gender: 'male' },
    { name: 'Featherweight', img: 'unsorted/Featherweight', filly: true, eqg: false, gender: 'male' },
    { name: 'Fernando', img: 'unsorted/Fernando', filly: false, eqg: false, gender: 'male' },
    { name: 'Filthy Rich', img: 'unsorted/Filthy_Rich', filly: false, eqg: false, gender: 'male' },
    { name: 'Firelight', img: 'unsorted/Firelight', filly: false, eqg: false, gender: 'male' },
    { name: 'Fire Streak', img: 'unsorted/Fire_Streak', filly: false, eqg: false, gender: 'male' },
    { name: 'Flam', img: 'unsorted/Flam', filly: false, eqg: false, gender: 'male' },
    { name: 'Flash Magnus', img: 'unsorted/Flash_Magnus', filly: false, eqg: false, gender: 'male' },
    { name: 'Flash Sentry', img: 'unsorted/Flash_Sentry', filly: false, eqg: false, gender: 'male' },
    { name: 'Fleetfoot', img: 'unsorted/Fleetfoot', filly: false, eqg: false, gender: 'female' },
    { name: 'Fleur Dis Lee', img: 'unsorted/Fleur_Dis_Lee', filly: false, eqg: false, gender: 'female' },
    { name: 'Flim', img: 'unsorted/Flim', filly: false, eqg: false, gender: 'male' },
    { name: 'Flitter', img: 'unsorted/Flitter', filly: false, eqg: false, gender: 'female' },
    { name: 'Flurry Heart', img: 'unsorted/Flurry_Heart', filly: true, eqg: false, gender: 'female' },
    { name: 'Gabby', img: 'unsorted/Gabby', filly: false, eqg: false, gender: 'female' },
    { name: 'Gallus', img: 'unsorted/Gallus', filly: true, eqg: false, gender: 'male' },
    { name: 'Garble', img: 'unsorted/Garble', filly: false, eqg: false, gender: 'male' },
    { name: 'Gilda', img: 'unsorted/Gilda', filly: false, eqg: false, gender: 'female' },
    { name: 'Gizmo', img: 'unsorted/Gizmo', filly: false, eqg: false, gender: 'male' },
    { name: 'Gladmane', img: 'unsorted/Gladmane', filly: false, eqg: false, gender: 'male' },
    { name: 'Golden Harvest', img: 'unsorted/Golden_Harvest', filly: false, eqg: false, gender: 'female' },
    { name: 'Goldie Delicious', img: 'unsorted/Goldie_Delicious', filly: false, eqg: false, gender: 'female' },
    { name: 'Grampa Gruff', img: 'unsorted/Grampa_Gruff', filly: false, eqg: false, gender: 'male' },
    { name: 'Grand Pear', img: 'unsorted/Grand_Pear', filly: false, eqg: false, gender: 'male' },
    { name: 'Granny Smith', img: 'unsorted/Granny_Smith', filly: false, eqg: false, gender: 'female' },
    { name: 'Greta', img: 'unsorted/Greta', filly: false, eqg: false, gender: 'female' },
    { name: 'Grogar', img: 'unsorted/Grogar', filly: false, eqg: false, gender: 'male' },
    { name: 'Gummy', img: 'unsorted/Gummy', filly: false, eqg: false, gender: 'female' },
    { name: 'Gustave', img: 'unsorted/Gustave', filly: false, eqg: false, gender: 'male' },
    { name: 'Hayseed Turnip Truck', img: 'unsorted/Hayseed_Turnip_Truck', filly: false, eqg: false, gender: 'male' },
    { name: 'High Winds', img: 'unsorted/High_Winds', filly: false, eqg: false, gender: 'female' },
    { name: 'Hoity Toity', img: 'unsorted/Hoity_Toity', filly: false, eqg: false, gender: 'male' },
    { name: 'Hondo Flanks', img: 'unsorted/Hondo_Flanks', filly: false, eqg: false, gender: 'male' },
    { name: 'Igneous Rock', img: 'unsorted/Igneous_Rock', filly: false, eqg: false, gender: 'male' },
    { name: 'Iron Will', img: 'unsorted/Iron_Will', filly: false, eqg: false, gender: 'male' },
    { name: 'Jack Pot', img: 'unsorted/Jack_Pot', filly: false, eqg: false, gender: 'male' },
    { name: 'Jet Set', img: 'unsorted/Jet_Set', filly: false, eqg: false, gender: 'male' },
    { name: 'Joe', img: 'unsorted/Joe', filly: false, eqg: false, gender: 'male' },
    { name: 'Junebug', img: 'unsorted/Junebug', filly: false, eqg: false, gender: 'female' },
    { name: 'Kerfuffle', img: 'unsorted/Kerfuffle', filly: false, eqg: false, gender: 'female' },
    { name: 'King Sombra', img: 'unsorted/King_Sombra', filly: false, eqg: false, gender: 'male' },
    { name: 'Lemon Hearts', img: 'unsorted/Lemon_Hearts', filly: false, eqg: false, gender: 'female' },
    { name: 'Lightning Dust', img: 'unsorted/Lightning_Dust', filly: false, eqg: false, gender: 'female' },
    { name: 'Limestone Pie', img: 'unsorted/Limestone_Pie', filly: false, eqg: false, gender: 'female' },
    { name: 'Little Strongheart', img: 'unsorted/Little_Strongheart', filly: false, eqg: false, gender: 'female' },
    { name: 'Lord Tirek', img: 'unsorted/Lord_Tirek', filly: false, eqg: false, gender: 'male' },
    { name: 'Lotus Blossom', img: 'unsorted/Lotus_Blossom', filly: false, eqg: false, gender: 'female' },
    { name: 'Luster Dawn', img: 'unsorted/Luster_Dawn', filly: false, eqg: false, gender: 'female' },
    { name: 'Lyra Heartstrings', img: 'unsorted/Lyra_Heartstrings', filly: false, eqg: false, gender: 'female' },
    { name: 'Mage Meadowbrook', img: 'unsorted/Mage_Meadowbrook', filly: false, eqg: false, gender: 'female' },
    { name: 'Mane Allgood', img: 'unsorted/Mane_Allgood', filly: false, eqg: false, gender: 'female' },
    { name: 'Mane Goodall', img: 'unsorted/Mane_Goodall', filly: false, eqg: false, gender: 'female' },
    { name: 'Marble Pie', img: 'unsorted/Marble_Pie', filly: false, eqg: false, gender: 'female' },
    { name: 'Mare Do Well', img: 'unsorted/Mare_Do_Well', filly: false, eqg: false, gender: 'female' },
    { name: 'Matilda', img: 'unsorted/Matilda', filly: false, eqg: false, gender: 'female' },
    { name: 'Maud Pie', img: 'unsorted/Maud_Pie', filly: false, eqg: false, gender: 'female' },
    { name: 'Mayor', img: 'unsorted/Mayor', filly: false, eqg: false, gender: 'female' },
    { name: 'Minuette', img: 'unsorted/Minuette', filly: false, eqg: false, gender: 'female' },
    { name: 'Mistmane', img: 'unsorted/Mistmane', filly: false, eqg: false, gender: 'female' },
    { name: 'Misty Fly', img: 'unsorted/Misty_Fly', filly: false, eqg: false, gender: 'female' },
    { name: 'Moody Root', img: 'unsorted/Moody_Root', filly: false, eqg: false, gender: 'male' },
    { name: 'Moon Dancer', img: 'unsorted/Moon_Dancer', filly: false, eqg: false, gender: 'female' },
    { name: 'Mr. Cake', img: 'unsorted/Mr._Cake', filly: false, eqg: false, gender: 'male' },
    { name: 'Mr. Hoofington', img: 'unsorted/Mr._Hoofington', filly: false, eqg: false, gender: 'male' },
    { name: 'Mr. Shy', img: 'unsorted/Mr._Shy', filly: false, eqg: false, gender: 'male' },
    { name: 'Mr. Stripes', img: 'unsorted/Mr._Stripes', filly: false, eqg: false, gender: 'male' },
    { name: 'Mrs. Cake', img: 'unsorted/Mrs._Cake', filly: false, eqg: false, gender: 'male' },
    { name: 'Mrs. Hoofington', img: 'unsorted/Mrs._Hoofington', filly: false, eqg: false, gender: 'female' },
    { name: 'Mrs. Shy', img: 'unsorted/Mrs._Shy', filly: false, eqg: false, gender: 'female' },
    { name: 'Ms. Harshwhinny', img: 'unsorted/Ms._Harshwhinny', filly: false, eqg: false, gender: 'female' },
    { name: 'Ms. Peachbottom', img: 'unsorted/Ms._Peachbottom', filly: false, eqg: false, gender: 'female' },
    { name: 'Mudbriar', img: 'unsorted/Mudbriar', filly: false, eqg: false, gender: 'male' },
    { name: 'Mulia Mild', img: 'unsorted/Mulia_Mild', filly: false, eqg: false, gender: 'female' },
    { name: 'Night Glider', img: 'unsorted/Night_Glider', filly: false, eqg: false, gender: 'female' },
    { name: 'Night Light', img: 'unsorted/Night_Light', filly: false, eqg: false, gender: 'male' },
    { name: 'Nightmare Moon', img: 'unsorted/Nightmare_Moon', filly: false, eqg: false, gender: 'female' },
    { name: 'Nurse Redheart', img: 'unsorted/Nurse_Redheart', filly: false, eqg: false, gender: 'female' },
    { name: 'Nurse Snowheart', img: 'unsorted/Nurse_Snowheart', filly: false, eqg: false, gender: 'female' },
    { name: 'Ocean Flow', img: 'unsorted/Ocean_Flow', filly: false, eqg: false, gender: 'female' },
    { name: 'Ocellus', img: 'unsorted/Ocellus', filly: true, eqg: false, gender: 'female' },
    { name: 'Opalescence', img: 'unsorted/Opalescence', filly: false, eqg: false, gender: 'female' },
    { name: 'Owlowiscious', img: 'unsorted/Owlowiscious', filly: false, eqg: false, gender: 'female' },
    { name: 'Party Favor', img: 'unsorted/Party_Favor', filly: false, eqg: false, gender: 'male' },
    { name: 'Peachy Pie', img: 'unsorted/Peachy_Pie', filly: true, eqg: false, gender: 'female' },
    { name: 'Pear Butter', img: 'unsorted/Pear_Butter', filly: false, eqg: false, gender: 'female' },
    { name: 'Petunia Petals', img: 'unsorted/Petunia_Petals', filly: false, eqg: false, gender: 'female' },
    { name: 'Pharynx (Changeling)', img: 'unsorted/Pharynx', filly: false, eqg: false, gender: 'male' },
    { name: 'Pharynx (Metamorphosed)', img: 'unsorted/Metamorphosed_Pharynx', filly: false, eqg: false, gender: 'male' },
    { name: 'Philomena', img: 'unsorted/Philomena', filly: false, eqg: false, gender: 'female' },
    { name: 'Philomena (Phoenix)', img: 'unsorted/Philomena_phoenix', filly: false, eqg: false, gender: 'female' },
    { name: 'Photo Finish', img: 'unsorted/Photo_Finish', filly: false, eqg: false, gender: 'female' },
    { name: 'Pickle Barrel', img: 'unsorted/Pickle_Barrel', filly: true, eqg: false, gender: 'male' },
    { name: 'Pipsqueak', img: 'unsorted/Pipsqueak', filly: true, eqg: false, gender: 'male' },
    { name: 'Plaid Stripes', img: 'unsorted/Plaid_Stripes', filly: true, eqg: false, gender: 'female' },
    { name: 'Pound Cake', img: 'unsorted/Pound_Cake', filly: true, eqg: false, gender: 'male' },
    { name: 'Pound Cake (Future)', img: 'unsorted/Future_Pound_Cake', filly: false, eqg: false, gender: 'male' },
    { name: 'Prim Hemline', img: 'unsorted/Prim_Hemline', filly: false, eqg: false, gender: 'female' },
    { name: 'Prince Blueblood', img: 'unsorted/Prince_Blueblood', filly: false, eqg: false, gender: 'male' },
    { name: 'Prince Rutherford', img: 'unsorted/Prince_Rutherford', filly: false, eqg: false, gender: 'male' },
    { name: 'Princess Cadance', img: 'unsorted/Princess_Cadance', filly: false, eqg: false, gender: 'female' },
    { name: 'Princess Ember', img: 'unsorted/Princess_Ember', filly: false, eqg: false, gender: 'female' },
    { name: 'Princess Luna', img: 'unsorted/Princess_Luna', filly: false, eqg: false, gender: 'female' },
    { name: 'Princess Skystar (Seapony)', img: 'unsorted/Princess_Skystar', filly: false, eqg: false, gender: 'female' },
    { name: 'Princess Skystar (Hippogriff)', img: 'unsorted/Princess_Skystar_Hippogriff', filly: false, eqg: false, gender: 'female' },
    { name: 'Pumpkin Cake', img: 'unsorted/Pumpkin_Cake', filly: true, eqg: false, gender: 'female' },
    { name: 'Queen Chrysalis', img: 'unsorted/Queen_Chrysalis', filly: false, eqg: false, gender: 'female' },
    { name: 'Quibble Pants', img: 'unsorted/Quibble_Pants', filly: false, eqg: false, gender: 'male' },
    { name: 'Randolph', img: 'unsorted/Randolph', filly: false, eqg: false, gender: 'male' },
    { name: 'Rara', img: 'unsorted/Rara', filly: false, eqg: false, gender: 'female' },
    { name: 'Rockhoof', img: 'unsorted/Rockhoof', filly: false, eqg: false, gender: 'male' },
    { name: 'Roma', img: 'unsorted/Roma', filly: false, eqg: false, gender: 'female' },
    { name: 'Roseluck', img: 'unsorted/Roseluck', filly: false, eqg: false, gender: 'female' },
    { name: 'Rumble', img: 'unsorted/Rumble', filly: true, eqg: false, gender: 'male' },
    { name: 'Saffron Masala', img: 'unsorted/Saffron_Masala', filly: false, eqg: false, gender: 'female' },
    { name: 'Sandbar', img: 'unsorted/Sandbar', filly: true, eqg: false, gender: 'male' },
    { name: 'Sapphire Shores', img: 'unsorted/Sapphire_Shores', filly: false, eqg: false, gender: 'female' },
    { name: 'Sassy Saddles', img: 'unsorted/Sassy_Saddles', filly: false, eqg: false, gender: 'female' },
    { name: 'Scootaloo', img: 'unsorted/Scootaloo', filly: true, eqg: false, gender: 'female' },
    { name: 'Scorpan', img: 'unsorted/Scorpan', filly: false, eqg: false, gender: 'male' },
    { name: 'Seabreeze', img: 'unsorted/Seabreeze', filly: false, eqg: false, gender: 'female' },
    { name: 'Sheriff Silverstar', img: 'unsorted/Sheriff_Silverstar', filly: false, eqg: false, gender: 'male' },
    { name: 'Shining Armor', img: 'unsorted/Shining_Armor', filly: false, eqg: false, gender: 'male' },
    { name: 'Silver Shill', img: 'unsorted/Silver_Shill', filly: false, eqg: false, gender: 'male' },
    { name: 'Silver Spoon', img: 'unsorted/Silver_Spoon', filly: true, eqg: false, gender: 'female' },
    { name: 'Silverstream', img: 'unsorted/Silverstream', filly: false, eqg: false, gender: 'female' },
    { name: 'Silver Zoom', img: 'unsorted/Silver_Zoom', filly: false, eqg: false, gender: 'male' },
    { name: 'Sky Beak', img: 'unsorted/Sky_Beak', filly: false, eqg: false, gender: 'male' },
    { name: 'Sky Stinger', img: 'unsorted/Sky_Stinger', filly: false, eqg: false, gender: 'male' },
    { name: 'Sludge', img: 'unsorted/Sludge', filly: false, eqg: false, gender: 'male' },
    { name: 'Smolder', img: 'unsorted/Smolder', filly: true, eqg: false, gender: 'female' },
    { name: 'Smooze', img: 'unsorted/Smooze', filly: false, eqg: false, gender: 'female' },
    { name: 'Snails', img: 'unsorted/Snails', filly: true, eqg: false, gender: 'male' },
    { name: 'Snap Shutter', img: 'unsorted/Snap_Shutter', filly: false, eqg: false, gender: 'male' },
    { name: 'Snips', img: 'unsorted/Snips', filly: true, eqg: false, gender: 'male' },
    { name: 'Soarin', img: 'unsorted/Soarin', filly: false, eqg: false, gender: 'male' },
    { name: 'Somnambula', img: 'unsorted/Somnambula', filly: false, eqg: false, gender: 'female' },
    { name: 'Sonata Dusk', img: 'unsorted/Sonata_Dusk', filly: false, eqg: false, gender: 'female' },
    { name: 'Songbird Serenade', img: 'unsorted/Songbird_Serenade', filly: false, eqg: false, gender: 'female' },
    { name: 'Spearhead', img: 'unsorted/Spearhead', filly: false, eqg: false, gender: 'male' },
    { name: 'Spike', img: 'unsorted/Spike', filly: false, eqg: false, gender: 'male' },
    { name: 'Spitfire', img: 'unsorted/Spitfire', filly: false, eqg: false, gender: 'female' },
    { name: 'Spoiled Rich', img: 'unsorted/Spoiled_Rich', filly: false, eqg: false, gender: 'female' },
    { name: 'Starlight Glimmer', img: 'unsorted/Starlight_Glimmer', filly: false, eqg: false, gender: 'female' },
    { name: 'Star Swirl the Bearded', img: 'unsorted/Star_Swirl_the_Bearded', filly: false, eqg: false, gender: 'male' },
    { name: 'Stellar Eclipse', img: 'unsorted/Stellar_Eclipse', filly: false, eqg: false, gender: 'male' },
    { name: 'Stellar Flare', img: 'unsorted/Stellar_Flare', filly: false, eqg: false, gender: 'female' },
    { name: 'Steven Magnet', img: 'unsorted/Steven_Magnet', filly: false, eqg: false, gender: 'male' },
    { name: 'Stormwalker', img: 'unsorted/Stormwalker', filly: false, eqg: false, gender: 'female' },
    { name: 'Stygian', img: 'unsorted/Stygian', filly: false, eqg: false, gender: 'male' },
    { name: 'Sugar Belle', img: 'unsorted/Sugar_Belle', filly: false, eqg: false, gender: 'female' },
    { name: 'Sunburst', img: 'unsorted/Sunburst', filly: false, eqg: false, gender: 'male' },
    { name: 'Sunny Daze', img: 'unsorted/Sunny_Daze', filly: true, eqg: false, gender: 'female' },
    { name: 'Sunny Skies', img: 'unsorted/Sunny_Skies', filly: false, eqg: false, gender: 'male' },
    { name: 'Sunset Shimmer', img: 'unsorted/Sunset_Shimmer', filly: false, eqg: false, gender: 'female' },
    { name: 'Sunspot', img: 'unsorted/Sunspot', filly: false, eqg: false, gender: 'male' },
    { name: 'Suri Polomare', img: 'unsorted/Suri_Polomare', filly: false, eqg: false, gender: 'female' },
    { name: 'Surprise', img: 'unsorted/Surprise', filly: false, eqg: false, gender: 'female' },
    { name: 'Svengallop', img: 'unsorted/Svengallop', filly: false, eqg: false, gender: 'male' },
    { name: 'Sweetie Belle', img: 'unsorted/Sweetie_Belle', filly: true, eqg: false, gender: 'female' },
    { name: 'Sweetie Drops (Bon Bon)', img: 'unsorted/Sweetie_Drops', filly: false, eqg: false, gender: 'female' },
    { name: 'Tag-A-Long', img: 'unsorted/Tag-A-Long', filly: true, eqg: false, gender: 'female' },
    { name: 'Tank', img: 'unsorted/Tank', filly: false, eqg: false, gender: 'female' },
    { name: 'Teddie Safari', img: 'unsorted/Teddie_Safari', filly: false, eqg: false, gender: 'female' },
    { name: 'Tempest Shadow', img: 'unsorted/Tempest_Shadow', filly: false, eqg: false, gender: 'female' },
    { name: 'Tender Taps', img: 'unsorted/Tender_Taps', filly: true, eqg: false, gender: 'male' },
    { name: 'Terramar', img: 'unsorted/Terramar', filly: false, eqg: false, gender: 'male' },
    { name: 'The Storm King', img: 'unsorted/The_Storm_King', filly: false, eqg: false, gender: 'male' },
    { name: 'Thorax', img: 'unsorted/Thorax', filly: false, eqg: false, gender: 'male' },
    { name: 'Thunderlane', img: 'unsorted/Thunderlane', filly: false, eqg: false, gender: 'male' },
    { name: 'Tom', img: 'unsorted/Tom', filly: false, eqg: false, gender: 'female' },
    { name: 'Toola Roola', img: 'unsorted/Toola_Roola', filly: true, eqg: false, gender: 'female' },
    { name: 'Torque Wrench', img: 'unsorted/Torque_Wrench', filly: false, eqg: false, gender: 'female' },
    { name: 'Tree Hugger', img: 'unsorted/Tree_Hugger', filly: false, eqg: false, gender: 'female' },
    { name: 'Trenderhoof', img: 'unsorted/Trenderhoof', filly: false, eqg: false, gender: 'male' },
    { name: 'Trixie', img: 'unsorted/Trixie', filly: false, eqg: false, gender: 'female' },
    { name: 'Trouble Shoes', img: 'unsorted/Trouble_Shoes', filly: false, eqg: false, gender: 'male' },
    { name: 'Twiggy', img: 'unsorted/Twiggy', filly: false, eqg: false, gender: 'female' },
    { name: 'Twilight Velvet', img: 'unsorted/Twilight_Velvet', filly: false, eqg: false, gender: 'female' },
    { name: 'Twinkleshine', img: 'unsorted/Twinkleshine', filly: false, eqg: false, gender: 'female' },
    { name: 'Twist', img: 'unsorted/Twist', filly: true, eqg: false, gender: 'female' },
    { name: 'Uncle Orange', img: 'unsorted/Uncle_Orange', filly: false, eqg: false, gender: 'male' },
    { name: 'Upper Crust', img: 'unsorted/Upper_Crust', filly: false, eqg: false, gender: 'female' },
    { name: 'Vapor Trail', img: 'unsorted/Vapor_Trail', filly: false, eqg: false, gender: 'female' },
    { name: 'Wind Rider', img: 'unsorted/Wind_Rider', filly: false, eqg: false, gender: 'female' },
    { name: 'Wind Sprint', img: 'unsorted/Wind_Sprint', filly: true, eqg: false, gender: 'female' },
    { name: 'Windy Whistles', img: 'unsorted/Windy_Whistles', filly: false, eqg: false, gender: 'female' },
    { name: 'Winona', img: 'unsorted/Winona', filly: false, eqg: false, gender: 'female' },
    { name: 'Yona', img: 'unsorted/Yona', filly: true, eqg: false, gender: 'female' },
    { name: 'Yona (Pony)', img: 'unsorted/Yona_pony', filly: true, eqg: false, gender: 'female' },
    { name: 'Zecora', img: 'unsorted/Zecora', filly: false, eqg: false, gender: 'female' },
    { name: 'Zephyr Breeze', img: 'unsorted/Zephyr_Breeze', filly: false, eqg: false, gender: 'male' },
    { name: 'Zesty Gourmand', img: 'unsorted/Zesty_Gourmand', filly: false, eqg: false, gender: 'female' },
    { name: 'Zipporwhill', img: 'unsorted/Zipporwhill', filly: true, eqg: false, gender: 'female' },
];

let filteredOrderedList;

let list;

let i = 0;

let smashCount = 0;
let lastSmashName = '';

function getShameText() {
    if (smashCount == 0) return 'Damn, not a single one.';

    if (smashCount == 1 && (lastSmashName == 'Tom' || lastSmashName == 'Boulder')) return 'A ROCK. A FUCKING ROCK. HOW?!?!';

    if (smashCount == 1) return `You are loyal to ${lastSmashName}... I like it.`;
    if (smashCount == 2) return `So you want a threesome?`;
    if (smashCount == 69) return `Nice.`;

    const percentage = Math.floor((smashCount / list.length) * 100);

    if (percentage < 10) return 'Thats very few ponies, you have super high standards.';
    if (percentage < 33) return 'Not even one third, quality taste.';
    if (percentage < 50) return 'Thats decent. I guess...';
    if (percentage < 60) return 'Mares. Am I right?.';
    if (percentage < 75) return 'Thats a lot of smashing.';
    if (percentage < 90) return 'I\'m pretty sure you would be at it for days with this many smashes.';
    if (percentage < 100) return 'You are incredibly desperate for some smashing. You have absolutely no shame...';
    if (percentage == 100) return 'You are a true smasher. You would smash everything, including two rocks and a tree. I can\'t even begin to comprehend how mentally insane you are. You are definitely desperate for some smashing. Seek help';

    return '';
}

function setCharacter(number) {
    let img = document.getElementById('pony-img');
    let name = document.getElementById('pony-name');
    if (number >= list.length) {
        img.remove();
        name.remove();
        let buttonsHolder = document.getElementById('buttons-holder');
        buttonsHolder.remove();

        let finishedText = `Its over!, You would smash ${smashCount} out of ${list.length} ponies.`;
        let shameText = getShameText();

        let finishedParagrah = document.createElement('p');
        let shameParagraph = document.createElement('p');
        let githubParagraph = document.createElement('p');
        finishedParagrah.textContent = finishedText;
        shameParagraph.textContent = shameText;
        githubParagraph.textContent = `If you want to a character or contribute, read the README on GitHub (its at the bottom of the page)`;
        finishedParagrah.classList.add('pony-name');
        shameParagraph.classList.add('pony-name');
        githubParagraph.classList.add('pony-name');
        let e = document.getElementsByClassName('page-inner')[0];
        e.appendChild(finishedParagrah);
        e.appendChild(shameParagraph);
        e.appendChild(document.createElement('br'));
        e.appendChild(githubParagraph);
    } else {
        name.textContent = list[number].name;
        img.src = `characters/${list[number].img}.png`;
        img.alt = name.textContent;

        if (list[number].filly) {
            document.getElementById('smash').textContent = 'Cute! (←)';
            document.getElementById('pass').textContent = 'Not cute (→)';
        } else {
            document.getElementById('smash').textContent = 'SMASH! (←)';
            document.getElementById('pass').textContent = 'Pass (→)';
        }
    }
}

function smashClick() {
    const b = document.getElementById('smash');
    b.classList.remove('smash-button-anim');
    requestAnimationFrame((time) => {
        requestAnimationFrame((time) => {
            b.classList.add('smash-button-anim');
        });
    });

    lastSmashName = list[i].name;

    i++;
    smashCount++;
    console.log(`Char: ${i}/${list.length} SMASH #${smashCount}`);
    setCharacter(i);
}

function passClick() {
    const b = document.getElementById('pass');
    b.classList.remove('pass-button-anim');
    requestAnimationFrame((time) => {
        requestAnimationFrame((time) => {
            b.classList.add('pass-button-anim');
        });
    });

    i++;
    console.log(`Char: ${i}/${list.length} SMASHES #${smashCount}`);
    setCharacter(i);
}

/**
 *
 * @param {KeyboardEvent} e
 * @returns
 */
function keyDownHandler(e) {
    if (e.repeat)
        return;

    switch (e.key) {
        case 'ArrowLeft': smashClick(); break;
        case 'ArrowRight': passClick(); break;
    }

    if (i >= list.length)
        document.removeEventListener('keydown', keyDownHandler);
}

{
    function menuOptionChange() {
        let showEQG = document.getElementById('show-eqg').checked;
        let showUnderage = document.getElementById('show-underage').checked;
        let showMales = document.getElementById('show-males').checked;

        filteredOrderedList = ORDERED_LIST.filter((e) => {
            if (e.eqg && !showEQG) return false;
            if (e.filly && !showUnderage) return false;
            if (e.gender == 'male' && !showMales) return false;
            return true;
        });


        const charsPreview = document.getElementById('characters-preview-count');
        charsPreview.textContent = `Characters: ${filteredOrderedList.length}/${ORDERED_LIST.length}`;

    }
    const checkboxes = document.getElementsByClassName('menu-checkbox');
    for (const checkbox of checkboxes) {
        checkbox.addEventListener('click', menuOptionChange);
    }
}

function startGame() {
    // Shuffle the list
    list = filteredOrderedList.sort((a, b) => 0.5 - Math.random());

    // Preload images
    {
        let cachedImgIndex = 0;
        let cachedImg = new Image();
        cachedImg.addEventListener('load', () => {
            if (cachedImgIndex == list.length - 1) return;
            cachedImg.src = `characters/${list[++cachedImgIndex].img}.png`;
        })
        cachedImg.src = `characters/${list[cachedImgIndex].img}.png`;
    }

    // Create buttons
    {
        const buttonsHolder = document.getElementById('buttons-holder');

        const smashButtonDiv = document.createElement('div')
        smashButtonDiv.classList.add('button')
        smashButtonDiv.classList.add('smash-button');
        smashButtonDiv.id = 'smash';
        smashButtonDiv.textContent = 'SMASH! (←)';


        const passButtonDiv = document.createElement('div')
        passButtonDiv.classList.add('button')
        passButtonDiv.classList.add('pass-button');
        passButtonDiv.id = 'pass';
        passButtonDiv.textContent = 'Pass (→)';

        buttonsHolder.appendChild(smashButtonDiv);
        buttonsHolder.appendChild(passButtonDiv);

        const smashButton = document.getElementById('smash');
        const passButton = document.getElementById('pass');

        smashButton.addEventListener('click', smashClick);
        passButton.addEventListener('click', passClick);
        document.addEventListener('keydown', keyDownHandler);
    }

    {
        const pageInner = document.getElementsByClassName('page-inner')[0];
        pageInner.textContent = '';

        let ponyNameParagraph = document.createElement('p');
        ponyNameParagraph.classList.add('pony-name');
        ponyNameParagraph.id = 'pony-name';


        let ponyImgParagraph = document.createElement('img');
        ponyImgParagraph.classList.add('img-div');
        ponyImgParagraph.id = 'pony-img';

        pageInner.appendChild(ponyNameParagraph);
        pageInner.appendChild(ponyImgParagraph);
    }

    setCharacter(0);
}

// Initialize everything
const startButton = document.getElementById('start');
startButton.onclick = startGame;
menuOptionChange();