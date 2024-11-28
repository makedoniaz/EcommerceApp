import { useEffect, useState } from 'react';
import { Text, Image, View, Linking } from 'react-native';

import { styles } from './styles';

import { useRoute } from '@react-navigation/native';
import { LoaderWrap } from '../../components/LoaderWrap';
import { Meal } from '../../utils/types';
import { transformToMeal } from '../../utils/helpers';
import { IngredientsList } from '../../components/IngredientsList';
import { ScrollView } from 'react-native-gesture-handler';

interface Props {

}

export const Details: React.FC<Props> = () => {
    const router = useRoute();

    const [details, setDetails] = useState<Meal | null>(null)
    const [isLoading, setIsLoading] = useState(true)


    const fetchDetails = async (idMeal: number) => {
        try {
            setIsLoading(true)
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
            const data = await response.json();

            const rawData = data?.meals[0] ?? null;

            if (rawData != null) {
                const meal = transformToMeal(data?.meals[0])
                setDetails(meal)
            }
        }
        catch (error){
            console.warn(error)
        }
        finally {
            setIsLoading(false)
        }
    }

    useEffect( () => {
        //@ts-ignore
        fetchDetails(router.params?.idMeal)
        //@ts-ignore
    }, [router.params?.idMeal]) 

    console.log(details?.strYoutube)

    return ( 
        <LoaderWrap isLoading={isLoading}>
            <ScrollView contentContainerStyle={{flexGrow: 1, padding: 16}} style={styles.container}>
                <Image source={{ uri: details?.strMealThumb }} style={styles.image} />
                <View style={styles.textContainer}>
                    <View style={styles.mainInfo}>
                        <Text style={styles.title}>{details?.strMeal}</Text>

                        <Text style={styles.subtitle}>{details?.strCategory}</Text>
                        <Text style={styles.subtitle}>{details?.strArea}</Text>
                    </View>

                    <Text style={styles.sectionTitle}>Ingredients</Text>
                    <IngredientsList ingredients={details?.ingredients ?? []}/>

                    <Text style={styles.sectionTitle}>Instructions</Text>
                    <Text style={styles.instructions}>{details?.strInstructions}</Text>

                    {details?.strYoutube && (
                        <Text
                        style={styles.link}
                        onPress={() => Linking.openURL(details?.strYoutube)}
                        >
                        Watch on YouTube
                        </Text>
                    )}
                </View>
            </ScrollView>
        </LoaderWrap>
    );
}