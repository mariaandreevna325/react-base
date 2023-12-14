import { RiDeleteBin2Fill, RiRefreshLine } from 'react-icons/ri';
import styles from '../TodosActions.module.css'
import Button from '../UI/Button';

function TodosActions({resetTodos, deleteCompletedTodos, completedTodosExist}) {
    return (
        <div className={StyleSheet.todosActionsContainer}>
            <Button title="Reset Todos" onClick={resetTodos}>
                <RiRefreshLine />
            </Button>
            <Button title="Clear Completed todos"
                    onClick={deleteCompletedTodos}
            >
                <RiDeleteBin2Fill />
            </Button>
        </div>
    );
}

export default TodosActions;
