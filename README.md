### Hexlet tests and linter status:

[![Actions Status](https://github.com/anilukin/frontend-project-44/workflows/hexlet-check/badge.svg)](https://github.com/anilukin/frontend-project-44/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/aec75b8d7ce33290a25d/maintainability)](https://codeclimate.com/github/anilukin/frontend-project-44/maintainability)

# Добро пожаловать в Brain-games!
## Описание
После установки вам будут доступны 5 консольных игр, каждая из которых состоит из трух раундов. Три правильных ответа на вопрос - успешное прохождение игры.

## Системные требования и рекомендации по установке

1. Убедитесь, что у вас установлены Node.js не ниже версии v18.9.1 и пакетный менеджер npm не ниже версии 8.19.1.
    
    Проверить версию:
    ```
    node -v
    npm -v
    ```
    Если не установлены, введите сделующие команды:
    - *MacOS:*
    ```
    brew install nodejs
    ```
    - *Ubuntu или Ubuntu on Windows*
    ```
    sudo apt-get install curl
    curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt install -y nodejs
    ```
2. Склонируйте репозиторий к себе на компьютер: 
    ```
    git clone https://github.com/anilukin/frontend-project-44.git
    npm ci
    ```
3. Перейдите в папку проекта: 
    ```
    cd frontend-project-44/
    ```
4. Установите необходимые пакеты из корневой папки проекта:
    ```
    npm link
    ```
6. Сейчас вам доступны 5 игр, запустить каждую из которых можно, запустив соответствующую команду:
    
    ### **Игра 1: "Проверка на чётность"**
    ```
    - brain-even
    ```
    Посмотреть:

    [![asciicast](https://asciinema.org/a/526759.svg)](https://asciinema.org/a/526759)

    ### **Игра 2: "Калькулятор"**
    ```
    - brain-calc
    ```
    Посмотреть:
    
    [![asciicast](https://asciinema.org/a/Mq0WIcuKgFREeEXN3zPgGfmOV.svg)](https://asciinema.org/a/Mq0WIcuKgFREeEXN3zPgGfmOV)

    ### **Игра 3: "НОД"**

    ```
    - brain-gcd
    ```
    Посмотреть:
    
    [![asciicast](https://asciinema.org/a/djEkHQjghRLM0DbttgbGBuNAg.svg)](https://asciinema.org/a/djEkHQjghRLM0DbttgbGBuNAg)

    ### **Игра 4: "Арифметическая прогрессия"**

    ```
    - brain-progression
    ```
    Посмотреть:
    
    [![asciicast](https://asciinema.org/a/mMIgQUhGsjcrx8aybXpwzsjD0.svg)](https://asciinema.org/a/mMIgQUhGsjcrx8aybXpwzsjD0)

    ### **Игра 5: "Простое ли число?"**

    ```
    - brain-prime
    ```
    Посмотреть:
    
    [![asciicast](https://asciinema.org/a/M6STqSRdE15pI0Q3LmwNiTNE1.svg)](https://asciinema.org/a/M6STqSRdE15pI0Q3LmwNiTNE1)