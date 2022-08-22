# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongs_ide the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Board.destroy_all 
Pin.destroy_all

demo_user = User.create({username: 'demo-user', password: 'password'})
user_1 = User.create({username: 'deborah-wei', password: 'password'})

board_1 = Board.create({name: 'snowboarding', user_id: demo_user.id})
board_2 = Board.create({name: 'interior inspo', user_id: user_1.id})
board_3 = Board.create({name: 'pie', user_id: user_1.id})
board_4 = Board.create({name: 'sunsets', user_id: user_1.id})
board_5 = Board.create({name: 'trees', user_id: user_1.id})


# snowboarding
pin_1 = Pin.safe_create({title: "OVERVIEW — Alex Strohl Studio", description: "Alex Strohl is a Madrid-born, French photographer whose adventures around the world have informed his unique style of photography..."}, user_1.id)[0]
image_1 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/snowboarding/alexandra-luniel-86T5I7ZtjmM-unsplash-min.jpg")
pin_1.image.attach(io: image_1, filename:"alexandra-luniel-86T5I7ZtjmM-unsplash-min.jpg")
pin_1.save!

pin_2 = Pin.safe_create({title: "A winter travel guide to Finnish Lapland", description: "Discover the magic of Finnish Lapland from Santa Claus' village to the northern lights. This travel guide shares everything you need to know."}, demo_user.id)[0]
image_2 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/snowboarding/benjamin-hayward-uZNH-vYGDIQ-unsplash-min.jpg")
pin_2.image.attach(io: image_2, filename:"benjamin-hayward-uZNH-vYGDIQ-unsplash-min.jpg")
pin_2.save!

pin_3 = Pin.safe_create({title: "🔥 Magical morning in the forest of Væleren", description: "With whom would you like to visit Switzerland?"}, demo_user.id)[0]
image_3 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/snowboarding/benjamin-hayward-YIO9Fb7BJIU-unsplash-min.jpg")
pin_3.image.attach(io: image_3, filename:"benjamin-hayward-YIO9Fb7BJIU-unsplash-min.jpg")
pin_3.save!

pin_4 = Pin.safe_create({title: "Christmas aesthetic ☃️🌬❄️", description: "sliding into the new year like ⁂"}, demo_user.id)[0]
image_4 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/snowboarding/felipe-giacometti-4i5ToPi4K_c-unsplash-min.jpg")
pin_4.image.attach(io: image_4, filename:"felipe-giacometti-4i5ToPi4K_c-unsplash-min.jpg")
pin_4.save!

pin_5 = Pin.safe_create({title: "Ski fits 🎿 🌨🗻", description: "I started skiing January 2022 and went on my first black diamond march 2022"}, demo_user.id)[0]
image_5 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/snowboarding/felipe-giacometti-ACbHQqST3sY-unsplash-min.jpg")
pin_5.image.attach(io: image_5, filename:"felipe-giacometti-ACbHQqST3sY-unsplash-min.jpg")
pin_5.save!

pin_6 = Pin.safe_create({title: "My Pretty Universe", description: "All the beautiful things I don´t own any of the pictures I´m posting"}, user_1.id)[0]
image_6 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/snowboarding/beau-runsten-BgPf2FHePBM-unsplash.jpg")
pin_6.image.attach(io: image_6, filename:"beau-runsten-BgPf2FHePBM-unsplash.jpg")
pin_6.save!

pin_7 = Pin.safe_create({title: "COUNTRY TILL I DIE", description: "Male, 54. Born and raised in dairy farm country. Enjoy the country life and the outdoors. Also check out my other blog direwulf63, and WHATEVER i CAN GET AWAY WITH"}, user_1.id)[0]
image_7 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/snowboarding/bradley-dunn-9SGGun3iIig-unsplash.jpg")
pin_7.image.attach(io: image_7, filename:"bradley-dunn-9SGGun3iIig-unsplash.jpg")
pin_7.save!

pin_8 = Pin.safe_create({title: "Sun Glowing Over A Snowy Tree Landscape", description: "Stock Image: Sun Glowing Over A Snowy Tree Landscape"}, user_1.id)[0]
image_8 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/snowboarding/felipe-giacometti-FN4cCdslXuE-unsplash-min.jpg")
pin_8.image.attach(io: image_8, filename:"felipe-giacometti-FN4cCdslXuE-unsplash-min.jpg")
pin_8.save!

pin_9 = Pin.safe_create({title: "snow angel by Viktoria Haack / 500px", description: "Out the front window"}, user_1.id)[0]
image_9 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/snowboarding/joel-jasmin-forestbird-CsJVqKdWpl4-unsplash-min.jpg")
pin_9.image.attach(io: image_9, filename:"joel-jasmin-forestbird-CsJVqKdWpl4-unsplash-min.jpg")
pin_9.save!

