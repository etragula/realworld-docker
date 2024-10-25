
# Контейнеризация мультисервисного приложения
### Цели

1. Настроить контейнеризированную среду для взаимодействия всех сервисов.

2. Создать Volume-ы для хранения перманентных данных. 
3. Создать общую изолированную сеть и настроить взаимодействие между сервисами внутри этой сети. Входом станет Nginx cервис. 
4. Добавить зависимости одних сервисов от других по времени старта.
5. Настроить конфиги для запуска сервисов локально и на продакшене.
6. Для локальной разработки добавить BindMount-ы в сервисы.

### Релизация

1. Использовать Docker и Docker-Compose.

2. Использовать для разных сред разные:
    - `Dockerfile.dev` и `Dockerfile.prod`,
    - `docker-compose.dev.yaml` и `docker-compose.yaml`
    - `nginx.conf.dev` и  `nginx/nginx.conf.prod`