import React from 'react';
import Navigation from './Navigation';
import ProductCard from './ProductCard';

const Product = () => {
  return (
    <div>
      <Navigation />
      <ProductCard image = "Product_1.jpg"
      alt = "Silver Katana"
      product_name = "Setsuhen Snowflake Katana v2"
      price = "P9,000"
      description = "Because no two snowflakes have ever been found to be alike, they represent individuality, and their perfect geometric forms represent perfection. The snowflake is a very simple example of self-assembly. There is no blueprint or genetic code that guides the growth of a snowflake, yet marvelously complex structures appear, quite literally out of thin air. And this is what you can see on the Setsuhen Katana.">
  </ProductCard>

  <ProductCard image = "Product_2.jpg"
      alt = "Bronze Katana"
      product_name = "Akuma no Chi Katana"
      price = "P12,500"
      description = "The blade of the Akuma no Chi Katana (Demon’s Blood) has been coated, producing a beautiful rustic-bloody-red-orange sheen on the blade which looks like it has been through someone already ^_^ Kidding aside, the coating makes the blade almost rust and corrosion proof! Making this an almost maintenance-free blade. But, you still need to put oil on the blade to maximize rust and corrosion resistance. Also oiling it will make the blade look more beautiful.">
  </ProductCard>

  <ProductCard image = "Product_3.jpg"
      alt = "Naginata"
      product_name = "Sohei Naginata"
      price = "P10,500"
      description = "The naginata is a halberd-like weapon that was the famed weapon and extensively used by the Sohei, warrior monks, of feudal Japan. Described by some as simply “a sword on the end of a long pole”, the naginata was actually a sophisticated weapon which required considerable skill and stamina to use effectively in battle. It consisted of a curved blade, 1 to 2 feet in length, mounted onto a wooden shaft that was usually 4 to 9 feet long. The actual dimensions of a naginata were primarily dependent on personal preferences and battle conditions. The blade of the naginata is in the unokubi-zukuri shape. The term unokubi translates to “cormorant’s neck”. It refers to the tapering of a portion of the back of the blade giving it a false edge, while retaining the shape of the kissaki. The blade has 2 small grooves called “soe-hi” that runs along the shinogi-ji (flat of the blade) and features a “bonji” (Japanese sanskrit) with red lacquer. Red lacquer on blade engravings or bohi (groove) is often seen on very old blades, but more common on naginata than on swords. There’s no special meaning to it. It’s been said that lacquer was added to hide a flaw in the groove or engraving, or just cosmetic design. With our Sohei Naginata, it’s the latter.">
  </ProductCard>
    </div>
  );
};

export default Product;