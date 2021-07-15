import React, { useEffect, useState } from 'react'
import ViewRow from './ViewRow'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

function ViewTable(props) {
  const [dragAndDrop, setDragAndDrop] = useState(null)

  useEffect(() => {
    setDragAndDrop(Object.entries(props))
    // Bug a resolver
    // Al cambiar props pierde orden previo del drag and drop
  }, [props])

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return
    }
    const items = reorder(
      dragAndDrop,
      result.source.index,
      result.destination.index
    )
    return setDragAndDrop(items)
  }

  return (
    <div className="viewTable">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {!!dragAndDrop &&
                dragAndDrop.map((item, index) => (
                  <Draggable
                    key={`${index}`}
                    draggableId={`${index}`}
                    index={index}>
                    {(provided, snapshot) => (
                      <div
                        className={snapshot.isDragging ? 'isDragging' : ''}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}>
                        <ViewRow leyend={item[0]} value={item[1]} />
                      </div>
                    )}
                  </Draggable>
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default ViewTable
