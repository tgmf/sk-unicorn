<template>
  <div class="h-full min-h-screen flex flex-col align-center">
    <div class="background overflow-hidden h-full absolute">
      <div class="sky-above h-full w-full fixed animate-pulse animate-slideInUp30 z-0"></div>
      <div class="law-within h-full w-full fixed animate-slideInUp100 z-0"></div>
      <div class="confetti h-[42%] sm:h-[72%] w-full fixed animate-slideInDown50 z-0"></div>
    </div>
    <div class="container-xs mx-auto w-full pt-8 pb-4 max-w-[19.375em] sm:max-w-[32.625em] z-10">
      <div class="balance h-[2em] sm:h-[4em] flex items-center py-1 px-3 sm:px-5 mb-10 sm:mb-16">
        <span class="text-white text-lg sm:text-3xl font-bold leading-none">Баланс</span>
        <span class="text-right text-yellow-400 text-lg sm:text-3xl font-bold leading-none ml-auto">{{ balanceAsCurrency }}</span>
        <img src="/assets/images/coin.png" alt="$" class="ml-1 max-h-[100%]"/>
      </div>
      <div class="game w-full h-[28.5em] sm:h-[46.5em] bg-gradient-to-b from-fuchsia-950 to-zinc-900 rounded-3xl pt-4 flex flex-col">
        <div v-if="!currentStage" class="start w-full h-full relative px-3 flex flex-col">
          <div class="h-[1.42em] text-[2.375em] sm:text-[4.125em]">
            <div class="h-6 sm:h-[0.62em] relative overflow-hidden left-[1.8px] sm:left-[3.06px]">
                <div class="absolute text-cyan-400 font-extrabold animate-glitch1">От стартапа</div>                
                <div class="left-[1.21px] sm:left-[2.04px] absolute text-lime-400 font-extrabold animate-glitch1">От стартапа</div>
                <div class="left-[4.23px] sm:left-[7.13px] absolute text-fuchsia-600 font-extrabold animate-glitch1">От стартапа</div>
                <div class="left-[2.41px] sm:left-[4.08px] absolute text-white font-extrabold animate-glitch1">От стартапа</div>
            </div>
            <div class="h-4 sm:h-[0.42em] relative m-0 overflow-hidden left-[3px] sm:left-[5px]">
                <div class="-top-6 sm:-top-[0.62em] absolute text-cyan-400 font-extrabold animate-glitch1">От стартапа </div>
                <div class="left-[1.21px] sm:left-[2.04px] -top-6 sm:-top-[0.62em] absolute text-lime-400 font-extrabold animate-glitch1">От стартапа </div>
                <div class="left-[4.23px] sm:left-[7.13px] -top-6 sm:-top-[0.62em] absolute text-fuchsia-600 font-extrabold animate-glitch1">От стартапа </div>
                <div class="left-[2.41px] sm:left-[4.08px] -top-6 sm:-top-[0.62em] absolute text-white font-extrabold animate-glitch1">От стартапа </div>
            </div>
            <div class="h-3.5 sm:h-[0.36em] relative m-0 overflow-hidden">
                <div class="-top-10 sm:-top-[1.045em] absolute text-cyan-400 font-extrabold animate-glitch1">От стартапа</div>
                <div class="left-[1.21px] sm:left-[2.04px] -top-10 sm:-top-[1.045em] absolute text-lime-400 font-extrabold animate-glitch1">От стартапа</div>
                <div class="left-[4.23px] sm:left-[7.13px] -top-10 sm:-top-[1.045em] absolute text-fuchsia-600 font-extrabold animate-glitch1">От стартапа </div>
                <div class="left-[2.41px] sm:left-[4.08px] -top-10 sm:-top-[1.045em] absolute text-white font-extrabold animate-glitch1">От стартапа </div>
            </div>
          </div>
          <div class="-mt-4 ml-4 sm:ml-[0.4em] sm:-mt-[0.4em] text-[2.375em] sm:text-[4.125em]">
            <div class="h-6 sm:h-[0.62em] relative overflow-hidden left-[1.8px] sm:left-[3.06px]">
                <div class="left-[-0px] absolute text-cyan-400 font-extrabold animate-glitch2">до единорога</div>
                <div class="left-[1.21px] sm:left-[2.04px] absolute text-lime-400 font-extrabold animate-glitch2">до единорога</div>
                <div class="left-[4.23px] sm:left-[7.13px] absolute text-fuchsia-600 font-extrabold animate-glitch2">до единорога</div>
                <div class="left-[2.41px] sm:left-[4.08px] absolute text-white font-extrabold animate-glitch2">до единорога</div>
            </div>
            <div class="h-4 sm:h-[0.42em] left-[3px] sm:left-[5px] relative overflow-hidden">
                <div class="-top-6 sm:-top-[0.62em] absolute text-cyan-400 font-extrabold animate-glitch2">до единорога</div>
                <div class="left-[1.21px] sm:left-[2.04px] -top-6 sm:-top-[0.62em] absolute text-lime-400 font-extrabold animate-glitch2">до единорога</div>
                <div class="left-[4.23px] sm:left-[7.13px] -top-6 sm:-top-[0.62em] absolute text-fuchsia-600 font-extrabold animate-glitch2">до единорога</div>
                <div class="left-[2.41px] sm:left-[4.08px] -top-6 sm:-top-[0.62em] absolute text-white font-extrabold animate-glitch2">до единорога</div>
            </div>
            <div class="h-3.5 sm:h-[0.36em] relative overflow-hidden">
                <div class="-top-10 sm:-top-[1.045em] absolute text-cyan-400 font-extrabold animate-glitch2">до единорога</div>
                <div class="left-[1.21px] sm:left-[2.04px] -top-10 sm:-top-[1.045em] absolute text-lime-400 font-extrabold animate-glitch2">до единорога</div>
                <div class="left-[4.23px] sm:left-[7.13px] -top-10 sm:-top-[1.045em] absolute text-fuchsia-600 font-extrabold animate-glitch2">до единорога</div>
                <div class="left-[2.41px] sm:left-[4.08px] -top-10 sm:-top-[1.045em] absolute text-white font-extrabold animate-glitch2">до единорога</div>
            </div>
          </div>
          <div class="unicorn mt-auto">
            <img src="/assets/images/unicorn.png" alt="Unicorn!" />
          </div>
          <div class="w-[16.875em] sm:w-[28.625em] h-[2.75em] sm:h-[4.625em] px-20 py-3 sm:py-5 mx-auto bg-lime-400 rounded-md justify-center items-center inline-flex cursor-pointer" @click="currentStage=stages[0]">
              <span class="text-zinc-900 text-lg sm:text-3xl font-semibold">Начать игру</span>
          </div>
        </div>
        <template v-else-if="!win && !game_over">
          <div class="stage w-full h-full max-h-[43em] relative sm:pt-4 sm:pb-1 pt-1 flex flex-col" :class="'stage-' + currentStage.n">
            <div class="text-white sm:text-[1.75em] px-4 sm:pl-8 sm:pr-4 font-extrabold leading-[0.9]" v-html="currentStage.q" />
            <img :src="currentStage.image.src" class="mt-auto pointer-events-none" />
            <div class="flex flex-col gap-2 px-4 sm:px-8 sm:gap-3 grow">
              <div v-for="answer in currentStage.a" class="p-2 sm:py-5 sm:px-2 bg-pink-600 rounded-[0.625em] flex-col justify-center items-center gap-0.5 inline-flex grow min-h-[3em] sm:min-h-[4em] cursor-pointer" @click="changeStep(answer.step, answer.delta, answer.effect)">
                <p class="text-center text-white sm:text-[1.5625em] font-medium sm:font-semibold leading-none"  v-html="answer.title" />
                <p class="text-center text-white text-xs sm:text-lg font-light leading-none sm:leading-tight" v-html="answer.description" />
              </div>
            </div>
          </div>
        </template>
        <template v-else-if="win">
          <div class="stage w-full h-full max-h-[43em] relative sm:pt-4 py-1 flex flex-col win">
            <p class="text-lime-400 text-3xl sm:text-[3.5625em] sm:leading-tight px-4 sm:px-8 font-extrabold">Поздравляем!</p>
            <div class="text-white text-lg sm:text-[2em] px-4 sm:px-8 font-extrabold leading-[0.8]">
              Вам могут позавидовать многие предприниматели
            </div>
            <img src='/assets/images/win.png' alt="You win!" />
            <p class="text-white text-xs sm:text-[1.25em] px-3 sm:px-8 font-light sm:font-medium leading-[0.9] mb-2 sm:mb-3">Хотите найти более быстрый способ победить? Локализуйтесь в <span class="text-lime-400 font-medium sm:font-bold">Коворкинге 2.0</span>.<br/><br/>Это не только рабочие места для вашей команды, но и доступ к комьюнити, нетворкинг и возможности резидента “Сколково”для вашего проекта! Записать вас на бесплатный тестовый день?</p>
            <a href="https://hackspace.sk.ru/?utm_source=Game_IN&utm_medium=none&utm_campaign=win" target="_blank" class="p-2 sm:p-5 mx-4 sm:mx-8 mb-1 bg-pink-600 rounded-[0.625em] flex-col justify-center items-center gap-0.5 inline-flex min-h-[3em] sm:min-h-[4em] mt-auto">
              <p class="text-white sm:text-[1.625em] font-medium sm:font-semibold leading-none">Записаться на тестовый день?</p>
            </a>
          </div>
        </template>
        <template v-else-if="game_over">
          <div class="stage w-full h-full max-h-[43em] relative sm:pt-4 py-1 flex flex-col game_over">
            <p class="text-white sm:text-[2.5em] px-4 sm:px-8 font-extrabold leading-[0.9]">
              К сожалению, вам не удалось достичь оценки в<span class="text-lime-400">&nbsp;$1&nbsp;млн</span>
            </p>
            <img src='/assets/images/game_over.png' alt="Game over!" />
            <div class="p-2 sm:p-5 mx-4 sm:mx-8 mb-3 bg-lime-400 rounded-[0.625em] flex-col justify-center items-center gap-0.5 inline-flex min-h-[2.6em] sm:min-h-[4em] cursor-pointer" @click="currentStage = stages[0]; game_over = false; balance = defaultBalance">
              <p class="sm:text-[1.625em] font-medium sm:font-semibold leading-none">Попробовать снова</p>
            </div>
            <p class="text-white text-sm sm:text-[1.25em] font-light sm:font-medium leading-[0.9] px-3 sm:pl-8 sm:pr-10 mb-3 sm:mt-3 sm:mb-6">Не расстраивайтесь! Чтобы получить больше возможностей для развития стартапов, приходите на тестовый день в <span class="text-lime-400">Коворкинг 2.0</span>.<br/><br/>У нас можно не просто работать над проектом, но и&nbsp;найти полезные связи, учиться, посещать бизнес-мероприятия — и&nbsp;не&nbsp;только!</p>

            <a href="https://hackspace.sk.ru/?utm_source=Game_IN&utm_medium=none&utm_campaign=lose" target="_blank" class="p-2 sm:p-5 mx-4 sm:mx-8 mb-1 bg-pink-600 rounded-[0.625em] flex-col justify-center items-center gap-0.5 inline-flex min-h-[2.6em] sm:min-h-[4em]">
              <p class="text-white sm:text-[1.625em] font-medium sm:font-semibold leading-none">Записаться на тестовый день?</p>
            </a>
          </div>
        </template>
        <div :style="{opacity: currentStage ? '1' : '0'}" class="meter flex items-center h-[2em] pl-4 pr-3 sm:pl-8 sm:pr-7" >
          <div class="w-full h-0.5 bg-white rounded-[1em] shadow relative">
            <div class="h-0.5 left-0 top-0 absolute bg-lime-400 rounded-[1em] shadow" :style="{width: stageMeter + '%'}"></div>
          </div>
          <img src="/assets/images/stage.png" alt="Этап" class="w-[2em] sm:w-[2.5625em] h-auto ml-2"/>
        </div>
      </div>
    </div>
    <div class="logo mt-auto mb-4 mx-auto sm:mr-4 z-20 sm:absolute sm:bottom-4 sm:right-4">
      <a href="https://sk.ru/technopark/" target="_blank">
        <img src="/logo.svg" alt="Sk Технопарк"/>
      </a> 
    </div>
  </div>
