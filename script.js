const quotes = {
    en: [
        {
            text: "The only way to do great work is to love what you do.",
            author: "Steve Jobs"
        },
        {
            text: "Life is what happens when you're busy making other plans.",
            author: "John Lennon"
        },
        {
            text: "The future belongs to those who believe in the beauty of their dreams.",
            author: "Eleanor Roosevelt"
        },
        {
            text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
            author: "Winston Churchill"
        },
        {
            text: "The best way to predict the future is to create it.",
            author: "Peter Drucker"
        },
        {
            text: "Believe you can and you're halfway there.",
            author: "Theodore Roosevelt"
        },
        {
            text: "Everything you can imagine is real.",
            author: "Pablo Picasso"
        },
        {
            text: "The only limit to our realization of tomorrow will be our doubts of today.",
            author: "Franklin D. Roosevelt"
        },
        {
            text: "In three words I can sum up everything I've learned about life: it goes on.",
            author: "Robert Frost"
        },
        {
            text: "The journey of a thousand miles begins with one step.",
            author: "Lao Tzu"
        },
        {
            text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
            author: "Ralph Waldo Emerson"
        },
        {
            text: "The only person you are destined to become is the person you decide to be.",
            author: "Ralph Waldo Emerson"
        },
        {
            text: "Don't watch the clock; do what it does. Keep going.",
            author: "Sam Levenson"
        },
        {
            text: "The best revenge is massive success.",
            author: "Frank Sinatra"
        },
        {
            text: "The way to get started is to quit talking and begin doing.",
            author: "Walt Disney"
        },
        {
            text: "Success usually comes to those who are too busy to be looking for it.",
            author: "Henry David Thoreau"
        },
        {
            text: "The mind is everything. What you think you become.",
            author: "Buddha"
        },
        {
            text: "The only true wisdom is in knowing you know nothing.",
            author: "Socrates"
        },
        {
            text: "It does not matter how slowly you go as long as you do not stop.",
            author: "Confucius"
        },
        {
            text: "Everything you've ever wanted is on the other side of fear.",
            author: "George Addair"
        },
        {
            text: "Success is walking from failure to failure with no loss of enthusiasm.",
            author: "Winston Churchill"
        },
        {
            text: "The future belongs to those who prepare for it today.",
            author: "Malcolm X"
        },
        {
            text: "The best time to plant a tree was 20 years ago. The second best time is now.",
            author: "Chinese Proverb"
        },
        {
            text: "A leader is one who knows the way, goes the way, and shows the way.",
            author: "John C. Maxwell"
        },
        {
            text: "Leadership is not about being in charge. It's about taking care of those in your charge.",
            author: "Simon Sinek"
        },
        {
            text: "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets people to do the greatest things.",
            author: "Ronald Reagan"
        },
        {
            text: "Innovation distinguishes between a leader and a follower.",
            author: "Steve Jobs"
        },
        {
            text: "Before you are a leader, success is all about growing yourself. When you become a leader, success is all about growing others.",
            author: "Jack Welch"
        },
        {
            text: "Creativity is intelligence having fun.",
            author: "Albert Einstein"
        },
        {
            text: "Innovation is not about saying yes to everything. It's about saying NO to all but the most crucial features.",
            author: "Steve Jobs"
        },
        {
            text: "The creative adult is the child who survived.",
            author: "Ursula K. Le Guin"
        },
        {
            text: "Creativity is just connecting things.",
            author: "Steve Jobs"
        },
        {
            text: "Growth is the only evidence of life.",
            author: "John Henry Newman"
        },
        {
            text: "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
            author: "Dr. Seuss"
        },
        {
            text: "Personal development is the belief that you are worth the effort, time, and energy needed to develop yourself.",
            author: "Denis Waitley"
        },
        {
            text: "The only person you should try to be better than is the person you were yesterday.",
            author: "Anonymous"
        },
        {
            text: "Success is not the key to happiness. Happiness is the key to success.",
            author: "Albert Schweitzer"
        },
        {
            text: "The road to success and the road to failure are almost exactly the same.",
            author: "Colin R. Davis"
        },
        {
            text: "Success is walking from failure to failure with no loss of enthusiasm.",
            author: "Winston Churchill"
        },
        {
            text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
            author: "Winston Churchill"
        },
        {
            text: "The only way to do great work is to love what you do.",
            author: "Steve Jobs"
        },
        {
            text: "Believe you can and you're halfway there.",
            author: "Theodore Roosevelt"
        },
        {
            text: "The future belongs to those who believe in the beauty of their dreams.",
            author: "Eleanor Roosevelt"
        },
        {
            text: "Everything you've ever wanted is on the other side of fear.",
            author: "George Addair"
        },
        {
            text: "The only limit to our realization of tomorrow will be our doubts of today.",
            author: "Franklin D. Roosevelt"
        },
        {
            text: "The only true wisdom is in knowing you know nothing.",
            author: "Socrates"
        },
        {
            text: "Knowledge is power.",
            author: "Francis Bacon"
        },
        {
            text: "The more I learn, the more I realize how much I don't know.",
            author: "Albert Einstein"
        },
        {
            text: "Wisdom is not a product of schooling but of the lifelong attempt to acquire it.",
            author: "Albert Einstein"
        },
        {
            text: "The only source of knowledge is experience.",
            author: "Albert Einstein"
        },
        {
            text: "Time is what we want most, but what we use worst.",
            author: "William Penn"
        },
        {
            text: "The best time to plant a tree was 20 years ago. The second best time is now.",
            author: "Chinese Proverb"
        },
        {
            text: "It does not matter how slowly you go as long as you do not stop.",
            author: "Confucius"
        },
        {
            text: "Time is the most valuable thing a man can spend.",
            author: "Theophrastus"
        },
        {
            text: "The way to get started is to quit talking and begin doing.",
            author: "Walt Disney"
        },
        {
            text: "Action is the foundational key to all success.",
            author: "Pablo Picasso"
        },
        {
            text: "Inaction breeds doubt and fear. Action breeds confidence and courage.",
            author: "Dale Carnegie"
        },
        {
            text: "The best way to predict the future is to create it.",
            author: "Peter Drucker"
        },
        {
            text: "Don't wait. The time will never be just right.",
            author: "Napoleon Hill"
        },
        {
            text: "The mind is everything. What you think you become.",
            author: "Buddha"
        },
        {
            text: "Attitude is a little thing that makes a big difference.",
            author: "Winston Churchill"
        },
        {
            text: "Your attitude, not your aptitude, will determine your altitude.",
            author: "Zig Ziglar"
        },
        {
            text: "The only disability in life is a bad attitude.",
            author: "Scott Hamilton"
        },
        {
            text: "A positive attitude can really make dreams come true.",
            author: "David Bailey"
        },
        {
            text: "Change is the only constant in life.",
            author: "Heraclitus"
        },
        {
            text: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
            author: "Alan Watts"
        },
        {
            text: "Growth is painful. Change is painful. But nothing is as painful as staying stuck somewhere you don't belong.",
            author: "Mandy Hale"
        },
        {
            text: "Change your thoughts and you change your world.",
            author: "Norman Vincent Peale"
        },
        {
            text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
            author: "Ralph Waldo Emerson"
        },
        {
            text: "Life is not about finding yourself. Life is about creating yourself.",
            author: "George Bernard Shaw"
        },
        {
            text: "The meaning of life is to find your gift. The purpose of life is to give it away.",
            author: "Pablo Picasso"
        },
        {
            text: "Life's most persistent and urgent question is, 'What are you doing for others?'",
            author: "Martin Luther King Jr."
        },
        {
            text: "Courage is not the absence of fear, but rather the assessment that something else is more important than fear.",
            author: "Franklin D. Roosevelt"
        },
        {
            text: "The only thing we have to fear is fear itself.",
            author: "Franklin D. Roosevelt"
        },
        {
            text: "Courage is what it takes to stand up and speak; courage is also what it takes to sit down and listen.",
            author: "Winston Churchill"
        },
        {
            text: "Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.",
            author: "Yoda"
        },
        {
            text: "Education is the most powerful weapon which you can use to change the world.",
            author: "Nelson Mandela"
        },
        {
            text: "The beautiful thing about learning is that no one can take it away from you.",
            author: "B.B. King"
        },
        {
            text: "Education is not preparation for life; education is life itself.",
            author: "John Dewey"
        },
        {
            text: "Learning is not attained by chance, it must be sought for with ardor and attended to with diligence.",
            author: "Abigail Adams"
        },
        {
            text: "A goal without a plan is just a wish.",
            author: "Antoine de Saint-Exupéry"
        },
        {
            text: "Dream big and dare to fail.",
            author: "Norman Vaughan"
        },
        {
            text: "Goals are dreams with deadlines.",
            author: "Diana Scharf"
        },
        {
            text: "Happiness is not something ready made. It comes from your own actions.",
            author: "Dalai Lama"
        },
        {
            text: "Happiness is when what you think, what you say, and what you do are in harmony.",
            author: "Mahatma Gandhi"
        },
        {
            text: "The only way to have a friend is to be one.",
            author: "Ralph Waldo Emerson"
        },
        {
            text: "A friend is one who knows you and loves you just the same.",
            author: "Elbert Hubbard"
        },
        {
            text: "The best way to find yourself is to lose yourself in the service of others.",
            author: "Mahatma Gandhi"
        },
        {
            text: "Friendship is born at that moment when one person says to another: 'What! You too? I thought I was the only one.'",
            author: "C.S. Lewis"
        },
        {
            text: "Character is what you do when no one is watching.",
            author: "J.C. Watts"
        },
        {
            text: "Integrity is doing the right thing, even when no one is watching.",
            author: "C.S. Lewis"
        },
        {
            text: "Character cannot be developed in ease and quiet.",
            author: "Helen Keller"
        },
        {
            text: "The best index to a person's character is how he treats people who can't do him any good.",
            author: "Abigail Van Buren"
        },
        {
            text: "Innovation distinguishes between a leader and a follower.",
            author: "Steve Jobs"
        },
        {
            text: "The only way to do great work is to love what you do.",
            author: "Steve Jobs"
        },
        {
            text: "Fall seven times, stand up eight.",
            author: "Japanese Proverb"
        },
        {
            text: "When you reach the end of your rope, tie a knot in it and hang on.",
            author: "Franklin D. Roosevelt"
        },
        {
            text: "The difference between try and triumph is just a little umph!",
            author: "Marvin Phillips"
        },
        {
            text: "Vision without execution is hallucination.",
            author: "Thomas Edison"
        },
        {
            text: "Where there is no vision, the people perish.",
            author: "Proverbs 29:18"
        },
        {
            text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
            author: "Aristotle"
        },
        {
            text: "The only way to do great work is to love what you do.",
            author: "Steve Jobs"
        },
        {
            text: "Quality is not an act, it is a habit.",
            author: "Aristotle"
        },
        {
            text: "Excellence is not a skill, it's an attitude.",
            author: "Ralph Marston"
        },
        {
            text: "The quality of a person's life is in direct proportion to their commitment to excellence.",
            author: "Vince Lombardi"
        },
        {
            text: "Experience is not what happens to you; it's what you do with what happens to you.",
            author: "Aldous Huxley"
        },
        {
            text: "Wisdom comes from experience. Experience is often a result of lack of wisdom.",
            author: "Terry Pratchett"
        }
    ],
    zh: [
        {
            text: "千里之行，始于足下。",
            author: "老子"
        },
        {
            text: "学而不思则罔，思而不学则殆。",
            author: "孔子"
        },
        {
            text: "己所不欲，勿施于人。",
            author: "孔子"
        },
        {
            text: "三人行，必有我师焉。",
            author: "孔子"
        },
        {
            text: "温故而知新，可以为师矣。",
            author: "孔子"
        },
        {
            text: "知之为知之，不知为不知，是知也。",
            author: "孔子"
        },
        {
            text: "学而时习之，不亦说乎？",
            author: "孔子"
        },
        {
            text: "不积跬步，无以至千里。",
            author: "荀子"
        },
        {
            text: "天行健，君子以自强不息。",
            author: "周易"
        },
        {
            text: "地势坤，君子以厚德载物。",
            author: "周易"
        },
        {
            text: "上善若水，水善利万物而不争。",
            author: "老子"
        },
        {
            text: "知人者智，自知者明。",
            author: "老子"
        },
        {
            text: "胜人者有力，自胜者强。",
            author: "老子"
        },
        {
            text: "千里之堤，溃于蚁穴。",
            author: "韩非子"
        },
        {
            text: "不谋全局者，不足谋一域。",
            author: "孙子兵法"
        },
        {
            text: "工欲善其事，必先利其器。",
            author: "孔子"
        },
        {
            text: "业精于勤，荒于嬉。",
            author: "韩愈"
        },
        {
            text: "学海无涯，回头是岸。",
            author: "中国谚语"
        },
        {
            text: "书山有路勤为径，学海无涯苦作舟。",
            author: "韩愈"
        },
        {
            text: "宝剑锋从磨砺出，梅花香自苦寒来。",
            author: "中国谚语"
        },
        {
            text: "不经一番寒彻骨，怎得梅花扑鼻香。",
            author: "中国谚语"
        },
        {
            text: "路漫漫其修远兮，吾将上下而求索。",
            author: "屈原"
        },
        {
            text: "人生得意须尽欢，莫使金樽空对月。",
            author: "李白"
        },
        {
            text: "长风破浪会有时，直挂云帆济沧海。",
            author: "李白"
        },
        {
            text: "天生我材必有用，千金散尽还复来。",
            author: "李白"
        },
        {
            text: "欲穷千里目，更上一层楼。",
            author: "王之涣"
        },
        {
            text: "会当凌绝顶，一览众山小。",
            author: "杜甫"
        },
        {
            text: "读书破万卷，下笔如有神。",
            author: "杜甫"
        },
        {
            text: "海内存知己，天涯若比邻。",
            author: "王勃"
        },
        {
            text: "落霞与孤鹜齐飞，秋水共长天一色。",
            author: "王勃"
        },
        {
            text: "人生若只如初见，何事秋风悲画扇。",
            author: "纳兰性德"
        },
        {
            text: "纸上得来终觉浅，绝知此事要躬行。",
            author: "陆游"
        },
        {
            text: "问渠那得清如许，为有源头活水来。",
            author: "朱熹"
        },
        {
            text: "不畏浮云遮望眼，自缘身在最高层。",
            author: "王安石"
        },
        {
            text: "春风得意马蹄疾，一日看尽长安花。",
            author: "孟郊"
        },
        {
            text: "莫等闲，白了少年头，空悲切。",
            author: "岳飞"
        },
        {
            text: "人生自古谁无死，留取丹心照汗青。",
            author: "文天祥"
        },
        {
            text: "苟利国家生死以，岂因祸福避趋之。",
            author: "林则徐"
        },
        {
            text: "天下兴亡，匹夫有责。",
            author: "顾炎武"
        },
        {
            text: "为天地立心，为生民立命，为往圣继绝学，为万世开太平。",
            author: "张载"
        },
        {
            text: "人生如逆旅，我亦是行人。",
            author: "苏轼"
        },
        {
            text: "但愿人长久，千里共婵娟。",
            author: "苏轼"
        },
        {
            text: "不识庐山真面目，只缘身在此山中。",
            author: "苏轼"
        },
        {
            text: "人有悲欢离合，月有阴晴圆缺。",
            author: "苏轼"
        },
        {
            text: "大江东去，浪淘尽，千古风流人物。",
            author: "苏轼"
        },
        {
            text: "人生到处知何似，应似飞鸿踏雪泥。",
            author: "苏轼"
        },
        {
            text: "一蓑烟雨任平生。",
            author: "苏轼"
        },
        {
            text: "回首向来萧瑟处，归去，也无风雨也无晴。",
            author: "苏轼"
        },
        {
            text: "人生如梦，一尊还酹江月。",
            author: "苏轼"
        },
        {
            text: "世事一场大梦，人生几度秋凉。",
            author: "苏轼"
        }
    ]
};

const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote');

// Get browser language
function getBrowserLanguage() {
    const lang = navigator.language || navigator.userLanguage;
    return lang.startsWith('zh') ? 'zh' : 'en';
}

function getRandomQuote() {
    const lang = getBrowserLanguage();
    const quoteList = quotes[lang];
    const randomIndex = Math.floor(Math.random() * quoteList.length);
    return quoteList[randomIndex];
}

function displayQuote() {
    const quote = getRandomQuote();
    const quoteBox = document.querySelector('.quote-box');
    
    // Add fade out effect
    quoteBox.style.opacity = '0';
    
    setTimeout(() => {
        quoteText.textContent = `"${quote.text}"`;
        quoteAuthor.textContent = `- ${quote.author}`;
        
        // Add fade in effect
        quoteBox.style.opacity = '1';
    }, 300);
}

// Display initial quote
displayQuote();

// Add click event listener to the button
newQuoteBtn.addEventListener('click', displayQuote); 