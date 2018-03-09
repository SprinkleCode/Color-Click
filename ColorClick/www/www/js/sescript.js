var quotes = [
    'You yourself, as much as anybody in the entire universe, deserve your love and affection.~Buddha',
    'Your chances of success in any undertaking can always be measured by your belief in yourself.~Robert Collier',
    'The strongest single factor in prosperity consciousness is self-esteem: believing you can do it, believing you deserve it, believing you will get it.~Jerry Gillies',
    'There is overwhelming evidence that the higher the level of self-esteem, the more likely one will be to treat others with respect, kindness, and generosity. ~ Branden',
    'The golden opportunity you are seeking is in yourself. It is not in your environment, it is not in luck or chance, or the help of others; it is in yourself alone.~Orison Swett Marden',
    'Listen to your heart above all other voices.~Marta Kagan',
    'Always be a first-rate version of yourself, instead of a second-rate version of somebody else.~ Judy Garland',
    'The most important opinion you have is the one you have of yourself, and the most significant things you say all day are those things you say to yourself.~ Unknown Author',
    'No one can make you feel inferior without your consent. ~Eleanor Roosevelt',
    'Trust yourself. Create the kind of self that you will be happy to live with all your life. Make the most of yourself by fanning the tiny, inner sparks of possibility into flames of achievement. ~ Golda Meir',
    //'Someone else’s opinion of you does not have to become your reality. ~ Les Brown',
    //'If I am not for myself, who will be? ~ Pirke Avoth',
    //'It took me a long time not to judge myself through someone else’s eyes. ~ Sally Field',
    //'The way you treat yourself sets the standard for others. ~ Dr. Sonya Friedman',
    //'It ain’t what they call you, its what you answer to. ~ W.C. Fields',
    //'Too many people overvalue what they are not, and undervalue what they are. ~ Malcolm Forbes',
    //'Love is the great miracle cure. Loving ourselves works miracles in our lives. ~ Louise L. Hay.',
    //'Ive learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. ~ Maya Angelou',
    //'Today you are you, that is truer than true. There is no one alive who is youer than you. ~ Dr. Seuss',
    ]

function quote() {
            var randomNumber = Math.floor(Math.random() * (quotes.length));
            document.getElementById("boom").innerHTML = quotes[randomNumber];
            }