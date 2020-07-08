let a=`Id,Product,Loc,Stock,Price
1,UHT-milk,0,10,5
2,whole milk,0,10,6
3,condensed milk,0,10,7
4,butter milk,0,10,8
5,cream cheese,1,10,9
6,soft cheese,1,10,10
7,hard cheese,1,10,5
8,butter,1,10,6
9,yogurt,2,10,7
10,chicken,2,10,8
11,ham,2,10,9
12,beef,2,10,10
13,meat,3,10,6
14,brown bread,3,10,7
15,semi-finished bread,3,10,8
16,mayonnaise,3,10,9
17,frozen meals,4,10,10
18,canned fish,4,10,11
19,frankfurter,4,10,6
20,fruit/vegetable juice,4,10,6
21,pastry,5,10,7
22,rolls/buns,5,10,8
23,cake bar,5,10,9
24,chocolate,5,10,10
25,candy,6,10,11
26,chocolate marshmallow,6,10,6
27,salty snack,6,10,7
28,chewing gum,6,10,8
29,flour,7,10,9
30,mustard,7,10,10
31,dessert,7,10,11
32,herbs,7,10,7
33,salt,8,10,8
34,coffee,8,10,9
35,cling film/bags,8,10,10
36,shopping bags,8,10,11
37,berries,9,10,12
38,root vegetables,9,10,7
39,onions,9,10,7
40,pickled vegetables,9,10,8
41,dish cleaner,10,10,9
42,detergent,10,10,10
43,cat food,10,10,11
44,dog food,10,10,6
45,pet care,11,10,7
46,bottled beer,11,10,8
47,canned beer,11,10,9
48,liquor,11,10,10`;

let rec = `user,items
0,"cat food,bottled beer,canned beer,rolls/buns,brown bread,butter,whole milk,cake bar,pastry,onions"
1,"yogurt,cat food,butter milk,canned beer,chocolate,hard cheese,shopping bags,brown bread,butter,whole milk"
2,"yogurt,beef,bottled beer,canned beer,hard cheese,rolls/buns,cream cheese,shopping bags,UHT-milk,whole milk"
3,"yogurt,bottled beer,candy,hard cheese,rolls/buns,shopping bags,berries,butter,whole milk,frozen meals"
4,"canned beer,bottled beer,meat,berries,butter,whole milk,detergent,pastry,herbs,cling film/bags"
5,"yogurt,beef,chocolate,flour,rolls/buns,cream cheese,shopping bags,pickled vegetables,salty snack,butter"
6,"canned beer,flour,rolls/buns,brown bread,whole milk,detergent,pet care,chewing gum"
7,"yogurt,bottled beer,condensed milk,rolls/buns,UHT-milk,dessert,brown bread,whole milk,coffee,pastry"
8,"canned beer,salty snack,butter,whole milk,soft cheese,semi-finished bread,pastry,frankfurter,chewing gum"
9,"yogurt,beef,bottled beer,candy,butter milk,flour,brown bread,UHT-milk,whole milk,soft cheese"
10,"candy,canned beer,bottled beer,meat,flour,brown bread,berries,salty snack,dish cleaner,cling film/bags"
11,"yogurt,cat food,beef,candy,flour,hard cheese,rolls/buns,shopping bags,butter,frozen meals"
12,"cat food,bottled beer,candy,chocolate,rolls/buns,shopping bags,brown bread,whole milk,cake bar,root vegetables"
13,"yogurt,butter milk,bottled beer,canned beer,frozen meals,salty snack,whole milk,fruit/vegetable juice,root vegetables,frankfurter"
14,"chicken,yogurt,bottled beer,canned beer,rolls/buns,shopping bags,whole milk,fruit/vegetable juice,chewing gum"
15,"chicken,yogurt,butter milk,bottled beer,beef,mayonnaise,rolls/buns,cream cheese,shopping bags,butter"
16,"yogurt,butter milk,candy,beef,canned beer,rolls/buns,shopping bags,brown bread,butter,frozen meals"
17,"chicken,yogurt,bottled beer,canned beer,rolls/buns,shopping bags,dessert,frozen meals,semi-finished bread,berries"
18,"chicken,yogurt,butter milk,bottled beer,flour,rolls/buns,shopping bags,dessert,UHT-milk,brown bread"
19,"yogurt,candy,rolls/buns,brown bread,berries,frozen meals,whole milk,dish cleaner,root vegetables,dog food"
20,"whole milk,canned beer,pastry,butter"
`

export { a , rec };