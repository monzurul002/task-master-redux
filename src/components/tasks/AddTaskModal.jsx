import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/tasksSlice";




const AddTaskModal = ({ isOpen, setIsOpen }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const dispatch = useDispatch()
    const onCancel = () => {
        reset()
        setIsOpen(false)
    }
    const onSubmit = (data) => {


        dispatch(addTask(data))
        onCancel()
    }
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Programming hero" >

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="flex flex-col">
                    <label htmlFor="title">Title</label>
                    <input className="border- rounded-lg" id="title" {...register("title", { required: true })} />
                </div>

                {errors.title && <span>This field is required</span>}
                <br />
                <label htmlFor="description">Description</label> <br />
                <textarea {...register("description")} name="description" type="text" id="description" cols="30" rows="2"></textarea> <br />
                <label>Assign to</label>
                <select {...register("gender")}>
                    <option value="Hasib">Hasib</option>
                    <option value="Monzurul">Monzurul</option>
                    <option value="Asfaq">Asfaq</option>
                </select>


                <div className="flex justify-between">
                    <input className="bg-blue-600 rounded-md px-4 py-1 my-2 text-white" type="submit" />
                    <button onClick={onCancel} className="bg-red-600 px-4 py-1 text-white rounded-md ">Cancel</button>

                </div>
            </form>
        </Modal>
    );
};

export default AddTaskModal;