pin_10 = Pin.safe_create({title: "winter cottagecore *chefs kiss*", description: "Cottagecore is an aesthetic depicting a simple, romanticized life in nature. It features themes of farm animals, earthy tones, soft illustrations,..."}, user_1.id)[0]
image_10 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/snowboarding/jorg-angeli-cCzeLwUCmnM-unsplash.jpg")
pin_10.image.attach(io: image_10, filename:"jorg-angeli-cCzeLwUCmnM-unsplash.jpg")
pin_10.save!

pin_11 = Pin.safe_create({title: "2017-12-18_02-30-40", description: "Monday night update"}, user_1.id)[0]
image_11 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/snowboarding/malte-schmidt-5oh_gv07cBY-unsplash-min.jpg")
pin_11.image.attach(io: image_11, filename:"malte-schmidt-5oh_gv07cBY-unsplash-min.jpg")
pin_11.save!

pin_12 = Pin.safe_create({title: "Winter wallpaper by rosemaria4111 - Download on ZEDGE™ | e10e", description: "Download Winter wallpaper by rosemaria4111 on ZEDGE™ now. Browse millions of popular free and premium wallpapers and ringtones on ZEDGE™ and personalize your phone to suit you. Browse now! | e10e"}, user_1.id)[0]
image_12 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/snowboarding/nic-y-c-YvUT4BtBbn8-unsplash.jpg")
pin_12.image.attach(io: image_12, filename:"nic-y-c-YvUT4BtBbn8-unsplash.jpg")
pin_12.save!

pin_13 = Pin.safe_create({title: "Monday night update", description: "All the beautiful things of the world"}, user_1.id)[0]
image_13 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/snowboarding/patrick-robert-doyle-svS24gSgqRs-unsplash-min.jpg")
pin_13.image.attach(io: image_13, filename:"patrick-robert-doyle-svS24gSgqRs-unsplash-min.jpg")
pin_13.save!

board_pin_1 = BoardPin.create({board_id: board_1.id, pin_id: pin_1.id})
board_pin_2 = BoardPin.create({board_id: board_1.id, pin_id: pin_2.id})
board_pin_3 = BoardPin.create({board_id: board_1.id, pin_id: pin_3.id})
board_pin_4 = BoardPin.create({board_id: board_1.id, pin_id: pin_4.id})
board_pin_5 = BoardPin.create({board_id: board_1.id, pin_id: pin_5.id})
board_pin_6 = BoardPin.create({board_id: board_1.id, pin_id: pin_6.id})
board_pin_7 = BoardPin.create({board_id: board_1.id, pin_id: pin_7.id})
board_pin_8 = BoardPin.create({board_id: board_1.id, pin_id: pin_8.id})
board_pin_9 = BoardPin.create({board_id: board_1.id, pin_id: pin_9.id})
board_pin_10 = BoardPin.create({board_id: board_1.id, pin_id: pin_10.id})
board_pin_11 = BoardPin.create({board_id: board_1.id, pin_id: pin_11.id})
board_pin_12 = BoardPin.create({board_id: board_1.id, pin_id: pin_12.id})
board_pin_13 = BoardPin.create({board_id: board_1.id, pin_id: pin_13.id})

# pin_14 = Pin.safe_create({title: "Sunset, horizon, clean sky, glacier, mountains, nature, 1080x2160 wallpaper", description: "Download Sunset, horizon, clean sky, glacier, mountains, nature 1080x2160 wallpaper, Honor 7X, Honor 9 Lite, Honor View 10, 18067"})
# image_14 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/snowboarding/sirisvisual-SrjF-UxQ69U-unsplash-min.jpg")
# pin_14.image.attach(io: image_14, filename:"sirisvisual-SrjF-UxQ69U-unsplash-min.jpg")
# pin_14.save!

# pin_15 = Pin.create({title: "Nature's beauties.", description: "“Every soul are here to blossom in it's unique way despite the darkness , the sufferings , the illusions ......... Because whenever the time comes to blossom ,it will bloom despite all unpromising surroundings.”"})
# image_15 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/snowboarding/valentin-chretien-Auewhfdwzj4-unsplash-min.jpg")
# pin_15.image.attach(io: image_15, filename:"valentin-chretien-Auewhfdwzj4-unsplash-min.jpg")
# pin_15.save!

# pin_16 = Pin.create({title: "Fin Décembre - Le cottage de Gwladys", description: "En dépit de tout ce que nous avons traversé, essayons de finir ce mois de Décembre avec de la douceur et la couleur rose... Rose comme la..."})
# image_16 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/snowboarding/2-bro-s-media-l6lpv1OAP6s-unsplash.jpg")
# pin_16.image.attach(io: image_16, filename:"2-bro-s-media-l6lpv1OAP6s-unsplash.jpg")
# pin_16.save!

