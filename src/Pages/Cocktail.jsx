import { useLoaderData, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Wrapper from '../assets/wrappers/CocktailPage';
const singleCocktailUrl =
    'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
import { useQuery } from '@tanstack/react-query';

const singleCocktailQuery = (id) => {
    return {
        queryKey: ['cocktail', id],
        queryFn: async () => {
            const { data } = await axios.get(`${singleCocktailUrl}${id}`);
            return data;
        },
    };
};

export const loader =
    (queryClient) =>
        async ({ params }) => {
            const { id } = params;
            await queryClient.ensureQueryData(singleCocktailQuery(id));
            return { id };
        };

const Cocktail = () => {
    const { id } = useLoaderData();
    const navigate = useNavigate();
    const { data } = useQuery(singleCocktailQuery(id));
    if (!data) return <Navigate to='/' />;

    const singleDrink = data.drinks[0];

    const {
        strDrink: name,
        strDrinkThumb: image,
        strAlcoholic: info,
        strCategory: category,
        strGlass: glass,
        strInstructions: instructions,
    } = singleDrink;

    const validIngredients = Object.keys(singleDrink)
        .filter(
            (key) => key.startsWith('strIngredient') && singleDrink[key] !== null
        )
        .map((key) => singleDrink[key]);

    return (
        <Wrapper>
            <header>
                <h3>{name}</h3>
            </header>
            <div className='drink'>
                <img src={image} alt={name} className='img' />
                <div className='drink-info' >
                    <p>
                        <span className='drink-data'>name :</span>
                        {name}
                    </p>
                    <p>
                        <span className='drink-data'>category :</span>
                        {category}
                    </p>
                    <p>
                        <span className='drink-data'>info :</span>
                        {info}
                    </p>
                    <p>
                        <span className='drink-data'>glass :</span>
                        {glass}
                    </p>
                    <p>
                        <span className='drink-data'>ingredients :</span>
                        {validIngredients.map((item, index) => {
                            return (
                                <span className='ing' key={item}>
                                    {item}
                                    {index < validIngredients.length - 1 ? ',' : ''}
                                </span>
                            );
                        })}
                    </p>
                    <p>
                        <span className='drink-data'>instructions :</span>
                        {instructions}
                    </p>
                </div>
            </div>
            <button onClick={() => navigate(-1)} className='btn' style={{ marginTop: '1rem' }}>
                back home
            </button>
        </Wrapper>
    );
};
export default Cocktail;
