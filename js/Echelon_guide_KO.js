var lang_type = 'ko'

// inital
function mergeCell(table1, startRow, endRow, col) {
  var tb = document.getElementById(table1)
  if (!tb || !tb.rows || tb.rows.length <= 0) return
  if (col >= tb.rows[0].cells.length || (startRow >= endRow && endRow != 0)) return
  if (endRow == 0) endRow = tb.rows.length - 1
  for (var i = startRow; i < endRow; i++) {
    tb.rows[i + 1].removeChild(tb.rows[i + 1].cells[col])
    tb.rows[startRow].cells[col].rowSpan = (tb.rows[startRow].cells[col].rowSpan) + 1
  }
}
function loadScript(url) {
  var script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = url
  document.body.appendChild(script)
}
var lib_language // 语言库
lib_language = {
  main_draw_1: '번 자리:',
  main_draw_2: '피해',
  main_formatDPS_1: '시간',
  main_formatDPS_2: '피해',
  main_makeGraph_1: '시간',
  main_makeGraph_2: '피해',
  main_makeGraph_3: '체력',
  main_show_dmg: '공격',
  main_show_inj: '방어',
  main_makeGraph_dead: '타락한',

  UI_affect: '',
  UI_num: '번 자리',
  UI_dmg: '공격',
  UI_inj: '방어',
  UI_putsee: '여기에 받고 있는 진형 버프가 표시됩니다',
  UI_pickblock: '<b><span style="color: red">배치할 자리</span></b> 를 선택해 주세요',
  UI_not_2_python: ' *파이슨을 2기 이상 추가할 수 없습니다.',
  UI_not_2_carcano: ' *CarcanoM1891을 2기 이상 추가할 수 없습니다',
  UI_not_2_ads: ' *ADS을 2기 이상 추가할 수 없습니다',
  UI_not_2_jill: ' *Jill을 2기 이상 추가할 수 없습니다',
  UI_not_2_sei: ' *Sei을 2기 이상 추가할 수 없습니다',
  UI_not_2_stella: ' *Stella을 2기 이상 추가할 수 없습니다',
  UI_fairydmg: '요정공격',
  UI_fairyinj: '요정방어',

  NAME_1: '콜트 리볼버',
  NAME_4: '콜트 파이슨',
  NAME_5: '나강 리볼버',
  NAME_6: '토카레프',
  NAME_7: '스테츠킨',
  NAME_8: '마카로프',
  NAME_13: '92식',
  NAME_14: '아스트라 리볼버',
  NAME_15: '글록17',
  NAME_16: '톰슨',
  NAME_27: '스콜피온',
  NAME_29: '스텐MkⅡ',
  NAME_31: '베레타 38형',
  NAME_32: '마이크로 우지',
  NAME_34: 'M1 개런드',
  NAME_36: '스프링필드',
  NAME_39: '모신나강',
  NAME_41: '시모노프',
  NAME_49: '56식 반',
  NAME_50: '리엔필드',
  NAME_66: '56-1식',
  NAME_71: '갈릴',
  NAME_89: '브렌',
  NAME_94: '64식',
  NAME_95: '한양조 88식',
  NAME_96: '그리즐리Mk V',
  NAME_112: '네게브',
  NAME_113: '세르듀코프',
  NAME_114: '웰로드MkⅡ',
  NAME_115: '수오미',
  NAME_127: '79식',
  NAME_129: '95식',
  NAME_130: '97식',
  NAME_132: '59식',
  NAME_133: '63식',
  NAME_150: '시프카',
  NAME_161: '97식 산탄총',
  NAME_171: '리베롤',
  NAME_174: '81식 카빈',
  NAME_183: '컨텐더',
  NAME_185: '아멜리',
  NAME_197: '카르카노M1891',
  NAME_198: '카르카노M91/38',
  NAME_199: '80식',
  NAME_201: '게파드 M1',
  NAME_202: '썬더',
  NAME_203: '허니뱃저',
  NAME_204: '발리스타',
  NAME_225: 'Cx4 스톰',
  NAME_228: '100식',
  NAME_233: 'Px4 스톰',
  NAME_238: '88식',
  NAME_239: '03식',
  NAME_243: '64식 소총',
  NAME_248: '제리코',
  NAME_249: '62식',
  NAME_253: '루이스',
  NAME_255: '스카웃',
  NAME_256: '팔콘',
  NAME_255: 'Magal',
  NAME_264: 'Chaucha',
  NAME_270: 'Type 4',
  NAME_272: 'Desert Eagle',
  NAME_283: 'Liberator',
  NAME_290: '89 type',
  NAME_294: 'Webley',
  NAME_302: 'Defender',
  NAME_305: 'Tabuk',
  NAME_316: 'General Liu',
  NAME_317: 'Mondragon',
  NAME_2001: '노엘',
  NAME_2002: '엘펠트',
  NAME_2003: '키아나',
  NAME_2004: '라이덴 메이',
  NAME_2005: '브로냐',
  NAME_2006: '테레사',
  NAME_2007: '히메코',
  NAME_2008: '제레',
  NAME_2009: '클리어',
  NAME_2010: '페일',
  NAME_2011: '질 스팅레이',
  NAME_2012: '세이 아사기리',
  NAME_2013: '도로시 헤이즈',
  NAME_2014: '스텔라 호시이',
  NAME_2015: '알마 알머스',
  NAME_2016: '다나 제인',
  NAME_2023: 'Henrietta',
  NAME_2024: 'Rico',
  NAME_2025: 'Triela',
  NAME_2026: 'Claes',
  NAME_2027: 'Angerica',

  equipNAME_0: '장비 없음',
  equipNAME_12: '옵티컬',
  equipNAME_14: '이오텍',
  equipNAME_13: '레드닷',
  equipNAME_11: '소음기',
  equipNAME_17: 'APS 전용 개머리판',
  equipNAME_41: '야시장비',
  equipNAME_31: '외골격',
  equipNAME_33: '방탄판',
  equipNAME_21: 'ILM HP탄',
  equipNAME_23: 'Mk211 고폭철갑탄',
  equipNAME_22: 'APCR 고속탄',
  equipNAME_24: '#000 벅 샷',
  equipNAME_25: 'SABOT 슬러그탄',
  equipNAME_34: '열광학 미채 슈트',
  equipNAME_35: 'IOP대용량 탄약통',
  equipNAME_11001: '콜트 리볼버 연장총열',
  equipNAME_11005: '나강 리볼버용 소음기',
  equipNAME_11091: 'MP446C 경기용 총신',
  equipNAME_42009: 'Glory Light',
  equipNAME_42010: 'Black Cat',
  equipNAME_169: 'FÉLIN 조준경',
  equipNAME_4118: 'PKN03M 야간조준경',
  equipNAME_11063: 'G3 개량 총열뭉치',
  equipNAME_11064: 'G36 복합 조준경',
  equipNAME_354: '특수 전술기동장갑',
  equipNAME_11056: '디너게이트 RO',
  equipNAME_11057: '경량화 레일 킷',
  equipNAME_326: 'GSG UX 외골격',
  equipNAME_3103: 'UMP UX 외골격',
  equipNAME_31093: '강화 카트리지',
  equipNAME_11037: 'M2 양각대',
  equipNAME_11051: '조정간 트리거셋',
  equipNAME_1125: 'MG4 전용 MGO',
  equipNAME_11089: '브렌 L4 총열뭉치',
  equipNAME_21002: 'XM261 탄약',
  equipNAME_21057: '.300BLK 고속탄',
  equipNAME_21060: 'SP6亚音速弹',
  equipNAME_236: '사격경기용 철갑탄',
  equipNAME_362: '고성능 전술 헤어핀',
  equipNAME_31055: '남겨진 무기상자',
  equipNAME_11029: '스텐 전용 소음기',
  equipNAME_11103: '추가 연산 모듈',
  equipNAME_11094: '64식용 소음기',
  equipNAME_342: '두꺼운 푸른 슈트',
  equipNAME_31039: 'Hayha 메모리 칩',
  equipNAME_31044: '디지털 미채 슈트',
  equipNAME_31065: 'Tactical Headband',
  equipNAME_388: '무한 탄약통',
  equipNAME_3185: '전술용 메모리 칩',
  equipNAME_31075: 'Titan 사격제어칩',
  equipNAME_31143: '爱宠挂饰',
  equipNAME_32012: '화이트 나이트 제식 갑옷',
  equipNAME_22013: 'MIRD 5등급 탄약',
  equipNAME_32014: '스텔라의 의안',
  equipNAME_32015: '알마의 의수',
  equipNAME_32016: '다나의 기계팔',
  equipNAME_110: 'PPK suppressor',
  equipNAME_174: 'SIG510快慢机',
  equipNAME_117: 'OSS suppressor',
  equipNAME_152: 'BM59重管',
  equipNAME_2158: '20GA 벅 샷',
  equipNAME_11026: 'LED武器灯',
  equipNAME_11095: '加速线圈',
  equipNAME_1129: '先进单兵瞄具',
  equipNAME_384: 'RPD单兵装具',
  equipNAME_118: 'MAX10上机匣',
  equipNAME_19993: 'M9 BC2握把',
  equipNAME_372: 'Tactical Earphone',
  equipNAME_31007: '战术闪电呆毛',
  equipNAME_1172: 'RFB前导轨',
  equipNAME_1228: '折叠枪托',
  equipNAME_11012: 'C96橡木枪托',
  equipNAME_11031: 'DO反射瞄具',
  equipNAME_12023: '古董万花筒',
  equipNAME_32024: '决斗扑克',
  equipNAME_22025: '格斗刀',
  equipNAME_120261: '平光镜',
  equipNAME_120262: '天外陨石',
  equipNAME_120263: '计时腕表',
  equipNAME_32027: '童话绘本',


  skillNAME_39: '저격개시',
  skillNAME_39_2: '하얀 사신',
  skillNAME_55: '설한의 쐐기',
  skillNAME_102: '과중부하',
  skillNAME_180: '관통사격',
  skillNAME_192: '관통사격',
  skillNAME_194: '오버히트',
  skillNAME_213: '마인드 체인',
  skillNAME_231: '거짓신의 계시',
  LAYER_231: '전투 승리 횟수',
  skillNAME_238: '게으른분노',
  skillNAME_243: '미래 예지',
  skillNAME_252: '진동 충격탄',
  skillNAME_266: '럭키 트리거',
  skillNAME_275: '有备无患',
  skillNAME_276: 'High Pressure Assult',
  skillNAME_285: '兰蝶遗音',
  skillNAME_287: '战场弄潮儿',
  skillNAME_290: 'テストのきまり',
  LAYER_302: '距离倍率',
  skillNAME_306: 'Blazar',
  skillNAME_1065: '寄生榴弹',
  skillNAME_2006: '성화의 심판',
  skillNAME_1007: '短板敲击乐',
  skillNAME_2013: '비밀 개조',
  skillNAME_1101: '白鸮轰鸣',
  skillNAME_1124: '后发狙击',
  LAYER_1124: '蓄力层数',
  DESCRIBE_1124: '敌人血量低于50%',
  skillNAME_2025: 'Puppet trick',
  DESCRIBE_2025: 'Knife hit!',
  skillNAME_2026: '沉思者之钥',
  DESCRIBE_2026: ['自动技能', '1层蓄力开火', '2层蓄力开火', '3层蓄力开火', '4层蓄力开火', '5层蓄力开火'],
  DESCRIBE_213: ['아음속탄(회피 65% 상승)', 'ST탄(화력 85% 상승)', '일반탄(명중 200% 상승)'],
  DESCRIBE_315: ['每0.1s，1回避转化为2火力1命中', '每0.2s，1火力1命中转化为4回避'],
  DESCRIBE_316: ['普通模式(-10%射速,+20%火力)', '自动模式(-10%火力,+20%射速)'],
  DESCRIBE_285: ['1层射速', '2层射速', '3层射速'],
  DESCRIBE_290: '极限化手操：进行如下的操作循环，自动使用一次温习模式技能后，等待进入满分模式开启第二次技能，等满分buff结束后开启第三次',
  DESCRIBE_1007: '攻击低血量敌人降低回避50%',
  LAYER_1053: '蓄力层数',
  DESCRIBE_1053: ['狙击击杀敌人', '敌人血量高于50%'],
  DESCRIBE_1101_0: '作用列',
  DESCRIBE_1101_1: '当前列',
  DESCRIBE_1101_2: '特定列(从左往右):',
  DESCRIBE_1101_3: '闪光弹眩晕敌人',
  DESCRIBE_1039: ['use skill', 'full-energy shooting', 'skill kill enemy', 'normal-attack kill enemy'],
  DESCRIBE_55: '포격 모드',
  DESCRIBE_102_1: '패시브 유지',
  DESCRIBE_102_2: '액티브 사용',
  DESCRIBE_180: '모든 개체에 관통 피해 적용',
  DESCRIBE_192: '모든 개체에 관통 피해 적용',
  DESCRIBE_194_0: '작동 방식',
  DESCRIBE_194_1: '모드 자동 변경',
  DESCRIBE_194_2: 'Fever모드 유지(3점사)',
  DESCRIBE_194_3: 'Note모드 유지(단발)',
  DESCRIBE_214: 'Explosion area',
  DESCRIBE_236: '배율',
  DESCRIBE_238: '경기관총 모드',
  DESCRIBE_243_0: '발동 3초 후',
  DESCRIBE_243_1: '화력 55% 상승',
  DESCRIBE_243_2: '보호막 25 부여',
  DESCRIBE_251: '꽃의 자물쇠',
  DESCRIBE_252: '모든 개체에 범위 피해 적용',
  DESCRIBE_261: '적 수에 비례한 패시브 폭발의 영향력',
  DESCRIBE_266_0: '공격 설정',
  DESCRIBE_266_1: '동일한 대상을 공격',
  DESCRIBE_266_2: 'N번 공격 후 대상 변경',
  DESCRIBE_266_3: '번',
  DESCRIBE_275: '使用后关闭自动技能',
  DESCRIBE_276_0: 'Penetration',
  DESCRIBE_276_1: 'Assault',
  DESCRIBE_287: 'Let overheat stop skill',
  DESCRIBE_306: 'Attack direct standing enemy',
  DESCRIBE_318: ['吸取火力(max=45%)', '吸取射速(max=40%)', '吸取命中(max=80%)'],
  DESCRIBE_1065: '저격으로 적을 죽임',
  DESCRIBE_2006: '대상이 스킬 범위 내에 존재',
  DESCRIBE_2013_0: '개조 상태 전환',
  DESCRIBE_2013_1: '나노 미채',

  fairy_0: '없는',
  talent_0: '없는',

  enemy_normal: '일반',
  enemy_elite: '엘리트',

  INPUT_PI: '양의 정수를 입력하십시오',

  hp: '체력',
  cs: '장탄수',
  cs_0: '<span style="color:red">공격 불가</span>',
  cs_302: '8(<span style="color:blue">one-shot</span>)',
  dmg: '화력',
  rof: '사속',
  acu: '명중',
  eva: '회피',
  crit: '치명률',
  critdmg: '치명상',
  arm: '장갑',
  ap: '관통',
  cld: '쿨타임',
  night: '야간전',
  daytime: '주간전',
  form: '더미',
  na: 'Night-ability',
  skillstren: '스킬+',
  skilljill: '술을 섞고 인생을 바꿔 줄 시간이군',
  skillclaes1: '+shield',
  skillclaes2: '+teamdmg',
  skillclaes3: '+clipsize',

  skillNAME_256: '석양의 송골매',
  DESCRIBE_256: '특수탄 사용 안함',

  fairyNAME_1: '용사요정',
  fairyNAME_2: '격노요정',
  fairyNAME_3: '방패요정',
  fairyNAME_4: '수호요정',
  fairyNAME_5: '방어요정',
  fairyNAME_6: '도발요정',
  fairyNAME_7: '저격요정',
  fairyNAME_8: '포격요정',
  fairyNAME_9: '공습요정',
  fairyNAME_10: '증원요정',
  fairyNAME_11: '공수요정',
  fairyNAME_12: '매설요정',
  fairyNAME_13: '로켓요정',
  fairyNAME_14: '공사요정',
  fairyNAME_15: '지휘요정',
  fairyNAME_16: '수색요정',
  fairyNAME_17: '조명요정',
  fairyNAME_18: '황금요정',
  fairyNAME_19: '취사요정',
  fairyDESCRIBE_19: '긴급배식',
  fairyDESCRIBE_19_0: '무작위의',
  fairyDESCRIBE_19_1: '매운맛(화력+20%)',
  fairyDESCRIBE_19_2: '사워(사속+20%)',
  fairyDESCRIBE_19_3: '달콤한(명중+30%)',
  fairyDESCRIBE_19_4: '짭짤한(회피+25%)',
  fairyDESCRIBE_19_5: '…화상(화력-0%)',
  fairyNAME_20: '폭죽요정',
  fairyNAME_21: '도깨비요정',
  fairyNAME_22: '海滩妖精',
  fairyNAME_23: '连击妖精',
  fairyNAME_24: '立盾妖精',
  fairyNAME_25: '双生妖精',

  fairyskillstr: '스킬 ',
  fairy_skillNAME_0: '없는',
  fairy_skillNAME_1: '전투효율',
  fairy_skillNAME_2: '분노폭발',
  fairy_skillNAME_3: '진압강화',
  fairy_skillNAME_4: '에너지 실드',
  fairy_skillNAME_5: '임시방호',
  fairy_skillNAME_6: '도발표적',
  fairy_skillNAME_7: '저격명령',
  fairy_skillNAME_8: '포격명령',
  fairy_skillNAME_9: '공습발령',
  fairy_skillNAME_10: '증원호출',
  fairy_skillNAME_11: '공수낙하',
  fairy_skillNAME_12: '지뢰매설',
  fairy_skillNAME_13: '터렛설치',
  fairy_skillNAME_14: '요새구축',
  fairy_skillNAME_15: '초월경험',
  fairy_skillNAME_16: '효율수색',
  fairy_skillNAME_17: '야간조명',
  fairy_skillNAME_18: '황금율법',
  fairy_skillNAME_19: '긴급배식',
  fairy_skillNAME_20: '늦여름 폭죽',
  fairy_skillNAME_21: '귀신 쫓기',
  fairy_skillNAME_22: '懈怠浪潮',
  fairy_skillNAME_23: '连携奥义',
  fairy_skillNAME_24: '护甲加固',
  fairy_skillNAME_25: '双倍守护',

  hfNAME_0: 'BGM-71',
  hfNAME_1: 'AGS-30',
  hfNAME_2: '2B-14',
  hfNAME_3: 'M2',
  hfNAME_4: 'AT4',

  special_info_unique: '<span style="color:blue">특수 인형</span> ',
  special_info_common: '<span style="color:red">특수 설정</span>',
  special_info_2011_0: '슈가 러쉬(기본)',
  special_info_2011_1: '<span style="color:#ff9900">∎</span><span style="color:#33cc00">∎</span><span style="color:#99ccff">∎</span>Big Beer',
  special_info_2011_2: '<span style="color:#ff3333">∎</span><span style="color:#ff3333">∎</span><span style="color:#6600ff">∎</span>Brandtini',
  special_info_2011_3: '<span style="color:#ff3333">∎</span><span style="color:#ff9900">∎</span><span style="color:#99ccff">∎</span>Piano Woman',
  special_info_2011_4: '<span style="color:#ff3333">∎</span><span style="color:#ff3333">∎</span><span style="color:#99ccff">∎</span>Moonblast',
  special_info_2011_5: '<span style="color:#ff9900">∎</span><span style="color:#6600ff">∎</span><span style="color:#33cc00">∎</span>Bleeding Jane',
  special_info_2011_6: '<span style="color:#99ccff">∎</span><span style="color:#99ccff">∎</span><span style="color:#99ccff">∎</span>Fringe Weaver'
}

window.onload = function () {
  loadScript('../js/Echelon_main.js')
  loadScript('../js/Echelon_sub.js')
  loadScript('../js/Echelon_property.js')
  loadScript('../js/Echelon_skill.js')
  loadScript('../js/Echelon_UI.js')
  loadScript('../js/Echelon_graph.js')
  loadScript('../js/Echelon_select.js')
  loadScript('../js/Echelon_special.js')
  mergeCell('table_property', 0, 2, 0)
  mergeCell('table_affect', 0, 2, 3)
  mergeCell('table_envi', 0, 1, 0)
  mergeCell('table_envi', 0, 1, 2)
}
