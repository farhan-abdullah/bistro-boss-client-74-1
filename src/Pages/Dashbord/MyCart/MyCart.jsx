import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyCart = () => {
	const [cart, refetch] = useCart();
	const total = cart.reduce((sum, item) => item.price + sum, 0);
	const handleDelete = (item) => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`http://localhost:5000/carts/${item._id}`, {
					method: 'DELETE',
				})
					.then((res) => res.json())
					.then((data) => {
						if (data.deletedCount > 0) {
							refetch();
							Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
						}
					});
			}
		});
	};
	return (
		<div className='overflow-y-auto my-10'>
			<Helmet>
				<title>Bistro Boss | My Cart</title>
			</Helmet>
			<div className='uppercase flex justify-evenly h-[60px]'>
				<h3 className='text-3xl'>Total Items: {cart.length}</h3>
				<h3 className='text-3xl'>Total Price: ${total}</h3>
				<button className='btn btn-success '>PAY</button>
			</div>
			<div>
				<div className='overflow-x-auto p-10'>
					<table className='table'>
						{/* head */}
						<thead>
							<tr>
								<th>#</th>
								<th>Food</th>
								<th>Item Name</th>
								<th>Price</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{/* row 1 */}
							{cart.map((row, index) => (
								<tr key={row._id}>
									<td>{index + 1}</td>
									<td>
										<div className='avatar'>
											<div className='mask mask-squircle w-12 h-12'>
												<img src={row.image} alt={row.name} />
											</div>
										</div>
									</td>
									<td>{row.name}</td>
									<td className='text-end'>${row.price}</td>
									<td>
										<button
											onClick={() => handleDelete(row)}
											className='btn btn-ghost btn-lg'>
											<FaTrashAlt className='ml-1' />
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default MyCart;
