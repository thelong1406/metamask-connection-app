// Gán sự kiện cho nút
document.getElementById('connectButton').addEventListener('click', connectWallet);
const errorMessageElement = document.getElementById('error-message');

async function connectWallet() {
    console.log('Button clicked!')
    if (typeof window.ethereum !== 'undefined') {
        try {
            // Gửi Request connect
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log('Connected account:', accounts[0]);
            // Show lên UI
            Swal.fire({
                icon: "success",
                title: 'Thành công!',
                text: 'Ví MetaMask đã được kết nối thành công.\nAccount ID: ' + accounts[0]
            });
        } catch (error) {
            console.error('Error connecting:', error);
            // Show lên UI
            Swal.fire({
                icon: 'error',
                title: 'Kết nối đến ví MetaMask thất bại!',
                text: error.message || 'Lỗi không xác định',
            });
        }
    } else {
        // Show lên UI
        Swal.fire({
            icon: 'warning',
            title: 'Không tìm thấy MetaMask trong browser!',
            text: 'Cài MetaMask extension và đăng nhập trước khi sử dụng tính năng!',
        });
    }
}
