FROM python:3.11.4-slim-buster

ENV PYTHONUNBUFFERED 1

WORKDIR /maktab_polo

COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt

COPY . .

# Expose any necessary ports
# EXPOSE 8000

# Command to run Celery worker to
# CMD ["celery", "worker", "-A", "accounts", "--loglevel=info"]

# Command to run Celery beat
# CMD ["celery", "beat", "-A", "accounts", "--loglevel=info"]

# Command to start the Django development server
# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]