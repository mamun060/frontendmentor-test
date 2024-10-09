import { Draggable , Droppable } from 'react-beautiful-dnd';
import LinkItem from './LinkItem';
import styles from '../assets/css/components/LinkList.module.css';


const LinkList = ({ links, onDelete, onEdit }) => {
    return (
      <Droppable droppableId="droppable">
        {(provided) => (
          <ul className={styles.list} ref={provided.innerRef} {...provided.droppableProps}>
            {links.map((link, index) => (
              <Draggable key={link.id} draggableId={link.id.toString()} index={index}>
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <LinkItem 
                      link={link} 
                      onEdit={() => onEdit(link, index)} 
                      onDelete={() => onDelete(link.id)} 
                    />
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    );
};

export default LinkList;