import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import {Input,Select} from "antd";
import {MoviePreview} from "./MoviePreview";

export const HomePage = () => {
    const films = useSelector((state) => state.filmsData.movies);
    const genres = useSelector((state) => state.filmsData.genres);
    const [filteredMovies,setFilteredMovies] = useState(films);
    const [searchValue, setSearchValue] = useState('');
    const [chosenGenre,setGenre] = useState('')

    const handleChangeSearch = (e) => {
        setSearchValue(e.target.value);
    };

    useEffect(() => {
         //filter
        if (searchValue && chosenGenre) {
            setFilteredMovies(
                films.filter((item) =>
                    item.title.toLowerCase().includes(searchValue.toLowerCase())
                )
            );
        }else if (chosenGenre && !searchValue ) {
            setFilteredMovies(
                films.filter((item) => item.genre?.length && item.genre.includes(chosenGenre))
            );
        }else if (searchValue && chosenGenre){
            setFilteredMovies(
                films.filter((item) => {
                    const includesTitle = item.title.toLowerCase().includes(searchValue.toLowerCase())
                    const  includesGenre = item.genre?.length && item.genre.includes(chosenGenre);
                    return includesTitle && includesGenre;
                })
            )
        }else {
            setFilteredMovies(films);
        }

    }, [searchValue, chosenGenre, films]);

    const handleSelectChange = (value) => {
        setGenre(value);
    };

    const handleSelectClear = () => {
        setGenre('');
    };

    return (
        <>
            <div className="filter">
                <Input value={searchValue} onChange={handleChangeSearch}/>
                <Select
                onChange={handleSelectChange}
                allowClear
                onClear={handleSelectClear}
                >
                    {genres.map((item) => (
                        <Select.Option key={item} value={item}>{item}</Select.Option>
                    ))}
                </Select>
            </div>
        <div className="movie-list">
            {
                filteredMovies.map((item) =>(
                    <MoviePreview key={item.id} movie={item}/>
                ))
            }
        </div>
        </>
    )
};

