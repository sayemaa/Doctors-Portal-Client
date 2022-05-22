import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingDoctor, refetch, setDeletingDoctor }) => {
    const { name, email } = deletingDoctor;

    const handleDelete = () => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Dr. ${name} has been removed`);
                    setDeletingDoctor(null);
                    refetch();
                }
            })
    }

    return (
        <div>

            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Confirm Delete? </h3>
                    <p class="py-4">Are you sure you want to delete {name}?</p>
                    <div class="modal-action">
                        <button onClick={() => handleDelete()} className='btn btn-error'>Delete</button>
                        <label for="delete-confirm-modal" class="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;