# # interior

# pin_17 = Pin.create({title: "Favorite Things Friday", description: "Happy Friday everyone!! & thank you for stopping by Favorite Things Friday. So happy you are here! Today I am getting ready for my mother in-law to come into town for the weekend. If you remember she was visiting a few weeks ago & she's coming again because she is working in North Carolina again about 4 hours away from us. We are so excited to have her here! Our plans for the weekend are to relax, eat, & enjoy each others company. Sounds pretty perfect to me. I hope that you all had a great week & that you"})
# image_17 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/interior/11806f92bc257b424e11d8133e207800.jpg")
# pin_17.image.attach(io: image_17, filename:"11806f92bc257b424e11d8133e207800.jpg")
# pin_17.save!

# pin_18 = Pin.create({title: "〚 Delicate festive home in Spain 〛◾ Photos ◾ Ideas ◾ Design", description: "Next House- on to the Conservatory"})
# image_18 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/interior/11e2d8e2bf3cfb532a68c1c70c351c81.jpg")
# pin_18.image.attach(io: image_18, filename:"11e2d8e2bf3cfb532a68c1c70c351c81.jpg")
# pin_18.save!

# pin_19 = Pin.create({title: "TheFullerView", description: "Haverford residence addition, PA. Archer & Buchanan Architecture.Tom Crane Photography."})
# image_19 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/interior/%E0%AD%A8%E0%AD%A7+on+Twitter.png")
# pin_19.image.attach(io: image_19, filename:"%E0%AD%A8%E0%AD%A7+on+Twitter.png")
# pin_19.save!

# pin_20 = Pin.create({title: "Chairish Blog", description: "Whether they face outside or divide indoor spaces, French doors add a unique decorative touch to a home. See 30 of our favorite French door designs from the Dering Hall Lookbook."})
# image_20 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/interior/2c4b506b48a78e5a119b50a509c8b6f7.jpg")
# pin_20.image.attach(io: image_20, filename:"2c4b506b48a78e5a119b50a509c8b6f7.jpg")
# pin_20.save!

# pin_21 = Pin.create({title: "Double-height living area which opens up to the outside through sliding glass walls in this home located in São Paulo, Brazil. [1080 × 1218]", description: "London-born Charlotte Taylor is the creative genius behind the infamous renderings of Casa Atibaia: an imaginary home hidden in the São Paulo’s forest that combines Brazilian modernism and glasshouse components. Taylor is the creative director of studio ‘Maison de Sable’ and designs sets and interiors, though her online gallery spotlights her talent for creating fictional spaces."})
# image_21 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/interior/37404ee5575bdf24c1b77b8bee583436.jpg")
# pin_21.image.attach(io: image_21, filename:"37404ee5575bdf24c1b77b8bee583436.jpg")
# pin_21.save!

# pin_22 = Pin.create({title: "Bedroom with a gorgeous view - Cozy & Comfy", description: "Bedroom Inspiration for Kate Beavis Your Vintage Life vintage blogger, writer and speaker on homes, fashion, weddings and lifestyle."})
# image_22 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/interior/3c7b90f24c417a97551c42ab156f3a12.jpg")
# pin_22.image.attach(io: image_22, filename:"3c7b90f24c417a97551c42ab156f3a12.jpg")
# pin_22.save!

# pin_23 = Pin.create({title: "Bellezza, Stile, Estate {Daily Inspiration}", description: "Explore thebrightguy's photos on Flickr. thebrightguy has uploaded 415 photos to Flickr."})
# image_23 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/interior/57d94e16c7b01a951f3c7c65ef3bd317.jpg")
# pin_23.image.attach(io: image_23, filename:"57d94e16c7b01a951f3c7c65ef3bd317.jpg")
# pin_23.save!

# pin_24 = Pin.create({title: "Fairytale Wedding at Oheka Castle", description: "Real weddings and styled photoshoots are featured here for inspiration in planning your luxury wedding."})
# image_24 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/interior/88c7fdbb087256bf78432b4a6e727778.jpg")
# pin_24.image.attach(io: image_24, filename:"88c7fdbb087256bf78432b4a6e727778.jpg")
# pin_24.save!

# pin_25 = Pin.create({title: "Conservatory Room Addition In The UK", description: "If you're looking for inspiration on how to redecorate or are a sucker for good interior design, you're going to love this subreddit. Hell, you'll probably enjoy it even if you're just bored and randomly scrolling through the Internet."})
# image_25 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/interior/a5707d3165dcfbbdf3771fb91a6dee1d.jpg")
# pin_25.image.attach(io: image_16, filename:"a5707d3165dcfbbdf3771fb91a6dee1d.jpg")
# pin_25.save!

