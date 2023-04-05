### 📌 Sprawdz sam...

Stworzyliśmy a także opublikowaliśmy w celach pokazowych publicznie Bota.
- [https://discord.com/oauth2/authorize?client_id=977562140007366676&scope=bot&permissions=2146958591].

Wprowadz go na swój serwer aby przetestować i podejmij własną decyzję!


### ⚡ Konfiguracja

Otwórz plik konfiguracyjny znajdujący się w głównym folderze `config.js`.

```js
module.exports = {
    app: {
        token: 'TOKEN BOTA',
        playing: 'STATUS BOTA',
        global: true,
		guild: 'ID SERWERA'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'NAZWA ROLI',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {}
    }
};
```

Konfiguracja podstawowa

- `app/token`, Token bota dostępny na [Discord Developers](https://discordapp.com/developers/applications) sekcja
- `app/playing`, Wyświetlany status aktywności Twojego bota
- `app/global`, Komendy dostępne na wszystkich serwerach?
- `app/guild`, Na jakim serwerze mają być dostępne komendy? (tylko i wyłącznie gdy `app/global` jest ustawione na false)



Konfiguracja trybu DJ

- `opt/DJ/enabled`, Czy tryb DJ powinien być aktywny, czy nie 
- `opt/DJ/roleName`, nazwa roli DJ-a, która ma zostać wykorzystana
- `opt/DJ/commands`, Lista poleceń ograniczona do członków z rolą DJ-a

Zaawansowana konfiguracja

- `opt/maxVol`, Maksymalna głośność, którą użytkownicy mogą zdefiniować
- `opt/leaveOnEnd` 
- `opt/loopMessage`, Czy wiadomość o odtwarzaniu muzyki powinna być wysłana, gdy jest zapętlona
- `opt/discordPlayer`, Opcje używane przez discord-player

- `opt/maxVol`, Maksymalna głośność, którą użytkownicy mogą zdefiniować
- `opt/leaveOnEnd`,  Czy bot ma automatycznie opuścić kanał po zakończeniu utworu
- `opt/loopMessage`, Czy wiadomość o odtwarzaniu muzyki powinna być wysłana, gdy jest zapętlona
- `opt/spotifyBridge`, Wyszukiwanie utworów z Spotify i automatycznie wyszukuje je na YouTubie pobiera utwory
- `opt/defaultvolume`, Domyślna głośność, od którego zostanie rozpoczęta kolejka
- `opt/discordPlayer`, Opcje używane przez discord-player


Wymagana konfiguracja Discord Developers

- `PRESENCE INTENT`, 
- `SERVER MEMBERS INTENT`,

Aby Twój bot został uruchomiony, te podstawowe funkcję są wymagane!


### 📑 Instalacja

Aby poprawnie korzystać z projektu, będziesz potrzebować kilku narzędzi.

[FFmpeg](https://www.ffmpeg.org) - Przetwarzanie dzwięku.

[Node JS](https://nodejs.org/en/) - (v16.6) Dla środowiska