</template>

<script>
export default {
  data() {
    let glitchInterval1, glitchInterval2
    return {
      stages: [ 
        {n: 0, q:"У вас есть идея, но нет<br/>денег — надо решить,<br/>кто из знакомых сможет вложиться в вас?", a: [{title:"Знакомый из универа", description:"Он не особо понимает в чем дело, но у него богатые родители", delta:100000, effect:"text1", step:1}, {title:"Отец", description:"У него есть свой бизнес, он поймет", delta:100, effect:"текст2", step:1 }, {title:"Бывший одноклассник", description:"Он вроде инвестирует в криптовалюты,<br/>может и&nbsp;в&nbsp;меня поверит", delta:-1000, effect:"текст3", step:1 }]},
        {n: 1, q:"Ну вот, хоть какие-то деньги есть. Теперь надо подумать, где локализовать офис", a: [{title:"Технопарк «Сколково»", description:"", delta:100000, effect:"", step: 1}, {title:"Попробуем снять небольшой офис в центре", description:"", delta:100, effect:"", step: 2}, {title:"А зачем офис?", description:"Зарегистрирую компанию на какой-то юр адрес, а работать будем удаленно", delta:-1000, effect:"", step: 2 }]},
        {n: 2, q:"Сегодня ваш первый день в Технопарке «Сколково».<br/>Что будете делать?", a: [{title:"Выложу фото в соцсети с отметкой", description:"", delta:100000, effect:"", step: 1}, {title:"Пойду познакомлюсь с соседями — говорят, тут крутой нетворкинг", description:"", delta:100, effect:"", step: 1}, {title:"Мой новый дом!<br/>Я больше никуда не выйду отсюда", description:"", delta:-1000, effect:"", step: 1}]},
        {n: 3, q:"Готов MVP. Что будете с&nbsp;ним делать?", a: [{title:"Покажу на всякий случай профессионалам", description:"", delta:100000, effect:"", step: 1}, {title:"Ну тут сразу видны недочеты, пойдем на доработку", description:"", delta:100, effect:"", step: 1}, {title:"Запустим маленькую партию", description:"", delta:-1000, effect:"", step: 1}]},
        {n: 4, q:"Тут в соцсетях запостили приглашение поучаствовать в&nbsp;акселераторе.<br/>Что же выбрать?", a: [{title:"Сяду, подготовлюсь", description:"", delta:100000, effect:"", step: 1}, {title:"Ладно, подамся, но напишу<br/>заявку кое-как", description:"", delta:100, effect:"", step: 1}, {title:"Не буду тратить свое время", description:"", delta:-1000, effect:"", step: 2}]},
        {n: 5, q:"Вы повысили экспертизу и&nbsp;прокачали стартап. Пора искать специалистов для реализации. Что будете делать?", a: [{title:"Зарегаюсь и&nbsp;размещу заказ на&nbsp;Sk&nbsp;RND&nbsp;Market", description:"", delta:100000, effect:"", step: 1}, {title:"Буду искать исполнителей в&nbsp;интернете", description:"", delta:100, effect:"", step: 1}, {title:"Привлеку знакомых, может, удастся сделать дешевле", description:"", delta:-1000, effect:"", step: 1}]},
        {n: 6, q:"Вы тщательно исследовали рынок и&nbsp;задумались над тем, чтобы учесть дополнительные потребностей аудитории.<br/>Что решите?", a: [{title:"Разрабатываем новые фичи", description:"Чем больше «болей» клиентов закроет наш продукт, тем лучше.", delta:100000, effect:"", step: 1}, {title:"Серьезные доработки отбросят нас на несколько шагов назад", description:"Но что-то из пожеланий аудитории все же учтем", delta:100, effect:"", step: 1}, {title:"У нас классный продукт", description:"Не будем ничего менять", delta:-1000, effect:"", step: 1}]},
        {n: 7, q:"Ваш друг — он тоже в вашей команде — решил позвать друга в компанию. Не сказать, что его товарищ — суперспециалист,<br/>но&nbsp;человек хороший. Берем?", a: [{title:"Конечно!", description:"Надо помогать всем!", delta:100000, effect:"", step: 1}, {title:"Мимо!", description:"Не бывает профессии «хороший человек»", delta:100, effect:"", step: 1}, {title:"Отправим на тестовый период", description:"Вдруг он проявит себя?", delta:-1000, effect:"", step: 1}]},
        {n: 8, q:"Вы не очень здорово пообщались с&nbsp;конкурентом, и&nbsp;он «натравил» на вас проверку. Пришла налоговая и&nbsp;попросила отчетность за все периоды работы. Слава богу вашей компании меньше года… ", a: [{title:"А чего мне бояться, у меня все прозрачно", description:"", delta:100000, effect:"", step: 1}, {title:"Сейчас главное выиграть время", description:"Заполню какую-никакую декларацию, потом найду специалистов, чтобы помогли с уточненкой", delta:100, effect:"", step: 1}, {title:"Попробую наладить отношения с&nbsp;конкурентом", description:"Может, поможет отвадить налоговую", delta:-1000, effect:"", step: 1}]},
        {n: 9, q:"Ваши старания начинают видеть: вы получаете приглашение на Startup&nbsp;Village в&nbsp;качестве спикера.<br/>Что будете делать?", a: [{title:"Отличная возможность рассказать про мой продукт", description:"Подготовлю презентацию так, чтобы в&nbsp;ней было и&nbsp;про компанию, и про тему панели", delta:100000, effect:"", step: 1}, {title:"Ну ладно, в целом можно сходить", description:"Поболтаю с умными людьми, может кого встречу", delta:100, effect:"", step: 1}, {title:"Это что, надо отменять встречу в&nbsp;этот день?", description:"Не поеду никуда!", delta:-1000, effect:"", step: 1}]},
        {n: 10, q:"Ой-ой! Назревает ваш первый скандал: кто-то слил в&nbsp;социальные сети, как ваш сотрудник нелестно отзывается о&nbsp;продукте", a: [{title:"Ну и что?", description:"Любой пиар есть пиар! Будем делать вид, что так и&nbsp;должно быть", delta:100000, effect:"", step: 1}, {title:"Надо срочно разослать комментарии в&nbsp;СМИ", description:"Покажем, что нам небезразлична эта ситуация", delta:100, effect:"", step: 1}, {title:"Не было такого!", description:"Кто может обо мне плохо говорить?", delta:-1000, effect:"", step: 1}]},
        {n: 11, q:"На одном из мероприятий вы познакомились с&nbsp;потенциальными инвесторами, с&nbsp;первых слов им интересен проект. Надо запланировать полноценный питч с&nbsp;ними", a: [{title:"Созвонимся по видеосвязи", description:"Мы все же в&nbsp;21&nbsp;веке живем", delta:100000, effect:"", step: 1}, {title:"Приглашу всех в&nbsp;модный ресторан", description:"Чтобы впечатлить выбором", delta:100, effect:"", step: 1}, {title:"Проведу встречу", description:"В Коворкинге&nbsp;2.0 в&nbsp;Технопарке&nbsp;“Сколково”", delta:-1000, effect:"", step: 1}]},
        {n: 12, q:"Ура! Вы получили первые крупные инвестиции", a: [{title:"Вложусь в&nbsp;технологии для продукта", description:"", delta:100000, effect:"", step: 1}, {title:"Увеличу оборот", description:"", delta:100, effect:"", step: 1}, {title:"Усилю маркетинг", description:"", delta:-1000, effect:"", step: 1}]},
        {n: 13, q:"Компания растет — пора нанимать новых членов команды. Кого будете искать в&nbsp;первую очередь?", a: [{title:"HR", description:"", delta:100000, effect:"", step: 1}, {title:"Sales", description:"", delta:100, effect:"", step: 1}, {title:"Ассистентку для себя", description:"Ну а что?", delta:-1000, effect:"", step: 1}]},
        {n: 14, q:"Количество недовольных клиентов растет — одна из партий оказалась с&nbsp;браком.<br/>Что будете делать?", a: [{title:"Попрошу Customer Support отработать каждого клиента", description:"", delta:100000, effect:"", step: 1}, {title:"Быстро снимаем с&nbsp;продажи эту партию, извиняемся перед покупателями и лично даем комментарии в СМИ", description:"", delta:100, effect:"", step: 1}, {title:"Сейчас быстро почистим отзывы и&nbsp;зальем положительных", description:"", delta:-1000, effect:"", step: 1}]},
        {n: 15, q:"Скандал утих, но имидж компании серьезно пострадал, и&nbsp;вы&nbsp;задумались о&nbsp;ребрендинге. Какую стратегию выберете?", a: [{title:"Найму топового маркетолога и хорошенько вложусь в&nbsp;ребрендинг", description:"", delta:100000, effect:"", step: 1}, {title:"Сделаю все по-быстрому, инхаус", description:"За месяц точно управлюсь", delta:100, effect:"", step: 1}, {title:"Нет, ребрендинг — это дорого", description:"Все как-нибудь само затихнет и&nbsp;забудется", delta:-1000, effect:"", step: 1}]},
        {n: 16, q:"К вам пришел знакомый и&nbsp;предлагает сделать коллаборацию. Звучит классно, и&nbsp;идею он запитчил неплохо.<br/>Мы в деле?", a: [{title:"Я за любую инициативу!", description:"", delta:100000, effect:"end", step: 1}, {title:"Ой нет, потом будет много мороки с&nbsp;дележкой, а&nbsp;я&nbsp;не люблю такие разговоры", description:"", delta:100, effect:"end", step: 1}, {title:"Обсужу все внутри и&nbsp;проведу дополнительную встречу с&nbsp;этим авантюристом", description:"", delta:-1000, effect:"end", step: 1}]},
      ],
      currentStage: null,
      balance: 100,
      defaultBalance: 100,
      game_over: false,
      win: false,
    }
  },
  methods:{
    changeAnimationTime(els) {
      els.forEach((el) => {
        let duration = Math.random()/8 + 0.02;
        duration = duration < 0.1 ? duration : 0
        el.style.setProperty('--animation-time', duration +'s')
      })
    },
    initGlitches() {
      this.glitchInterval1 = setInterval(this.changeAnimationTime, 1000, document.querySelectorAll(".animate-glitch1"));
      this.glitchInterval2 = setInterval(this.changeAnimationTime, 1200, document.querySelectorAll(".animate-glitch2"));
    },
    changeStep(step, delta, effect = false) {
      this.balance += delta
      if (this.balance <= 0) return this.game_over = true
      if (effect) {
        switch (effect) {
          case "end":
            if (this.balance <= 1000000) return this.game_over = true
            return this.win = true
        }
      }
      this.currentStage = this.stages[this.currentStage.n + step]
    }
  },
  watch: {
    // whenever question changes, this function will run
    currentStage(stage) {
      if (stage) {
        clearInterval(this.glitchInterval1)
        clearInterval(this.glitchInterval2)
      }
    }
  },
  computed: {
    balanceAsCurrency() {
      if (typeof this.balance !== 'number') {
        return this.balance
      }
      var formatter = new Intl.NumberFormat('ru-RU', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      })
      return formatter.format(this.balance)
    },
    stageMeter() {
      if (this.game_over || this.win || !this.currentStage) return 100
      return (this.currentStage.n)*100 / this.stages.length
    }
  },
  created() {
    this.stages.forEach((stage, i) => {
      stage.image = new Image()
      stage.image.src = '/images/stages/' + i + '.png'})
  },
  mounted() {
    this.initGlitches()
    window.scrollTo(0, 1)
  }
}
</script>

