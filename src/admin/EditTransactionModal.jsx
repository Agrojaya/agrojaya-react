import React from 'react';

const EditTransactionModal = ({
	show,
	transaction,
	onClose,
	onChange,
	onSave,
}) => {
	if (!show) return null;

	// ENUM values
	const statusPembayaranOptions = [
		'Menunggu Pembayaran',
		'Pembayaran Sukses',
		'Pembayaran Gagal',
		'Transaksi Gagal',
	];

	const statusTransaksiOptions = [
		'Menunggu Pembayaran',
		'Pembayaran Gagal',
		'Transaksi Gagal',
		'Pesanan Dibuat',
		'Teknisi Menuju Lokasi Anda',
		'Proses Pemasangan',
		'Pesanan Selesai',
	];

	return (
		<div className='fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50'>
			<div className='bg-white p-6 rounded-lg shadow-lg w-96'>
				<h2 className='text-xl font-bold mb-4'>Edit Transaksi</h2>
				<div className='mb-4'>
					<label className='block text-sm'>Status Pembayaran</label>
					<select
						name='status_pembayaran'
						value={transaction.status_pembayaran}
						onChange={onChange}
						className='w-full p-2 border rounded focus:outline-none'
					>
						{statusPembayaranOptions.map((option, index) => (
							<option key={index} value={option}>
								{option}
							</option>
						))}
					</select>
				</div>
				<div className='mb-4'>
					<label className='block text-sm'>Status Transaksi</label>
					<select
						name='status_transaksi'
						value={transaction.status_transaksi}
						onChange={onChange}
						className='w-full p-2 border rounded focus:outline-none'
					>
						{statusTransaksiOptions.map((option, index) => (
							<option key={index} value={option}>
								{option}
							</option>
						))}
					</select>
				</div>
				<div className='flex justify-end space-x-2'>
					<button
						className='p-2 bg-gray-600 text-white rounded-md hover:bg-gray-700'
						onClick={onClose}
					>
						Batal
					</button>
					<button
						className='p-2 bg-green-600 text-white rounded-md hover:bg-green-700'
						onClick={onSave}
					>
						Simpan
					</button>
				</div>
			</div>
		</div>
	);
};

export default EditTransactionModal;
