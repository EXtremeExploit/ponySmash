const ORDERED_LIST = [
    // Mane 6 
    { name: 'Applejack', img: 'mane6/Applejack' },
    { name: 'Fluttershy', img: 'mane6/Fluttershy' },
    { name: 'Pinkie Pie', img: 'mane6/Pinkie_Pie' },
    { name: 'Rainbow Dash', img: 'mane6/Rainbow_Dash' },
    { name: 'Rarity', img: 'mane6/Rarity' },
    { name: 'Twilight Sparkle', img: 'mane6/Twilight_Sparkle' },

    // EQG
    { name: 'Adagio Dazzle (EQG)', img: 'eqg/Adagio_Dazzle' },
    { name: 'Apple Bloom (EQG)', img: 'eqg/Apple_Bloom' },
    { name: 'Applejack (EQG)', img: 'eqg/Applejack' },
    { name: 'Aria Blaze (EQG)', img: 'eqg/Aria_Blaze' },
    { name: 'Big McIntosh (EQG)', img: 'eqg/Big_McIntosh' },
    { name: 'Bulk Biceps (EQG)', img: 'eqg/Bulk_Biceps' },
    { name: 'Cadance (EQG)', img: 'eqg/Cadance' },
    { name: 'Canter Zoom (EQG)', img: 'eqg/Canter_Zoom' },
    { name: 'Chestnut Magnifico (EQG)', img: 'eqg/Chestnut_Magnifico' },
    { name: 'Cranky Doodle (EQG)', img: 'eqg/Cranky_Doodle' },
    { name: 'Derpy (EQG)', img: 'eqg/Derpy' },
    { name: 'Diamond Tiara (EQG)', img: 'eqg/Diamond_Tiara' },
    { name: 'DJ Pon-3 (EQG)', img: 'eqg/DJ_Pon-3' },
    { name: 'Flash Sentry (EQG)', img: 'eqg/Flash_Sentry' },
    { name: 'Fluttershy (EQG)', img: 'eqg/Fluttershy' },
    { name: 'Gloriosa Daisy (EQG)', img: 'eqg/Gloriosa_Daisy' },
    { name: 'Transformed Gloriosa Daisy (EQG)', img: 'eqg/Gloriosa_Daisy_2' },
    { name: 'Granny Smith (EQG)', img: 'eqg/Granny_Smith' },
    { name: 'Indigo Zap (EQG)', img: 'eqg/Indigo_Zap' },
    { name: 'Juniper Montage (EQG)', img: 'eqg/Juniper_Montage' },
    { name: 'Kiwi Lollipop (EQG)', img: 'eqg/Kiwi_Lollipop' },
    { name: 'Lemon Zest (EQG)', img: 'eqg/Lemon_Zest' },
    { name: 'Lyra Heartstrings (EQG)', img: 'eqg/Lyra_Heartstrings' },
    { name: 'Maud Pie (EQG)', img: 'eqg/Maud_Pie' },
    { name: 'Micro Chips (EQG)', img: 'eqg/Micro_Chips' },
    { name: 'Miss Cheerilee (EQG)', img: 'eqg/Miss_Cheerilee' },
    { name: 'Octavia Melody (EQG)', img: 'eqg/Octavia_Melody' },
    { name: 'Photo Finish (EQG)', img: 'eqg/Photo_Finish' },
    { name: 'Pinkie Pie (EQG)', img: 'eqg/Pinkie_Pie' },
    { name: 'Pixel Pizzaz (EQG)', img: 'eqg/Pixel_Pizzaz' },
    { name: 'Celestia (EQG)', img: 'eqg/Principal_Celestia' },
    { name: 'Cinch (EQG)', img: 'eqg/Principal_Cinch' },
    { name: 'Rainbow Dash (EQG)', img: 'eqg/Rainbow_Dash' },
    { name: 'Rarity (EQG)', img: 'eqg/Rarity' },
    { name: 'Sandalwood (EQG)', img: 'eqg/Sandalwood' },
    { name: 'Sci-Twi (EQG)', img: 'eqg/Sci-Twi' },
    { name: 'Scootaloo (EQG)', img: 'eqg/Scootaloo' },
    { name: 'Silver Spoon (EQG)', img: 'eqg/Silver_Spoon' },
    { name: 'Snails (EQG)', img: 'eqg/Snails' },
    { name: 'Snips (EQG)', img: 'eqg/Snips' },
    { name: 'Sonata Dusk (EQG)', img: 'eqg/Sonata_Dusk' },
    { name: 'Sour Sweet (EQG)', img: 'eqg/Sour_Sweet' },
    { name: 'Spike (EQG)', img: 'eqg/Spike' },
    { name: 'Starlight Glimmer (EQG)', img: 'eqg/Starlight_Glimmer' },
    { name: 'Sugarcoat (EQG)', img: 'eqg/Sugarcoat' },
    { name: 'Sunny Flare (EQG)', img: 'eqg/Sunny_Flare' },
    { name: 'Sunset Shimmer (EQG)', img: 'eqg/Sunset_Shimmer' },
    { name: 'Supernova Zap (EQG)', img: 'eqg/Supernova_Zap' },
    { name: 'Sweetie Belle (EQG)', img: 'eqg/Sweetie_Belle' },
    { name: 'Sweetie Drops (Bon Bon) (EQG)', img: 'eqg/Sweetie_Drops' },
    { name: 'Timber Spruce (EQG)', img: 'eqg/Timber_Spruce' },
    { name: 'Trixie (EQG)', img: 'eqg/Trixie' },
    { name: 'Twilight Sparkle (EQG)', img: 'eqg/Twilight_Sparkle' },
    { name: 'Luna (EQG)', img: 'eqg/Vice_Principal_Luna' },
    { name: 'Vignette Valencia (EQG)', img: 'eqg/Vignette_Valencia' },
    { name: 'Violet Blurr (EQG)', img: 'eqg/Violet_Blurr' },
    { name: 'Wallflower Blush (EQG)', img: 'eqg/Wallflower_Blush' },
    { name: 'Zephyr Breeze (EQG)', img: 'eqg/Zephyr_Breeze' },

    // Unsorted (Please help)
    { name: 'Adagio Dazzle', img: 'unsorted/Adagio_Dazzle' },
    { name: 'Ahuizotl', img: 'unsorted/Ahuizotl' },
    { name: 'Aloe Vera', img: 'unsorted/Aloe_Vera' },
    { name: 'Angel Wings', img: 'unsorted/Angel_Wings' },
    { name: 'Apple Bloom', img: 'unsorted/Apple_Bloom' },
    { name: 'Apple Rose', img: 'unsorted/Apple_Rose' },
    { name: 'Apple Strudel', img: 'unsorted/Apple_Strudel' },
    { name: 'Applesauce', img: 'unsorted/Applesauce' },
    { name: 'Aria Blaze', img: 'unsorted/Aria_Blaze' },
    { name: 'Aunt Holiday', img: 'unsorted/Aunt_Holiday' },
    { name: 'Aunt Orange', img: 'unsorted/Aunt_Orange' },
    { name: 'Aunt Lofty', img: 'unsorted/Auntie_Lofty' },
    { name: 'Autumn Blaze', img: 'unsorted/Autumn_Blaze' },
    { name: 'Babs Seed', img: 'unsorted/Babs_Seed' },
    { name: 'Barley Barrel', img: 'unsorted/Barley_Barrel' },
    { name: 'Big McIntosh', img: 'unsorted/Big_McIntosh' },
    { name: 'Blaze', img: 'unsorted/Blaze' },
    { name: 'Bloomberg', img: 'unsorted/Bloomberg' },
    { name: 'Blossomforth', img: 'unsorted/Blossomforth' },
    { name: 'Boneless', img: 'unsorted/Boneless' },
    { name: 'Boulder', img: 'unsorted/Boulder' },
    { name: 'Bow Hothoof', img: 'unsorted/Bow_Hothoof' },
    { name: 'Braeburn', img: 'unsorted/Braeburn' },
    { name: 'Bright Mac', img: 'unsorted/Bright_Mac' },
    { name: 'Bulk Biceps', img: 'unsorted/Bulk_Biceps' },
    { name: 'Caballeron', img: 'unsorted/Caballeron' },
    { name: 'Capper', img: 'unsorted/Capper' },
    { name: 'Captain Celaeno', img: 'unsorted/Captain_Celaeno' },
    { name: 'Celestia', img: 'unsorted/Celestia' },
    { name: 'Chancellor Neighsay', img: 'unsorted/Chancellor_Neighsay' },
    { name: 'Cheerilee', img: 'unsorted/Cheerilee' },
    { name: 'Cheese Sandwich', img: 'unsorted/Cheese_Sandwich' },
    { name: 'Cherry Jubilee', img: 'unsorted/Cherry_Jubilee' },
    { name: 'Chief Thunderhooves', img: 'unsorted/Chief_Thunderhooves' },
    { name: 'Claude', img: 'unsorted/Claude' },
    { name: 'Clear Sky', img: 'unsorted/Clear_Sky' },
    { name: 'Cloud Chaser', img: 'unsorted/Cloud_Chaser' },
    { name: 'Cloudy Quartz', img: 'unsorted/Cloudy_Quartz' },
    { name: 'Coco Pommel', img: 'unsorted/Coco_Pommel' },
    { name: 'Coloratura', img: 'unsorted/Coloratura' },
    { name: 'Coconut Cream', img: 'unsorted/Coconut_Cream' },
    { name: 'Cookie Crumbles', img: 'unsorted/Cookie_Crumbles' },
    { name: 'Coriander Cumin', img: 'unsorted/Coriander_Cumin' },
    { name: 'Cozy Glow', img: 'unsorted/Cozy_Glow' },
    { name: 'Cranky Doodle', img: 'unsorted/Cranky_Doodle' },
    { name: 'Daring Do', img: 'unsorted/Daring_Do' },
    { name: 'Davenport', img: 'unsorted/Davenport' },
    { name: 'Derpy', img: 'unsorted/Derpy' },
    { name: 'Diamond Tiara', img: 'unsorted/Diamond_Tiara' },
    { name: 'Discord', img: 'unsorted/Discord' },
    { name: 'Doc Top', img: 'unsorted/Doc_Top' },
    { name: 'Doctor Horse', img: 'unsorted/Doctor_Horse' },
    { name: 'Double Diamond', img: 'unsorted/Double_Diamond' },
    { name: 'Fancy Pants', img: 'unsorted/Fancy_Pants' },
    { name: 'Feather Bangs', img: 'unsorted/Feather_Bangs' },
    { name: 'Featherweight', img: 'unsorted/Featherweight' },
    { name: 'Filthy Rich', img: 'unsorted/Filthy_Rich' },
    { name: 'Fire Streak', img: 'unsorted/Fire_Streak' },
    { name: 'Firelight', img: 'unsorted/Firelight' },
    { name: 'Flam', img: 'unsorted/Flam' },
    { name: 'Flash Magnus', img: 'unsorted/Flash_Magnus' },
    { name: 'Flash Sentry', img: 'unsorted/Flash_Sentry' },
    { name: 'Fleetfoot', img: 'unsorted/Fleetfoot' },
    { name: 'Fleur Dis Lee', img: 'unsorted/Fleur_Dis_Lee' },
    { name: 'Flim', img: 'unsorted/Flim' },
    { name: 'Flitter', img: 'unsorted/Flitter' },
    { name: 'Flurry Heart', img: 'unsorted/Flurry_Heart' },
    { name: 'Gabby', img: 'unsorted/Gabby' },
    { name: 'Gallus', img: 'unsorted/Gallus' },
    { name: 'Garble', img: 'unsorted/Garble' },
    { name: 'Gilda', img: 'unsorted/Gilda' },
    { name: 'Gizmo', img: 'unsorted/Gizmo' },
    { name: 'Gladmane', img: 'unsorted/Gladmane' },
    { name: 'Goldie Delicious', img: 'unsorted/Goldie_Delicious' },
    { name: 'Grampa Gruff', img: 'unsorted/Grampa_Gruff' },
    { name: 'Grand Pear', img: 'unsorted/Grand_Pear' },
    { name: 'Granny Smith', img: 'unsorted/Granny_Smith' },
    { name: 'Greta', img: 'unsorted/Greta' },
    { name: 'Grogar', img: 'unsorted/Grogar' },
    { name: 'Gustave', img: 'unsorted/Gustave' },
    { name: 'Hayseed Turnip Truck', img: 'unsorted/Hayseed_Turnip_Truck' },
    { name: 'High Winds', img: 'unsorted/High_Winds' },
    { name: 'Hoity Toity', img: 'unsorted/Hoity_Toity' },
    { name: 'Hondo Flanks', img: 'unsorted/Hondo_Flanks' },
    { name: 'Igneous Rock', img: 'unsorted/Igneous_Rock' },
    { name: 'Iron Will', img: 'unsorted/Iron_Will' },
    { name: 'Jack Pot', img: 'unsorted/Jack_Pot' },
    { name: 'Jet Set', img: 'unsorted/Jet_Set' },
    { name: 'Joe', img: 'unsorted/Joe' },
    { name: 'Junebug', img: 'unsorted/Junebug' },
    { name: 'Kerfuffle', img: 'unsorted/Kerfuffle' },
    { name: 'King Sombra', img: 'unsorted/King_Sombra' },
    { name: 'Lightning Dust', img: 'unsorted/Lightning_Dust' },
    { name: 'Limestone Pie', img: 'unsorted/Limestone_Pie' },
    { name: 'Little Strongheart', img: 'unsorted/Little_Strongheart' },
    { name: 'Lord Tirek', img: 'unsorted/Lord_Tirek' },
    { name: 'Lotus Blossom', img: 'unsorted/Lotus_Blossom' },
    { name: 'Luster Dawn', img: 'unsorted/Luster_Dawn' },
    { name: 'Lyra Heartstrings', img: 'unsorted/Lyra_Heartstrings' },
    { name: 'Mage Meadowbrook', img: 'unsorted/Mage_Meadowbrook' },
    { name: 'Mane Allgood', img: 'unsorted/Mane_Allgood' },
    { name: 'Mane Goodall', img: 'unsorted/Mane_Goodall' },
    { name: 'Marble Pie', img: 'unsorted/Marble_Pie' },
    { name: 'Mare Do Well', img: 'unsorted/Mare_Do_Well' },
    { name: 'Matilda', img: 'unsorted/Matilda' },
    { name: 'Maud Pie', img: 'unsorted/Maud_Pie' },
    { name: 'Mayor', img: 'unsorted/Mayor' },
    { name: 'Mistmane', img: 'unsorted/Mistmane' },
    { name: 'Misty Fly', img: 'unsorted/Misty_Fly' },
    { name: 'Moody Root', img: 'unsorted/Moody_Root' },
    { name: 'Moon Dancer', img: 'unsorted/Moon_Dancer' },
    { name: 'Mr. Cake', img: 'unsorted/Mr._Cake' },
    { name: 'Mr. Hoofington', img: 'unsorted/Mr._Hoofington' },
    { name: 'Mr. Shy', img: 'unsorted/Mr._Shy' },
    { name: 'Mr. Stripes', img: 'unsorted/Mr._Stripes' },
    { name: 'Mrs. Cake', img: 'unsorted/Mrs._Cake' },
    { name: 'Mrs. Hoofington', img: 'unsorted/Mrs._Hoofington' },
    { name: 'Mrs. Shy', img: 'unsorted/Mrs._Shy' },
    { name: 'Ms. Harshwhinny', img: 'unsorted/Ms._Harshwhinny' },
    { name: 'Ms. Peachbottom', img: 'unsorted/Ms._Peachbottom' },
    { name: 'Mudbriar', img: 'unsorted/Mudbriar' },
    { name: 'Mulia Mild', img: 'unsorted/Mulia_Mild' },
    { name: 'Night Glider', img: 'unsorted/Night_Glider' },
    { name: 'Night Light', img: 'unsorted/Night_Light' },
    { name: 'Nightmare Moon', img: 'unsorted/Nightmare_Moon' },
    { name: 'Nurse Redheart', img: 'unsorted/Nurse_Redheart' },
    { name: 'Nurse Snowheart', img: 'unsorted/Nurse_Snowheart' },
    { name: 'Ocean Flow', img: 'unsorted/Ocean_Flow' },
    { name: 'Ocellus', img: 'unsorted/Ocellus' },
    { name: 'Party Favor', img: 'unsorted/Party_Favor' },
    { name: 'Peachy Pie', img: 'unsorted/Peachy_Pie' },
    { name: 'Pear Butter', img: 'unsorted/Pear_Butter' },
    { name: 'Petunia Petals', img: 'unsorted/Petunia_Petals' },
    { name: 'Pharynx (Changeling)', img: 'unsorted/Pharynx' },
    { name: 'Pharynx (Metamorphosed)', img: 'unsorted/Metamorphosed_Pharynx' },
    { name: 'Photo Finish', img: 'unsorted/Photo_Finish' },
    { name: 'Pickle Barrel', img: 'unsorted/Pickle_Barrel' },
    { name: 'Pipsqueak', img: 'unsorted/Pipsqueak' },
    { name: 'Plaid Stripes', img: 'unsorted/Plaid_Stripes' },
    { name: 'Pound Cake', img: 'unsorted/Pound_Cake' },
    { name: 'Pound Cake (Future)', img: 'unsorted/Future_Pound_Cake' },
    { name: 'Prim Hemline', img: 'unsorted/Prim_Hemline' },
    { name: 'Prince Blueblood', img: 'unsorted/Prince_Blueblood' },
    { name: 'Prince Rutherford', img: 'unsorted/Prince_Rutherford' },
    { name: 'Princess Cadance', img: 'unsorted/Princess_Cadance' },
    { name: 'Princess Ember', img: 'unsorted/Princess_Ember' },
    { name: 'Princess Luna', img: 'unsorted/Princess_Luna' },
    { name: 'Princess Skystar (Seapony)', img: 'unsorted/Princess_Skystar' },
    { name: 'Princess Skystar (Hippogriff)', img: 'unsorted/Princess_Skystar_Hippogriff' },
    { name: 'Pumpkin Cake', img: 'unsorted/Pumpkin_Cake' },
    { name: 'Queen Chrysalis', img: 'unsorted/Queen_Chrysalis' },
    { name: 'Quibble Pants', img: 'unsorted/Quibble_Pants' },
    { name: 'Randolph', img: 'unsorted/Randolph' },
    { name: 'Rara', img: 'unsorted/Rara' },
    { name: 'Rockhoof', img: 'unsorted/Rockhoof' },
    { name: 'Roma', img: 'unsorted/Roma' },
    { name: 'Rumble', img: 'unsorted/Rumble' },
    { name: 'Saffron Masala', img: 'unsorted/Saffron_Masala' },
    { name: 'Sandbar', img: 'unsorted/Sandbar' },
    { name: 'Sapphire Shores', img: 'unsorted/Sapphire_Shores' },
    { name: 'Sassy Saddles', img: 'unsorted/Sassy_Saddles' },
    { name: 'Scootaloo', img: 'unsorted/Scootaloo' },
    { name: 'Scorpan', img: 'unsorted/Scorpan' },
    { name: 'Seabreeze', img: 'unsorted/Seabreeze' },
    { name: 'Sheriff Silverstar', img: 'unsorted/Sheriff_Silverstar' },
    { name: 'Shining Armor', img: 'unsorted/Shining_Armor' },
    { name: 'Silver Shill', img: 'unsorted/Silver_Shill' },
    { name: 'Silver Spoon', img: 'unsorted/Silver_Spoon' },
    { name: 'Silver Zoom', img: 'unsorted/Silver_Zoom' },
    { name: 'Silverstream', img: 'unsorted/Silverstream' },
    { name: 'Sky Beak', img: 'unsorted/Sky_Beak' },
    { name: 'Sky Stinger', img: 'unsorted/Sky_Stinger' },
    { name: 'Sludge', img: 'unsorted/Sludge' },
    { name: 'Smolder', img: 'unsorted/Smolder' },
    { name: 'Smooze', img: 'unsorted/Smooze' },
    { name: 'Snails', img: 'unsorted/Snails' },
    { name: 'Snap Shutter', img: 'unsorted/Snap_Shutter' },
    { name: 'Snips', img: 'unsorted/Snips' },
    { name: 'Soarin', img: 'unsorted/Soarin' },
    { name: 'Somnambula', img: 'unsorted/Somnambula' },
    { name: 'Sonata Dusk', img: 'unsorted/Sonata_Dusk' },
    { name: 'Songbird Serenade', img: 'unsorted/Songbird_Serenade' },
    { name: 'Spearhead', img: 'unsorted/Spearhead' },
    { name: 'Spike', img: 'unsorted/Spike' },
    { name: 'Spitfire', img: 'unsorted/Spitfire' },
    { name: 'Spoiled Rich', img: 'unsorted/Spoiled_Rich' },
    { name: 'Star Swirl the Bearded', img: 'unsorted/Star_Swirl_the_Bearded' },
    { name: 'Starlight Glimmer', img: 'unsorted/Starlight_Glimmer' },
    { name: 'Stellar Eclipse', img: 'unsorted/Stellar_Eclipse' },
    { name: 'Stellar Flare', img: 'unsorted/Stellar_Flare' },
    { name: 'Steven Magnet', img: 'unsorted/Steven_Magnet' },
    { name: 'Stormwalker', img: 'unsorted/Stormwalker' },
    { name: 'Stygian', img: 'unsorted/Stygian' },
    { name: 'Sugar Belle', img: 'unsorted/Sugar_Belle' },
    { name: 'Sunburst', img: 'unsorted/Sunburst' },
    { name: 'Sunny Daze', img: 'unsorted/Sunny_Daze' },
    { name: 'Sunny Skies', img: 'unsorted/Sunny_Skies' },
    { name: 'Sunset Shimmer', img: 'unsorted/Sunset_Shimmer' },
    { name: 'Sunspot', img: 'unsorted/Sunspot' },
    { name: 'Suri Polomare', img: 'unsorted/Suri_Polomare' },
    { name: 'Surprise', img: 'unsorted/Surprise' },
    { name: 'Svengallop', img: 'unsorted/Svengallop' },
    { name: 'Sweetie Belle', img: 'unsorted/Sweetie_Belle' },
    { name: 'Sweetie Drops (Bon Bon)', img: 'unsorted/Sweetie_Drops' },
    { name: 'Tag-A-Long', img: 'unsorted/Tag-A-Long' },
    { name: 'Teddie Safari', img: 'unsorted/Teddie_Safari' },
    { name: 'Tender Taps', img: 'unsorted/Tender_Taps' },
    { name: 'Terramar', img: 'unsorted/Terramar' },
    { name: 'The Storm King', img: 'unsorted/The_Storm_King' },
    { name: 'Thorax', img: 'unsorted/Thorax' },
    { name: 'Thunderlane', img: 'unsorted/Thunderlane' },
    { name: 'Tom', img: 'unsorted/Tom' },
    { name: 'Toola Roola', img: 'unsorted/Toola_Roola' },
    { name: 'Torque Wrench', img: 'unsorted/Torque_Wrench' },
    { name: 'Tree Hugger', img: 'unsorted/Tree_Hugger' },
    { name: 'Trenderhoof', img: 'unsorted/Trenderhoof' },
    { name: 'Trixie', img: 'unsorted/Trixie' },
    { name: 'Trouble Shoes', img: 'unsorted/Trouble_Shoes' },
    { name: 'Twiggy', img: 'unsorted/Twiggy' },
    { name: 'Twilight Velvet', img: 'unsorted/Twilight_Velvet' },
    { name: 'Twist', img: 'unsorted/Twist' },
    { name: 'Uncle Orange', img: 'unsorted/Uncle_Orange' },
    { name: 'Upper Crust', img: 'unsorted/Upper_Crust' },
    { name: 'Vapor Trail', img: 'unsorted/Vapor_Trail' },
    { name: 'Wind Rider', img: 'unsorted/Wind_Rider' },
    { name: 'Wind Sprint', img: 'unsorted/Wind_Sprint' },
    { name: 'Windy Whistles', img: 'unsorted/Windy_Whistles' },
    { name: 'Yona', img: 'unsorted/Yona' },
    { name: 'Yona (Pony)', img: 'unsorted/Yona_pony' },
    { name: 'Zecora', img: 'unsorted/Zecora' },
    { name: 'Zephyr Breeze', img: 'unsorted/Zephyr_Breeze' },
    { name: 'Zesty Gourmand', img: 'unsorted/Zesty_Gourmand' },
    { name: 'Zipporwhill', img: 'unsorted/Zipporwhill' },
];

const list = ORDERED_LIST.sort((a, b) => 0.5 - Math.random());

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
        finishedParagrah.textContent = finishedText;
        shameParagraph.textContent = shameText;
        finishedParagrah.classList.add('pony-name');
        shameParagraph.classList.add('pony-name');
        let e = document.getElementsByClassName('page-inner')[0];
        e.appendChild(finishedParagrah);
        e.appendChild(shameParagraph);
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
        cachedImg.src = `characters/${list[++cachedImgIndex].img}.png`;
    })
    cachedImg.src = `characters/${list[cachedImgIndex].img}.png`;
}

// Initialize everything
setCharacter(0);