# pin_26 = Pin.create({title: "House architecture | house aesthetic | indoor house decor | ~pic from Pinterest", description: "offee, morning coffee, morning routine, morning walk, day in my life, aesthetic morning routine, coffee recipe, iced coffee, moody aesthetic, neutral aesthetic, mindfulness, quotes inspirational, self care, manifesting, journal inspiration, journal inspiration, journaling aesthetic, how to be a blogger, Pinterest blogger, Tumblr aesthetic, aesthetic pics, bedroom aesthetic, aesthetic vintage, summer aesthetic, Insta photos, insta photos inspo, insta inspo"})
# image_26 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/interior/c1f6abc92752b425d40882d8f1495aaa.jpg")
# pin_26.image.attach(io: image_26, filename:"c1f6abc92752b425d40882d8f1495aaa.jpg")
# pin_26.save!

# pin_27 = Pin.create({title: "Summertime Inspiration: Somewhere by the Sea :: This Is Glamorous", description: "Weekday Wanderlust | Summertime Inspiration: Somewhere by the Sea - from Positano to the Amalfi Coast, Mykonos, Kikladhes, Greece and Los Angeles"})
# image_27 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/interior/c24477938b8f0a63aef9c12c542f8d88.jpg")
# pin_27.image.attach(io: image_27, filename:"c24477938b8f0a63aef9c12c542f8d88.jpg")
# pin_27.save!

# pin_28 = Pin.create({title: "Uma casa onde o mediterrâneo e o industrial se encontram", description: "Propriedade na região do Algarve, em Portugal, tem ambientes despojados com notas de sofisticação"})
# image_28 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/interior/e31c7ad154535e3ddee9d3a42cbb0eb8.jpg")
# pin_28.image.attach(io: image_28, filename:"e31c7ad154535e3ddee9d3a42cbb0eb8.jpg")
# pin_28.save!

# pin_29 = Pin.create({title: "Hopeful Violets", description: "`We expect the worst, and hope for the best`. _Mirabella_ .................. Mirabella Viola Hendrix, or Mirabella Viola Abeli.. never had it easy, as long as she can remember, she was being mistreated by her 'parents', never had the chance to experience what teens her age did, or even knew what they were supposed to do, shocked by the news she received, she moves in with the familly she never knew she had until now."})
# image_29 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/interior/Fantastic+Falls+Road+Estate.jpg")
# pin_29.image.attach(io: image_29, filename:"Fantastic+Falls+Road+Estate.jpg")
# pin_29.save!

# pin_30 = Pin.create({title: "Friday Inspiration: The Outdoors + The Heart of the Home - Studio McGee", description: "Friday Inspiration: The Outdoors + The Heart of the Home"})
# image_30 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/interior/fd44085497fdde427c62a17f42b9af13.jpg")
# pin_30.image.attach(io: image_30, filename:"fd44085497fdde427c62a17f42b9af13.jpg")
# pin_30.save!

# pin_31 = Pin.create({title: "Avignon Villa Rental | Avignon Serenity Suite | Haven In", description: "Luxury and beauty blend effortlessly in the Serenity Suite, one of five magnificent, private guest suites located in the exquisite Avignon Hôtel Particulier, a beautifully restored 19th century mansion in the heart of Avignon’s historic center. Located at the end of a quiet cul-de-sac, steps from the Palais des Papes, restaurants, markets, and fabulous shopping, this unique, fully renovated property was meticulously decorated with authentic and stylish furnishings, all chosen with care by the current owners: a French interior designer and his partner."})
# image_31 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/snowboarding/2-bro-s-media-l6lpv1OAP6s-unsplash.jpg")
# pin_31.image.attach(io: image_31, filename:"2-bro-s-media-l6lpv1OAP6s-unsplash.jpg")
# pin_31.save!

# # sunset

# pin_32 = Pin.create({title: "Beautiful orange and pink sunset", description: "Sunset aesthetic, beautiful sunset, pink sunset, orange sunset, clouds, nature, travel, hike, hiking, sun, sunrise, sunset pretty, gorgeous sunsets, beach sunset, mountain sunset, california sunset"})
# image_32 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/sunset/caleb-russell-V18GNaBeZqM-unsplash.jpg")
# pin_32.image.attach(io: image_32, filename:"caleb-russell-V18GNaBeZqM-unsplash.jpg")
# pin_32.save!

# pin_33 = Pin.create({title: "paradisee | Aesthetic pictures, Scenery, Summer vibes", description: "Mar 4, 2021 - This Pin was discovered by Christina. Discover (and save!) your own Pins on Pinterest"})
# image_33 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/sunset/dewang-gupta-ESEnXckWlLY-unsplash.jpg")
# pin_33.image.attach(io: image_33, filename:"dewang-gupta-ESEnXckWlLY-unsplash.jpg")
# pin_33.save!

