import { View, Text, StyleSheet, SectionList } from 'react-native';

const menuItemsToDisplay = [
  {
    title: 'Appetizers',
    data: [
      { name: 'Hummus', price: '$5.00' },
      { name: 'Moutabal', price: '$5.00' },
      { name: 'Falafel', price: '$7.50' },
      { name: 'Marinated Olives', price: '$5.00' },
      { name: 'Kofta', price: '$5.00' },
      { name: 'Eggplant Salad', price: '$8.50' },
    ],
  },
  {
    title: 'Main Dishes',
    data: [
      { name: 'Lentil Burger', price: '$10.00' },
      { name: 'Smoked Salmon', price: '$14.00' },
      { name: 'Kofta Burger', price: '$11.00' },
      { name: 'Turkish Kebab', price: '$15.50' },
    ],
  },
  {
    title: 'Sides',
    data: [
      { name: 'Fries', price: '$3.00', id: '11K' },
      { name: 'Buttered Rice', price: '$3.00' },
      { name: 'Bread Sticks', price: '$3.00' },
      { name: 'Pita Pocket', price: '$3.00' },
      { name: 'Lentil Soup', price: '$3.75' },
      { name: 'Greek Salad', price: '$6.00' },
      { name: 'Rice Pilaf', price: '$4.00' },
    ],
  },
  {
    title: 'Desserts',
    data: [
      { name: 'Baklava', price: '$3.00' },
      { name: 'Tartufo', price: '$3.00' },
      { name: 'Tiramisu', price: '$5.00' },
      { name: 'Panna Cotta', price: '$5.00' },
    ],
  },
];

const ListItem = ({ name, price }) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name}</Text>
    <Text style={menuStyles.itemPrice}>{price}</Text>
  </View>
);

const Separator = () => <View style={menuStyles.separator} />


const MenuScreen = () => {

  const renderItem = ({ item }) => <ListItem name={item.name} price={item.price}/>;

  const renderSectionHeader = ({ section: {title} }) => (
    <Text style={menuStyles.sectionHeader}>{title}</Text>
    );

  return (
    <View style={menuStyles.container}>
      <SectionList 
        keyExtractor={ (item, index) => item + index }
        style={menuStyles.flatStyle}
        sections={menuItemsToDisplay} 
        renderSectionHeader={ renderSectionHeader }
        renderItem={ renderItem }
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
};


const menuStyles = StyleSheet.create({
  container: {
    flex: 0.95,
		paddingLeft: 20,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: '#333',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionHeader: {
    backgroundColor: '#F4CE14',
    color: '#333',
    fontSize: 28,
    flexWrap: 'wrap',
    textAlign: 'center'
  },
  itemText: {
    color: '#F4CE14',
    fontSize: 20,
    textAlign: 'left'
  },
  itemPrice: {
    color: '#F4CE14',
    fontSize: 20,
    textAlign: 'right'
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: '#EDEFEE',    
  },
  footerText: {
    color: 'red',
    fontSize: '10',
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  flatStyle: {
    flex: 1, width: 300, maxHeight: '600',
	  textAlign: 'center',
    marginTop: 20, marginLeft: 0, marginRight: 0,
    borderColor: 'red', borderWidth: 1,
    backgroundColor: 'gray',
  },
});

export default MenuScreen;

