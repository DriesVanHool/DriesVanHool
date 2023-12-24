import {ChangeEvent, FunctionComponent, useState} from 'react'
import {useGetProjects} from '../../../api/projects.ts'
import ErrorMessage from '../../utils/ErrorMessage.tsx'
import {Chip, Listbox, ListboxItem, Select, SelectItem} from '@nextui-org/react'
import ListboxWrapper from '../../elements/ListboxWrapper.tsx'
import {IProject} from '../../../models/IProject.ts'
import {motion} from 'framer-motion'
import {useNavigate} from 'react-router-dom'
import {useGetCategories, useGetTags} from '../../../api/general.ts'
import {IProjectTag} from '../../../models/IProjectTag.ts'

const ProjectOverview: FunctionComponent = () => {
    const navigate = useNavigate()
    const {data: projects, isError: projectError} = useGetProjects()
    const {data: categories, isError: categoryError} = useGetCategories()
    const {data: tags, isError: tagError} = useGetTags()
    const [hoverProject, setHoverProject] = useState<IProject | null>(null)
    const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null)
    const [selectedTagIds, setSelectedTagIds] = useState<number[]>([])

    if (projectError || categoryError || tagError) {
        return (
            <ErrorMessage>
                <p>Couldn't load data</p>
            </ErrorMessage>
        )
    }

    //Change selected category dd
    const handleChangeCategory = (e:ChangeEvent<HTMLSelectElement>) => {
        let selectedId: number | null
        try {
            selectedId = parseInt(e.target.value)
        }catch {
            selectedId = selectedCategoryId
        }
        setSelectedCategoryId(selectedId)
    };

    //Change selected tag Id. Add to array
    const handleChangeTags = (e:ChangeEvent<HTMLSelectElement>) => {
        let selectedIds: number[]
        try {
            //Map id's to numbers. And filter out 0. (NextUi adds 0 when all items are deselected)
            selectedIds = e.target.value.split(',').map(i => Number(i)).filter(id => id !==0);
        }catch {
            selectedIds = selectedTagIds
        }
        setSelectedTagIds(selectedIds)
    };

    //Depending on selected catagory and tags, filter projects
    const filterProjects = (): IProject[] => {
        let filteredProjects = projects || [];
        if (selectedCategoryId){
            filteredProjects = filteredProjects?.filter(project=>project.category?.id===selectedCategoryId)
        }
        if (selectedTagIds.length>0){
            filteredProjects =  filteredProjects?.filter(project =>
                selectedTagIds.some(tagId =>
                    project.tags?.map((projectTag: IProjectTag) => projectTag.tag?.id)?.includes(tagId)
                )
            )
        }
        return filteredProjects
    }

    return (
        <>
            <h1 className="text-6xl font-bold tracking-tight text-foreground sm:text-6xl mb-10">Projects</h1>
            <div className="w-full gap-10 grid grid-cols-2">
                {/*Filters*/}
                <div className="col-span-2 sm:space-x-6 space-y-6">
                    <Select
                        items={categories}
                        label="Category"
                        placeholder="Select a category"
                        className="w-full sm:max-w-[200px]"
                        onChange={handleChangeCategory}
                    >
                        {(category) => <SelectItem key={category.id}>{category.name}</SelectItem>}
                    </Select>
                    <Select
                        items={tags}
                        label="Project tags"
                        placeholder="Search by tags"
                        selectionMode="multiple"
                        className="w-full sm:max-w-[300px]"
                        onChange={handleChangeTags}
                    >
                        {(tag) => (
                            <SelectItem key={tag.id} value={tag.id}>
                                {tag.name}
                            </SelectItem>
                        )}
                    </Select>
                </div>
                {/*Project overview*/}
                <ListboxWrapper styling={'col-span-2 sm:col-span-1'}>
                    {/*NextUI mapping handeled with listbox items*/}
                    <Listbox variant="faded"
                             items={filterProjects()}
                             classNames={{
                                 base: "h-[500px]",
                                 list: "max-h-[500px] overflow-y-scroll",
                             }}
                             onAction={(key) => navigate('/projects/'+key)}
                             aria-label="Project list">
                        {(project) => (
                            <ListboxItem key={project.slug} textValue={project.name} onMouseOver={()=>setHoverProject(project)} onMouseOut={()=>setHoverProject(null)}>
                                <p className="text-xl">{project.name}</p>
                                <div className="flex flex-wrap gap-4 py-3 justify-end">
                                    {
                                        project.tags?.map(projectTag=>(
                                                <Chip key={`tag${projectTag.tag?.id}`} size="sm" color={projectTag.tag?.color}>{projectTag.tag?.name}</Chip>
                                            )
                                        )
                                    }
                                </div>
                            </ListboxItem>
                        )}
                    </Listbox>
                </ListboxWrapper>
                {/*Hover thumbnail*/}
                <div id="projectThumbnail" className="relative hidden sm:block h-[500px] col-span-1">
                    {
                        hoverProject?(
                            <motion.div
                                initial={{ opacity: 0}}
                                animate={{ opacity: 1}}
                                transition={{ duration: 1 }}
                                className="flex items-center justify-center h-full w-full"
                            >
                                <img src={hoverProject?.thumbnail??""}
                                     alt={hoverProject.name}
                                     width="100%"
                                     height="100%"
                                     className="object-cover h-full rounded-lg"
                                />
                            </motion.div>
                        ):null
                    }
                </div>
            </div>
        </>
    )
}

export default ProjectOverview