# pin_34 = Pin.create({title: "atardeceres tumblr | Sky aesthetic, Sunset pictures, Nature photography", description: "Sun Sky Sunset Clouds background"})
# image_34 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/sunset/kylefromthenorth-GUddL1Nyl_U-unsplash.jpg")
# pin_34.image.attach(io: image_34, filename:"kylefromthenorth-GUddL1Nyl_U-unsplash.jpg")
# pin_34.save!

# pin_35 = Pin.create({title: "Sunset Mother's Nature Style", description: "A firey sunset over the headland at Venus Bay, South Australia"})
# image_35 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/sunset/diego-ph-VmRxRz0gD_s-unsplash.jpg")
# pin_35.image.attach(io: image_35, filename:"diego-ph-VmRxRz0gD_s-unsplash.jpg")
# pin_35.save!

# pin_36 = Pin.create({title: "Fire in the Sky", description: "threemonthsandaday: “ dusty ”"})
# image_36 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/sunset/gontran-isnard-0w6hGFGZpfI-unsplash.jpg")
# pin_36.image.attach(io: image_36, filename:"gontran-isnard-0w6hGFGZpfI-unsplash.jpg")
# pin_36.save!

# pin_37 = Pin.create({title: "Into the Wildfire", description: "threemonthsandaday: “ dusty ” "})
# image_37 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/sunset/karol-kaczorek-mWxhlAxJies-unsplash.jpg")
# pin_37.image.attach(io: image_37, filename:"karol-kaczorek-mWxhlAxJies-unsplash.jpg")
# pin_37.save!

# pin_38 = Pin.create({title: "Pin de Laia Calafat Nieto en sfondi en 2022 | Mandalas in 2022 | Sky aesthetic, Sunset pictures, Sky pictures", description: "May 27, 2021 - This Pin was discovered by noebrigit. Discover (and save!) your own Pins on Pinterest
# "})
# image_38 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/sunset/luca-micheli-r9RW20TrQ0Y-unsplash.jpg")
# pin_38.image.attach(io: image_38, filename:"luca-micheli-r9RW20TrQ0Y-unsplash.jpg")
# pin_38.save!

# pin_39 = Pin.create({title: "Watch more sunsets than Netflix | Summer photos, Summer pictures, Summer friends", description: "Feb 9, 2022 - Jul 1, 2020 - This Pin was discovered by .. Discover (and save!) your own Pins on Pinterest"})
# image_39 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/sunset/martin-edholm-7lkDXfdfOC8-unsplash.jpg")
# pin_39.image.attach(io: image_39, filename:"martin-edholm-7lkDXfdfOC8-unsplash.jpg")
# pin_39.save!

# pin_40 = Pin.create({title: "summer sunset 🌅 | Fotografi pantai, Wallpaper pantai, Fotografi alam", description: "2020 Agu 20"})
# image_40 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/sunset/muzammil-soorma-KTdzeb28jyo-unsplash.jpg")
# pin_40.image.attach(io: image_40, filename:"muzammil-soorma-KTdzeb28jyo-unsplash.jpg")
# pin_40.save!

# pin_41 = Pin.create({title: "sunset sunrise | Sunrise pictures, Sunset pictures, Sky aesthetic", description: "Sep 6, 2021 - This Pin was discovered by ѕ. Discover (and save!) your own Pins on Pinterest"})
# image_41 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/sunset/nikhita-singhal-yi1Hd1I3V3Y-unsplash.jpg")
# pin_41.image.attach(io: image_41, filename:"nikhita-singhal-yi1Hd1I3V3Y-unsplash.jpg")
# pin_41.save!

# pin_42 = Pin.create({title: "zking1 | Beach sunset wallpaper, Sunset pictures, Sky aesthetic", description: "May 20, 2020 - This Pin was discovered by RJDigital - travel blog. Discover (and save!) your own Pins on Pinterest"})
# image_42 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/sunset/quino-al-mBQIfKlvowM-unsplash.jpg")
# pin_42.image.attach(io: image_42, filename:"quino-al-mBQIfKlvowM-unsplash.jpg")
# pin_42.save!

# pin_43 = Pin.create({title: "Pin by Mary Rivero on Almacenamiento rápido | Sky aesthetic, Beautiful landscape wallpaper, Beach sunset w… in 2022 | Sky aesthetic, Beach sunset wallpaper, Sunset pictures", description: "cotton candy cloud sky"})
# image_43 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/sunset/recal-media-ueBIGLmiI5A-unsplash.jpg")
# pin_43.image.attach(io: image_43, filename:"recal-media-ueBIGLmiI5A-unsplash.jpg")
# pin_43.save!

