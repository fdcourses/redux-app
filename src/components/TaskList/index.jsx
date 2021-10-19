import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/taskCreators';

const TaskList = (props) => {
  const { tasks, deleteAction, updateAction } = props;

  return (
    <section>
      <h1>Список задач</h1>
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="checkbox"
                  checked={task.isDone}
                  onChange={({ target: { checked } }) => {
                    updateAction({
                      id: task.id,
                      values: {
                        isDone: checked,
                      },
                    });
                  }}
                />
                <h2>{task.text}</h2>
                <button onClick={() => deleteAction(task.id)}>Delete</button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const mapStateToProps = (state) => {
  return { tasks: state.task.tasks };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteAction: (id) => {
      dispatch(actionCreators.deleteTask(id));
    },
    updateAction: ({id, values}) => {dispatch(actionCreators.updateTask({id,values}))},
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
