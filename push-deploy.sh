
#! /bin/bash


npm run build
git add .
git commit -m '...'
git push


ssh -T hyderion@hyderion.com <<-END


cd software/booking-demo/booking
git pull

cp -r build /home/hyderion/nginx-docker/react-build/booking/build/

exit

END

echo "Process Complete"