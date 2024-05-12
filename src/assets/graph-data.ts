export const graphData = {
  nodes: [
    //
    { id: 'logic-elem',    label: 'Элементы\nматлогики' },
    //
    { id: 'set-in',        label: '\\text{Set}, \\in' },
    //
    { id: 'subset',        label: '\\subset' },
    //
    { id: 'extension-ax',  label: 'Аксиома\nобъёмности' },
    //
    { id: 'abstract-not',  label: '\\{x \\mid \\ldots\\}' },
    //
    { id: 'subset-axs',    label: 'Аксиомы\nподмножества' },
    { id: 'power-set-ax',  label: 'Аксиома множества\nвсех подмножеств' },
    { id: 'pair-set-ax',   label: 'Аксиома\nпары' },
    //
    { id: 'th-every-set',  label: 'Множество\nвсех множеств' },
    { id: 'nothing-ax',    label: 'Аксиома пустого\nмножества' },
    { id: 'set-diff',      label: 'Разница\nмножеств' },
    { id: 'set-union-ax',  label: 'Аксиома\nобъединения' },
    { id: 'ordered-pair',  label: 'Упорядоченная\nпара' },
    //
    { id: 'set-intersect', label: 'Пересечение\nмножеств' },
    { id: 'cart-product',  label: 'Декартово\nпроизведение' },
    //
    { id: 'set-algebra',   label: 'Алгебра\nмножеств' },
    { id: 'relations',     label: 'Отношения' },
    { id: 'set-partition', label: 'Разбиение\nмножества' },
    //
    { id: 'functions',     label: 'Функции' },
    { id: 'injective-rel', label: 'Инъективные\nотношения' },
    { id: 'rel-inverse',   label: 'Обратное\nотношение' },
    { id: 'rel-comp',      label: 'Композиция\nотношений' },
    { id: 'rel-image',     label: 'Образ\nотношения' },
    { id: 'rel-restrict',  label: 'Сужение\nотношения' },
    { id: 'rel-kinds',     label: 'Типы отношений' },
    //
    { id: 'all-funcs-set', label: 'Множество\nвсех функций' },
    { id: 'rel-inv-props', label: 'Свойства обратных\nотношений' },
    { id: 'choice-ax-1',   label: 'Аксиома\nвыбора I' },
    { id: 'func-comp',     label: 'Композиция\nфункций' },
    { id: 'rel-comp-inv',  label: 'Обратное\nк композиции' },
    { id: 'equiv-rel',     label: 'Отношение\nэквивалентности' },
    { id: 'linear-order',  label: 'Линейный\nпорядок' },
    //
    { id: 'inf-cart-prod', label: 'Бесконечное\nпрямое произведение' },
    { id: 'comp-with-inv', label: 'Композиция функции\nс обратным' },
    { id: 'image-props',   label: 'Образ\nи операции' },
    { id: 'equiv-class',   label: 'Класс\nэквивалентности' },
    //
    { id: 'choice-ax-2',   label: 'Аксиома\nвыбора II' },
    { id: 'th-inv-func',   label: 'Существование\nобратной функции' },
    { id: 'quotient-set',  label: 'Фактормножество' },
    //
    { id: 'func-quotient', label: 'Действие функций\nна классы эквивалентности' },
  ],
  edges: [
    { from: 'set-in',        to: ['logic-elem'] },
    { from: 'subset',        to: ['set-in'] },
    { from: 'extension-ax',  to: ['subset'] },
    { from: 'abstract-not',  to: ['extension-ax'] },
    { from: 'pair-set-ax',   to: ['abstract-not'] },
    { from: 'power-set-ax',  to: ['abstract-not'] },
    { from: 'subset-axs',    to: ['abstract-not'] },
    { from: 'set-union-ax',  to: ['pair-set-ax'] },
    { from: 'ordered-pair',  to: ['pair-set-ax'] },
    { from: 'nothing-ax',    to: ['subset-axs'] },
    { from: 'set-diff',      to: ['subset-axs'] },
    { from: 'th-every-set',  to: ['subset-axs'] },
    { from: 'set-intersect', to: ['nothing-ax'] },
    { from: 'set-algebra',   to: ['set-union-ax', 'set-intersect', 'set-diff', 'power-set-ax'] },
    { from: 'cart-product',  to: ['ordered-pair', 'power-set-ax', 'set-union-ax', 'subset-axs' ] },
    { from: 'relations',     to: ['cart-product'] },
    { from: 'set-partition', to: ['set-intersect', 'power-set-ax'] },
    { from: 'functions',     to: ['relations'] },
    { from: 'injective-rel', to: ['relations'] },
    { from: 'rel-inverse',   to: ['relations'] },
    { from: 'rel-comp',      to: ['relations'] },
    { from: 'rel-restrict',  to: ['relations'] },
    { from: 'rel-image',     to: ['relations'] },
    { from: 'rel-inv-props', to: ['functions', 'injective-rel', 'rel-inverse'] },
    { from: 'comp-with-inv', to: ['rel-inv-props'] },
    { from: 'func-comp',     to: ['functions', 'rel-comp'] },
    { from: 'rel-comp-inv',  to: ['rel-inverse', 'rel-comp'] },
    { from: 'choice-ax-1',   to: ['functions'] },
    { from: 'all-funcs-set', to: ['functions'] },
    { from: 'inf-cart-prod', to: ['all-funcs-set'] },
    { from: 'choice-ax-2',   to: ['inf-cart-prod'] },
    { from: 'image-props',   to: ['rel-image', 'rel-inv-props', 'set-diff', 'set-intersect'] },
    { from: 'th-inv-func',   to: ['nothing-ax', 'set-diff', 'comp-with-inv', 'choice-ax-1', 'func-comp'] },
    { from: 'rel-kinds',     to: ['relations'] },
    { from: 'equiv-rel',     to: ['rel-kinds'] },
    { from: 'linear-order',  to: ['rel-kinds'] },
    { from: 'equiv-class',   to: ['equiv-rel'] },
    { from: 'quotient-set',  to: ['equiv-class', 'set-partition'] },
    { from: 'func-quotient', to: ['quotient-set'] },
  ],
  articles: {
    'logic-elem': [
      'На данный момент этот узел является самым нижним в графе, хотя под ним всё же возможно поместить блок, посвящённый матлогике',
      'Из-за этого некоторые концепции и понятия матлогики придётся ввести на интуитивном уровне',
      '',
      '',
      '',
      '<b>&#8227; Знак равенства $(=)$</b>',
      'Этот знак обозначает абсолютную неотличимось объектов и переменных, для которых он выполняется',
      'В частности, любая переменная $(x)$ равна самой себе: $(x = x)$',
      'А вот <i>неотличимость</i> означает, что если $(x = y)$, то в любой формуле, использующей $(x)$, можно заменить $(x)$ на $(y)$, и смысл формулы не поменяется',
    ],
    'set-in': [
      '<b>&#8227; Strict</b>',
      'Понятие множества будем вводить в соответствии с Аксиоматической Теорией Множеств Цермело-Френкеля (ZF)',
      'В ней множества задаются с помощью аксиом',
      'Вообще говоря, для определения множеств как формальной теории достаточно только нескольких предикатных символов: двуместных $(=)$ и $(\\in)$ (\"принадлежит\") и одноместного $(\\mathbb{S})$ (\"является множеством\")',
      'Однако чтобы не писать во всех выражениях, что все переменные являются множествами, предикат $(\\mathbb{S})$ можно опустить и считать, что существуют только объекты, для которых он верен',
      'В противном случае, например, выражение $(\\exists A \\forall x (x \\notin A))$ пришлось бы записывать как $(\\exists A (\\mathbb{S}(A) \\land \\forall x (\\mathbb{S}(x) \\to x \\notin A)))$',
      'Итого, ZF &mdash; формальная теория в сигнатуре $(\\lang ; ; =, \\in \\rang)$',
      'Аксиомы будут перечислены по-отдельности в следующих узлах (их вполне можно было бы задать сразу, однако для многих из них удобнее сначала ввести несколько вспомогательных определений)',
      '',
      '<b>&#8227; Informal</b>',
      'На базовом уровне множества можно понимать как коллекции каких-нибудь объектов (например, монет), лежащие в коробках',
      'Поскольку обычно не важно, сколько копий монет в коллекции (важно, <i>присутствует ли</i> конкретная монета в коллекции), множества считаются равными, если в них присутствуют одни и те же элементы',
      'Запись $(x \\in A)$ читается как \"$(x)$ принадлежит $(A)$\" или \"$(x)$ является элементом $(A)$\"',
      '',
      'На самом деле, для целей математики возможно отбросить, из чего именно собрана коллекция, и рассматривать только пустые коробки, вкладывая их друг в друга',
      'Например, таким множеством будет коробка, в которой лежит пустая коробка и ещё коробка с пустой коробкой внутри: $(\\tiny \\boxed{\\boxed{} \\ \\boxed{\\boxed{}}})$',
      'Оказывается, что обычные числа ($(4)$, $(-7)$, $(\\frac{2}{5})$, $(\\sqrt{3})$, $(\\pi)$, $(i)$ и др.) можно определить всего лишь с помощью этой абстракции пустых коробок, но для них потребуются более сложные конструкции из множеств',
      'В частности, коробки можно вкладывать друг в друга какое угодно <i>конечное</i> количество раз, а так же коробки могут содержать <i>бесконечное</i> количество коробок внутри',
      'Например, есть множество, являющееся коробкой, в которой лежат пустая коробка, пустая коробка в коробке, пустая коробка в коробке в коробке (то есть в двух коробках), пустая коробка в трёх коробках и т.д.: $(\\tiny \\boxed{\\boxed{} \\ \\boxed{\\boxed{}} \\ \\boxed{\\boxed{\\boxed{}}} \\ \\boxed{\\boxed{\\boxed{\\boxed{}}}} \\ \\huge ...})$',
    ],
    'subset': [
      '$(A \\subset B \\xLeftrightarrow{def} \\forall x (x \\in A \\to x \\in B))$',
    ],
    'extension-ax': [
      'Аксиома формулируется следующим образом:',
      '$(\\forall A \\forall B (\\forall x (x \\in A \\leftrightarrow x \\in B) \\to A = B))$',
      '',
      '<b>&#8227; О чём она?</b>',
      'Она сообщает достаточное условие для равенства множеств: они должны иметь одинаковый состав',
      'А вот необходимое условие будет следовать из свойств самого знака равенства:',
      '$(\\forall A \\forall B (A = B \\to \\forall x (x \\in A \\leftrightarrow x \\in B)))$',
      'Эта формула будет верна, поскольку в случае равенства двух переменных их можно заменять в формуле друг на друга, а значит:',
      '$(\\forall A \\forall B (A = B \\to \\forall x (x \\in A \\leftrightarrow x \\in B)) \\iff)$',
      '$(\\forall A \\forall B (A = B \\to \\forall x (x \\in A \\leftrightarrow x \\in A)) \\iff)$',
      '$(\\forall A \\forall B (A = B \\to \\forall x (True)) \\iff)$',
      '$(\\forall A \\forall B (A = B \\to True) \\iff)$',
      '$(\\forall A \\forall B (True) \\iff)$',
      '$(True)$',
      '',
      'Таким образом, импликацию в аксиоме можно заменить на эквивалентность:',
      '$(\\forall A \\forall B (\\forall x (x \\in A \\leftrightarrow x \\in B) \\leftrightarrow A = B))$',
      'Также средюю часть формулы можно переписать, использую знак подмножества:',
      '$(\\forall A \\forall B (\\forall x (x \\in A \\leftrightarrow x \\in B) \\leftrightarrow A = B) \\iff)$',
      '$(\\forall A \\forall B (\\forall x (x \\in A \\to x \\in B \\land x \\in A \\gets x \\in B) \\leftrightarrow A = B) \\iff)$',
      '$(\\forall A \\forall B ((\\forall x (x \\in A \\to x \\in B) \\land \\forall x (x \\in A \\gets x \\in B)) \\leftrightarrow A = B) \\iff)$',
      '$(\\forall A \\forall B ((A \\subset B \\land A \\supset B) \\leftrightarrow A = B))$',
      'Благодаря последней формуле можно дать следующее <i>наивное</i> определение равенства множеств:',
      '$(A = B \\xLeftrightarrow{def} A \\subset B \\land A \\supset B)$',
      '',
      '<b>&#8227; Зачем нужна?</b>',
      'Она говорит, что множество полностью определяется своим составом',
      'Вспоминая смысл знака равенства, можно задаться вопросом, почему эта аксиома не будет выполняться автоматически?',
      'Ведь для множеств был определён всего один-единственный предикат (предикат принадлежности), и если для множеств $(A)$ и $(B)$ левая часть аксомы верна ($(\\forall x: x \\in A \\leftrightarrow x \\in B)$), то это значит, что во всех случаях/контекстах/формулах они будут одинаково \"отвечать\" на вопрос, принадлежит ли им какой-то конкретный элемент, а значит, их можно будет заменять друг на друга без изменения смысла формул; то есть, они будут равны',
      '',
      'Однако в этом рассуждении можно найти две проблемы:',
      '1. То, что предикат принадлежности &mdash; единственный, нигде не было закреплено; и эта гарантия как раз и предоставляется аксиомой объёмности',
      'Без неё возможно было бы ввести, например, предикат $(P(\\cdot))$ и рассмотреть ситуацию, при которой $(\\forall x: x \\in A \\leftrightarrow x \\in B)$ и при этом $(P(A) \\land \\lnot P(B))$',
      'Проводя аналогию с жизнью, множествам, как обычно, можно было бы сопоставить коробки с какими-то вещами, а в качестве $(P(X))$ взять предикат \"$(X)$ &mdash; коробка красного цвета\"',
      'В этом случае, положив в красную и синюю коробки одно и то же, их нельзя будет считать равными, так как у них будет ещё один отличающийся признак',
      '2. Левая часть аксиомы, на самом деле, рассматривает только то, какие элементы принадлежат двум множествам, но не учитывает, кому эти множества сами могут принадлежать',
      'Поэтому без аксиомы объёмности была бы возможна такая ситуация:',
      '$(\\forall x (x \\in A \\leftrightarrow x \\in B) \\land A \\in C \\land B \\notin C)$',
    ],
    'abstract-not': [
      'Часто для задания множества оказывается удобным метод <i>абстракции</i>',
      'В нём множество задаётся с помощью некоторого условия, которое должно выполняться для всех его элементов',
      'При этом используется следующая нотация: $(\\{x \\mid \\underline{\\quad} x \\underline{\\quad}\\})$ &mdash; множество всех таких объектов $(x)$, для которых выполняется условие $(\\underline{\\quad} x \\underline{\\quad})$',
      '',
      'Также нередко используются следующие сокращения:',
      '$(\\{x \\in A \\mid \\underline{\\quad} x \\underline{\\quad}\\})$ &mdash; для $(\\{x \\mid x \\in A \\land \\underline{\\quad} x \\underline{\\quad}\\})$, например, $(\\{x \\in \\N \\mid x>5 \\} = \\{x \\mid  x \\in \\N \\land x>5 \\} = \\{6,7,8,9,10,...\\})$',
      '$(\\{f(x) \\mid \\underline{\\quad} x \\underline{\\quad}\\})$ &mdash; для $(\\{y \\mid \\exists x: y=f(x) \\land \\underline{\\quad} x \\underline{\\quad}\\})$, например, $(\\{x^2 \\mid x \\in \\N \\} = \\{y \\mid \\exists x: y=x^2 \\land x \\in \\N\\} = \\{1,4,9,16,25,...\\})$',
      '',
      '<b>&#8227; Корректность нотации</b>',
      'Более формально, нотацию абстракции можно ввести так: если для некоторого <i>входного условия</i> $(\\underline{\\quad} x \\underline{\\quad})$ выполняется следующее высказывание: $(\\forall t_1 ... \\forall t_n \\exists B \\forall x (x \\in B \\leftrightarrow \\underline{\\quad} x \\underline{\\quad}))$, то для множества $(B)$ можно использовать такое обозначение: $(B = \\{x \\mid \\underline{\\quad} x \\underline{\\quad}\\})$',
      'Важным моментом здесь является то, что множество $(B)$ должно существовать',
      'Оказывается, что не для всех входных условий это будет верно',
      'Например, не существует множества, которое можно было бы обозначить как $(\\{x \\mid x \\notin x\\})$',
      '',
      'С другой стороны, если конструкция вида $(\\{x \\mid \\underline{\\quad} x \\underline{\\quad}\\})$ и будет соответствовать какому-то множеству, то ровно одному',
      'Так как если найдётся два таких множества $(A)$ и $(B)$, то:',
      '$(\\forall x (x \\in A \\leftrightarrow \\underline{\\quad} x \\underline{\\quad}) \\land \\forall x (x \\in B \\leftrightarrow \\underline{\\quad} x \\underline{\\quad}) \\iff)$',
      '$(\\forall x (x \\in A \\leftrightarrow \\underline{\\quad} x \\underline{\\quad} \\land x \\in B \\leftrightarrow \\underline{\\quad} x \\underline{\\quad}) \\Rightarrow)$',
      '$(\\forall x (x \\in A \\leftrightarrow x \\in B) \\iff)$',
      '$(A = B)$',
      'Таким образом, нотация абстракции позволяет также удобным образом вводить новые обозначения для различных конструкций из множеств (если, конечно, их существование гарантируется), так как единственность будет получаться автоматически',
    ],
    'pair-set-ax': [
      '$(\\forall u \\forall v \\exists \\{x \\mid x = u \\lor x = v\\} \\eqqcolon \\{u,v\\})$',
    ],
    'set-union-ax': [
      '$(\\forall A \\exists \\{x \\mid \\exists t : x \\in t \\land t \\in A\\} \\eqqcolon \\bigcup A)$',
      '',
      'Рассмотрим произвольные множества $(a)$ и $(b)$. Для них по аксиоме пары $(\\exists \\{a,b\\})$.',
      'Тогда по аксиоме объединения',
      '$(\\exists \\{x \\mid \\exists t : x \\in t \\land t \\in \\{a,b\\}\\} \\xLeftrightarrow{def})$',
      '$(\\exists \\{x \\mid \\exists t : x \\in t \\land t \\in \\{y \\mid y = a \\lor y = b\\}\\} \\xLeftrightarrow{def})$',
      '$(\\exists \\{x \\mid \\exists t : x \\in t \\land (t = a \\lor t = b)\\} \\iff)$',
      '$(\\exists \\{x \\mid \\exists t : x \\in t \\land t = a \\lor x \\in t \\land t = b\\} \\iff)$',
      '$(\\exists \\{x \\mid \\exists t : x \\in a \\lor x \\in b\\} \\iff)$',
      '$(\\exists \\{x \\mid x \\in a \\lor x \\in b\\} \\eqqcolon a \\cup b)$',
    ],
    'set-intersect': [
      '<b>Теорема.</b> $(\\forall A \\neq \\varnothing \\ \\exists \\{x \\mid \\forall t \\in A : x \\in t\\} \\eqqcolon \\bigcap A)$',
      '',
      'Согласно аксиомам подмножества для произвольных множеств $(a)$ и $(b)$',
      '$(\\exists \\{x \\in a \\mid x \\in b\\} \\xLeftrightarrow{def})$',
      '$(\\exists \\{x \\mid x \\in a \\land x \\in b\\} \\eqqcolon a \\cap b)$',
    ],
    'set-diff': [
      'Согласно аксиомам подмножества для произвольных множеств $(a)$ и $(b)$',
      '$(\\exists \\{x \\in a \\mid x \\notin b\\} \\xLeftrightarrow{def})$',
      '$(\\exists \\{x \\mid x \\in a \\land x \\notin b\\} \\eqqcolon a \\setminus b)$',
    ],
    'power-set-ax': [
      '$(\\forall A \\exists \\{x \\mid x \\subset A\\} \\eqqcolon \\mathcal{P}\\kern{-0.05em} A)$',
    ],
    'subset-axs': [
      'Здесь, на самом деле, будет задана не одна аксиома, а целый набор, причём бесконечный',
      'Эти аксиомы можно задать следующей схемой: для любой формулы $(\\underline{\\quad} x \\underline{\\quad})$ следующее высказывание будет аксиомой:',
      '$(\\forall A \\exists \\{x \\in A \\mid \\underline{\\quad} x \\underline{\\quad}\\})$',
      // '',
      // 'Эти аксиомы можно задать следующей схемой: для любой формулы $(\\Phi[t_1 ... t_n, x])$ (это обозначение можно понимать как некоторое выражение, в запись которого входят только переменные с именами $(t_1 ... t_n, x)$) следующее высказывание будет аксиомой:',
      // '$(\\forall t_1 ... \\forall t_n \\forall A \\exists B \\forall x (x \\in B \\leftrightarrow x \\in A \\land \\Phi[t_1 ... t_n, x]))$',
    ],
    'nothing-ax': [
      '$(\\exists \\{x \\mid x \\neq x\\} \\eqqcolon \\varnothing \\eqqcolon \\{\\})$',
      '',
      '<b>&#8227; О чём она?</b>',
      'Она гарантирует существование множества без элементов &mdash; <i>пустого множества</i>',
      'Её можно также сформулировать следующим образом:',
      '$(\\exists \\varnothing \\forall x (x \\notin \\varnothing))$',
      '',
      '<b>&#8227; Зачем нужна?</b>',
      'Заметим, что среди первых аксиом эта &mdash; единственная, в которой первым квантором идёт квантор существования',
      'Этот факт важен, поскольку, хоть в других аксиомах и утверждается сущестование какого-то одного множества, это всегда происходит с использованием какого-то другого множества: $(\\forall A \\exists \\ldots)$',
      'Без аксиомы пустого множества это привело бы к ситуации, при которой невозможно было бы с помощью аксиом доказать существование какого-то интересующего множества, посколько случай, когда множеств не существует вовсе, ничем другим аксиомам не противоречит',
      'В результате, именно эта аксиома говорит, что множества вообще существуют',
      '',
      'С другой стороны, аксиому не обязательно формулировать про существование именно пустого множества',
      'Она, в целом, могла бы иметь вид $(\\exists W (True))$, тогда существование пустого множества можно было бы доказать с помощью аксиомы подмножества $(\\exists \\{x \\in W \\mid x \\neq x\\})$',
    ],
    'th-every-set': [
      '<b>Теорема.</b> Не существует множества всех множеств:',
      '$(\\nexists S \\forall A (A \\in S))$',
      '',
      '<b>&#8227; Доказательство</b>',
      // 'Формулировка теоремы равносильна следующему: $(\\forall A \\exists B (B \\notin A))$',
      // 'То есть достаточно показать, что, взяв произвольное множество $(A)$, возможно найти $(B)$, которое ему не принадлежит',
      // 'Покажем, что, какое бы множество мы не взяли, оно не будет содержать все множества &mdash; а, конкретнее, для ',
      // '',
      // '',
      'Аксиомы подмножеств гарантируют существование множеств, являющихся подмножествами каких-то уже существующих, элементы которых удовлетворяют некоторому условию',
      'Если же множество всех множеств $(S)$ существует, то для каждого условия $(\\underline{\\quad} x \\underline{\\quad})$ будет существовать множество удовлетворяющих ему элементов:',
      '$(\\exists B = \\{x \\in S \\mid \\underline{\\quad} x \\underline{\\quad} \\})$, тогда',
      '$(x \\in B \\leftrightarrow x \\in S \\land \\underline{\\quad} x \\underline{\\quad})$, но $(x \\in S)$ выполняется всегда, значит',
      '$(x \\in B \\leftrightarrow \\underline{\\quad} x \\underline{\\quad})$, а вот эта формула не всегда выполняется, например, когда $(\\underline{\\quad} x \\underline{\\quad})$ &mdash; это $(x \\notin x)$, поскольку она приобретает в этом случае вид',
      '$(x \\in B \\leftrightarrow x \\notin x)$, а данная формула не выполняется при $(x=B)$',
      '',
    ],
    'ordered-pair': [
      '$(\\langle x,y \\rangle \\coloneqq \\{\\{x\\},\\{x,y\\}\\})$',
    ],
    'cart-product': [
      '<b>Лемма.</b> Если $(x,y \\in C)$, то $(\\langle x,y \\rangle \\in \\mathcal{P} \\mathcal{P}\\kern{-0.05em} C)$',
      '<b>Теорема.</b> $(\\forall A,B \\exists \\{\\langle x,y \\rangle \\mid x \\in A \\land y \\in B \\} \\eqqcolon A \\times B)$',
    ],
    'relations': [
      'Отношение &mdash; это множество упорядоченных пар: $(\\{\\langle x,y \\rangle \\mid \\underline{\\quad} x,y \\underline{\\quad} \\})$.',
      '',
      '$(\\textnormal{dom} R \\coloneqq \\{x \\mid \\exists y: \\langle x,y \\rangle \\in R \\})$',
      '$(\\textnormal{ran} R \\coloneqq \\{y \\mid \\exists x: \\langle x,y \\rangle \\in R \\})$',
      '$(\\textnormal{fld} R \\coloneqq \\textnormal{dom} R \\cup \\textnormal{ran} R)$',
    ],
    'functions': [
      'Отношение $(F)$ &mdash; функция, если $(\\forall x \\in \\textnormal{dom} F \\exists !y: xFy)$.',
      '',
      '<b>&#8227; Пример</b>',
      '$(\\{\\langle 1,1 \\rangle, \\langle 2,1 \\rangle, \\langle 3,3 \\rangle\\})$',
      '',
      '$(F: A \\rightarrow B \\xLeftrightarrow{def} F \\text{ is func.} \\land \\textnormal{dom} F = A \\land \\textnormal{ran} F \\subset B)$.',
      '$(F: A \\rightarrow B)$ &mdash; сюръективная функция, если $(\\textnormal{ran} F = B)$.',
    ],
    'injective-rel': [
      'Отношение $(R)$ &mdash; инъективное отношение, если $(\\forall y \\in \\textnormal{ran} R \\exists !x: xFy)$.',
      '',
      '<b>&#8227; Пример</b>',
      '$(\\{\\langle 1,1 \\rangle, \\langle 1,2 \\rangle, \\langle 3,3 \\rangle\\})$',
    ],
    'rel-inverse': [
      '$(F^{-1} \\coloneqq \\{\\langle u,v \\rangle \\mid vFu\\})$ &mdash; обратное отношение к $(F)$.',
    ],
    'rel-comp': [
      '$(F \\circ G \\coloneqq \\{\\langle u,v \\rangle \\mid \\exists t: uGt \\land tFv\\})$ &mdash; композиция отношений $(F)$ и $(G)$.',
    ],
    'rel-restrict': [
      '$(F |_{A} \\coloneqq \\{\\langle u,v \\rangle \\mid uFv \\land u \\in A\\})$ &mdash; сужение отношения $(F)$ на $(A)$.',
    ],
    'rel-image': [
      '$(F[A] \\coloneqq \\{v \\mid \\exists u \\in A: uFv\\})$ &mdash; образ $(A)$ под действием отношения $(F)$.',
    ],
    'rel-inv-props': [
      '<b>Теорема 1.</b>',
      '$(\\forall F)$:',
      '1) $(\\textnormal{dom} F^{-1} = \\textnormal{ran} F)$',
      '2) $(\\textnormal{ran} F^{-1} = \\textnormal{dom} F)$',
      '<b>Доказательство.</b>',
      '1) $(\\textnormal{dom} F^{-1} = \\{u \\mid \\exists v: uF^{-1}v\\} = \\{u \\mid \\exists v: vFu\\} = \\textnormal{ran} F)$',
      '2) $(\\textnormal{ran} F^{-1} = \\{v \\mid \\exists u: uF^{-1}v\\} = \\{v \\mid \\exists u: vFu\\} = \\textnormal{dom} F)$',
      '',
      '<b>Теорема 2.</b>',
      'Eсли $(F)$ &mdash; отношение, то:',
      '1) $((F^{-1})^{-1} = F)$',
      '2) $(F^{-1})$ &mdash; функция $(\\leftrightarrow F)$ &mdash; инъективное отношение',
      '3) $(F)$ &mdash; функция $(\\leftrightarrow F^{-1})$ &mdash; инъективное отношение',
      '<b>Доказательство.</b>',
      '1) $((F^{-1})^{-1} = \\{\\langle u,v \\rangle \\mid vF^{-1}u\\} = \\{\\langle u,v \\rangle \\mid uFv\\} \\xlongequal{\\text{F is rel.}} F)$',
      '2) $(F^{-1})$ &mdash; функция $(\\leftrightarrow)$',
      '$(\\quad \\forall x \\in \\textnormal{dom} F^{-1} \\exists !y: xF^{-1}y \\land F^{-1} \\text{ is rel.} \\leftrightarrow)$',
      '$(\\quad \\forall x \\in \\textnormal{dom} F^{-1} \\exists !y: xF^{-1}y \\leftrightarrow)$',
      '$(\\quad \\forall x \\in \\textnormal{dom} F^{-1} \\exists !y: yFx \\xleftrightarrow{\\text{using 1.1}})$',
      '$(\\quad \\forall x \\in \\textnormal{ran} F \\exists !y: yFx \\xleftrightarrow{\\text{F is rel.}})$',
      '$(\\quad \\forall x \\in \\textnormal{ran} F \\exists !y: yFx \\land F \\text{ is rel.} \\leftrightarrow)$',
      '$(\\quad F)$ &mdash; инъективное отношение',
      '3) $(F)$ &mdash; функция $(\\leftrightarrow)$',
      '$(\\quad \\forall x \\in \\textnormal{dom} F \\exists !y: xFy \\land F \\text{ is rel.} \\leftrightarrow)$',
      '$(\\quad \\forall x \\in \\textnormal{dom} F \\exists !y: xFy \\leftrightarrow)$',
      '$(\\quad \\forall x \\in \\textnormal{dom} F \\exists !y: yF^{-1}x \\xleftrightarrow{\\text{using 1.1}})$',
      '$(\\quad \\forall x \\in \\textnormal{ran} F^{-1} \\exists !y: yF^{-1}x \\leftrightarrow)$',
      '$(\\quad \\forall x \\in \\textnormal{ran} F^{-1} \\exists !y: yF^{-1}x \\land F^{-1} \\text{ is rel.} \\leftrightarrow)$',
      '$(\\quad F^{-1})$ &mdash; инъективное отношение',
    ],
    'comp-with-inv': [
      '<b>Теорема.</b>',
      'Eсли $(F)$ &mdash; инъективная функция, то:',
      '1) $(x \\in \\textnormal{dom} F \\rightarrow  F^{-1}(F(x)) = x)$',
      '2) $(y \\in \\textnormal{ran} F \\rightarrow  F(F^{-1}(y)) = y)$',
    ],
    'func-comp': [
      '<b>Теорема.</b>',
      'Пусть $(F)$ и $(G)$ &mdash; функции, тогда:',
      '1) $(F \\circ G)$ &mdash; функция',
      '2) $(\\textnormal{dom} (F \\circ G) = \\{x \\in \\textnormal{dom} G \\mid G(x) \\in \\textnormal{dom} F\\})$',
      '3) $(\\forall x \\in \\textnormal{dom} (F \\circ G) \\quad (F \\circ G)(x) = F(G(x)))$',
    ],
    'rel-comp-inv': [
      '<b>Теорема.</b> $(\\forall F,G \\quad (F \\circ G)^{-1}=G^{-1} \\circ F^{-1})$',
    ],
    'choice-ax-1': [
      '$(\\forall R \\text{ -- rel.} \\exists H \\subset R \\text{ -- func.}: \\textnormal{dom} H = \\textnormal{dom} R)$',
    ],
    'th-inv-func': [
      '<b>Теорема.</b>',
      'Пусть $(F: A \\rightarrow B)$ и $(A \\neq \\varnothing)$, тогда:',
      '1) $(\\exists \\text{ func. } G: B \\rightarrow A \\ : \\ G \\circ F = I_A \\leftrightarrow F \\text{ -- injective})$',
      '2) $(\\exists \\text{ func. } H: B \\rightarrow A \\ : \\ F \\circ H = I_B \\leftrightarrow F \\text{ -- surjective})$',
    ],
    'image-props': [
      '<b>Теорема.</b>',
      '1) $(F[\\bigcup \\mathcal{A}] = \\bigcup\\{F[A] \\mid A \\in \\mathcal{A}\\})$',
      '2) $(F[\\bigcap \\mathcal{A}] \\subset \\bigcap\\{F[A] \\mid A \\in \\mathcal{A}\\})$ при $(\\mathcal{A} \\neq \\varnothing)$, равенство достигается для инъективных $(F)$',
      '3) $(F[A] \\setminus F[B] \\subset F[A \\setminus B])$, равенство достигается для инъективных $(F)$',
      '',
      '<b>Следствие.</b>',
      '1) $(G^{-1}[\\bigcup \\mathcal{A}] = \\bigcup\\{G^{-1}[A] \\mid A \\in \\mathcal{A}\\})$',
      '2) $(G^{-1}[\\bigcap \\mathcal{A}] = \\bigcap\\{G^{-1}[A] \\mid A \\in \\mathcal{A}\\})$ при $(\\mathcal{A} \\neq \\varnothing)$',
      '3) $(G^{-1}[A] \\setminus G^{-1}[B] = G^{-1}[A \\setminus B])$',
    ],
    'all-funcs-set': [
      '$(B^A \\coloneqq \\{F \\mid F : A \\rightarrow B\\})$',
    ],
    'inf-cart-prod': [
      '$(\\displaystyle\\prod_{i \\in I} H(i) \\coloneqq \\{f \\mid f \\text{ is func. }, \\textnormal{dom} f = I, f(i) \\in H(i) \\quad \\forall i \\in I \\})$',
    ],
    'choice-ax-2': [
      '$(\\forall I, H: \\ H \\text{ is func. }, \\textnormal{dom} H = I, H(i) \\neq \\varnothing \\ \\forall i \\in I \\quad \\displaystyle\\prod_{i \\in I} H(i) \\neq \\varnothing)$',
    ],
    'rel-kinds': [
      'Отношение $(R)$ на множестве $(A)$ называется:',
      '1) рефлексивным на $(A)$, если $(\\forall x \\in A \\quad xRx)$',
      '2) симметричным, если $(\\forall x,y \\quad xRy \\rightarrow yRx)$',
      '3) транзитивным, если $(\\forall x,y,z \\quad xRy \\land yRz \\rightarrow xRz)$',
    ],
    'equiv-rel': [
      'Отношение $(R)$ на множестве $(A)$ называется отношением эквивалентности, если оно рефлексивно на $(A)$, симметрично и транзитивно.',
      '',
      '<b>Теорема.</b> Если $(R)$ &mdash; симметричное и транзитивное отношение, то $(R)$ &mdash; отношение эквивалентности на $(\\textnormal{fld} R)$.',
    ],
    'equiv-class': [
      '$([x]_R \\coloneqq \\{t \\mid xRt\\})$.',
      'Если $(R)$ &mdash; отношение эквивалентности и $(x \\in \\textnormal{fld} R)$, то $([x]_R)$ &mdash; класс эквивалентности $(x)$ по модулю $(R)$.',
      '',
      '<b>Теорема.</b> Пусть $(R)$ &mdash; отношение эквивалентности на $(A)$ и $(x,y \\in A)$, тогда $([x]_R = [y]_R \\leftrightarrow xRy)$.',
    ],
    'set-partition': [
      '$(P)$ &mdash; разбиение множества $(A)$, если:',
      '1) $(\\forall x,y \\in P \\quad x \\cap y = \\varnothing)$',
      '2) $(\\forall x \\in A \\exists y \\in P: x \\in y)$',
    ],
    'quotient-set': [
      'Если $(R)$ &mdash; отношение эквивалентности на $(A)$, то $(A/R \\coloneqq  \\{[x]_R \\mid x \\in A\\})$ &mdash; фактормножество множества $(A)$ по отношению эквивалентности $(R)$.',
      '',
      '<b>Теорема.</b> $(A/R)$ &mdash; разбиение множества $(A)$.',
    ],
    'func-quotient': [
      'Пусть $(R)$ &mdash; отношение эквивалентности на $(A)$ и $(F: A \\rightarrow A)$, тогда $(F)$ сочетается с $(R)$, если $(\\forall x,y \\in A \\quad xRy \\rightarrow F(x)RF(y))$.',
      '',
      '<b>Теорема.</b> Пусть $(R)$ &mdash; отношение эквивалентности на $(A)$ и $(F: A \\rightarrow A)$ сочетается с $(R)$, тогда $(\\exists !\\hat{F}: A/R \\rightarrow A/R: \\quad \\hat{F}([x]_R) = [F(x)]_R \\forall x \\in A)$. Если $(F)$ не сочетается с $(R)$, то такого $(\\hat{F})$ не существует. То же применимо и для $(F: A \\times A \\rightarrow A)$.',
    ],
    'linear-order': [
      'Отношение $(R)$ называется линейным порядком на множестве$(A)$, если оно транзитивно и $(\\forall x,y \\in A)$ выполняется ровно одна из формул $(xRy)$, $(x=y)$, $(yRx)$.',
      '',
      '<b>Теорема.</b> Пусть $(R)$ &mdash; линейный порядок на $(A)$, тогда:',
      '1) $(\\nexists x: xRx)$',
      '2) $(\\forall x,y: x \\neq y \\rightarrow xRy \\oplus yRx)$',
    ],
  }
}