# pin_44 = Pin.create({title: "hot choccy | Sky photography nature, Sky aesthetic, Sky photography", description: "A Very Exciting Sunset"})
# image_44 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/sunset/sergey-pesterev-tMvuB9se2uQ-unsplash.jpg")
# pin_44.image.attach(io: image_44, filename:"sergey-pesterev-tMvuB9se2uQ-unsplash.jpg")
# pin_44.save!

# pin_45 = Pin.create({title: "@angelasunn_ ♥ | Summer pictures, Summer friends, Summer photos", description: "Pin by 김진현 on 감성 | Sky aesthetic, Sky pictures, Sunset pictures"})
# image_45 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/sunset/simon-berger-UqCnDyc_3vA-unsplash.jpg")
# pin_45.image.attach(io: image_45, filename:"simon-berger-UqCnDyc_3vA-unsplash.jpg")
# pin_45.save!

# pin_46 = Pin.create({title: "Pin by :)) on sunset in 2022 | Sky aesthetic, Sunset pictures, Beach sunset wallpaper", description: "Los mejores fondos de pantalla para viajeros"})
# image_46 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/sunset/simon-marsault-Y3cmorOBse0-unsplash.jpg")
# pin_46.image.attach(io: image_46, filename:"simon-marsault-Y3cmorOBse0-unsplash.jpg")
# pin_46.save!

# pin_47 = Pin.create({title: "Pin by Carla Macías on sunset | Beautiful beach pictures, Sunset pictures, Sky aesthetic", description: "Packer Meadow Sunset"})
# image_47 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/sunset/stories-HRX5WXFyB64-unsplash.jpg")
# pin_47.image.attach(io: image_47, filename:"stories-HRX5WXFyB64-unsplash.jpg")
# pin_47.save!

# pin_48 = Pin.create({title: "Pin by MrsBad on ᴡ ᴀ ʟ ʟ ᴘ ᴀ ᴘ ᴇ ʀ s | Sky aesthetic, Sunset pictures, Nature photography", description: "There are so many stunning locations in Africa, in this article we share 7 of them ranging from all over the African continent!"})
# image_48 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/sunset/timo-wagner-fT6-YkB0nfg-unsplash.jpg")
# pin_48.image.attach(io: image_48, filename:"timo-wagner-fT6-YkB0nfg-unsplash.jpg")
# pin_48.save!

# # pie

# pin_49 = Pin.create({title: "Cheddar short crust pastry", description: "short crust pastry with cheddar cheese"})
# image_49 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/pie/alex-lvrs-aV9qf-Zy3E0-unsplash.jpg")
# pin_49.image.attach(io: image_49, filename:"alex-lvrs-aV9qf-Zy3E0-unsplash.jpg")
# pin_49.save!

# pin_50 = Pin.create({title: "Cinnamon Sugar Apple Butter Pie | Butternut Bakery", description: "2 reviews · 1.5 hours · Serves 8 · This apple butter pie is unlike any other pie you’ve had! Its custard-base filling is made with cozy apple butter and topped off with a layer of cinnamon sugar. It creates a crackly crust on top that’s sweet and so delicious. This entire pie is also baked in a buttery and flaky gluten free pie crust! You’d never even know that it’s gluten free, but it makes this dessert accessible to everyone around your Thanksgiving table."})
# image_50 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/pie/alex-lvrs-aX_ljOOyWJY-unsplash.jpg")
# pin_50.image.attach(io: image_50, filename:"alex-lvrs-aX_ljOOyWJY-unsplash.jpg")
# pin_50.save!

# pin_51 = Pin.create({title: "Brown Sugar Peach Crumble Pie - Sally's Baking Addiction", description: "Homemade peach crumble pie is made with sweet brown sugar and warm cinnamon spice. Top each slice of brown sugar peach crumble pie with vanilla ice cream!"})
# image_51 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/pie/alex-lvrs-KnS4CDYUUoI-unsplash.jpg")
# pin_51.image.attach(io: image_51, filename:"alex-lvrs-KnS4CDYUUoI-unsplash.jpg")
# pin_51.save!

# pin_52 = Pin.create({title: "Lemon Pie Bars with Strawberry Meringue • Cook Til Delicious", description: "I have had so many requests for this recipe since posting this photo on Instagram, so I am sharing it with you today with one caveat: I have only tested this recipe once as written. Generally I make all recipes I post here at least twice before sharing so I can ensure it’s repeatable and […]"})
# image_52 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/pie/bruna-branco-IK2ep3jMnHA-unsplash.jpg")
# pin_52.image.attach(io: image_52, filename:"bruna-branco-IK2ep3jMnHA-unsplash.jpg")
# pin_52.save!

