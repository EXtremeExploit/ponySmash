const ORDERED_LIST = [
    // Mane 6 
    { name: 'Applejack', img: 'mane6/Applejack', filly: false },
    { name: 'Fluttershy', img: 'mane6/Fluttershy', filly: false },
    { name: 'Pinkie Pie', img: 'mane6/Pinkie_Pie', filly: false },
    { name: 'Rainbow Dash', img: 'mane6/Rainbow_Dash', filly: false },
    { name: 'Rarity', img: 'mane6/Rarity', filly: false },
    { name: 'Twilight Sparkle', img: 'mane6/Twilight_Sparkle', filly: false },

    // EQG
    { name: 'Adagio Dazzle (EQG)', img: 'eqg/Adagio_Dazzle', filly: false },
    { name: 'Apple Bloom (EQG)', img: 'eqg/Apple_Bloom', filly: true },
    { name: 'Applejack (EQG)', img: 'eqg/Applejack', filly: false },
    { name: 'Aria Blaze (EQG)', img: 'eqg/Aria_Blaze', filly: false },
    { name: 'Big McIntosh (EQG)', img: 'eqg/Big_McIntosh', filly: false },
    { name: 'Bulk Biceps (EQG)', img: 'eqg/Bulk_Biceps', filly: false },
    { name: 'Cadance (EQG)', img: 'eqg/Cadance', filly: false },
    { name: 'Canter Zoom (EQG)', img: 'eqg/Canter_Zoom', filly: false },
    { name: 'Chestnut Magnifico (EQG)', img: 'eqg/Chestnut_Magnifico', filly: false },
    { name: 'Cranky Doodle (EQG)', img: 'eqg/Cranky_Doodle', filly: false },
    { name: 'Derpy (EQG)', img: 'eqg/Derpy', filly: false },
    { name: 'Diamond Tiara (EQG)', img: 'eqg/Diamond_Tiara', filly: true },
    { name: 'DJ Pon-3 (EQG)', img: 'eqg/DJ_Pon-3', filly: false },
    { name: 'Flash Sentry (EQG)', img: 'eqg/Flash_Sentry', filly: false },
    { name: 'Fluttershy (EQG)', img: 'eqg/Fluttershy', filly: false },
    { name: 'Gloriosa Daisy (EQG)', img: 'eqg/Gloriosa_Daisy', filly: false },
    { name: 'Transformed Gloriosa Daisy (EQG)', img: 'eqg/Gloriosa_Daisy_2', filly: false },
    { name: 'Granny Smith (EQG)', img: 'eqg/Granny_Smith', filly: false },
    { name: 'Indigo Zap (EQG)', img: 'eqg/Indigo_Zap', filly: false },
    { name: 'Juniper Montage (EQG)', img: 'eqg/Juniper_Montage', filly: false },
    { name: 'Kiwi Lollipop (EQG)', img: 'eqg/Kiwi_Lollipop', filly: false },
    { name: 'Lemon Zest (EQG)', img: 'eqg/Lemon_Zest', filly: false },
    { name: 'Lyra Heartstrings (EQG)', img: 'eqg/Lyra_Heartstrings', filly: false },
    { name: 'Maud Pie (EQG)', img: 'eqg/Maud_Pie', filly: false },
    { name: 'Micro Chips (EQG)', img: 'eqg/Micro_Chips', filly: false },
    { name: 'Miss Cheerilee (EQG)', img: 'eqg/Miss_Cheerilee', filly: false },
    { name: 'Octavia Melody (EQG)', img: 'eqg/Octavia_Melody', filly: false },
    { name: 'Photo Finish (EQG)', img: 'eqg/Photo_Finish', filly: false },
    { name: 'Pinkie Pie (EQG)', img: 'eqg/Pinkie_Pie', filly: false },
    { name: 'Pixel Pizzaz (EQG)', img: 'eqg/Pixel_Pizzaz', filly: false },
    { name: 'Celestia (EQG)', img: 'eqg/Principal_Celestia', filly: false },
    { name: 'Cinch (EQG)', img: 'eqg/Principal_Cinch', filly: false },
    { name: 'Rainbow Dash (EQG)', img: 'eqg/Rainbow_Dash', filly: false },
    { name: 'Rarity (EQG)', img: 'eqg/Rarity', filly: false },
    { name: 'Sandalwood (EQG)', img: 'eqg/Sandalwood', filly: false },
    { name: 'Sci-Twi (EQG)', img: 'eqg/Sci-Twi', filly: false },
    { name: 'Scootaloo (EQG)', img: 'eqg/Scootaloo', filly: true },
    { name: 'Silver Spoon (EQG)', img: 'eqg/Silver_Spoon', filly: true },
    { name: 'Snails (EQG)', img: 'eqg/Snails', filly: true },
    { name: 'Snips (EQG)', img: 'eqg/Snips', filly: true },
    { name: 'Sonata Dusk (EQG)', img: 'eqg/Sonata_Dusk', filly: false },
    { name: 'Sour Sweet (EQG)', img: 'eqg/Sour_Sweet', filly: false },
    { name: 'Spike (EQG)', img: 'eqg/Spike', filly: false },
    { name: 'Starlight Glimmer (EQG)', img: 'eqg/Starlight_Glimmer', filly: false },
    { name: 'Sugarcoat (EQG)', img: 'eqg/Sugarcoat', filly: false },
    { name: 'Sunny Flare (EQG)', img: 'eqg/Sunny_Flare', filly: false },
    { name: 'Sunset Shimmer (EQG)', img: 'eqg/Sunset_Shimmer', filly: false },
    { name: 'Supernova Zap (EQG)', img: 'eqg/Supernova_Zap', filly: false },
    { name: 'Sweetie Belle (EQG)', img: 'eqg/Sweetie_Belle', filly: true },
    { name: 'Sweetie Drops (Bon Bon) (EQG)', img: 'eqg/Sweetie_Drops', filly: false },
    { name: 'Timber Spruce (EQG)', img: 'eqg/Timber_Spruce', filly: false },
    { name: 'Trixie (EQG)', img: 'eqg/Trixie', filly: false },
    { name: 'Twilight Sparkle (EQG)', img: 'eqg/Twilight_Sparkle', filly: false },
    { name: 'Luna (EQG)', img: 'eqg/Vice_Principal_Luna', filly: false },
    { name: 'Vignette Valencia (EQG)', img: 'eqg/Vignette_Valencia', filly: false },
    { name: 'Violet Blurr (EQG)', img: 'eqg/Violet_Blurr', filly: false },
    { name: 'Wallflower Blush (EQG)', img: 'eqg/Wallflower_Blush', filly: false },
    { name: 'Zephyr Breeze (EQG)', img: 'eqg/Zephyr_Breeze', filly: false },

    // Unsorted (Please help)
    { name: 'Adagio Dazzle', img: 'unsorted/Adagio_Dazzle', filly: false },
    { name: 'Ahuizotl', img: 'unsorted/Ahuizotl', filly: false },
    { name: 'Aloe Vera', img: 'unsorted/Aloe_Vera', filly: false },
    { name: 'Amethyst Star', img: 'unsorted/Amethyst_Star', filly: false },
    { name: 'Angel', img: 'unsorted/Angel', filly: false },
    { name: 'Angel Wings', img: 'unsorted/Angel_Wings', filly: false },
    { name: 'Apple Bloom', img: 'unsorted/Apple_Bloom', filly: true },
    { name: 'Apple Rose', img: 'unsorted/Apple_Rose', filly: false },
    { name: 'Apple Strudel', img: 'unsorted/Apple_Strudel', filly: false },
    { name: 'Applesauce', img: 'unsorted/Applesauce', filly: false },
    { name: 'Aria Blaze', img: 'unsorted/Aria_Blaze', filly: false },
    { name: 'Aunt Holiday', img: 'unsorted/Aunt_Holiday', filly: false },
    { name: 'Aunt Orange', img: 'unsorted/Aunt_Orange', filly: false },
    { name: 'Aunt Lofty', img: 'unsorted/Auntie_Lofty', filly: false },
    { name: 'Autumn Blaze', img: 'unsorted/Autumn_Blaze', filly: false },
    { name: 'Babs Seed', img: 'unsorted/Babs_Seed', filly: true },
    { name: 'Barley Barrel', img: 'unsorted/Barley_Barrel', filly: true },
    { name: 'Big McIntosh', img: 'unsorted/Big_McIntosh', filly: false },
    { name: 'Blaze', img: 'unsorted/Blaze', filly: false },
    { name: 'Bloomberg', img: 'unsorted/Bloomberg', filly: false },
    { name: 'Blossomforth', img: 'unsorted/Blossomforth', filly: false },
    { name: 'Boneless', img: 'unsorted/Boneless', filly: false },
    { name: 'Boulder', img: 'unsorted/Boulder', filly: false },
    { name: 'Bow Hothoof', img: 'unsorted/Bow_Hothoof', filly: false },
    { name: 'Braeburn', img: 'unsorted/Braeburn', filly: false },
    { name: 'Bright Mac', img: 'unsorted/Bright_Mac', filly: false },
    { name: 'Bulk Biceps', img: 'unsorted/Bulk_Biceps', filly: false },
    { name: 'Caballeron', img: 'unsorted/Caballeron', filly: false },
    { name: 'Capper', img: 'unsorted/Capper', filly: false },
    { name: 'Captain Celaeno', img: 'unsorted/Captain_Celaeno', filly: false },
    { name: 'Celestia', img: 'unsorted/Celestia', filly: false },
    { name: 'Chancellor Neighsay', img: 'unsorted/Chancellor_Neighsay', filly: false },
    { name: 'Cheerilee', img: 'unsorted/Cheerilee', filly: false },
    { name: 'Cheese Sandwich', img: 'unsorted/Cheese_Sandwich', filly: false },
    { name: 'Cherry Jubilee', img: 'unsorted/Cherry_Jubilee', filly: false },
    { name: 'Chief Thunderhooves', img: 'unsorted/Chief_Thunderhooves', filly: false },
    { name: 'Claude', img: 'unsorted/Claude', filly: false },
    { name: 'Clear Sky', img: 'unsorted/Clear_Sky', filly: false },
    { name: 'Cloud Chaser', img: 'unsorted/Cloud_Chaser', filly: false },
    { name: 'Cloudy Quartz', img: 'unsorted/Cloudy_Quartz', filly: false },
    { name: 'Coco Pommel', img: 'unsorted/Coco_Pommel', filly: false },
    { name: 'Coloratura', img: 'unsorted/Coloratura', filly: false },
    { name: 'Coconut Cream', img: 'unsorted/Coconut_Cream', filly: true },
    { name: 'Cookie Crumbles', img: 'unsorted/Cookie_Crumbles', filly: false },
    { name: 'Coriander Cumin', img: 'unsorted/Coriander_Cumin', filly: false },
    { name: 'Cozy Glow', img: 'unsorted/Cozy_Glow', filly: true },
    { name: 'Cranky Doodle', img: 'unsorted/Cranky_Doodle', filly: false },
    { name: 'Daring Do', img: 'unsorted/Daring_Do', filly: false },
    { name: 'Davenport', img: 'unsorted/Davenport', filly: false },
    { name: 'Derpy', img: 'unsorted/Derpy', filly: false },
    { name: 'Diamond Tiara', img: 'unsorted/Diamond_Tiara', filly: true },
    { name: 'Discord', img: 'unsorted/Discord', filly: false },
    { name: 'DJ Pon-3', img: 'unsorted/DJ_Pon-3', filly: false },
    { name: 'Doc Top', img: 'unsorted/Doc_Top', filly: false },
    { name: 'Doctor Horse', img: 'unsorted/Doctor_Horse', filly: false },
    { name: 'Double Diamond', img: 'unsorted/Double_Diamond', filly: false },
    { name: 'Dr. Hooves', img: 'unsorted/Dr._Hooves', filly: false },
    { name: 'Fancy Pants', img: 'unsorted/Fancy_Pants', filly: false },
    { name: 'Feather Bangs', img: 'unsorted/Feather_Bangs', filly: false },
    { name: 'Featherweight', img: 'unsorted/Featherweight', filly: true },
    { name: 'Filthy Rich', img: 'unsorted/Filthy_Rich', filly: false },
    { name: 'Fire Streak', img: 'unsorted/Fire_Streak', filly: false },
    { name: 'Firelight', img: 'unsorted/Firelight', filly: false },
    { name: 'Flam', img: 'unsorted/Flam', filly: false },
    { name: 'Flash Magnus', img: 'unsorted/Flash_Magnus', filly: false },
    { name: 'Flash Sentry', img: 'unsorted/Flash_Sentry', filly: false },
    { name: 'Fleetfoot', img: 'unsorted/Fleetfoot', filly: false },
    { name: 'Fleur Dis Lee', img: 'unsorted/Fleur_Dis_Lee', filly: false },
    { name: 'Flim', img: 'unsorted/Flim', filly: false },
    { name: 'Flitter', img: 'unsorted/Flitter', filly: false },
    { name: 'Flurry Heart', img: 'unsorted/Flurry_Heart', filly: true },
    { name: 'Gabby', img: 'unsorted/Gabby', filly: false },
    { name: 'Gallus', img: 'unsorted/Gallus', filly: true },
    { name: 'Garble', img: 'unsorted/Garble', filly: false },
    { name: 'Gilda', img: 'unsorted/Gilda', filly: false },
    { name: 'Gizmo', img: 'unsorted/Gizmo', filly: false },
    { name: 'Gladmane', img: 'unsorted/Gladmane', filly: false },
    { name: 'Golden Harvest', img: 'unsorted/Golden_Harvest', filly: false },
    { name: 'Goldie Delicious', img: 'unsorted/Goldie_Delicious', filly: false },
    { name: 'Grampa Gruff', img: 'unsorted/Grampa_Gruff', filly: false },
    { name: 'Grand Pear', img: 'unsorted/Grand_Pear', filly: false },
    { name: 'Granny Smith', img: 'unsorted/Granny_Smith', filly: false },
    { name: 'Greta', img: 'unsorted/Greta', filly: false },
    { name: 'Grogar', img: 'unsorted/Grogar', filly: false },
    { name: 'Gummy', img: 'unsorted/Gummy', filly: false },
    { name: 'Gustave', img: 'unsorted/Gustave', filly: false },
    { name: 'Hayseed Turnip Truck', img: 'unsorted/Hayseed_Turnip_Truck', filly: false },
    { name: 'High Winds', img: 'unsorted/High_Winds', filly: false },
    { name: 'Hoity Toity', img: 'unsorted/Hoity_Toity', filly: false },
    { name: 'Hondo Flanks', img: 'unsorted/Hondo_Flanks', filly: false },
    { name: 'Igneous Rock', img: 'unsorted/Igneous_Rock', filly: false },
    { name: 'Iron Will', img: 'unsorted/Iron_Will', filly: false },
    { name: 'Jack Pot', img: 'unsorted/Jack_Pot', filly: false },
    { name: 'Jet Set', img: 'unsorted/Jet_Set', filly: false },
    { name: 'Joe', img: 'unsorted/Joe', filly: false },
    { name: 'Junebug', img: 'unsorted/Junebug', filly: false },
    { name: 'Kerfuffle', img: 'unsorted/Kerfuffle', filly: false },
    { name: 'King Sombra', img: 'unsorted/King_Sombra', filly: false },
    { name: 'Lemon Hearts', img: 'unsorted/Lemon_Hearts', filly: false },
    { name: 'Lightning Dust', img: 'unsorted/Lightning_Dust', filly: false },
    { name: 'Limestone Pie', img: 'unsorted/Limestone_Pie', filly: false },
    { name: 'Little Strongheart', img: 'unsorted/Little_Strongheart', filly: false },
    { name: 'Lord Tirek', img: 'unsorted/Lord_Tirek', filly: false },
    { name: 'Lotus Blossom', img: 'unsorted/Lotus_Blossom', filly: false },
    { name: 'Luster Dawn', img: 'unsorted/Luster_Dawn', filly: false },
    { name: 'Lyra Heartstrings', img: 'unsorted/Lyra_Heartstrings', filly: false },
    { name: 'Mage Meadowbrook', img: 'unsorted/Mage_Meadowbrook', filly: false },
    { name: 'Mane Allgood', img: 'unsorted/Mane_Allgood', filly: false },
    { name: 'Mane Goodall', img: 'unsorted/Mane_Goodall', filly: false },
    { name: 'Marble Pie', img: 'unsorted/Marble_Pie', filly: false },
    { name: 'Mare Do Well', img: 'unsorted/Mare_Do_Well', filly: false },
    { name: 'Matilda', img: 'unsorted/Matilda', filly: false },
    { name: 'Maud Pie', img: 'unsorted/Maud_Pie', filly: false },
    { name: 'Mayor', img: 'unsorted/Mayor', filly: false },
    { name: 'Minuette', img: 'unsorted/Minuette', filly: false },
    { name: 'Mistmane', img: 'unsorted/Mistmane', filly: false },
    { name: 'Misty Fly', img: 'unsorted/Misty_Fly', filly: false },
    { name: 'Moody Root', img: 'unsorted/Moody_Root', filly: false },
    { name: 'Moon Dancer', img: 'unsorted/Moon_Dancer', filly: false },
    { name: 'Mr. Cake', img: 'unsorted/Mr._Cake', filly: false },
    { name: 'Mr. Hoofington', img: 'unsorted/Mr._Hoofington', filly: false },
    { name: 'Mr. Shy', img: 'unsorted/Mr._Shy', filly: false },
    { name: 'Mr. Stripes', img: 'unsorted/Mr._Stripes', filly: false },
    { name: 'Mrs. Cake', img: 'unsorted/Mrs._Cake', filly: false },
    { name: 'Mrs. Hoofington', img: 'unsorted/Mrs._Hoofington', filly: false },
    { name: 'Mrs. Shy', img: 'unsorted/Mrs._Shy', filly: false },
    { name: 'Ms. Harshwhinny', img: 'unsorted/Ms._Harshwhinny', filly: false },
    { name: 'Ms. Peachbottom', img: 'unsorted/Ms._Peachbottom', filly: false },
    { name: 'Mudbriar', img: 'unsorted/Mudbriar', filly: false },
    { name: 'Mulia Mild', img: 'unsorted/Mulia_Mild', filly: false },
    { name: 'Night Glider', img: 'unsorted/Night_Glider', filly: false },
    { name: 'Night Light', img: 'unsorted/Night_Light', filly: false },
    { name: 'Nightmare Moon', img: 'unsorted/Nightmare_Moon', filly: false },
    { name: 'Nurse Redheart', img: 'unsorted/Nurse_Redheart', filly: false },
    { name: 'Nurse Snowheart', img: 'unsorted/Nurse_Snowheart', filly: false },
    { name: 'Ocean Flow', img: 'unsorted/Ocean_Flow', filly: false },
    { name: 'Ocellus', img: 'unsorted/Ocellus', filly: true },
    { name: 'Opalescence', img: 'unsorted/Opalescence', filly: false },
    { name: 'Owlowiscious', img: 'unsorted/Owlowiscious', filly: false },
    { name: 'Party Favor', img: 'unsorted/Party_Favor', filly: false },
    { name: 'Peachy Pie', img: 'unsorted/Peachy_Pie', filly: true },
    { name: 'Pear Butter', img: 'unsorted/Pear_Butter', filly: false },
    { name: 'Petunia Petals', img: 'unsorted/Petunia_Petals', filly: false },
    { name: 'Pharynx (Changeling)', img: 'unsorted/Pharynx', filly: false },
    { name: 'Pharynx (Metamorphosed)', img: 'unsorted/Metamorphosed_Pharynx', filly: false },
    { name: 'Philomena', img: 'unsorted/Philomena', filly: false },
    { name: 'Philomena (Phoenix)', img: 'unsorted/Philomena_phoenix', filly: false },
    { name: 'Photo Finish', img: 'unsorted/Photo_Finish', filly: false },
    { name: 'Pickle Barrel', img: 'unsorted/Pickle_Barrel', filly: true },
    { name: 'Pipsqueak', img: 'unsorted/Pipsqueak', filly: true },
    { name: 'Plaid Stripes', img: 'unsorted/Plaid_Stripes', filly: true },
    { name: 'Pound Cake', img: 'unsorted/Pound_Cake', filly: true },
    { name: 'Pound Cake (Future)', img: 'unsorted/Future_Pound_Cake', filly: false },
    { name: 'Prim Hemline', img: 'unsorted/Prim_Hemline', filly: false },
    { name: 'Prince Blueblood', img: 'unsorted/Prince_Blueblood', filly: false },
    { name: 'Prince Rutherford', img: 'unsorted/Prince_Rutherford', filly: false },
    { name: 'Princess Cadance', img: 'unsorted/Princess_Cadance', filly: false },
    { name: 'Princess Ember', img: 'unsorted/Princess_Ember', filly: false },
    { name: 'Princess Luna', img: 'unsorted/Princess_Luna', filly: false },
    { name: 'Princess Skystar (Seapony)', img: 'unsorted/Princess_Skystar', filly: false },
    { name: 'Princess Skystar (Hippogriff)', img: 'unsorted/Princess_Skystar_Hippogriff', filly: false },
    { name: 'Pumpkin Cake', img: 'unsorted/Pumpkin_Cake', filly: true },
    { name: 'Queen Chrysalis', img: 'unsorted/Queen_Chrysalis', filly: false },
    { name: 'Quibble Pants', img: 'unsorted/Quibble_Pants', filly: false },
    { name: 'Randolph', img: 'unsorted/Randolph', filly: false },
    { name: 'Rara', img: 'unsorted/Rara', filly: false },
    { name: 'Rockhoof', img: 'unsorted/Rockhoof', filly: false },
    { name: 'Roma', img: 'unsorted/Roma', filly: false },
    { name: 'Roseluck', img: 'unsorted/Roseluck', filly: false },
    { name: 'Rumble', img: 'unsorted/Rumble', filly: true },
    { name: 'Saffron Masala', img: 'unsorted/Saffron_Masala', filly: false },
    { name: 'Sandbar', img: 'unsorted/Sandbar', filly: true },
    { name: 'Sapphire Shores', img: 'unsorted/Sapphire_Shores', filly: false },
    { name: 'Sassy Saddles', img: 'unsorted/Sassy_Saddles', filly: false },
    { name: 'Scootaloo', img: 'unsorted/Scootaloo', filly: true },
    { name: 'Scorpan', img: 'unsorted/Scorpan', filly: false },
    { name: 'Seabreeze', img: 'unsorted/Seabreeze', filly: false },
    { name: 'Sheriff Silverstar', img: 'unsorted/Sheriff_Silverstar', filly: false },
    { name: 'Shining Armor', img: 'unsorted/Shining_Armor', filly: false },
    { name: 'Silver Shill', img: 'unsorted/Silver_Shill', filly: false },
    { name: 'Silver Spoon', img: 'unsorted/Silver_Spoon', filly: true },
    { name: 'Silver Zoom', img: 'unsorted/Silver_Zoom', filly: false },
    { name: 'Silverstream', img: 'unsorted/Silverstream', filly: false },
    { name: 'Sky Beak', img: 'unsorted/Sky_Beak', filly: false },
    { name: 'Sky Stinger', img: 'unsorted/Sky_Stinger', filly: false },
    { name: 'Sludge', img: 'unsorted/Sludge', filly: false },
    { name: 'Smolder', img: 'unsorted/Smolder', filly: true },
    { name: 'Smooze', img: 'unsorted/Smooze', filly: false },
    { name: 'Snails', img: 'unsorted/Snails', filly: true },
    { name: 'Snap Shutter', img: 'unsorted/Snap_Shutter', filly: false },
    { name: 'Snips', img: 'unsorted/Snips', filly: true },
    { name: 'Soarin', img: 'unsorted/Soarin', filly: false },
    { name: 'Somnambula', img: 'unsorted/Somnambula', filly: false },
    { name: 'Sonata Dusk', img: 'unsorted/Sonata_Dusk', filly: false },
    { name: 'Songbird Serenade', img: 'unsorted/Songbird_Serenade', filly: false },
    { name: 'Spearhead', img: 'unsorted/Spearhead', filly: false },
    { name: 'Spike', img: 'unsorted/Spike', filly: false },
    { name: 'Spitfire', img: 'unsorted/Spitfire', filly: false },
    { name: 'Spoiled Rich', img: 'unsorted/Spoiled_Rich', filly: false },
    { name: 'Star Swirl the Bearded', img: 'unsorted/Star_Swirl_the_Bearded', filly: false },
    { name: 'Starlight Glimmer', img: 'unsorted/Starlight_Glimmer', filly: false },
    { name: 'Stellar Eclipse', img: 'unsorted/Stellar_Eclipse', filly: false },
    { name: 'Stellar Flare', img: 'unsorted/Stellar_Flare', filly: false },
    { name: 'Steven Magnet', img: 'unsorted/Steven_Magnet', filly: false },
    { name: 'Stormwalker', img: 'unsorted/Stormwalker', filly: false },
    { name: 'Stygian', img: 'unsorted/Stygian', filly: false },
    { name: 'Sugar Belle', img: 'unsorted/Sugar_Belle', filly: false },
    { name: 'Sunburst', img: 'unsorted/Sunburst', filly: false },
    { name: 'Sunny Daze', img: 'unsorted/Sunny_Daze', filly: true },
    { name: 'Sunny Skies', img: 'unsorted/Sunny_Skies', filly: false },
    { name: 'Sunset Shimmer', img: 'unsorted/Sunset_Shimmer', filly: false },
    { name: 'Sunspot', img: 'unsorted/Sunspot', filly: false },
    { name: 'Suri Polomare', img: 'unsorted/Suri_Polomare', filly: false },
    { name: 'Surprise', img: 'unsorted/Surprise', filly: false },
    { name: 'Svengallop', img: 'unsorted/Svengallop', filly: false },
    { name: 'Sweetie Belle', img: 'unsorted/Sweetie_Belle', filly: true },
    { name: 'Sweetie Drops (Bon Bon)', img: 'unsorted/Sweetie_Drops', filly: false },
    { name: 'Tag-A-Long', img: 'unsorted/Tag-A-Long', filly: true },
    { name: 'Tank', img: 'unsorted/Tank', filly: false },
    { name: 'Teddie Safari', img: 'unsorted/Teddie_Safari', filly: false },
    { name: 'Tempest Shadow', img: 'unsorted/Tempest_Shadow', filly: false },
    { name: 'Tender Taps', img: 'unsorted/Tender_Taps', filly: true },
    { name: 'Terramar', img: 'unsorted/Terramar', filly: false },
    { name: 'The Storm King', img: 'unsorted/The_Storm_King', filly: false },
    { name: 'Thorax', img: 'unsorted/Thorax', filly: false },
    { name: 'Thunderlane', img: 'unsorted/Thunderlane', filly: false },
    { name: 'Tom', img: 'unsorted/Tom', filly: false },
    { name: 'Toola Roola', img: 'unsorted/Toola_Roola', filly: true },
    { name: 'Torque Wrench', img: 'unsorted/Torque_Wrench', filly: false },
    { name: 'Tree Hugger', img: 'unsorted/Tree_Hugger', filly: false },
    { name: 'Trenderhoof', img: 'unsorted/Trenderhoof', filly: false },
    { name: 'Trixie', img: 'unsorted/Trixie', filly: false },
    { name: 'Trouble Shoes', img: 'unsorted/Trouble_Shoes', filly: false },
    { name: 'Twiggy', img: 'unsorted/Twiggy', filly: false },
    { name: 'Twilight Velvet', img: 'unsorted/Twilight_Velvet', filly: false },
    { name: 'Twinkleshine', img: 'unsorted/Twinkleshine', filly: false },
    { name: 'Twist', img: 'unsorted/Twist', filly: true },
    { name: 'Uncle Orange', img: 'unsorted/Uncle_Orange', filly: false },
    { name: 'Upper Crust', img: 'unsorted/Upper_Crust', filly: false },
    { name: 'Vapor Trail', img: 'unsorted/Vapor_Trail', filly: false },
    { name: 'Wind Rider', img: 'unsorted/Wind_Rider', filly: false },
    { name: 'Wind Sprint', img: 'unsorted/Wind_Sprint', filly: true },
    { name: 'Windy Whistles', img: 'unsorted/Windy_Whistles', filly: false },
    { name: 'Winona', img: 'unsorted/Winona', filly: false },
    { name: 'Yona', img: 'unsorted/Yona', filly: true },
    { name: 'Yona (Pony)', img: 'unsorted/Yona_pony', filly: true },
    { name: 'Zecora', img: 'unsorted/Zecora', filly: false },
    { name: 'Zephyr Breeze', img: 'unsorted/Zephyr_Breeze', filly: false },
    { name: 'Zesty Gourmand', img: 'unsorted/Zesty_Gourmand', filly: false },
    { name: 'Zipporwhill', img: 'unsorted/Zipporwhill', filly: true },
];

const list = ORDERED_LIST.sort((a, b) => 0.5 - Math.random()).filter((e) => e.filly == false);

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

const smashButton = document.getElementById('smash');
const passButton = document.getElementById('pass');

smashButton.addEventListener('click', smashClick);
passButton.addEventListener('click', passClick);
document.addEventListener('keydown', keyDownHandler);


{
    let cachedImgIndex = 0;
    let cachedImg = new Image();
    cachedImg.addEventListener('load', () => {
        if (cachedImgIndex == list.length - 1) return;
        cachedImg.src = `characters/${list[++cachedImgIndex].img}.png`;
    })
    cachedImg.src = `characters/${list[cachedImgIndex].img}.png`;
}

// Initialize everything
setCharacter(0);