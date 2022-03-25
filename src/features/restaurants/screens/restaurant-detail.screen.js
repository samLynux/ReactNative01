import React, {useState} from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";
import { SafeArea } from "../../../utils/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantDetailScreen = ({route}) => {
    const [breakfastExpanded, setBreakfastExpanded] = useState(false);
    const [lunchExpanded, setLunchExpanded] = useState(false)
    const [dinnerExpanded, setDinnerExpanded] = useState(false)
    const [drinkExpanded, setDrinkExpanded] = useState(false)



    const {restaurant} = route.params;
    return (
        <SafeArea>
            <RestaurantInfoCard restaurant={restaurant}/>
            <ScrollView>
                <List.Accordion
                    title="Breakfast"
                    left={(props) => <List.Icon {...props} icon="bread-slice"/>}
                    expanded={breakfastExpanded}
                    onPress={() => setBreakfastExpanded(!breakfastExpanded)}>
                    <List.Item title="egg"/>
                    <List.Item title="pancake"/>
                </List.Accordion>

                <List.Accordion
                    title="Lunch"
                    left={(props) => <List.Icon {...props} icon="hamburger"/>}
                    expanded={lunchExpanded}
                    onPress={() => setLunchExpanded(!lunchExpanded)}>
                    <List.Item title="sandwitch"/>
                    <List.Item title="burger"/>
                </List.Accordion>

                <List.Accordion
                    title="Dinner"
                    left={(props) => <List.Icon {...props} icon="food-variant"/>}
                    expanded={dinnerExpanded}
                    onPress={() => setDinnerExpanded(!dinnerExpanded)}>
                    <List.Item title="spagheti"/>
                    <List.Item title="ham"/>
                </List.Accordion>

                <List.Accordion
                    title="Drinks"
                    left={(props) => <List.Icon {...props} icon="cup"/>}
                    expanded={drinkExpanded}
                    onPress={() => setDrinkExpanded(!drinkExpanded)}>
                    <List.Item title="coffee"/>
                    <List.Item title="water"/>
                </List.Accordion>
            </ScrollView>
        </SafeArea>
    )
}
