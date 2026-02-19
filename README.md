# Thagore Landing (Astro Static)

Landing page được chuyển từ React sang Astro dạng tĩnh để chạy trên GitHub Pages, giữ nguyên thiết kế/animation.

## Chạy local

```bash
npm install
npm run dev
```

## Build tĩnh

```bash
npm run build
```

Output nằm ở thư mục `dist/`.

## Deploy GitHub Pages

- Workflow đã có tại `.github/workflows/deploy.yml`.
- Chỉ cần push lên nhánh `main`, GitHub Actions sẽ build và deploy lên Pages.

## Lưu ý tài nguyên ảnh

Project đã dùng logo local tại `public/thagore-logo.svg` để tránh lỗi 404.
Nếu muốn thay logo riêng, giữ nguyên tên file hoặc cập nhật biến `logoPath` trong `src/pages/index.astro`.
