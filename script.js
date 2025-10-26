// Word Decoder
function decodeWords(encodedWords) {
    const key = 'hkd2024';
    
    function decode(encodedHex) {
        let decoded = '';
        for (let i = 0; i < encodedHex.length; i += 4) {
            const hex = encodedHex.substr(i, 4);
            const charCode = parseInt(hex, 16);
            const keyChar = key.charCodeAt((i / 4) % key.length);
            decoded += String.fromCharCode(charCode ^ keyChar);
        }
        return decoded;
    }
    
    return encodedWords.map(word => ({
        hraswa: decode(word.h),
        dirgha: decode(word.d),
        correct: word.c
    }));
}

// Decode words on page load
const words = typeof encodedWords !== 'undefined' ? decodeWords(encodedWords) : [];

$(document).ready(function() {
    // Sound Manager
    const SoundManager = {
        audioContext: null,
        
        init: function() {
            try {
                this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            } catch (e) {
                console.log('Web Audio API not supported');
            }
        },
        
        playTone: function(frequency, duration, type = 'sine', volume = 0.3) {
            if (!this.audioContext) return;
            
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            oscillator.frequency.value = frequency;
            oscillator.type = type;
            
            gainNode.gain.setValueAtTime(volume, this.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);
            
            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + duration);
        },
        
        playCorrectSound: function() {
            // Pleasant "bing" sound - ascending major chord
            this.playTone(440, 0.1, 'sine', 0.3);
            setTimeout(() => this.playTone(554, 0.1, 'sine', 0.3), 50);
            setTimeout(() => this.playTone(659, 0.2, 'sine', 0.3), 100);
        },
        
        playWrongSound: function() {
            // Harsh buzzer sound
            this.playTone(200, 0.3, 'square', 0.4);
            setTimeout(() => this.playTone(150, 0.3, 'square', 0.4), 50);
        },
        
        playClickSound: function() {
            // Subtle click sound
            this.playTone(800, 0.05, 'sine', 0.2);
            setTimeout(() => this.playTone(1000, 0.05, 'sine', 0.2), 10);
        },
        
        playTickSound: function() {
            // Tick-tock sound
            this.playTone(600, 0.08, 'sine', 0.15);
            setTimeout(() => this.playTone(400, 0.08, 'sine', 0.15), 40);
        },
        
        playGameOverSound: function() {
            // Sad descending sound
            this.playTone(349, 0.2, 'sine', 0.3);
            setTimeout(() => this.playTone(294, 0.2, 'sine', 0.3), 100);
            setTimeout(() => this.playTone(247, 0.3, 'sine', 0.3), 200);
        }
    };
    
    const GameManager = {
        currentScreen: 'welcome',
        currentMode: null,
        score: 0,
        currentWordIndex: -1,
        currentForm: 'hraswa', // 'hraswa' or 'dirgha'
        timer: null,
        timeLeft: 0,
        maxTime: 15,
        timeout: null,
        tickSoundInterval: null,
        
        init: function() {
            SoundManager.init();
            this.setupEventListeners();
        },
        
        setupEventListeners: function() {
            const self = this;
            
            // Mode selection
            $('.mode-btn').on('click', function() {
                $('.mode-btn').removeClass('selected');
                $(this).addClass('selected');
                self.currentMode = $(this).data('mode');
                $('#start-btn').prop('disabled', false);
            });
            
            // Start button
            $('#start-btn').on('click', () => {
                self.startGame();
            });
            
            // Word card toggle
            $('#word-card').on('click', function() {
                self.toggleWordForm();
            });
            
            // Answer buttons
            $('#hraswa-btn').on('click', () => {
                self.checkAnswer('hraswa');
            });
            
            $('#dirgha-btn').on('click', () => {
                self.checkAnswer('dirgha');
            });
            
            // Play again
            $('#play-again-btn').on('click', () => {
                self.resetGame();
            });
        },
        
        startGame: function() {
            this.score = 0;
            this.currentWordIndex = -1;
            this.switchScreen('game');
            // show neutral teacher at start
            this.setTeacherState && this.setTeacherState('normal');
            this.loadNextWord();
        },
        
        loadNextWord: function() {
            const wordIndex = Math.floor(Math.random() * words.length);
            this.currentWordIndex = wordIndex;
            this.currentForm = 'hraswa';
            this.displayWord();
            this.updateScore();
            // reset teacher to neutral for new word
            this.setTeacherState && this.setTeacherState('normal');
            this.startTimer();
        },
        
        displayWord: function() {
            const word = words[this.currentWordIndex];
            const displayWord = this.currentForm === 'hraswa' ? word.hraswa : word.dirgha;
            $('#word-display').text(displayWord);
            $('#word-card').addClass('word-appear');
            setTimeout(() => {
                $('#word-card').removeClass('word-appear');
            }, 600);
        },
        
        toggleWordForm: function() {
            this.currentForm = this.currentForm === 'hraswa' ? 'dirgha' : 'hraswa';
            const word = words[this.currentWordIndex];
            const displayWord = this.currentForm === 'hraswa' ? word.hraswa : word.dirgha;
            $('#word-display').text(displayWord);
        },
        
        checkAnswer: function(selectedAnswer) {
            const word = words[this.currentWordIndex];
            const correctAnswer = word.correct;
            
            // Clear timer
            this.stopTimer();
            
            if (selectedAnswer === correctAnswer) {
                // Correct answer
                SoundManager.playCorrectSound();
                // show smirk for correct
                this.setTeacherState && this.setTeacherState('smirk');
                this.score++;
                this.updateScore();

                // Load next word immediately
                setTimeout(() => {
                    this.loadNextWord();
                }, 300);
            } else {
                // Wrong answer - game over
                SoundManager.playWrongSound();
                // show angry for wrong
                this.setTeacherState && this.setTeacherState('angry');
                setTimeout(() => {
                    this.gameOver();
                }, 500);
            }
        },
        
        startTimer: function() {
            const self = this;
            
            // Set time based on mode
            switch(this.currentMode) {
                case 'easy':
                    $('#timer').hide();
                    return; // No timer for easy mode
                case 'medium':
                    this.timeLeft = 15;
                    this.maxTime = 15;
                    break;
                case 'hard':
                    this.timeLeft = 10;
                    this.maxTime = 10;
                    break;
            }
            
            $('#timer').show();
            
            // Reset timer instantly without animation
            $('.timer-circle-progress').removeClass('animated');
            this.updateTimerProgress();
            
            // Add animation class after a brief delay for countdown
            setTimeout(() => {
                $('.timer-circle-progress').addClass('animated');
            }, 10);
            
            this.timer = setInterval(() => {
                self.timeLeft--;
                self.updateTimerProgress();
                
                // Play tick-tock sound every second
                if (self.timeLeft > 0) {
                    SoundManager.playTickSound();
                }
                
                if (self.timeLeft <= 3) {
                    $('.timer-circle-progress').addClass('warning');
                }
                
                if (self.timeLeft <= 0) {
                    clearInterval(self.timer);
                    self.gameOver();
                }
            }, 1000);
        },
        
        stopTimer: function() {
            if (this.timer) {
                clearInterval(this.timer);
                this.timer = null;
            }
            $('.timer-circle-progress').removeClass('warning animated');
        },
        
        updateTimerProgress: function() {
            const circumference = 2 * Math.PI * 54; // 2 * PI * radius
            const progress = this.timeLeft / this.maxTime;
            const offset = circumference - (progress * circumference);
            
            $('.timer-circle-progress').css('stroke-dashoffset', offset);
        },
        
        updateScore: function() {
            $('#score').text(this.score);
            SoundManager.playClickSound();
            $('.score').addClass('score-updated');
            setTimeout(() => {
                $('.score').removeClass('score-updated');
            }, 500);
        },

        // Set teacher image based on state: 'normal' | 'smirk' | 'angry'
        setTeacherState: function(state) {
            try {
                const img = $('#teacher-img');
                if (!img || img.length === 0) return;

                const map = {
                    normal: 'public/normal_teacher.png',
                    smirk: 'public/smirk_teacher.png',
                    angry: 'public/angry_teacher.png'
                };

                const src = map[state] || map.normal;
                img.attr('src', src);
                img.attr('alt', `Teacher: ${state}`);

                // small reaction animation
                img.addClass('react');
                setTimeout(() => img.removeClass('react'), 500);
            } catch (e) {
                // Fail silently if jQuery isn't available or element missing
                console.warn('setTeacherState error', e);
            }
        },
        
        gameOver: function() {
            this.stopTimer();
            SoundManager.playGameOverSound();
            $('#final-score').text(this.score);
            this.switchScreen('gameover');
        },
        
        resetGame: function() {
            this.score = 0;
            this.currentWordIndex = -1;
            this.currentForm = 'hraswa';
            this.currentMode = null;
            this.timeLeft = 0;
            this.maxTime = 15;
            
            $('.mode-btn').removeClass('selected');
            $('#start-btn').prop('disabled', true);
            $('.timer-circle-progress').removeClass('warning animated');
            $('.timer-circle-progress').css('stroke-dashoffset', 0);
            // reset teacher to neutral
            this.setTeacherState && this.setTeacherState('normal');
            this.switchScreen('welcome');
        },
        
        switchScreen: function(screenName) {
            $('.screen').removeClass('active');
            $('#' + screenName + '-screen').addClass('active');
            this.currentScreen = screenName;
        }
    };
    
    GameManager.init();
});

