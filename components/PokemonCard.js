import { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";

const PokemonCard = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    fetchPokemons();
  }, []);
  const fetchPokemons = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
      .then((response) => response.json())
      .then((pokemons) => setPokemons(pokemons.results));
  };

  console.log(pokemons);
  return (
    <ScrollView>
      <FlatList
        data={pokemons}
        renderItem={({ item }) => (
          <View>
            <Image
              style={{ width: 150, height: 150 }}
              source={{
                uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${item.name}.png`,
              }}
            />
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
};

export default PokemonCard;
