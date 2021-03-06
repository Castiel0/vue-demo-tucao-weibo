const emojiIds = ["grinning",
"smiley",
"smile",
"grin",
"laughing",
"sweat_smile",
"joy",
"relaxed",
"innocent",
"slightly_smiling_face",
"wink",
"relieved",
"heart_eyes",
"kissing_heart",
"kissing",
"kissing_smiling_eyes",
"kissing_closed_eyes",
"yum",
"stuck_out_tongue_winking_eye",
"stuck_out_tongue_closed_eyes",
"stuck_out_tongue",
"sunglasses",
"smirk",
"unamused",
"disappointed",
"pensive",
"worried",
"confused",
"persevere",
"confounded",
"tired_face",
"weary",
"triumph",
"angry",
"rage",
"no_mouth",
"neutral_face",
"expressionless",
"hushed",
"frowning",
"anguished",
"open_mouth",
"astonished",
"dizzy_face",
"flushed",
"scream",
"fearful",
"cold_sweat",
"cry",
"disappointed_relieved",
"sob",
"sweat",
"sleepy",
"sleeping",
"grimacing",
"mask",
"smiling_imp",
"imp",
"japanese_ogre",
"japanese_goblin",
"hankey",
"ghost",
"skull",
"alien",
"space_invader",
"jack_o_lantern",
"smiley_cat",
"smile_cat",
"joy_cat",
"heart_eyes_cat",
"smirk_cat",
"kissing_cat",
"scream_cat",
"crying_cat_face",
"pouting_cat",
"open_hands",
"raised_hands",
"clap",
"pray",
"+1",
"-1",
"facepunch",
"fist",
"v",
"ok_hand",
"point_left",
"point_right",
"point_up",
"point_down",
"hand",
"wave",
"muscle",
"nail_care",
"ring",
"lipstick",
"kiss",
"lips",
"tongue",
"ear",
"nose",
"footprints",
"eyes",
"bust_in_silhouette",
"busts_in_silhouette",
"baby",
"boy",
"girl",
"man",
"cop",
"man_with_turban",
"man_with_gua_pi_mao",
"older_woman",
"older_man",
"person_with_blond_hair",
"woman",
"construction_worker",
"guardsman",
"santa",
"princess",
"runner",
"couple",
"two_women_holding_hands",
"two_men_holding_hands",
"couple_with_heart",
"woman-heart-woman",
"man-heart-man",
"couplekiss",
"woman-kiss-woman",
"man-kiss-man",
"man-woman-boy",
"man-woman-girl",
"man-woman-girl-boy",
"man-woman-boy-boy",
"man-woman-girl-girl",
"woman-woman-boy",
"man-man-girl-girl",
"man-man-boy-boy",
"woman-woman-girl",
"womans_clothes",
"shirt",
"jeans",
"necktie",
"dress",
"tophat",
"womans_hat",
"athletic_shoe",
"mans_shoe",
"boot",
"sandal",
"high_heel",
"kimono",
"bikini",
"mortar_board",
"crown",
"school_satchel",
"pouch",
"purse",
"handbag",
"briefcase",
"eyeglasses",
"family",
"closed_umbrella"];

