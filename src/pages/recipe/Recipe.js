import React from 'react'
import './Recipe.css'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { useTheme } from '../../hooks/useTheme'
import { useHistory } from 'react-router-dom'

export default function Recipe() {
    const {id} = useParams()
    const url ='http://localhost:8000/recipes/' + id
    const {error, isPending, data: recipe} = useFetch(url)
    const {mode} = useTheme()
    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/recipes/' + recipe.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className={ `recipe ${mode}`}>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {recipe && (
                <>
                    <h2 className='page-title'>{recipe.title}</h2>
                    <p>Takes {recipe.cookingTime} to cook.</p>
                    <ul>
                        {recipe.ingredients.map(ing => <li key={ing}>
                            {ing}
                        </li>)}
                    </ul>
                    <p className="method">{recipe.method}</p>
                    <button  onClick={handleDelete}>Delete</button>
                </>
            )}
        </div>
    )
}