# pin_53 = Pin.create({title: "Peaches and Cream Pretzel Pie", description: "238 reviews · 35 minutes · Serves 8 · The crust is a mix of salty pretzels, sweet honey, and a bit of butter. The cream filling is made with four base ingredients...heavy cream, crème fraîche, vanilla, and a touch of sugar. The filling is spooned into that salty crust and topped with in-season honeyed peaches."})
# image_53 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/pie/danae-alexandri-8BFIyFaRWoA-unsplash.jpg")
# pin_53.image.attach(io: image_53, filename:"danae-alexandri-8BFIyFaRWoA-unsplash.jpg")
# pin_53.save!

# pin_54 = Pin.create({title: "Lemon Sugar Coconut Cream Pie.", description: "137 reviews · 35 minutes · Serves 8 · Every bite is full of cool creamy coconut pudding and crunchy toasted coconut...the best a spring/summer pie can offer!"})
# image_54 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/pie/didi-miam-ftrv8LiVZso-unsplash.jpg")
# pin_54.image.attach(io: image_54, filename:"didi-miam-ftrv8LiVZso-unsplash.jpg")
# pin_54.save!

# pin_55 = Pin.create({title: "Pie-Crust-Design-Before-After-Part-2-Karin-Pfeiff-Boschek", description: "German baker and photographer Karin Pfeiff-Boschek takes pastry baking to a whole new level that is definitely close to pie-fection. She masterfully arranges dough and fruits into the most beautiful pie crust designs. Vibrant botanical and geometrical ornaments on top of delicious pies make them almost too pretty to eat."})
# image_55 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/pie/foodie-flavours-lnrkFexHGbU-unsplash+(1).jpg")
# pin_55.image.attach(io: image_55, filename:"foodie-flavours-lnrkFexHGbU-unsplash+(1).jpg")
# pin_55.save!

# pin_56 = Pin.create({title: "Best Ever Banana Pudding Pie", description: "173 reviews · 20 minutes · Serves 8 · Crowd pleasing Banana Pudding Pie is ready to serve in under a half hour! The only thing you have to bake is the crust. Creamy vanilla pudding is filled with fresh bananas and vanilla wafers, topped with Cool Whip, vanilla wafers and a drizzle of caramel sauce. DELICIOUS!"})
# image_56 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/pie/levi-guzman-ZUb3YN8B5K4-unsplash.jpg")
# pin_56.image.attach(io: image_56, filename:"levi-guzman-ZUb3YN8B5K4-unsplash.jpg")
# pin_56.save!

# pin_57 = Pin.create({title: "Cranberry and Blueberry Pie", description: "1 reviews · 1.5 hours · Serves 8 · This Cranberry Blueberry Pie brings a little summer into the chill of fall. Sweet wild blueberries are accented with tart cranberries in just the right proportion, accented with orange and cinnamon and tucked inside a flaky crust. This pie can be made with a lattice crust or just a double crust left plain or with decorative cut-outs. For a nice neat pie slice, use quick cooking tapioca for the thickener. For a more runny filling, use flour or cornstarch. See the body of the post for more details."})
# image_57 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/pie/monika-grabkowska-neu4T59mTcY-unsplash.jpg")
# pin_57.image.attach(io: image_57, filename:"monika-grabkowska-neu4T59mTcY-unsplash.jpg")
# pin_57.save!

# pin_58 = Pin.create({title: "Instagram's Most Stunning Pie Crusts Come from a Self-Taught Baker", description: "We can't stop scrolling through these incredible pie designs."})
# image_58 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/pie/priscilla-du-preez-HG1pJiQHXzs-unsplash.jpg")
# pin_58.image.attach(io: image_58, filename:"priscilla-du-preez-HG1pJiQHXzs-unsplash.jpg")
# pin_58.save!

# pin_59 = Pin.create({title: "Blueberry Sour Cream Crumble Pie", description: "This blueberry sour cream pie is the best blueberry pie ever! Sweet sour cream custard, fresh blueberries, and a crumble topping. It will be the best Thanksgiving Pie you make this year! "})
# image_59 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/pie/ram-ho-PWlbT-5v1OE-unsplash+(1).jpg")
# pin_59.image.attach(io: image_59, filename:"ram-ho-PWlbT-5v1OE-unsplash+(1).jpg")
# pin_59.save!

# pin_60 = Pin.create({title: "Blueberry Buttermilk Pie", description: "3 reviews · 1.5 hours · Serves 6 · This Blueberry Buttermilk Pie is truly something special. Direct from Chef Charles Youst of the Classic Cafe in Roanoke, TX, this is a pie that is not difficult to prepare in your own kitchen, and one you and you're loved ones will want time and time again. Be sure to make the Perfect Pie Crust!"})
# image_60 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/pie/uliana-kopanytsia-2FA0VJzwc0g-unsplash.jpg")
# pin_60.image.attach(io: image_60, filename:"timo-wagner-fT6-YkB0nfg-unsplash.jpg")
# pin_60.save!

