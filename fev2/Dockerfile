# Sử dụng image chính thức của Node.js làm base image
FROM node:16-alpine

# Thiết lập thư mục làm việc bên trong container
WORKDIR /app

# Copy file package.json và yarn.lock vào thư mục làm việc
COPY package.json yarn.lock ./

# Cài đặt các phụ thuộc của ứng dụng
RUN yarn install

# Copy toàn bộ mã nguồn vào thư mục làm việc
COPY . .

# Thực hiện build ứng dụng React
# RUN yarn build

# Mở cổng 4000 (nếu cần thiết)
EXPOSE 4000

CMD ["yarn", "start"]
