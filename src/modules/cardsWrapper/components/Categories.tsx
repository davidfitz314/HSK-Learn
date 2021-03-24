import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { useCardsMediator } from '../../../Providers/CardsMediatorProvider';
import { useValue } from '../../../Utils/hooks/useValue';
import CategoryButton from './CategoryButton';

const Categories: React.FC = () => {
    const mediator = useCardsMediator();
    const categories = useValue(mediator.categories);
    useEffect(() => {
        mediator.getCardCategories();
    }, [mediator])

    const setSelectedCategory = (category: string) => mediator.setSelectedCategory(category);
    return (
        <Grid container>
            {categories && categories.map((name, key) => {
                return (
                    <Grid item xs={4} key={`cat-${name}-${key}`}><CategoryButton name={name} openCategory={setSelectedCategory} /></Grid>
                );
            })}
            {categories && (<Grid item xs={4}><CategoryButton name={"All Cards"} openCategory={setSelectedCategory} /></Grid>)}
            
            {categories.length <= 0 && (<h5>No Categories Found, Please refresh the Page.</h5>)}
        </Grid>
    );
};

export default Categories;