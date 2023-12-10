  import "./index.css";

  const Menu = () => {
    const sections = [
      { name: 'Appetizers', id: 'appetizers' },
      { name: 'Combo Appetizers', id: 'combo-app' },
      { name: 'Soup', id: 'soup' },
      { name: 'Fried Rice', id: 'fried-rice' },
      { name: 'Lo Mein', id: 'lo-mein' },
      { name: 'Chow Fun/Mei Fun', id: 'chow-mei-fun' },
      { name: 'Beef', id: 'beef' },
      { name: 'Pork', id: 'pork' },
      { name: 'Special Diet Menu', id: 'diet' },
      { name: 'Chicken', id: 'chicken' },
      { name: 'Seafood', id: 'seafood' },
      { name: 'Egg Foo Young', id: 'egg-foo' },
      { name: 'Sweet & Sour', id: 'sweet-sour' },
      { name: 'Moo Shu', id: 'moo-shu' },
      { name: "Chef's Special Deluxe", id: 'chefs-special' },
      { name: 'Vegetables', id: 'vegetables' },
      { name: 'Special Combination platter', id: 'special-combo' },
      { name: 'Combination Dinner', id: 'combo-dinner' }
    ];

    function scrollToSection(id) {
      const element = document.getElementById(id);
      element.scrollIntoView({ behavior: 'smooth' });
      element.classList.add('section-highlight');
      setTimeout(() => {
        element.classList.remove('section-highlight');
      }, 2000);
    }

    return (
      <div id="page">
        <h1 id="jing-fong-menu">Jing Fong Menu</h1>
        {/* <p><a href="/path/to/menu.pdf" download>Download PDF of Menu</a></p> */}
        <div className="button-container">
          <ul className="buttons">
            {sections.map(section => (
            <li key={section.id}>
              <button onClick={() => scrollToSection(section.id)}>
              {section.name}
              </button>
            </li>
            ))}
          </ul>
        </div>

        <div className="menu">
          <div className="menu-page">
            <div className="menu-column">
              <div className="section" id="appetizers">
                <h2>APPETIZERS</h2>
                <ul>
                  <li><span>1.  &nbsp;&nbsp;Roast Pork Egg Roll (2)</span> <span>$4.50</span></li>
                  <li><span>2.  &nbsp;&nbsp;Shrimp Egg Roll (2)</span> <span>$4.75</span></li>
                  <li><span>3.  &nbsp;&nbsp;Spring Roll (2)</span> <span>$4.25</span></li>
                  <li><span>4.  &nbsp;&nbsp;Bar-B-Q Spare Ribs</span> <span>(L) $16.95</span></li>
                  <li><span>5.  &nbsp;&nbsp;Boneless Spare Ribs</span> <span>(L) $14.95</span></li>
                  <li><span>6.  &nbsp;&nbsp;Chicken Fingers</span> <span>$8.50</span></li>
                  <li><span>7.  &nbsp;&nbsp;Terriyaki Chicken (6)</span> <span>$9.50</span></li>
                  <li><span>8.  &nbsp;&nbsp;Teriyaki Beef (6)</span> <span>$9.50</span></li>
                  <li><span>9.  &nbsp;&nbsp;Crab Rangoon (10)</span> <span>$8.95</span></li>
                  <li><span>10. Fried Biscuits w. Sugar </span> <span>$4.95</span></li>
                  <li><span>11. Fried Shrimp Rings (8)</span> <span>$9.25</span></li>
                  <li><span>12. Fried Wonton (10)</span> <span>$4.50</span></li>
                  <li><span>13. Fried or Steamed Dumplings (8)</span> <span>$8.95</span></li>
                  <li><span>14. Fried Chicken Wings</span> <span>$9.75</span></li>
                  <li><span>15. Honey Chicken Wings</span> <span>$9.95</span></li>
                  <li><span>16. Chicken Wings w. Pork Fried Rice</span> <span>$11.25</span></li>
                  <li className="spicy"><span>17. Pan Fried Wonton Szechuan Style (10) 🌶️</span> <span>$8.50</span></li>
                  <li className="spicy"><span>18. Cold Noodle w. Sesame Sauce 🌶️</span> <span>$8.25</span></li>
                  <li><span>19. Scallion Pancakes</span> <span>$8.75</span></li>
                  <li><span>20. Pu Pu Platter (For 2)</span> <span>$20.25</span></li>
                  <div>Teriyaki beef, spare ribs, shrimp rings, egg roll, crab rangoon, chicken finger & chicken wings</div>
                </ul>
              </div>
              <div className="section dotted" id="combo-app">
                <h2>COMBO APPETIZERS</h2>
                <ul>
                  <li><span className="combo">A.  Chicken Wings, Crab Rangoon, Boneless Ribs & Chicken Fingers</span> <span>$10.25</span></li>
                  <li><span className="combo">B.  Egg Roll, Teriyako Beef, Chicken Wings & Chicken Fingers</span> <span>$10.25</span></li>
                  <li><span className="combo">C.  Crab Rangoon, Shrimp Rings, Boneless Ribs & Egg Roll</span> <span>$10.25</span></li>
                  <li><span className="combo">D.  Boneless Ribs, Teriyaki Chicken, Chicken Fingers & Egg Roll</span> <span>$10.25</span></li>
                  <li><span className="combo">E.  Teriyaki Beef, Teriyaki Chicken, Chicken Finger & Crab Rangoon</span> <span>$10.25</span></li>
                </ul>
              </div>
              <div className="section" id="soup">
                <h2>SOUP <span>(w. Noodles)</span></h2>
                <ul>
                  <li><span>21.  Wonton Soup</span> <span>$4.75</span></li>
                  <li><span>22.  Egg Drop Soup</span> <span>$4.25</span></li>
                  <li><span>23.  Wonton Egg Drop Soup</span> <span>$5.75</span></li>
                  <li><span>24.  Chicken Rice Soup</span> <span>$4.25</span></li>
                  <li><span>25.  Shrimp Rice Soup</span> <span>$4.50</span></li>
                  <li><span>26.  Vegetable Soup</span> <span>$5.75</span></li>
                  <li><span>27.  Chicken Noodle Soup</span> <span>$4.75</span></li>
                  <li><span>28.  Pork Yat Gaw Mein</span> <span>$7.25</span></li>
                  <li><span>29.  House Special Soup</span> <span>$7.75</span></li>
                  <li className="spicy"><span>30.  Hot & Sour Soup 🌶️</span> <span>$6.35</span></li>
                </ul> 
              </div>
              <div className="section" id="">
                <h2>CHOW MEIN OR CHOP SUEY</h2>
                <div>(w Rice & Noodles)</div>
                <ul>
                  <li><span>31.  Chicken Chow Mein or Chop Suey</span> <span>$9.25</span></li>
                  <li><span>32.  Pork Chow Mein or Chop Suey</span> <span>$9.25</span></li>
                  <li><span>33.  Beef Chow Mein or Chop Suey</span> <span>$9.75</span></li>
                  <li><span>34.  Shrimp Chow Mein or Chop Suey</span> <span>$9.75</span></li>
                  <li><span>35.  Mixed Veg Chow Mein or Chop Suey</span> <span>$8.50</span></li>
                  <li><span>36.  House Special Chow Mein Or Chop Suey</span> <span>$10.25</span></li>
                </ul> 
              </div>
            </div>
            <div className="menu-column">
              <div className="section" id="fried-rice">
                <h2>FRIED RICE</h2>
                <ul>
                  <li id="amount"><span></span> <span>Pt&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Qt&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></li>
                  <li><span>37. Plain Fried Rice</span> <span>$5.00&nbsp;&nbsp;&nbsp;$6.50</span></li>
                  <li><span>38. Roast Pork Fried Rice</span> <span>$6.75&nbsp;&nbsp;&nbsp;$8.50</span></li>
                  <li><span>39. Chicken Fried Rice</span> <span>$6.75&nbsp;&nbsp;&nbsp;$8.50</span></li>
                  <li><span>40. Beef Fried Rice</span> <span>$7.00&nbsp;&nbsp;&nbsp;$9.50</span></li>
                  <li><span>41. Shrimp Fried Rice</span> <span>$7.00&nbsp;&nbsp;&nbsp;$9.50</span></li>
                  <li><span>42. Vegetable Fried Rice</span> <span>$6.50&nbsp;&nbsp;&nbsp;$8.25</span></li>
                  <li><span>43. House Special Fried Rice</span> <span>$10.25</span></li>
                  <li><span>44. Young Chow Fried Rice</span> <span>$10.25</span></li>
                </ul>
              </div>
              <div className="section" id="lo-mein">
                <h2>LO MEIN <span>(Spaghetti)</span></h2>
                <ul>
                  <li id="amount"><span></span> <span>Pt&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Qt&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></li>
                  <li><span>45. Roast Pork Lo Mein</span> <span>$7.20&nbsp;&nbsp;&nbsp;&nbsp;$9.50</span></li>
                  <li><span>46. Chicken Lo Mein</span> <span>$7.20&nbsp;&nbsp;&nbsp;&nbsp;$9.50</span></li>
                  <li><span>47. Beef Lo Mein</span> <span>$7.40&nbsp;&nbsp;$10.25</span></li>
                  <li><span>48. Shrimp Lo Mein</span> <span>$7.40&nbsp;&nbsp;$10.25</span></li>
                  <li><span>49. Vegetable Lo Mein</span> <span>$6.75&nbsp;&nbsp;&nbsp;&nbsp;$9.00</span></li>
                  <li><span>50. House Special Lo Mein</span> <span>$10.75</span></li>
                  <li><span>51. Crab Meat Lo Mein</span> <span>$9.50</span></li>
                </ul>
              </div>
              <div className="section" id="chow-mei-fun">
                <h2>CHOW FUN / MEI FUN</h2>
                <ul>
                  <li><span>52. Pork Chow Fun / Chow Mei Fun</span> <span>$11.75</span></li>
                  <li><span>53. Chicken Chow Fun / Chow Mei Fun</span> <span>$11.75</span></li>
                  <li><span>54. Beef Chow Fun / Chow Mei Fun</span> <span>$11.95</span></li>
                  <li><span>55. Shrimp Chow Fun / Chow Mei Fun</span> <span>$11.95</span></li>
                  <li><span>56. House Special Chow Fun / Chow Mei Fun</span> <span>$11.95</span></li>
                  <li className="spicy"><span>57. Singapore Chow Mei Fun 🌶️</span> <span>$12.95</span></li>
                </ul>
              </div>
              <div className="section" id="beef">
                <h2>BEEF<span> (w. Rice)</span></h2>
                <ul>
                  <li><span>58. Pepper Steak w. Onion</span> <span>$13.50</span></li>
                  <li><span>59. Beef w. Mushroom</span> <span>$13.50</span></li>
                  <li><span>60. Beef w. Snow Peas</span> <span>$13.50</span></li>
                  <li><span>61. Beef w. Broccoli</span> <span>$13.50</span></li>
                  <li><span>62. Beef w. Mixed Chinese Vegetables</span> <span>$13.50</span></li>
                  <li className="spicy"><span>63. Beef w. Garlic Sauce 🌶️</span> <span>$13.50</span></li>
                  <li className="spicy"><span>64. Beef w. Hunan Sauce 🌶️</span> <span>$13.50</span></li>
                  <li className="spicy"><span>65. Beef w. Szechuan Sauce 🌶️</span> <span>$13.50</span></li>
                  <li className="spicy"><span>65. Kung Po Beef 🌶️</span> <span>$13.50</span></li>
                </ul>
              </div>
              <div className="section" id="pork">
                <h2>PORK<span> (w. Rice)</span></h2>
                <ul>
                  <li><span>67.  Pork w. Mixed Chinese Vegetables</span> <span>$11.25</span></li>
                  <li><span>68.  Pork w. Mushroom</span> <span>$11.25</span></li>
                  <li><span>69.  Pork w. Snow Pea</span> <span>$11.25</span></li>
                  <li><span>70.  Pork w. Broccoli</span> <span>$11.25</span></li>
                  <li className="spicy"><span>71.  Shredded Pork w. Garlic Sauce 🌶️</span> <span>$11.25</span></li>
                  <li className="spicy"><span>72.  Double Cooked Pork 🌶️</span> <span>$11.25</span></li>
                </ul> 
              </div>
              <div className="section" id="diet">
                <h2>SPECIAL DIET MENU</h2>
                <div>(No Salt, Sugar, Corn Starch or Oil w. Steamed Rice)</div>
                <ul>
                  <li><span>D 1.  Steamed Vegetable Delight</span> <span>$9.45</span></li>
                  <li><span>D 2.  Steamed Chicken w. Mixed Chinese Vegetables</span> <span>$10.45</span></li>
                  <li><span>D 3.  Steamed Bean Curd w. Mixed Vegetables</span> <span>$10.45</span></li>
                  <li><span>D 4.  Steamed Shrimp w. Snow Peas</span> <span>$12.00</span></li>
                  <li><span>D 5.  Steamed Shrimp, Chicken & Beef w. Mixed Vegetables</span> <span>$13.25</span></li>
                </ul> 
              </div>
            </div>
          </div>
          <div className="menu-page">
            <div className="menu-column">
              <div className="section" id="chicken">
                <h2>CHICKEN <span>(w. Rice)</span></h2>
                <ul>
                  <li><span>73. Moo Goo Gai Pan</span> <span>$11.50</span></li>
                  <li><span>74. Chicken w. Snow Peas</span> <span>$11.50</span></li>
                  <li><span>75. Chicken w. Broccoli</span> <span>$11.50</span></li>
                  <li><span>76. Chicken w. Mixed Chinese Vegetables</span> <span>$11.50</span></li>
                  <li><span>77. Chicken w. Cashew Nuts</span> <span>$11.50</span></li>
                  <li><span>78. Chicken w. Broccoli & Snow Peas</span> <span>$11.50</span></li>
                  <li className="spicy"><span>79. Curry Chicken w. Onion 🌶️</span> <span>$11.50</span></li>
                  <li className="spicy"><span>80. Chicken w. Szechuan Sauce 🌶️</span> <span>$11.50</span></li>
                  <li className="spicy"><span>81. Chicken w. Hunan Sauce 🌶️</span> <span>$11.50</span></li>
                  <li className="spicy"><span>82. Kung Po Chicken 🌶️</span> <span>$11.50</span></li>
                  <li className="spicy"><span>83. Chicken & Broccoli w. Garlic Sauce 🌶️</span> <span>$11.50</span></li>
                  <li className="spicy"><span>84. Chicken w. Garlic Sauce 🌶️</span> <span>$11.50</span></li>
                </ul>
              </div>
              <div className="section" id="seafood">
                <h2>SEAFOOD <span>(w. Rice)</span></h2>
                <ul>
                  <li><span>85. Shrimp w. Lobster Sauce</span> <span>$13.25</span></li>
                  <li><span>86. Shrimp w. Mushroom</span> <span>$13.25</span></li>
                  <li><span>87. Shrimp w. Snow Peas</span> <span>$13.25</span></li>
                  <li><span>88. Shrimp w. Broccoli</span> <span>$13.25</span></li>
                  <li><span>89. Scallop w. Broccoli</span> <span>$17.45</span></li>
                  <li><span>90. Shrimp w. Mixed Chinese Vegetables</span> <span>$13.25</span></li>
                  <li><span>91. Shrimp w. Cashew Nuts</span> <span>$13.25</span></li>
                  <li className="spicy"><span>92. Curry Chicken w. Onion 🌶️</span> <span>$13.25</span></li>
                  <li className="spicy"><span>93. Shrimp w. Garlic Sauce 🌶️</span> <span>$13.25</span></li>
                  <li className="spicy"><span>94. Shrimp w. Szechuan Sauce 🌶️</span> <span>$13.25</span></li>
                  <li className="spicy"><span>95. Shrimp w. Hunan Sauce 🌶️</span> <span>$13.25</span></li>
                  <li className="spicy"><span>96. Shrimp w. Chili Sauce 🌶️</span> <span>$13.25</span></li>
                  <li className="spicy"><span>97. Kung Po Shrimp 🌶️</span> <span>$13.25</span></li>
                </ul>
              </div>
              <div className="section" id="egg-foo">
                <h2>EGG FOO YOUNG <span>(w. Rice)</span></h2>
                <ul>
                  <li><span>&nbsp;&nbsp;98. Roast Pork Egg Foo Young</span> <span>$10.75</span></li>
                  <li><span>&nbsp;&nbsp;99. Shrimp Egg Foo Young</span> <span>$11.25</span></li>
                  <li><span>100. Chicken Egg Foo Young</span> <span>$10.75</span></li>
                  <li><span>101. Beef Egg Foo Young</span> <span>$11.25</span></li>
                  <li><span>102. Vegetable Egg Foo Young</span> <span>$10.25</span></li>
                  <li><span>103. Vegetable Soup</span> <span>$10.25</span></li>
                </ul> 
              </div>
              <div className="section" id="sweet-sour">
                <h2>SWEET & SOUR <span>(w. Rice)</span></h2>
                <ul>
                  <li><span>104.  Sweet & Sour Pork</span> <span>$10.50</span></li>
                  <li><span>105.  Sweet & Sour Shrimp</span> <span>$10.75</span></li>
                  <li><span>106.  Sweet & Sour Chicken</span> <span>$10.50</span></li>
                  <li><span>107.  Sweet & Sour Sum-Bo</span> <span>$10.95</span></li>
                  <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shrimp, Chicken & Pork</li>
                  <li><span>108.  Lemon Chicken</span> <span>$10.95</span></li>
                </ul> 
              </div>
              <div className="section" id="moo-shu">
                <h2>MOO SHU</h2>
                <div>Mushroom, bamboo shoot, shredded cabbage w. 4 pancakes & no rice</div>
                <ul>
                  <li><span>109. Moo Shu Pork</span> <span>$11.25</span></li>
                  <li><span>110. Moo Shu Shrimp</span> <span>$11.50</span></li>
                  <li><span>111. Moo Shu Beef</span> <span>$11.50</span></li>
                  <li><span>112. Moo Shu Chicken</span> <span>$11.25</span></li>
                </ul> 
              </div>
            </div>
            <div className="menu-column">
              <div className="section" id="chefs-special">
                <h2>CHEF'S SPECIAL DELUXE</h2>
                <div>(w. Rice)</div>
                <ul>
                  <li><span>E 1. &nbsp;&nbsp;HAPPY FAMILY</span> <span>$15.50</span></li>
                  <span className="ingredients">A delicious combo of sliced pork, shrimp, beef, chicken scallop & crab meat sauteed w. vegetables in tasty brown sauce.</span>
                  <li><span>E 2. &nbsp;&nbsp;FOUR SEASONS</span> <span>$14.25</span></li>
                  <span className="ingredients">Jumbo shrimp, chicken, roast pork, beef w. fresh vegetables in brown sauce</span>
                  <li><span>E 3. &nbsp;&nbsp;SHRIMP & SCALLOP</span> <span>$15.25</span></li>
                  <li><span>E 4. &nbsp;&nbsp;BEEF & SCALLOP</span> <span>$15.25</span></li>
                  <li><span>E 5. &nbsp;&nbsp;SEAFOOD DELIGHT</span> <span>$15.25</span></li>
                  <span className="ingredients">Scallop, jumbo shrimp & crab meat sauteed, assorted vegetables</span>
                  <li><span>E 6. &nbsp;&nbsp;SEVEN STARS AROUND THE MOON</span> <span>$17.95</span></li>
                  <span className="ingredients">Shrimp, chicken, beef, roast pork & fried shrimp w. mixed vegetables</span>
                  <li><span>E 7. &nbsp;&nbsp;CHICKEN & SHRIMP W. MIXED VEG</span> <span>$13.50</span></li>
                  <li><span>E 8. &nbsp;&nbsp;SHRIMP W. MAYONNAISE SAUCE</span> <span>$14.00</span></li>
                  <li><span>E 9. &nbsp;&nbsp;CRISPY DUCK</span> <span>$16.95</span></li>
                  <li><span>E 10. WOR SHU DUCK</span> <span>$14.95</span></li>
                  <li><span>E 11. SESAME CHICKEN</span> <span>$13.95</span></li>
                  <li><span>E 12. SESAME BEEF</span> <span>$15.50</span></li>
                  <li className="spicy"><span>E 13. GENERAL TSO'S CHICKEN 🌶️</span> <span>$13.95</span></li>
                  <span className="ingredients">Chunks of boneless chicken sauteed w. broccoli in brown sauce</span>
                  <li className="spicy"><span>E 14. ORANGE FLAVOR CHICKEN 🌶️</span> <span>$13.95</span></li>
                  <li className="spicy"><span>E 15. GENERAL TSO'S TOFU 🌶️</span> <span>$12.95</span></li>
                  <li className="spicy"><span>E 16. TRIPLE DELIGHT 🌶️</span> <span>$13.95</span></li>
                  <span className="ingredients">Jumbo shrimp, chicken & beef w. hot garlic sauce</span>
                  <li className="spicy"><span>E 17. CRISPY CHICKEN 🌶️</span> <span>$14.50</span></li>
                  <li className="spicy"><span>E 18. ORANGE FLAVOR BEEF 🌶️</span> <span>$15.50</span></li>
                  <li className="spicy" ><span>E 19. DRAGON & PHOENIX 🌶️</span> <span>$16.95</span></li>
                  <span className="ingredients">Spicy chicken & shrimp w. hot spicy sauce</span>
                  <li className="spicy"><span>E 20. MA PO TOFU 🌶️</span> <span>$12.95</span></li>
                  <li className="spicy"><span>E 21. BEEF W. SCALLION 🌶️</span> <span>$14.95</span></li>
                  <li className="spicy"><span>E 22. HOT & SPICY BEEF OR CHICKEN 🌶️</span> <span>$13.50</span></li>
                  <li className="spicy"><span>E 23. HUNAN DOUBLE DELIGHT 🌶️</span> <span>$16.95</span></li>
                  <span className="ingredients">Shrimp in chili sauce, beef w. Hunan sauce on the other side</span>
                  <li className="spicy"><span>E 24. SZECHUAN TRIPLE DELIGHT 🌶️</span> <span>$15.25</span></li>
                  <span className="ingredients">Crab meat, jumbo shrimp, scallop w. fresh vegetables</span>
                </ul>
              </div>
              <div className="section" id="vegetables">
                <h2>VEGETABLES<span> (w. Rice)</span></h2>
                <ul>
                  <li><span>113. Mixed Chinese Vegetables</span> <span>$10.50</span></li>
                  <li className="spicy"><span>114. Mixed Vegetables w. Garlic Sauce 🌶️</span> <span>$10.50</span></li>
                  <li className="spicy"><span>115. Broccoli w. Garlic Sauce 🌶️</span> <span>$10.50</span></li>
                  <li className="spicy"><span>116. Fried Bean Curd w. Garlic Sauce 🌶️</span> <span>$10.50</span></li>
                  <li className="spicy"><span>117. Fried Bean Curn w. Szechuan Sauce 🌶️</span> <span>$10.50</span></li>
                  <li><span>118. Fried String Bean</span> <span>$10.50</span></li>
                </ul> 
              </div>
            </div>
          </div>
          <div className="menu-page">
            <div className="menu-column">
              <div className="section" id="special-combo">
                <h2>SPECIAL COMBINATION PLATTER</h2>
                <div>(Each Plate w. Pork Fried Rice & Egg Roll)</div>
                <ul>
                  <li><span>C 1. &nbsp;&nbsp;Chicken Chow Mein</span> <span>$9.45</span></li>
                  <li><span>C 2. &nbsp;&nbsp;Shrimp Chow Mein</span> <span>$9.45</span></li>
                  <li><span>C 3. &nbsp;&nbsp;Chicken or Pork Chop Suey</span> <span>$9.45</span></li>
                  <li><span>C 4. &nbsp;&nbsp;Chicken w. Broccoli</span> <span>$9.75</span></li>
                  <li><span>C 5. &nbsp;&nbsp;Beef w. Broccoli</span> <span>$10.25</span></li>
                  <li><span>C 6. &nbsp;&nbsp;Shrimp w. Broccoli</span> <span>$10.25</span></li>
                  <li><span>C 7. &nbsp;&nbsp;Pork Egg Foo Young</span> <span>$9.75</span></li>
                  <li><span>C 8. &nbsp;&nbsp;Pepper Steak</span> <span>$10.25</span></li>
                  <li><span>C 9. &nbsp;&nbsp;Pork w. Chinese Vegetables</span> <span>$9.75</span></li>
                  <li><span>C 10. Moo Goo Gai Pan</span> <span>$9.75</span></li>
                  <li><span>C 11. Beef w. Mixed Vegetables</span> <span>$10.25</span></li>
                  <li><span>C 12. Roast Pork or Chicken Lo Mein</span> <span>$9.75</span></li>
                  <li><span>C 13. Shrimp w. Lobster Sauce</span> <span>$10.25</span></li>
                  <li><span>C 14. Shrimp or Beef w. Snow Peas</span> <span>$10.25</span></li>
                  <li><span>C 15. Sweet & Sour Pork or Chicken</span> <span>$9.75</span></li>
                  <li><span>C 16. Shrimp w. Mixed Chinese Vegetable</span> <span>$10.25</span></li>
                  <li><span>C 17. Boneless Spare Ribs</span> <span>$10.75</span></li>
                  <li><span>C 18. Chicken w. Cashew Nuts</span> <span>$9.75</span></li>
                  <li><span>C 19. Chicken w. Mixed Chinese Vegetables</span> <span>$9.75</span></li>
                  <li><span>C 20. Sesame Chicken</span> <span>$10.25</span></li>
                  <li className="spicy"><span>C 21. Mixed Vegetables w. Garlic Sauce 🌶️</span> <span>$9.45</span></li>
                  <li className="spicy"><span>C 22. Sliced Chicken w. Garlic Sauce 🌶️</span> <span>$9.75</span></li>
                  <li className="spicy"><span>C 23. Hot and Spicy Beef or Chicken 🌶️</span> <span>$10.25</span></li>
                  <li className="spicy"><span>C 24. Chicken w. Hunan Sauce 🌶️</span> <span>$9.75</span></li>
                  <li className="spicy"><span>C 25. General Tso's Chicken 🌶️</span> <span>$10.25</span></li>
                  <li className="spicy"><span>C 26. Chicken & Broccoli w. Garlic Sauce 🌶️</span> <span>$9.75</span></li>
                  <li className="spicy"><span>C 27. Beef w. Garlic Sauce 🌶️</span> <span>$10.25</span></li>
                  <li className="spicy"><span>C 28. Orange Flavor Chicken 🌶️</span> <span>$10.25</span></li>
                </ul>
              </div>
            </div>
            <div className="menu-column">
              <div className="section" id="combo-dinner">
                <h2>Combination Dinner</h2>
                <div>(Served w. Pork Fried Rice or Steamed Rice)</div>
                <ul>
                  <li><span>B 1.</span><span>Teriyaki Chicken, Teriyaki Beef and Chicken Fingers</span> <span>$10.95</span></li>
                  <li><span>B 2.</span><span>Chicken Wings, Boneless Spare Ribs and Crab Rangoon</span><span>$10.95</span></li>
                  <li><span>B 3.</span><span>Teriyaki Beef, Chicken Wings and Chicken Fingers</span><span>$10.95</span></li>
                  <li><span>B 4.</span><span>Boneless Spare Ribs, Teriyaki Chicken and Crab Rangoon</span><span>$10.95</span></li>
                  <li><span>B 5.</span><span>Crab Rangoon, Shrimp Rings and Hot Dog w/ Bacon</span><span>$10.95</span></li>
                  <li><span>B 6.</span><span>Boneless Spare Ribs, Teriyaki Chicken and Fried Shrimp</span><span>$10.95</span></li>
                  <li><span>B 7.</span><span>Egg Roll, Teriyaki Beef and Chicken Fingers</span><span>$10.95</span></li>
                  <li><span>B 8.</span><span>Chicken w. Mixed Vegetables, Chicken Finger and Hot Dog w. Bacon</span><span>$10.95</span></li>
                  <li><span>B 9.</span><span>Beef w. Mixed Vegetables, Spring Roll and Crab Rangoon</span><span>$10.95</span></li>
                  <li><span>B 10.</span><span>Pork Lo Mein, Chicken Fingers and Crab Rangoon</span><span>$10.95</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Menu;