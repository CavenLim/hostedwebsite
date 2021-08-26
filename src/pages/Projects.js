import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import SectTitle from'../Components/SectTitle';
import { MdSearch } from 'react-icons/md';
import ProjectItem from '../Components/ProjectItem';
import ProjectInfo from '../assets/data/projects';


const ProjectStyles = styled.div`

    padding: 10rem 0;

    .allProjects{
        display: grid;
        grid-template-columns:repeat(auto-fill,minmax(300px,1fr));
        gap:5rem;
        margin-top:5rem;
    }
    .searchBar{
        position: relative;
        width: 300px;
        margin-top: 5rem;
    }
    .searchBar input{
        width:100%;
        font-size: 2rem;
        padding: 0.8rem;
        color:var(--black);
        border-radius: 6px;
        outline: none;
        border:none;
    }
    .searchBar .searchIcon{
        position: absolute;
        width: 2rem;
        right:1rem;
    }

    .searchBar .searchIcon path{
        
        color:var(--deep-dark);
        
       
    }

    @media only screen and (max-width:760px){
        .searchBar,.searchBar form, .searchBar input{
            width: 100%;
        }

    }






`



export default function Projects() {
    const [searchText,setSearchText] = useState('');
    const [projectData,setProjectData] = useState(ProjectInfo); 

    useEffect(() => {
            if (searchText === '') return;
            setProjectData(()=>
                ProjectInfo.filter((item) =>
                    item.name.toLowerCase().match(searchText.toLowerCase())
                

                )
            );

            
        },[searchText]);

    function handleChange(e){
        e.preventDefault();
        setSearchText(e.target.value);

        if (!e.target.value.length > 0){
            setProjectData (ProjectInfo);

        }

    }
    return (
        <ProjectStyles>
          <div className="container">
              <SectTitle
              heading = "Projects" subheading = "my recent works"></SectTitle>


            <div className="searchBar">
                <form>
                    <input type="text" placeholder="Project name" value={searchText} 
                    onChange = {handleChange}
                    
                    />
                    <MdSearch className="searchIcon" />
                </form>
            </div>

            <div className="allProjects">
                {projectData.map(item =>(
                    <ProjectItem key = {item.id}
                        title = {item.name}
                        desc = {item.desc}
                        img = {item.img}
                    />
                )) }
         

            </div>
       

          </div>
        
        </ProjectStyles>
    )
}
