import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { connect } from 'react-redux';
import { selectCategory } from '../store/categories.js';
import { useState, useEffect } from 'react';

const Categories = (props) => {
    const [activeCategory, setActiveCategory] = useState(props.categories[0].id);
    const { selectCategory } = props;
    function handleClick(category) {
        setActiveCategory(category);
        props.selectCategory(category);
        console.log(props.categories);
    }
    useEffect(() => {
        selectCategory(activeCategory);

    }, [activeCategory, selectCategory]);
    return (
        <div>
            <div>
                <h2>
                    Welcome To My Store
                </h2>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        '& > *': {
                            m: 1,
                        },
                    }}
                >
                    <ButtonGroup variant="text" aria-label="text button group">
                        {props.categories.map((category, i) => {
                            return (
                                <Button key={i} onClick={() => handleClick(category.id)}>
                                    {category.name}
                                </Button>
                            )
                        })}
                    </ButtonGroup>

                </Box>

                <div style={{ textAlign: "center" }}>
                    <h1>{props.activeCategory?.name}</h1>
                    <h2>{props.activeCategory?.description}</h2>
                </div>

            </div>
        </div>

    );
}
const mapStateToProps = (state) => {
    return {
        categories: state.categories.categories,
        activeCategory: state.categories.activeCategory,
    }
}

const mapDispatchToProps = {
    selectCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);