<style lang="postcss">

:root {
  --animation-time: .1s;
}

.animate-glitch1 {
  animation: glitch var(--animation-time) 1s alternate infinite;
}

.animate-glitch2 {
  animation: glitch var(--animation-time) 1.2s alternate infinite;
}

@keyframes glitch {
  0% { transform: translateX(2px) }
  100% { transform: translateX(-1px) }
}

body {
  background: linear-gradient(180deg, #000000 0%, #1D1D26 100%);
  font-family: Manrope, sans-serif;
}

.min-h-screen {
  min-height: 100vh; 
  min-height: 100dvh;
}

.sky-above {
  background: url("assets/images/stars.svg") bottom center no-repeat;
  background-size: cover;
  transform: translateY(-67%);
}

.law-within {
  background: url("assets/images/city.svg") center center no-repeat;
  background-size: cover;
}

.confetti {
  background: url("assets/images/conf.svg") bottom center no-repeat;
  background-size: cover;
}

.balance {
  border-radius: 50px;
  border: 1px solid #FFF;
  background: linear-gradient(180deg, #431D41 0%, #250823 100%);
  box-shadow: 0px 0px 40px 0px rgba(255, 255, 255, 0.80), 0px 0px 10px 0px rgba(255, 255, 255, 0.70);
}

.game > div {
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

.meter > div {
  box-shadow: 0px 0px 10px 0px white, 0px 0px 5px 0px white;
}

.meter > div > div {
  box-shadow: 0px 0px 10px 0px #B4FF0A, 0px 0px 5px 0px #B4FF0A;
}

.stage-2 img {
  margin-bottom: -1em;
}

.stage-4 img {
  margin-top: -2em!important;
}

.stage-12 img {
  margin-top: -1em;
}


@media screen and (min-width:640px){
  .stage-2 img {
    margin-bottom: -2em;
  }

  .stage-4 img {
    margin-top: -3em!important;
  }

  .stage-6 img {
    margin-top: -2em;
  }

  .stage-7 img {
    margin-top: -1em;
  }

  .stage-8 img {
    margin-top: .5em;
  }

  .stage-9 img {
    margin-top: -1.5em;
  }

  .stage-10 img {
    margin-top: -1.8em;
  }

  .game_over img {
    margin-top: -1.5em;
  }
}

</style>