# pin_61 = Pin.create({title: "Strawberry Rhubarb Pie with Crumb Topping", description: "39 reviews · 1.5 hours · Serves 8 · Strawberry Rhubarb Pie with Crumb Topping is the perfect summertime pie. Perfectly tart and sweet, piled high in my Flaky-All Butter Crust."})
# image_61 = URI.open("https://fs-pinteresting-dev.s3.amazonaws.com/pie/whitney-wright-qVQep55VTR4-unsplash.jpg")
# pin_61.image.attach(io: image_61, filename:"whitney-wright-qVQep55VTR4-unsplash.jpg")
# pin_61.save!


# pins_user_1 = PinsUser.create({user_id: user_1.id, pin_id: pin_1.id, created_pin: true, saved_pin: true})
# pins_user_2 = PinsUser.create({user_id: demo_user.id, pin_id: pin_2.id, created_pin: true, saved_pin: true})
# pins_user_3 = PinsUser.create!({user_id: demo_user.id, pin_id: pin_3.id, created_pin: false, saved_pin: true})
# pins_user_4 = PinsUser.create({user_id: user_1.id, pin_id: pin_2.id, created_pin: false, saved_pin: false})
# pins_user_5 = PinsUser.create({user_id: user_1.id, pin_id: pin_3.id, created_pin: false, saved_pin: false})
# pins_user_6 = PinsUser.create({user_id: user_1.id, pin_id: pin_4.id, created_pin: true, saved_pin: true})
# pins_user_7 = PinsUser.create({user_id: user_1.id, pin_id: pin_5.id, created_pin: true, saved_pin: true})
# pins_user_8 = PinsUser.create({user_id: demo_user.id, pin_id: pin_4.id, created_pin: false, saved_pin: false})
# pins_user_9 = PinsUser.create({user_id: demo_user.id, pin_id: pin_5.id, created_pin: false, saved_pin: true})
# pins_user_10 = PinsUser.create({user_id: user_1.id, pin_id: pin_6.id, created_pin: true, saved_pin: true})
# pins_user_11 = PinsUser.create({user_id: user_1.id, pin_id: pin_7.id, created_pin: true, saved_pin: true})
# pins_user_12 = PinsUser.create({user_id: user_1.id, pin_id: pin_8.id, created_pin: true, saved_pin: true})
# pins_user_13 = PinsUser.create({user_id: user_1.id, pin_id: pin_9.id, created_pin: true, saved_pin: true})
# pins_user_14 = PinsUser.create({user_id: user_1.id, pin_id: pin_10.id, created_pin: true, saved_pin: true})
# pins_user_15 = PinsUser.create({user_id: user_1.id, pin_id: pin_11.id, created_pin: true, saved_pin: true})
# pins_user_16 = PinsUser.create({user_id: user_1.id, pin_id: pin_12.id, created_pin: true, saved_pin: true})
# pins_user_17= PinsUser.create({user_id: user_1.id, pin_id: pin_13.id, created_pin: true, saved_pin: true})

# board_pin_6 = BoardPin.create({board_id: board_2.id, pin_id: pin_17.id})
# board_pin_7 = BoardPin.create({board_id: board_2.id, pin_id: pin_18.id})
# board_pin_8 = BoardPin.create({board_id: board_2.id, pin_id: pin_19.id})
# board_pin_9 = BoardPin.create({board_id: board_2.id, pin_id: pin_20.id})
# board_pin_10 = BoardPin.create({board_id: board_2.id, pin_id: pin_21.id})

# board_pin_11 = BoardPin.create({board_id: board_3.id, pin_id: pin_32.id})
# board_pin_12 = BoardPin.create({board_id: board_3.id, pin_id: pin_33.id})
# board_pin_13 = BoardPin.create({board_id: board_3.id, pin_id: pin_34.id})
# board_pin_14 = BoardPin.create({board_id: board_3.id, pin_id: pin_35.id})
# board_pin_15 = BoardPin.create({board_id: board_3.id, pin_id: pin_36.id})

# board_pin_6 = BoardPin.create({board_id: board_2.id, pin_id: pin_49.id})
# board_pin_7 = BoardPin.create({board_id: board_2.id, pin_id: pin_50.id})
# board_pin_8 = BoardPin.create({board_id: board_2.id, pin_id: pin_51.id})
# board_pin_9 = BoardPin.create({board_id: board_2.id, pin_id: pin_52.id})
# board_pin_10 = BoardPin.create({board_id: board_2.id, pin_id: pin_53.id})