const emojis = [
  {"id":"grinning","name":"Grinning Face","colons":":grinning:","emoticons":[],"unified":"1f600","skin":null,"native":"馃榾"},
  {"id":"smiley","name":"Smiling Face with Open Mouth","colons":":smiley:","emoticons":["=)","=-)"],"unified":"1f603","skin":null,"native":"馃槂"},
  {"id":"smile","name":"Smiling Face with Open Mouth and Smiling Eyes","colons":":smile:","emoticons":["C:","c:",":D",":-D"],"unified":"1f604","skin":null,"native":"馃槃"},
  {"id":"grin","name":"Grinning Face with Smiling Eyes","colons":":grin:","emoticons":[],"unified":"1f601","skin":null,"native":"馃榿"},
  {"id":"laughing","name":"Smiling Face with Open Mouth and Tightly-Closed Eyes","colons":":laughing:","emoticons":[":>",":->"],"unified":"1f606","skin":null,"native":"馃槅"},
  {"id":"sweat_smile","name":"Smiling Face with Open Mouth and Cold Sweat","colons":":sweat_smile:","emoticons":[],"unified":"1f605","skin":null,"native":"馃槄"},
  {"id":"joy","name":"Face with Tears of Joy","colons":":joy:","emoticons":[],"unified":"1f602","skin":null,"native":"馃槀"},
  {"id":"relaxed","name":"White Smiling Face","colons":":relaxed:","emoticons":[],"unified":"263a-fe0f","skin":null,"native":"鈽猴笍"},
  {"id":"innocent","name":"Smiling Face with Halo","colons":":innocent:","emoticons":[],"unified":"1f607","skin":null,"native":"馃槆"},
  {"id":"slightly_smiling_face","name":"Slightly Smiling Face","colons":":slightly_smiling_face:","emoticons":[":)","(:",":-)"],"unified":"1f642","skin":null,"native":"馃檪"},
  {"id":"wink","name":"Winking Face","colons":":wink:","emoticons":[";)",";-)"],"unified":"1f609","skin":null,"native":"馃槈"},
  {"id":"relieved","name":"Relieved Face","colons":":relieved:","emoticons":[],"unified":"1f60c","skin":null,"native":"馃槍"},
  {"id":"heart_eyes","name":"Smiling Face with Heart-Shaped Eyes","colons":":heart_eyes:","emoticons":[],"unified":"1f60d","skin":null,"native":"馃槏"},
  {"id":"kissing_heart","name":"Face Throwing a Kiss","colons":":kissing_heart:","emoticons":[":*",":-*"],"unified":"1f618","skin":null,"native":"馃槝"},
  {"id":"kissing","name":"Kissing Face","colons":":kissing:","emoticons":[],"unified":"1f617","skin":null,"native":"馃槜"},
  {"id":"kissing_smiling_eyes","name":"Kissing Face with Smiling Eyes","colons":":kissing_smiling_eyes:","emoticons":[],"unified":"1f619","skin":null,"native":"馃槞"},
  {"id":"kissing_closed_eyes","name":"Kissing Face with Closed Eyes","colons":":kissing_closed_eyes:","emoticons":[],"unified":"1f61a","skin":null,"native":"馃槡"},
  {"id":"yum","name":"Face Savouring Delicious Food","colons":":yum:","emoticons":[],"unified":"1f60b","skin":null,"native":"馃構"},
  {"id":"stuck_out_tongue_winking_eye","name":"Face with Stuck-out Tongue and Winking Eye","colons":":stuck_out_tongue_winking_eye:","emoticons":[";p",";-p",";b",";-b",";P",";-P"],"unified":"1f61c","skin":null,"native":"馃槣"},
  {"id":"stuck_out_tongue_closed_eyes","name":"Face with Stuck-out Tongue and Tightly-Closed Eyes","colons":":stuck_out_tongue_closed_eyes:","emoticons":[],"unified":"1f61d","skin":null,"native":"馃槤"},
  {"id":"stuck_out_tongue","name":"Face with Stuck-out Tongue","colons":":stuck_out_tongue:","emoticons":[":p",":-p",":P",":-P",":b",":-b"],"unified":"1f61b","skin":null,"native":"馃槢"},
  {"id":"sunglasses","name":"Smiling Face with Sunglasses","colons":":sunglasses:","emoticons":["8)"],"unified":"1f60e","skin":null,"native":"馃槑"},
  {"id":"smirk","name":"Smirking Face","colons":":smirk:","emoticons":[],"unified":"1f60f","skin":null,"native":"馃槒"},
  {"id":"unamused","name":"Unamused Face","colons":":unamused:","emoticons":[],"unified":"1f612","skin":null,"native":"馃槖"},
  {"id":"disappointed","name":"Disappointed Face","colons":":disappointed:","emoticons":["):",":(",":-("],"unified":"1f61e","skin":null,"native":"馃槥"},
  {"id":"pensive","name":"Pensive Face","colons":":pensive:","emoticons":[],"unified":"1f614","skin":null,"native":"馃様"},
  {"id":"worried","name":"Worried Face","colons":":worried:","emoticons":[],"unified":"1f61f","skin":null,"native":"馃槦"},
  {"id":"confused","name":"Confused Face","colons":":confused:","emoticons":[":\\",":-\\",":/",":-/"],"unified":"1f615","skin":null,"native":"馃槙"},
  {"id":"persevere","name":"Persevering Face","colons":":persevere:","emoticons":[],"unified":"1f623","skin":null,"native":"馃槪"},
  {"id":"confounded","name":"Confounded Face","colons":":confounded:","emoticons":[],"unified":"1f616","skin":null,"native":"馃槚"},
  {"id":"tired_face","name":"Tired Face","colons":":tired_face:","emoticons":[],"unified":"1f62b","skin":null,"native":"馃槴"},
  {"id":"weary","name":"Weary Face","colons":":weary:","emoticons":[],"unified":"1f629","skin":null,"native":"馃槱"},
  {"id":"triumph","name":"Face with Look of Triumph","colons":":triumph:","emoticons":[],"unified":"1f624","skin":null,"native":"馃槫"},
  {"id":"angry","name":"Angry Face","colons":":angry:","emoticons":[">:(",">:-("],"unified":"1f620","skin":null,"native":"馃槧"},
  {"id":"rage","name":"Pouting Face","colons":":rage:","emoticons":[],"unified":"1f621","skin":null,"native":"馃槨"},
  {"id":"no_mouth","name":"Face Without Mouth","colons":":no_mouth:","emoticons":[],"unified":"1f636","skin":null,"native":"馃樁"},
  {"id":"neutral_face","name":"Neutral Face","colons":":neutral_face:","emoticons":[":|",":-|"],"unified":"1f610","skin":null,"native":"馃槓"},
  {"id":"expressionless","name":"Expressionless Face","colons":":expressionless:","emoticons":[],"unified":"1f611","skin":null,"native":"馃槕"},
  {"id":"hushed","name":"Hushed Face","colons":":hushed:","emoticons":[],"unified":"1f62f","skin":null,"native":"馃槸"},
  {"id":"frowning","name":"Frowning Face with Open Mouth","colons":":frowning:","emoticons":[],"unified":"1f626","skin":null,"native":"馃槮"},
  {"id":"anguished","name":"Anguished Face","colons":":anguished:","emoticons":["D:"],"unified":"1f627","skin":null,"native":"馃槯"},
  {"id":"open_mouth","name":"Face with Open Mouth","colons":":open_mouth:","emoticons":[":o",":-o",":O",":-O"],"unified":"1f62e","skin":null,"native":"馃槷"},
  {"id":"astonished","name":"Astonished Face","colons":":astonished:","emoticons":[],"unified":"1f632","skin":null,"native":"馃槻"},
  {"id":"dizzy_face","name":"Dizzy Face","colons":":dizzy_face:","emoticons":[],"unified":"1f635","skin":null,"native":"馃樀"},
  {"id":"flushed","name":"Flushed Face","colons":":flushed:","emoticons":[],"unified":"1f633","skin":null,"native":"馃槼"},
  {"id":"scream","name":"Face Screaming in Fear","colons":":scream:","emoticons":[],"unified":"1f631","skin":null,"native":"馃槺"},
  {"id":"fearful","name":"Fearful Face","colons":":fearful:","emoticons":[],"unified":"1f628","skin":null,"native":"馃槰"},
  {"id":"cold_sweat","name":"Face with Open Mouth and Cold Sweat","colons":":cold_sweat:","emoticons":[],"unified":"1f630","skin":null,"native":"馃槹"},
  {"id":"cry","name":"Crying Face","colons":":cry:","emoticons":[":'("],"unified":"1f622","skin":null,"native":"馃槩"},
  {"id":"disappointed_relieved","name":"Disappointed but Relieved Face","colons":":disappointed_relieved:","emoticons":[],"unified":"1f625","skin":null,"native":"馃槬"},
  {"id":"sob","name":"Loudly Crying Face","colons":":sob:","emoticons":[],"unified":"1f62d","skin":null,"native":"馃槶"},
  {"id":"sweat","name":"Face with Cold Sweat","colons":":sweat:","emoticons":[],"unified":"1f613","skin":null,"native":"馃槗"},
  {"id":"sleepy","name":"Sleepy Face","colons":":sleepy:","emoticons":[],"unified":"1f62a","skin":null,"native":"馃槳"},
  {"id":"sleeping","name":"Sleeping Face","colons":":sleeping:","emoticons":[],"unified":"1f634","skin":null,"native":"馃槾"},
  {"id":"grimacing","name":"Grimacing Face","colons":":grimacing:","emoticons":[],"unified":"1f62c","skin":null,"native":"馃槵"},
  {"id":"mask","name":"Face with Medical Mask","colons":":mask:","emoticons":[],"unified":"1f637","skin":null,"native":"馃樂"},
  {"id":"smiling_imp","name":"Smiling Face with Horns","colons":":smiling_imp:","emoticons":[],"unified":"1f608","skin":null,"native":"馃槇"},
  {"id":"imp","name":"Imp","colons":":imp:","emoticons":[],"unified":"1f47f","skin":null,"native":"馃懣"},
  {"id":"japanese_ogre","name":"Japanese Ogre","colons":":japanese_ogre:","emoticons":[],"unified":"1f479","skin":null,"native":"馃懝"},
  {"id":"japanese_goblin","name":"Japanese Goblin","colons":":japanese_goblin:","emoticons":[],"unified":"1f47a","skin":null,"native":"馃懞"},
  {"id":"hankey","name":"Pile of Poo","colons":":hankey:","emoticons":[],"unified":"1f4a9","skin":null,"native":"馃挬"},
  {"id":"ghost","name":"Ghost","colons":":ghost:","emoticons":[],"unified":"1f47b","skin":null,"native":"馃懟"},
  {"id":"skull","name":"Skull","colons":":skull:","emoticons":[],"unified":"1f480","skin":null,"native":"馃拃"},
  {"id":"alien","name":"Extraterrestrial Alien","colons":":alien:","emoticons":[],"unified":"1f47d","skin":null,"native":"馃懡"},
  {"id":"space_invader","name":"Alien Monster","colons":":space_invader:","emoticons":[],"unified":"1f47e","skin":null,"native":"馃懢"},
  {"id":"jack_o_lantern","name":"Jack-O-Lantern","colons":":jack_o_lantern:","emoticons":[],"unified":"1f383","skin":null,"native":"馃巸"},
  {"id":"smiley_cat","name":"Smiling Cat Face with Open Mouth","colons":":smiley_cat:","emoticons":[],"unified":"1f63a","skin":null,"native":"馃樅"},
  {"id":"smile_cat","name":"Grinning Cat Face with Smiling Eyes","colons":":smile_cat:","emoticons":[],"unified":"1f638","skin":null,"native":"馃樃"},
  {"id":"joy_cat","name":"Cat Face with Tears of Joy","colons":":joy_cat:","emoticons":[],"unified":"1f639","skin":null,"native":"馃樄"},
  {"id":"heart_eyes_cat","name":"Smiling Cat Face with Heart-Shaped Eyes","colons":":heart_eyes_cat:","emoticons":[],"unified":"1f63b","skin":null,"native":"馃樆"},
  {"id":"smirk_cat","name":"Cat Face with Wry Smile","colons":":smirk_cat:","emoticons":[],"unified":"1f63c","skin":null,"native":"馃樇"},
  {"id":"kissing_cat","name":"Kissing Cat Face with Closed Eyes","colons":":kissing_cat:","emoticons":[],"unified":"1f63d","skin":null,"native":"馃樈"},
  {"id":"scream_cat","name":"Weary Cat Face","colons":":scream_cat:","emoticons":[],"unified":"1f640","skin":null,"native":"馃檧"},
  {"id":"crying_cat_face","name":"Crying Cat Face","colons":":crying_cat_face:","emoticons":[],"unified":"1f63f","skin":null,"native":"馃樋"},
  {"id":"pouting_cat","name":"Pouting Cat Face","colons":":pouting_cat:","emoticons":[],"unified":"1f63e","skin":null,"native":"馃樉"},
  {"id":"open_hands","name":"Open Hands Sign","colons":":open_hands:","emoticons":[],"unified":"1f450","skin":1,"native":"馃憪"},
  {"id":"raised_hands","name":"Person Raising Both Hands in Celebration","colons":":raised_hands:","emoticons":[],"unified":"1f64c","skin":1,"native":"馃檶"},
  {"id":"clap","name":"Clapping Hands Sign","colons":":clap:","emoticons":[],"unified":"1f44f","skin":1,"native":"馃憦"},
  {"id":"pray","name":"Person with Folded Hands","colons":":pray:","emoticons":[],"unified":"1f64f","skin":1,"native":"馃檹"},
  {"id":"+1","name":"Thumbs Up Sign","colons":":+1:","emoticons":[],"unified":"1f44d","skin":1,"native":"馃憤"},
  {"id":"-1","name":"Thumbs Down Sign","colons":":-1:","emoticons":[],"unified":"1f44e","skin":1,"native":"馃憥"},
  {"id":"facepunch","name":"Fisted Hand Sign","colons":":facepunch:","emoticons":[],"unified":"1f44a","skin":1,"native":"馃憡"},
  {"id":"fist","name":"Raised Fist","colons":":fist:","emoticons":[],"unified":"270a","skin":1,"native":"鉁?"},
  {"id":"v","name":"Victory Hand","colons":":v:","emoticons":[],"unified":"270c-fe0f","skin":1,"native":"鉁岋笍"},
  {"id":"ok_hand","name":"Ok Hand Sign","colons":":ok_hand:","emoticons":[],"unified":"1f44c","skin":1,"native":"馃憣"},
  {"id":"point_left","name":"White Left Pointing Backhand Index","colons":":point_left:","emoticons":[],"unified":"1f448","skin":1,"native":"馃憟"},
  {"id":"point_right","name":"White Right Pointing Backhand Index","colons":":point_right:","emoticons":[],"unified":"1f449","skin":1,"native":"馃憠"},
  {"id":"point_up","name":"White Up Pointing Index","colons":":point_up:","emoticons":[],"unified":"261d-fe0f","skin":1,"native":"鈽濓笍"},
  {"id":"point_down","name":"White Down Pointing Backhand Index","colons":":point_down:","emoticons":[],"unified":"1f447","skin":1,"native":"馃憞"},
  {"id":"hand","name":"Raised Hand","colons":":hand:","emoticons":[],"unified":"270b","skin":1,"native":"鉁?"},
  {"id":"wave","name":"Waving Hand Sign","colons":":wave:","emoticons":[],"unified":"1f44b","skin":1,"native":"馃憢"},
  {"id":"muscle","name":"Flexed Biceps","colons":":muscle:","emoticons":[],"unified":"1f4aa","skin":1,"native":"馃挭"},
  {"id":"nail_care","name":"Nail Polish","colons":":nail_care:","emoticons":[],"unified":"1f485","skin":1,"native":"馃拝"},
  {"id":"ring","name":"Ring","colons":":ring:","emoticons":[],"unified":"1f48d","skin":null,"native":"馃拲"},
  {"id":"lipstick","name":"Lipstick","colons":":lipstick:","emoticons":[],"unified":"1f484","skin":null,"native":"馃拕"},
  {"id":"kiss","name":"Kiss Mark","colons":":kiss:","emoticons":[],"unified":"1f48b","skin":null,"native":"馃拫"},
  {"id":"lips","name":"Mouth","colons":":lips:","emoticons":[],"unified":"1f444","skin":null,"native":"馃憚"},
  {"id":"tongue","name":"Tongue","colons":":tongue:","emoticons":[],"unified":"1f445","skin":null,"native":"馃憛"},
  {"id":"ear","name":"Ear","colons":":ear:","emoticons":[],"unified":"1f442","skin":1,"native":"馃憘"},
  {"id":"nose","name":"Nose","colons":":nose:","emoticons":[],"unified":"1f443","skin":1,"native":"馃憙"},
  {"id":"footprints","name":"Footprints","colons":":footprints:","emoticons":[],"unified":"1f463","skin":null,"native":"馃懀"},
  {"id":"eyes","name":"Eyes","colons":":eyes:","emoticons":[],"unified":"1f440","skin":null,"native":"馃憖"},
  {"id":"bust_in_silhouette","name":"Bust in Silhouette","colons":":bust_in_silhouette:","emoticons":[],"unified":"1f464","skin":null,"native":"馃懁"},
  {"id":"busts_in_silhouette","name":"Busts in Silhouette","colons":":busts_in_silhouette:","emoticons":[],"unified":"1f465","skin":null,"native":"馃懃"},
  {"id":"baby","name":"Baby","colons":":baby:","emoticons":[],"unified":"1f476","skin":1,"native":"馃懚"},
  {"id":"boy","name":"Boy","colons":":boy:","emoticons":[],"unified":"1f466","skin":1,"native":"馃懄"},
  {"id":"girl","name":"Girl","colons":":girl:","emoticons":[],"unified":"1f467","skin":1,"native":"馃懅"},
  {"id":"man","name":"Man","colons":":man:","emoticons":[],"unified":"1f468","skin":1,"native":"馃懆"},
  {"id":"cop","name":"Police Officer","colons":":cop:","emoticons":[],"unified":"1f46e","skin":1,"native":"馃懏"},
  {"id":"man_with_turban","name":"Man with Turban","colons":":man_with_turban:","emoticons":[],"unified":"1f473","skin":1,"native":"馃懗"},
  {"id":"man_with_gua_pi_mao","name":"Man with Gua Pi Mao","colons":":man_with_gua_pi_mao:","emoticons":[],"unified":"1f472","skin":1,"native":"馃懖"},
  {"id":"older_woman","name":"Older Woman","colons":":older_woman:","emoticons":[],"unified":"1f475","skin":1,"native":"馃懙"},
  {"id":"older_man","name":"Older Man","colons":":older_man:","emoticons":[],"unified":"1f474","skin":1,"native":"馃懘"},
  {"id":"person_with_blond_hair","name":"Person with Blond Hair","colons":":person_with_blond_hair:","emoticons":[],"unified":"1f471","skin":1,"native":"馃懕"},
  {"id":"woman","name":"Woman","colons":":woman:","emoticons":[],"unified":"1f469","skin":1,"native":"馃懇"},
  {"id":"construction_worker","name":"Construction Worker","colons":":construction_worker:","emoticons":[],"unified":"1f477","skin":1,"native":"馃懛"},
  {"id":"guardsman","name":"Guardsman","colons":":guardsman:","emoticons":[],"unified":"1f482","skin":1,"native":"馃拏"},
  {"id":"santa","name":"Father Christmas","colons":":santa:","emoticons":[],"unified":"1f385","skin":1,"native":"馃巺"},
  {"id":"princess","name":"Princess","colons":":princess:","emoticons":[],"unified":"1f478","skin":1,"native":"馃懜"},
  {"id":"runner","name":"Runner","colons":":runner:","emoticons":[],"unified":"1f3c3","skin":1,"native":"馃弮"},
  {"id":"couple","name":"Man and Woman Holding Hands","colons":":couple:","emoticons":[],"unified":"1f46b","skin":null,"native":"馃懌"},
  {"id":"two_women_holding_hands","name":"Two Women Holding Hands","colons":":two_women_holding_hands:","emoticons":[],"unified":"1f46d","skin":null,"native":"馃懎"},
  {"id":"two_men_holding_hands","name":"Two Men Holding Hands","colons":":two_men_holding_hands:","emoticons":[],"unified":"1f46c","skin":null,"native":"馃懍"},
  {"id":"couple_with_heart","name":"Couple with Heart","colons":":couple_with_heart:","emoticons":[],"unified":"1f491","skin":null,"native":"馃拺"},
  {"id":"woman-heart-woman","name":"Woman Heart Woman","colons":":woman-heart-woman:","emoticons":[],"unified":"1f469-200d-2764-fe0f-200d-1f469","skin":null,"native":"馃懇鈥嶁潳锔忊€嶐煈?"},
  {"id":"man-heart-man","name":"Man Heart Man","colons":":man-heart-man:","emoticons":[],"unified":"1f468-200d-2764-fe0f-200d-1f468","skin":null,"native":"馃懆鈥嶁潳锔忊€嶐煈?"},
  {"id":"couplekiss","name":"Kiss","colons":":couplekiss:","emoticons":[],"unified":"1f48f","skin":null,"native":"馃拸"},
  {"id":"woman-kiss-woman","name":"Woman Kiss Woman","colons":":woman-kiss-woman:","emoticons":[],"unified":"1f469-200d-2764-fe0f-200d-1f48b-200d-1f469","skin":null,"native":"馃懇鈥嶁潳锔忊€嶐煉嬧€嶐煈?"},
  {"id":"man-kiss-man","name":"Man Kiss Man","colons":":man-kiss-man:","emoticons":[],"unified":"1f468-200d-2764-fe0f-200d-1f48b-200d-1f468","skin":null,"native":"馃懆鈥嶁潳锔忊€嶐煉嬧€嶐煈?"},
  {"id":"family","name":"Family","colons":":family:","emoticons":[],"unified":"1f46a","skin":null,"native":"馃應"},
  {"id":"man-woman-girl","name":"Man Woman Girl","colons":":man-woman-girl:","emoticons":[],"unified":"1f468-200d-1f469-200d-1f467","skin":null,"native":"馃懆鈥嶐煈┾€嶐煈?"},
  {"id":"man-woman-girl-boy","name":"Man Woman Girl Boy","colons":":man-woman-girl-boy:","emoticons":[],"unified":"1f468-200d-1f469-200d-1f467-200d-1f466","skin":null,"native":"馃懆鈥嶐煈┾€嶐煈р€嶐煈?"},
  {"id":"man-woman-boy-boy","name":"Man Woman Boy Boy","colons":":man-woman-boy-boy:","emoticons":[],"unified":"1f468-200d-1f469-200d-1f466-200d-1f466","skin":null,"native":"馃懆鈥嶐煈┾€嶐煈︹€嶐煈?"},
  {"id":"man-woman-girl-girl","name":"Man Woman Girl Girl","colons":":man-woman-girl-girl:","emoticons":[],"unified":"1f468-200d-1f469-200d-1f467-200d-1f467","skin":null,"native":"馃懆鈥嶐煈┾€嶐煈р€嶐煈?"},
  {"id":"woman-woman-boy","name":"Woman Woman Boy","colons":":woman-woman-boy:","emoticons":[],"unified":"1f469-200d-1f469-200d-1f466","skin":null,"native":"馃懇鈥嶐煈┾€嶐煈?"},
  {"id":"man-man-girl-girl","name":"Man Man Girl Girl","colons":":man-man-girl-girl:","emoticons":[],"unified":"1f468-200d-1f468-200d-1f467-200d-1f467","skin":null,"native":"馃懆鈥嶐煈ㄢ€嶐煈р€嶐煈?"},
  {"id":"man-man-boy-boy","name":"Man Man Boy Boy","colons":":man-man-boy-boy:","emoticons":[],"unified":"1f468-200d-1f468-200d-1f466-200d-1f466","skin":null,"native":"馃懆鈥嶐煈ㄢ€嶐煈︹€嶐煈?"},
  {"id":"woman-woman-girl","name":"Woman Woman Girl","colons":":woman-woman-girl:","emoticons":[],"unified":"1f469-200d-1f469-200d-1f467","skin":null,"native":"馃懇鈥嶐煈┾€嶐煈?"},
  {"id":"womans_clothes","name":"Womans Clothes","colons":":womans_clothes:","emoticons":[],"unified":"1f45a","skin":null,"native":"馃憵"},
  {"id":"shirt","name":"T-Shirt","colons":":shirt:","emoticons":[],"unified":"1f455","skin":null,"native":"馃憰"},
  {"id":"jeans","name":"Jeans","colons":":jeans:","emoticons":[],"unified":"1f456","skin":null,"native":"馃憱"},
  {"id":"necktie","name":"Necktie","colons":":necktie:","emoticons":[],"unified":"1f454","skin":null,"native":"馃憯"},
  {"id":"dress","name":"Dress","colons":":dress:","emoticons":[],"unified":"1f457","skin":null,"native":"馃憲"},
  {"id":"tophat","name":"Top Hat","colons":":tophat:","emoticons":[],"unified":"1f3a9","skin":null,"native":"馃帺"},
  {"id":"womans_hat","name":"Womans Hat","colons":":womans_hat:","emoticons":[],"unified":"1f452","skin":null,"native":"馃憭"},
  {"id":"athletic_shoe","name":"Athletic Shoe","colons":":athletic_shoe:","emoticons":[],"unified":"1f45f","skin":null,"native":"馃憻"},
  {"id":"mans_shoe","name":"Mans Shoe","colons":":mans_shoe:","emoticons":[],"unified":"1f45e","skin":null,"native":"馃憺"},
  {"id":"boot","name":"Womans Boots","colons":":boot:","emoticons":[],"unified":"1f462","skin":null,"native":"馃憿"},
  {"id":"sandal","name":"Womans Sandal","colons":":sandal:","emoticons":[],"unified":"1f461","skin":null,"native":"馃憽"},
  {"id":"high_heel","name":"High-Heeled Shoe","colons":":high_heel:","emoticons":[],"unified":"1f460","skin":null,"native":"馃憼"},
  {"id":"kimono","name":"Kimono","colons":":kimono:","emoticons":[],"unified":"1f458","skin":null,"native":"馃憳"},
  {"id":"bikini","name":"Bikini","colons":":bikini:","emoticons":[],"unified":"1f459","skin":null,"native":"馃憴"},
  {"id":"mortar_board","name":"Graduation Cap","colons":":mortar_board:","emoticons":[],"unified":"1f393","skin":null,"native":"馃帗"},
  {"id":"crown","name":"Crown","colons":":crown:","emoticons":[],"unified":"1f451","skin":null,"native":"馃憫"},
  {"id":"school_satchel","name":"School Satchel","colons":":school_satchel:","emoticons":[],"unified":"1f392","skin":null,"native":"馃帓"},
  {"id":"pouch","name":"Pouch","colons":":pouch:","emoticons":[],"unified":"1f45d","skin":null,"native":"馃憹"},
  {"id":"purse","name":"Purse","colons":":purse:","emoticons":[],"unified":"1f45b","skin":null,"native":"馃憶"},
  {"id":"handbag","name":"Handbag","colons":":handbag:","emoticons":[],"unified":"1f45c","skin":null,"native":"馃憸"},
  {"id":"briefcase","name":"Briefcase","colons":":briefcase:","emoticons":[],"unified":"1f4bc","skin":null,"native":"馃捈"},
  {"id":"eyeglasses","name":"Eyeglasses","colons":":eyeglasses:","emoticons":[],"unified":"1f453","skin":null,"native":"馃憮"},
  {"id":"man-woman-boy","name":"Man Woman Boy","colons":":man-woman-boy:","emoticons":[],"unified":"1f468-200d-1f469-200d-1f466","skin":null,"native":"馃懆鈥嶐煈┾€嶐煈?"},
  {"id":"closed_umbrella","name":"Closed Umbrella","colons":":closed_umbrella:","emoticons":[],"unified":"1f302","skin":null,"native":"馃寕"}
];

const smileEmoji = {"id":"smile","name":"Smiling Face with Open Mouth and Smiling Eyes","colons":":smile:","emoticons":["C:","c:",":D",":-D"],"unified":"1f604","skin":null,"native":"馃槃"};

export {emojiIds, emojis, smileEmoji};
