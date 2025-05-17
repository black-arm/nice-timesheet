FROM nginx:1.27-alpine

# Copy configuration files
COPY conf/nice-timesheet.conf /etc/nginx/conf.d/

# Copy SSL certificates
COPY certs/nice-timesheet.io.crt /etc/nginx/certs/
COPY certs/nice-timesheet.io.key /etc/nginx/certs/