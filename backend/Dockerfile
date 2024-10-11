# Use the official Python image as a parent image
FROM python:3.12

# Set the working directory in the container
WORKDIR /app

# Copy requirements.txt to the working directory
COPY requirements.txt .

# Install the required packages
RUN pip install --no-cache-dir -r requirements.txt

# Install Gunicorn for production WSGI server
RUN pip install gunicorn

# Download NLTK data required for the app
RUN python -m nltk.downloader wordnet stopwords

# Copy the rest of your application code to the working directory
COPY . .

# Expose the port your app runs on (default Flask port is 5000)
EXPOSE 5000

# Define the command to run your app with Gunicorn WSGI server
CMD ["gunicorn", "-w", "2", "-b", "0.0.0.0:5000", "app:app"]