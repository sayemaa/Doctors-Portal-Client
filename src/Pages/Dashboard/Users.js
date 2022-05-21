import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://blooming-cliffs-74232.herokuapp.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()));
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='max-w-5xl mx-auto'>
            <h2 className='text-2xl font-bold text-accent my-5'>All Users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow
                                index={index + 1}
                                key={user._id}
                                user={user}
                                refetch={refetch}
                            />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;